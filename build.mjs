import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import {remark} from 'remark'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'


// const getMethods = (obj) => {
//     let properties = new Set()
//     let currentObj = obj
//     do {
//       Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
//     } while ((currentObj = Object.getPrototypeOf(currentObj)))
//     return [...properties.keys()].filter(item => typeof obj[item] === 'function')
//   }

// Read sections file
let config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

// Read templates
let skeletonHtml = fs.readFileSync('templates/skeleton.html', 'utf-8');
let newDom = new JSDOM(skeletonHtml);
let newDoc = newDom.window.document;

let cleanTable = function(table) {
    // Remove existing headers
    table.querySelector('thead').remove();
    let tbody = table.querySelector('tbody');
    tbody.querySelectorAll('th').forEach((th) => {
        th.remove();
    })

    // Clean styles
    table.className = "";
    table.querySelectorAll('tr').forEach((tr) => {
        tr.className = "";
        tr.removeAttribute("style");
    })
    table.querySelectorAll('td').forEach((td) => {
        td.className = "";
        td.removeAttribute("dir");
    })

    let removeWidth = function(element) {
        element.style.width = null;
        if (element.children.length > 0) {
            element.querySelectorAll('*').forEach((child) => {
                removeWidth(child);
            });
        }
    };
    removeWidth(table);

    // Convert first row to header
    let header = JSDOM.fragment("<thead><tr></tr></thead>");
    let tableHeaderRow = header.querySelector('tr');
    let topRow = tbody.querySelector('tr');
    topRow.querySelectorAll('td').forEach((td) => {
        tableHeaderRow.appendChild(JSDOM.fragment(`<th>${td.innerHTML}</th>`));
    })
    tbody.removeChild(topRow);
    table.insertBefore(header, tbody);
}

let codeExamples = function(table) {
    let tbody = table.querySelector('tbody');

    tbody.querySelectorAll('tr').forEach((tr) => {
        let exampleCell = tr.lastChild;
        exampleCell.innerHTML = `<code>${exampleCell.innerHTML}</code>`;
    })
}

// Build each article
config.articles.forEach((article) => {
    console.log(`Building article ${article.title}...`);
    // Create Article
    let articleId = article.title.replace(" ", "-").toLowerCase();
    let newArticle = JSDOM.fragment(`<article id="${articleId}"></article>`);
    let articleElement = newArticle.querySelector('article');

    // Create Article Title
    let newTitle = JSDOM.fragment(`<h2>${article.title}</h2>`);
    articleElement.appendChild(newTitle);

    // Create Nav Section
    let newArticleNav = JSDOM.fragment(`<li><div>${article.title}</div><ul></ul></li>`);
    let newArticleChildNavs = newArticleNav.querySelector('ul');

    // Go through sections
    article.sections.forEach(async (section) => {
        let sectionContent = null;
        let fileContents = fs.readFileSync(`./raw/${section.filename}`, 'utf-8');
        if (section.filename.startsWith('sheets')) {
            console.log(`  Building section ${section.title} from Google Sheet...`);
            // Read child doc
            let childDom = JSDOM.fragment(fileContents);
            let childTable = childDom.querySelector('table');
        
            cleanTable(childTable);
            codeExamples(childTable);
        
            // Build Content Section
            sectionContent = childTable;
        } else if (section.filename.startsWith('markdown')) {
            console.log(`  Building section ${section.title} from Markdown...`);
            let remarkInst = remark()
                .use(remarkPresetLintRecommended)
                .use(remarkHtml);

            let rawContent = remarkInst.processSync(fileContents);
            sectionContent = JSDOM.fragment(String(rawContent));
        } else {
            console.log(`  Can't determine ${section.title} section type from path ${section.filename}; skipping!`);
        }

        if (sectionContent){
            // Insert Content Section;
            let childId = section.title.replace(" ", "-");
            let newSection = JSDOM.fragment(`<section id="${childId}"><h3>${section.title}</h3></section>`);
            let sectionElement = newSection.querySelector('section');
            sectionElement.appendChild(sectionContent);
            articleElement.appendChild(newSection);

            // Insert TOC entry
            let newNav = JSDOM.fragment(`<li><a href="#${childId}">${section.title}</a></li>`);
            newArticleChildNavs.appendChild(newNav);
        }
    })

    // Add to the main doc
    newDoc.querySelector('ul').appendChild(newArticleNav);
    newDoc.querySelector('main').appendChild(newArticle);
})


// Write HTML
fs.writeFileSync('dist/index.html', newDom.serialize(), 'utf-8');



import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import {remark} from 'remark';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

// Read articles file
let config = JSON.parse(fs.readFileSync('articles.json', 'utf-8'));

// Read templates
let skeletonHtml = fs.readFileSync('skeleton.html', 'utf-8');
let newDom = new JSDOM(skeletonHtml);
let newDoc = newDom.window.document;

let cleanTable = function(table) {
    // Remove existing headers
    table.querySelector('thead').remove();
    let tbody = table.querySelector('tbody');
    tbody.querySelectorAll('th').forEach((th) => {
        th.remove();
    });

    // Clean styles
    table.className = "";
    table.querySelectorAll('tr').forEach((tr) => {
        tr.removeAttribute("class");
        tr.removeAttribute("style");
    });
    table.querySelectorAll('td').forEach((td) => {
        td.removeAttribute("class");
        td.removeAttribute("dir");
    });

    // Remove 'softmerge' divs
    table.querySelectorAll('.softmerge-inner').forEach((oldDiv) => {
        oldDiv.parentNode.innerHTML = oldDiv.innerHTML;
    });

    // Make all child link no-referrer
    table.querySelectorAll('a').forEach((a) => {
        a.setAttribute('rel', 'noreferrer')
    });

    // Recursively remove saved widths
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
        exampleCell.classList.add("code-example");
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
    let newTitle = JSDOM.fragment(`<h2><svg class="svg-sprite-icon"><use xlink:href="./img/svg-icon-sprite.svg#${article.icon}"/></svg>${article.title}</h2>`);
    articleElement.appendChild(newTitle);

    // Create Nav Section
    let newArticleNav = JSDOM.fragment(`<div class="nav-header"><svg class="svg-sprite-icon"><use xlink:href="./img/svg-icon-sprite.svg#${article.icon}"/></svg>${article.title}</div>`);
    let newArticleChildNavs = [];

    // Go through sections
    article.sections.forEach(async (section) => {
        let sectionContent = null;
        let fileContents = fs.readFileSync(`./${section.filename}`, 'utf-8');
        if (section.filename.startsWith('sheets')) {
            console.log(`  Building section ${section.title} from Google Sheet...`);
            // Read child doc
            let childDom = JSDOM.fragment(fileContents);
            let childTable = childDom.querySelector('table');
        
            cleanTable(childTable);
            if (articleId == "commands") {
                codeExamples(childTable);
            }
        
            // Build Content Section
            sectionContent = childTable;
        } else if (section.filename.startsWith('markdown')) {
            console.log(`  Building section ${section.title} from Markdown...`);
            let remarkInst = remark()
                .use(remarkPresetLintRecommended)
                .use(remarkHtml);

            let srcContent = remarkInst.processSync(fileContents);
            sectionContent = JSDOM.fragment(String(srcContent));
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
            let newNav = JSDOM.fragment(`<a class="nav-item" href="#${childId}">${section.title}</a>`);
            newArticleChildNavs.push(newNav);
        }
    })

    // Add to the main doc
    let navElement = newDoc.querySelector('nav');
    navElement.appendChild(newArticleNav);
    newArticleChildNavs.forEach(childNav => {
        navElement.appendChild(childNav)
    });
    newDoc.querySelector('main').appendChild(newArticle);
})


// Write HTML
fs.writeFileSync('../site/index.html', newDom.serialize(), 'utf-8');



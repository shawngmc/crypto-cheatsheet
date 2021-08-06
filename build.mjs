import { JSDOM } from 'jsdom';
import * as fs from 'fs';


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

    // TODO: Convert first row to header
    let header = JSDOM.fragment("<thead><tr></tr></thead>");
    let tableHeaderRow = header.querySelector('tr');
    let topRow = tbody.querySelector('tr');
    topRow.querySelectorAll('td').forEach((td) => {
        tableHeaderRow.appendChild(JSDOM.fragment(`<th>${td.innerHTML}</th>`));
    })
    tbody.removeChild(topRow);
    table.insertBefore(header, tbody);
}

config.articles.forEach((article) => {
    console.log(`Building article ${article.title}...`);
    // Create Article
    let articleId = article.title.replace(" ", "-").toLowerCase();
    let newArticle = JSDOM.fragment(`<article id="${articleId}"></article>`);
    let articleElement = newArticle.querySelector('article');

    // Create Article Title
    let newTitle = JSDOM.fragment(`<h1>${article.title}</h1>`);
    articleElement.appendChild(newTitle);

    // Create Nav Section
    let newArticleNav = JSDOM.fragment(`<li><div>${article.title}</div><ul></ul></li>`);
    let newArticleChildNavs = newArticleNav.querySelector('ul');

    // Go through sections
    article.sections.forEach((section) => {
        console.log(`Building section ${section.title}...`);
    
        // Read child doc
        let childHtml = fs.readFileSync(`./raw-sheets/${section.filename}`, 'utf-8');
        let childDom = JSDOM.fragment(childHtml);
        let childTable = childDom.querySelector('table');
    
        cleanTable(childTable);
    
        // Build Content Section
        let childId = section.title.replace(" ", "-");
        let newSection = JSDOM.fragment(`<section id="${childId}"><h2>${section.title}</h2></section>`);
        let sectionElement = newSection.querySelector('section');
        sectionElement.appendChild(childTable);

        // Insert Content Section
        articleElement.appendChild(newSection);

        // Insert TOC entry
        let newNav = JSDOM.fragment(`<li><a href="#${childId}">${section.title}</a></li>`);
        newArticleChildNavs.appendChild(newNav);
    })

    // Add to the main doc
    newDoc.querySelector('ul').appendChild(newArticleNav);
    newDoc.querySelector('main').appendChild(newArticle);
})


// Write HTML
fs.writeFileSync('dist/index.html', newDom.serialize(), 'utf-8');



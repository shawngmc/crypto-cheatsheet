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
let sectionTemplateHtml = fs.readFileSync('templates/section-template.html', 'utf-8');

config.sections.forEach((section) => {
    console.log(section);

    // Read child doc
    let childHtml = fs.readFileSync(`./raw-sheets/${section.filename}`, 'utf-8');
    let childDom = JSDOM.fragment(childHtml);
    let childTable = childDom.querySelector('table');

    // Prep Content Section
    let childId = section.title.replace(" ", "-");
    let newChildDom = JSDOM.fragment(sectionTemplateHtml);
    let sectionDom = newChildDom.querySelector('section');
    sectionDom.setAttribute('id', childId);
    // Insert Header with Anchor
    let header = sectionDom.querySelector('h1');
    header.innerHTML = section.title;
    // Insert table
    let figure = sectionDom.querySelector('figure');
    figure.appendChild(childTable);
    // Append Content Section
    newDoc.querySelector('article').appendChild(newChildDom);

    // Insert TOC entry
    let newNav = JSDOM.fragment(`<a href="#${childId}">${section.title}</a><br>`);
    newDoc.querySelector('nav').appendChild(newNav);
})
// Write HTML
fs.writeFileSync('dist/index.html', newDom.serialize(), 'utf-8');



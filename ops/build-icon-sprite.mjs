import SVGSpriter from 'svg-sprite';
import mkdirp from 'mkdirp';
import { promises as fsPromises } from 'fs';
import path from 'path';

const run = async () => {
    var svgSpriteConfig = {
        mode: {
            inline: true, // Prepare for inline embedding
            symbol: true // Create a «symbol» sprite
        }
    }

    // Create spriter instance (see below for `config` examples)
    var spriter = new SVGSpriter(svgSpriteConfig);

    // Read font list file
    let rawConfig = await fsPromises.readFile('icon-font-config.json', 'utf-8');
    let config = JSON.parse(rawConfig);

    // Add the SVGs to the spritebuilder
    for (const iconEntry of config.icons) {
        let source = config.sources.find(source => source.name = iconEntry.source);
        let filePath = source.basepath.replace("[icon]", iconEntry.id);
        let svgData = await fsPromises.readFile(filePath, {encoding: 'utf-8'})
        spriter.add(path.resolve(filePath), null, svgData);
    };

    // Compile the sprite
    spriter.compile(async function(error, result) {
        /* Write `result` files to disk (or do whatever with them ...) */
        for (var mode in result) {
            if (mode === "symbol") {
                let writePath = path.join(config.spriteOutputDir, "svg-icon-sprite.svg");
                let writeResult = await fsPromises.writeFile(writePath, result[mode]["sprite"].contents);
            } else {
                throw 'Found a sprite output type NYI in this build script'
                // for (var resource in result[mode]) {
                //     mkdirp.sync(path.dirname(result[mode][resource].path));
                //     let writeResult = await fsPromises.writeFile(result[mode][resource].path, result[mode][resource].contents);
                // }
            }
        }
    });

    // try {
    //     // Read font list file
    //     let config = JSON.parse(fs.readFileSync('icon-font-config.json', 'utf-8'));

    //     // Rebuild the paths
    //     let iconList = config.icons.map((iconEntry) => {
    //         let source = config.sources.find(source => source.name = iconEntry.source);
    //         return source.basepath.replace("[icon]", iconEntry.id);
    //     });

    //     console.log(iconList);

    //     let font = await webfont({
    //         files: iconList,
    //         fontName: config.name,
    //         template: "css",
    //         sort: true
    //     });

    //     console.log(font);
    //     fs.mkdir(`${config.fontOutputDir}/`, { recursive: true }, (e) => {
    //         if (e !== null) {
    //             console.log(e);
    //     }});
    //     fs.writeFileSync(`${config.cssOutputDir}/${config.name}.woff2`, font.woff2);
    //     fs.writeFileSync(`${config.cssOutputDir}/${config.name}.woff`, font.woff);
    //     fs.writeFileSync(`${config.cssOutputDir}/${config.name}.eot`, font.eot);
    //     fs.writeFileSync(`${config.cssOutputDir}/${config.name}.ttf`, font.ttf);
    //     fs.writeFileSync(`${config.cssOutputDir}/${config.name}.icon.svg`, font.svg);

    //     let css = font.template.replace(new RegExp('./crypto-cheatsheet-icons.svg', 'g'), './crypto-cheatsheet-icons.icon.svg');
    //     fs.writeFileSync(`${config.cssOutputDir}/${config.name}.css`, css);
    // } catch (err) {
    //     console.log("Error", err);
    // }
};
run();
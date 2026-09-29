

## Setup
Install [Hugo](https://gohugo.io/installation/) (v0.156.0 or newer; CI uses 0.167.0) and Node.js, then:
```
npm install
```
`node_modules` is required: Hugo pulls `hint.css` and the Font Awesome icons from it, and bundles `clipboard` into the page JS.

## Start Dev Server
```
npm start
```

## Build
```
npm run build
```
The site is written to `build/` as a single `index.html` (CSS and JS inlined) plus static images.

## Test Final Build
```
npm run serve
```

## Editing Content
The whole site is one page, laid out by `data/nav.yaml`: each article has a title, an `id` (the page anchor) and an `icon` (a Font Awesome solid icon name), and lists sections that point at either a table or a markdown file.

### Tables
Each table is a YAML file under `data/tables/`, referenced from `data/nav.yaml` without its extension (e.g. `commands/create-bundle`).
```yaml
columns: [Type, Operation, Command]
rows:
  - Type: { text: P12, rowspan: 2 }   # a cell spanning 2 rows
    Operation: Generate/Create
    Command: keytool -genkey -alias **temp** -keystore **store.p12**
  - Operation: Delete                 # Type omitted: covered by the rowspan above
    Command: keytool -delete -alias **temp** -keystore **store.p12**
```
* Each row maps a column name to a cell. A cell is a string or `{ text, rowspan }`, and a cell covered by a rowspan above it is left out.
* Normal cells are inline Markdown. Each line renders separately and becomes a line break, so a line starting with `- ` or `1)` needs escaping (`\- `, `1\)`) to stay plain text.
* In the Commands article (`code_column: true`), the last column is click-to-copy code. It is plain text, where `**x**` marks a placeholder in bold and every other character is literal.

### Guides and Pages
Markdown files live in `assets/markdown/`.

## Deployment
### Manual
1. Set Access Key and Secret
```
Set-Item -Path "env:AWS_ACCESS_KEY_ID" -Value "YOUR_ACCESS_KEY_ID"
Set-Item -Path "env:AWS_SECRET_ACCESS_KEY" -Value "YOUR_SECRET_ACCESS_KEY"
```
2. Deploy using process
```
npm run deploy
```
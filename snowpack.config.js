// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: 'site/',
  workspaceRoot: '/',
  exclude: [
    '**/node_modules/**/*',
    '**/cms/**/*'
  ],
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'build/'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
    loader: {
      ".woff2": 'dataurl',
      ".woff": 'dataurl',
      ".eot": 'dataurl',
      ".ttf": 'dataurl',
      ".icon.svg": 'dataurl',
    }
  },
};

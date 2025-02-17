/** @type {import('vite').UserConfig} */
export default {
  root: 'site/',
  publicDir: '../public',
  build: {
    outDir: '../build'
  },
  esbuild: {
    exclude: [
      '**/node_modules/**/*',
      '**/cms/**/*'
    ]
  }
}
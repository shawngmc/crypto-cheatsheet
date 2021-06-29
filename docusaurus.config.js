const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Crypto Cheatsheet',
  tagline: 'Cryptography doesn\'y need to be hard!',
  url: 'https://shawngmc.github.io',
  baseUrl: '/crypto-cheatsheet/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shawngmc', // Usually your GitHub org/user name.
  projectName: 'crypto-cheatsheet', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: 'Crypto Cheatsheet',
      logo: {
        alt: 'Crypto Cheatsheet Key Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'common-commands',
          position: 'left',
          label: 'Common Commands',
        },
        {
          type: 'doc',
          docId: 'reference-lists',
          position: 'left',
          label: 'Reference Lists',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/shawngmc/crypto-cheatsheet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shawngmc/crypto-cheatsheet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shawn McNaughton, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shawngmc/crypto-cheatsheet/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/shawngmc/crypto-cheatsheet/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

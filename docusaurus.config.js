// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nimbus',
  url: 'https://nimbus.team/',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Nimbus',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: true,
                },
              },
            },
          },
        },
        docs: {
          routeBasePath: '/',
          path: 'root-pages',
        },
        generated: {
          // challenges: {
          //   repoArray: [{ owner: 'status-im', repo: 'bounties' }],
          //   githubAccessToken: process.env.GITHUB_ACCESS_TOKEN,
          // },
          jobList: {
            jobBoard: 'nimbus',
          },
        },
        og: {},
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        routeBasePath: '/about',
        path: 'about',
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        routeBasePath: '/docs',
        path: 'docs',
        sidebarPath: 'docs/sidebars.js',
      },
    ],
  ],

  scripts: [
    {
      src: 'https://platform.twitter.com/widgets.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          {
            type: 'search',
          },
          {
            label: 'About Nimbus',
            to: '/about',
          },
          {
            label: 'Community',
            to: '/community',
          },
          {
            label: 'Docs',
            to: '/docs',
          },
          {
            label: 'Guide',
            href: 'https://nimbus.guide/',
          },
          {
            label: 'Blog',
            href: 'https://blog.nimbus.team/',
          },
          {
            label: 'Join Us',
            href: '/join-us',
          },
          {
            title: 'Nimbus GitHub repository',
            href: 'https://github.com/status-im/nimbus-eth2',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        copyright: 'Nimbus @2023<br/>All Rights Reserved.',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/ethnimbus',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/EP8DZnXu9y',
                label: 'Discord',
              },
              {
                to: '/docs',
                label: 'Docs',
              },
              {
                href: 'https://github.com/status-im',
                label: 'Github',
              }
            ],
          },
          {
            items: [
              {
                href: 'https://jobs.status.im/',
                label: 'Work with us',
              },
              {
                href: 'https://guide.nimbus.team/',
                label: 'Brand Guidelines',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config

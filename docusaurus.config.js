// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nimbus | Light and High-Performing Ethereum Clients',
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
          id: 'root-pages',
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
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docs',
    //     routeBasePath: '/docs',
    //     path: 'docs',
    //     sidebarPath: 'docs/sidebars.js',
    //   },
    // ],
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
            href: 'https://x.com/ethnimbus',
            position: 'right',
            className: 'header-x-link',
            title: 'Logos on X',
            'data-umami-event': 'X click',
            'data-umami-event-source': 'navbar',
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
        copyright: 'Nimbus',
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
                href: 'https://github.com/status-im',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                to: '/join-us',
                label: 'Join us',
              },
              {
                href: 'https://guide.nimbus.team/',
                label: 'Brand guidelines',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config

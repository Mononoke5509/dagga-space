// @ts-check

/*global module, require*/
const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dagga Space',
  tagline: 'Your trip to the cosmos 🛸',
  url: 'https://dagga.space/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/strains',
        docsDir: 'strains',
        removeDefaultStemmer: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          path: './strains',
          routeBasePath: '/strains',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'dagga, dagga.space, dagga space, cannabis, marijuana, indica, sativa, hybrid, strain, weed, pot, grass, ganja, mary jane, 420',
        },
        {
          name: 'manifest',
          href: '/manifest.json',
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Dagga Space',
        logo: {
          alt: 'Dagga Space Logo',
          src: 'img/alien.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Strains',
          },
          {
            href: 'https://github.com/Mononoke5509/dagga-space',
            label: 'GitHub',
            position: 'right',
          },
        ],
        hideOnScroll: false,
      },
      footer: {
        style: 'dark',
        copyright: `Dagga Space is licensed under the <a href="https://github.com/Mononoke5509/dagga-space/blob/main/LICENSE">GPL-3.0</a>. We use Cloudflare's privacy-first <a href="https://developers.cloudflare.com/analytics/web-analytics">Web Analytics</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

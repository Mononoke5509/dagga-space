// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dagga Space',
  tagline: 'Your trip to the cosmos 🪐',
  url: 'https://dagga.space/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
      announcementBar: {
        id: 'under_construction',
        content:
          '🚧 <strong>This site is under construction. Check back soon for updates!</strong>',
        backgroundColor: '#015123',
        textColor: '#ffffff',
        isCloseable: false,
      },
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
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Mononoke5509/dagga-space',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `🦖 Dagga Space is licensed under the <a href="https://github.com/Mononoke5509/dagga-space/blob/main/LICENSE">GPL-3.0 license</a>. Dagga Space uses Cloudflare's privacy-first <a href="https://developers.cloudflare.com/analytics/web-analytics">Web Analytics</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

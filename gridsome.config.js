// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Fossil-BarnYard',
  siteUrl: 'http://localhost:8080',
  siteDescription: 'Gridsome dumpster fire',
  // icon: 'favicon goes here'
  // transformers: {
  //   remark: {
  //     externalLinksTarget: '_blank',
  //     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
  //     anchorClassName: 'icon icon-link',
  //     plugins: ['gridsome-plugin-remark-shiki', { theme: 'nord' }],
  //   },
  // },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        resolveAbsolutePaths: true,
        remark: {
          autolinkClassName: 'fas fa-hashtag',
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'nord' }],
            ['gridsome-plugin-remark-twitter', {}],
          ],
        },
      },
    },
    {
      use: 'bulma',
    },
  ],
};

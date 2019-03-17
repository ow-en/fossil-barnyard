// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config({
  path: `.env${process.env.NODE_ENV}`,
});

const collections = [
  {
    contentTypeName: 'Post',
    indexName: 'posts', // Algolia Index Name
    itemFormatter: item => ({
      objectID: item.id,
      title: item.title,
      cover: item.cover,
      date: item.date,
      excerpt: item.excerpt,
      path: item.path,
      tags: item.tags,
      timeToRead: item.timeToRead,
      slug: item.slug,
      modified: String(item.modified),
    }), // optional
    matchFields: ['slug', 'modified'],
  },
];

module.exports = {
  siteName: 'Fossil-BarnYard',
  siteUrl: 'http://localhost:8080',
  siteDescription: 'Gridsome dumpster fire',
  css: {
    loaderOptions: {
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
      ],
    },
  },
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
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:slug',
            create: true,
          },
        },
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
      use: 'gridsome-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      use: 'bulma',
    },
    {
      use: 'vue-instantsearch',
    },
  ],
};

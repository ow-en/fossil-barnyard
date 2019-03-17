// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals');

module.exports = function (api) {
  api.loadSource((store) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  });
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/\.css$/, /\?vue&type=style/, /vue-instantsearch/, /instantsearch.js/],
        }),
      ]);
    }
  });
};

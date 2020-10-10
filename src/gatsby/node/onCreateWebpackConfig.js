const path = require('path')

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../../components'),
        '@styles': path.resolve(__dirname, '../../styles'),
        '~types': path.resolve(__dirname, '../../../types'),
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  })
}

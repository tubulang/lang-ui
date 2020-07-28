const path = require('path')

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'tubulang-ui/lib': path.resolve(__dirname, '../src/components/'),
        'tubulang-ui/esm': path.resolve(__dirname, '../src/components/'),
        'tubulang-ui': path.resolve(__dirname, '../src/components/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
      ],
    },
  })
}

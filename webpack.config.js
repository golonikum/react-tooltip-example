const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const defaultIconColor = '#020912';

module.exports = {
  context: __dirname,
  mode: 'production',
  devtool: false,
  entry: {
    app: [path.resolve(__dirname, 'src', 'index.ts')],
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.svg'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { esmodules: true } }],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [['babel-plugin-styled-components', { namespace: 'core-app' }]],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
              replaceAttrValues: {
                [defaultIconColor]: '{props.color}',
              },
              template: (variables, { tpl }) => {
                return tpl`
                  ${variables.imports};
                  ${variables.interfaces};
                  const ${variables.componentName} = (${variables.props}) => {
                    if (props.color === undefined) {
                      props = Object.assign({}, props, { color: '${defaultIconColor}' });
                    }
                    return ${variables.jsx};
                  };
                  ${variables.exports};
                `;
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  externals: [nodeExternals()],
};

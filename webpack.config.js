var path    = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry  : [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output : {
        path      : path.join(__dirname, 'dist'),
        filename  : 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module : {
        loaders: [
            {
                test   : /\.js$/,
                loaders: [
                    'react-hot',
                    'babel'
                ],
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src')
            },
            {
                test   : /\.css$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer'
                ]
            },
            {
                test   : /\.sass/,
                loaders: [
                    'style',
                    'css?sourceMap',
                    'sass?sourceMap'
                ]
            }
        ]
    }
};

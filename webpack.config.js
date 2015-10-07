var path    = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/main'
    ],

    output: {
        path      : path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename  : 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test   : /\.jsx$/,
                loaders: ['react-hot', 'babel'],
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'src')
            },
            {
                test  : /\.css/,
                loader: 'style!css!autoprefixer'
            },
            {
                test  : /\.less$/,
                loader: "style!css!less"
            },
            {
                test  : /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    devtool: ['source-map']
};
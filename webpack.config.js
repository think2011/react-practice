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
                loaders: ['react-hot', 'jsx?harmony'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    devtool: ['source-map']
};
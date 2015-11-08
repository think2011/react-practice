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
        loaders: [{
            test   : /\.js$/,
            loaders: ['babel?presets[]=react&presets[]=es2015'],
            exclude: /(node_modules|bower_components)/,
            include: path.join(__dirname, 'src')
        }]
    }
};

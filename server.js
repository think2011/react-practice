var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config');
var exec             = require('child_process').exec;


var port = 3000;
var ip   = 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath        : config.output.publicPath,
    hot               : true,
    historyApiFallback: true,
    stats             : {
        colors: true
    }
}).listen(port, ip, function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
    exec(`open http://${ip}:${port}`);
});

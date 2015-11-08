var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var exec             = require('child_process').exec;

var config = require('./webpack.config');

var port = 3000;
var ip   = 'localhost';

new WebpackDevServer(webpack(config), {
    publicPath        : config.output.publicPath,
    historyApiFallback: true,
    hot               : true,
    stats             : {colors: true}
}).listen(port, ip, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Listening at ' + ip + ':' + port);
        exec(`open http://${ip}:${port}`);
    });
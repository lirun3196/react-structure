/**
 *@author LiRun
 * @time 2016/1/11 0011 10:23
 * @abstract
 */
var path = require('path');
module.exports = {
    module: {
        loader: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query:
                {
                    presets:['react']
                }
            }
        ]
    },
    entry:path.join(__dirname, 'main.js'),
    output: {
        path: path.join(__dirname, '/dist/'),
        publicPath: "/",
        filename: 'bundle.js'
    }
};
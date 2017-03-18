'use strict';

const webpack = require('webpack');

process.env.NODE_ENV = 'production';

module.exports = {
    getConfig: function (releaseId) {
        return {
            entry  : "./src/app/app.js",
            output : {
                filename: "release/" + releaseId + "/bundle.js"
            },
            module : {
                loaders: [
                    {
                        loader : 'babel',
                        exclude: /node_modules/
                    }
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    'IMAGE_URL'           : JSON.stringify(releaseId),
                    'VIDEO_URL'           : JSON.stringify(releaseId),
                    'COPY_YEAR'           : JSON.stringify((new Date).getFullYear())
                }),
                new webpack.optimize.UglifyJsPlugin()
            ]
        };
    }
};

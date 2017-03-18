const webpack = require('webpack');

module.exports = {
    entry  : "./src/app/app.js",
    output : {
        filename         : "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
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
            'process.env.NODE_ENV': JSON.stringify('development'),
            'IMAGE_URL'           : JSON.stringify('/images'),
            'VIDEO_URL'           : JSON.stringify('/video'),
            'COPY_YEAR'           : JSON.stringify('DEV')
        }),
    ]
};

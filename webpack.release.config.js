const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack        = require('webpack');
const contactFormConfig = require('./contact.form.config.json');

module.exports = {
    getConfig: function (releaseId) {
        return {
            entry  : "./src/app/app.js",
            output : {
                filename: "release/" + releaseId + "/bundle.js"
            }
            ,
            module : {
                loaders: [
                    {
                        loader : 'babel',
                        exclude: /node_modules/
                    }
                ]
            }
            ,
            plugins: [
                new UglifyJSPlugin(),
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV' : JSON.stringify('production'),
                        'DATA_URL' : JSON.stringify(releaseId),
                        'IMAGE_URL': JSON.stringify(releaseId),
                        'VIDEO_URL': JSON.stringify(releaseId),
                        'COPY_YEAR': JSON.stringify((new Date).getFullYear()),
                        'RC_SITE_KEY': JSON.stringify(contactFormConfig.sitekey),
                        'CF_EP':JSON.stringify(contactFormConfig.endpoint)
                    }
                })
            ]
        }
    }
};

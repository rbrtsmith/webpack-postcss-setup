var autoprefixer = require('autoprefixer');
var styleLint = require('stylelint');
var precss = require('precss');


module.exports = {
    entry: './src',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.scss/,
                loader: 'stylelint'
            }
        ],
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!postcss-loader',
            }
        ]
    },
    stylelint: {

    },
    postcss: function() {
        return [autoprefixer, precss, styleLint];
    }
};

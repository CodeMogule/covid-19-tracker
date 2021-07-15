const path = require('path');


module.exports = {
    entry: ['babel-polyfill','./development/JS/index.js'],
    output:{
        filename:'JS/bundle.js',
        path:path.resolve(__dirname, 'Development'),
    },
    devServer:{
        contentBase : './development'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    },
    externals: {
        moment: 'moment'
    }
}
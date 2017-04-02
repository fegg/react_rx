let path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: './src/App.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
};
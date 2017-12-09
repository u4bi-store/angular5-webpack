const path = require('path');

module.exports = {
    entry: {
        polyfills : './src/polyfills.ts',
        vendor    : './src/vendor.ts',
        app       : './src/main.ts'
    },
    output: {
        filename: '[name].js',
        path : path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.ts', '.js'] },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}

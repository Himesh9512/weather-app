const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    mode: "development",
    devServer: {
        static: './dist/',
        liveReload: true,
        open: {
            app: {
                name: 'firefox',
            }
        }
    }
}
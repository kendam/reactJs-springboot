var path = require('path');

module.exports = {
    entry: './src/App.js',
    devtool: 'sourcemaps',
    cache: true,
	mode: 'development',
    resolve: {
        alias: {
            'stompjs': __dirname + '/node_modules' + '/stompjs/lib/stomp.js',
        }
    },
    output: {
        path: __dirname,
        filename: './src/built/bundle.js'
    },
	module: {
		rules: [
			{
				test: path.join(__dirname, '.'),
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}]
			}
		]
	}
};
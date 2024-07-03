const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const isDevelopment = env.development || process.env.NODE_ENV === 'development';
    console.log('isDevelopment: ', isDevelopment);
    return {
        mode: isDevelopment ? "development" : "production",
        devServer: {
            static: './dist',
            port: 9000,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true
        },
        entry: {
            bundle: path.resolve('./src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        devtool: isDevelopment ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/, // xử lý các tệp .scss, .sass, và .css
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                }

            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack App',
                filename: 'index.html',
                template: 'src/template.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            })
        ],

    }
}
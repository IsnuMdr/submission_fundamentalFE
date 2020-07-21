const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/app.js",
        vendor: "./src/vendor.js",
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/img"
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000',
                options: {
                    name: 'assets/img/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/font/[name].[ext]'
                }
            },
            // font-awesome
            {
                test: /font-awesome\.config\.js/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'font-awesome-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: 'tether',
            Popper: ['popper.js', 'default'],
        })
    ],
};
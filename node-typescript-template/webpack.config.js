const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env, argv) => {    
    const isProd = argv.mode === 'production';
    return {
        entry: "./src/main.ts",
        target: 'node',
        output: {
            path: path.join(__dirname, "/build"),
            filename: "bundle.js"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: {
                        loader: "ts-loader"
                    },
                    exclude: [/node_modules/, /build/]
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/, /build/]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: 'assets/[name][ext][query]'
                    },
                    exclude: [/node_modules/, /build/]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new ESLintPlugin({
                context: "src/",
                extensions: ["js", "ts"],
                fix: true
            })
        ]
    };
};
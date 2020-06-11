const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.ts'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, '../src/')
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    appendTsSuffixTo: [/.vue$/]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}

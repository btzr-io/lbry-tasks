import path from 'path';
import node_resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import hotcss from 'rollup-plugin-hot-css';
import commonjs from 'rollup-plugin-commonjs-alternate';
import static_files from 'rollup-plugin-static-files';
import { terser } from 'rollup-plugin-terser';
import refresh from 'rollup-plugin-react-refresh';
import alias from '@rollup/plugin-alias';

const root = path.resolve(__dirname);

let env = function () {
    return {
        banner: `
            self.process = {
                env: {
                    NODE_ENV: ${JSON.stringify(process.env.NODE_ENV)}
                }
            };
        `
    }
};

let config = {
    input: './src/react-app/main.js',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
    },
    plugins: [
        env(),
        alias({
            entries: [
                { find: '@', replacement: path.resolve(root, 'src/react-app') }
            ]
        }),
        hotcss({
            hot: process.env.NODE_ENV === 'development',
            filename: 'styles.css'
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        node_resolve(),
        commonjs(),
        process.env.NODE_ENV === 'development' && refresh()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.input = './src/react-app/index.js';
    config.external = [
        'react',
        'react-dom',
    ];

    config.plugins = config.plugins.concat([
        terser({
            compress: {
                global_defs: {
                    module: false
                }
            }
        })
    ]);
}

export default config;

import path from 'path';
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel';;
import hotcss from 'rollup-plugin-hot-css';
import refresh from 'rollup-plugin-react-refresh';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

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
        format: 'es',
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
    },
    plugins: [
        env(),
        alias({
            entries: [
                { find: '@app', replacement: path.resolve(root, 'src/react-app') }
            ]
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        hotcss({
            hot: process.env.NODE_ENV === 'development',
            filename: 'styles.css'
        }),
        resolve(),
        commonjs(),
        process.env.NODE_ENV === 'development' && refresh()
    ]
}

export default config;

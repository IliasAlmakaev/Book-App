import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/app.js',
    output: {
        dir: 'dist',
        format: 'iife',
        entryFileNames: 'app.js',
    },
    plugins: [
        css({
            output: 'bundle.css',
        }),
        nodeResolve(),
    ],
};

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import external from 'rollup-plugin-peer-deps-external';

const onwarn = (warning) => {
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    throw new Error(warning.message);
  }
}

const extensions = ['.js', '.jsx'];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        dir: 'lib/cjs',
        format: 'cjs',
        preserveModulesRoot: 'src',
      },
      {
        dir: 'lib/esm',
        format: 'esm',
        preserveModulesRoot: 'src',
      },
    ],
    preserveModules: true,
    plugins: [
      babel({
        babelHelpers: 'runtime',
        extensions,
        exclude: '**/node_modules/**',
        rootMode: 'upward',
      }),
      resolve({ extensions}),
      commonjs(),
      json(),
      external({
        includeDependencies: true,
      }),
    ],
    onwarn,
  },
];

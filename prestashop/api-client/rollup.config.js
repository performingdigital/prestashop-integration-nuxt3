import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { generateBaseConfig } from '../../rollup.base.config';

const extensions = ['.ts', '.js'];

const server = {
  input: 'src/index.server.ts',
  output: [
    {
      file: pkg.server,
      format: 'cjs',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    nodeResolve({
      extensions
    }),
    typescript({
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: false
    })
  ]
};

export default [
  generateBaseConfig(pkg), // It's required for other packages using api-client's types
  server
];
import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/api-codec-deflate.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    'zlib'
  ],
  plugins: [
    buble()
  ]
};

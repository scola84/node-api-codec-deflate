const zlib = require('zlib');

module.exports = {
  encoding: 'deflate',
  Decoder: zlib.Unzip,
  Encoder: zlib.Gzip
};

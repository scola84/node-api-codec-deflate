const zlib = require('zlib');
const Decoder = zlib.Inflate;
const Encoder = zlib.Deflate;
const encoding = 'deflate';

function decoder(options) {
  return {
    encoding,
    create: () => new Decoder(options)
  };
}

function encoder(options) {
  return {
    encoding,
    create: () => new Encoder(options)
  };
}

module.exports = {
  encoding,
  decoder,
  encoder,
  Decoder,
  Encoder
};

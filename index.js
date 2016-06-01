const encoding = 'deflate';

import {
  Inflate as Decoder,
  Deflate as Encoder
} from 'zlib';

export const codec = {
  Decoder,
  Encoder
};

export function decoder() {
  return {
    encoding,
    create: () => new Decoder()
  };
}

export function encoder() {
  return {
    encoding,
    create: () => new Encoder()
  };
}

# POSITIVE-VByte

A JavaScript implementation of VByte positive Integer Array compression based on Daniel Lemire [FastIntegerCompression.js](https://github.com/lemire/FastIntegerCompression.js/blob/master/FastIntegerCompression.js).

+ Process only positive Integers (for an index Array for instance)
+ Split in two files:
  + Compression as Node.js module
  + Decompression as HTML script file


Further optimisation of decompression script could be implemented as a WASM module.

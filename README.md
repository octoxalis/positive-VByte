# POSITIVE-VByte

A JavaScript implementation of VByte positive Integer Array compression based on Daniel Lemire [FastIntegerCompression.js][0].

+ Process only positive Integers (e.g. for an index Array)
+ Split in two files:
  + Compression as a Node.js module
  + Decompression as an HTML script file


Further optimisation of the decompression script could be implemented as a WASM module.



[0]: https://github.com/lemire/FastIntegerCompression.js/blob/master/FastIntegerCompression.js

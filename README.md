# node-ripple-bip32

bip32 for ripple

compatible with ledger wallet nano s

## warning

this library is experimental status

## install

```
npm i ripple-bip32
```

## usage

### additional install

```
npm i bip39
```

### code

```
const bip39 = require("bip39");
const bip32 = require("ripple-bip32");

const mnemonic = bip39.generateMnemonic()
console.log(mnemonic)

const seed = bip39.mnemonicToSeed(mnemonic)
const m = bip32.fromSeedBuffer(seed)
console.log(m.derivePath("m/44'/144'/0'").toBase58())
console.log(m.derivePath("m/44'/144'/0'").neutered().toBase58())
console.log(m.derivePath("m/44'/144'/0'/0/0").getAddress())
console.log(m.derivePath("m/44'/144'/0'/0/0").keyPair.getKeyPairs())
```

## original library

https://github.com/bitcoinjs/bitcoinjs-lib



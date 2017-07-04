# node-ripple-bip32

[![Build Status](https://secure.travis-ci.org/you21979/node-ripple-bip32.png?branch=master)](https://travis-ci.org/you21979/node-ripple-bip32)
[![Coverage Status](https://coveralls.io/repos/github/you21979/node-ripple-bip32/badge.svg?branch=master)](https://coveralls.io/github/you21979/node-ripple-bip32?branch=master)

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

## transaction sign ?

see https://github.com/you21979/node-ripple-sign-keypairs

## original library

https://github.com/bitcoinjs/bitcoinjs-lib



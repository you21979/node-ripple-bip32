# node-ripple-bip32

[![NPM](https://nodei.co/npm/ripple-bip32.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ripple-bip32)
[![Build Status](https://secure.travis-ci.org/you21979/node-ripple-bip32.png?branch=master)](https://travis-ci.org/you21979/node-ripple-bip32)
[![Coverage Status](https://coveralls.io/repos/github/you21979/node-ripple-bip32/badge.svg?branch=master)](https://coveralls.io/github/you21979/node-ripple-bip32?branch=master)

bip32 for ripple

compatible with ledger wallet nano s

## warning

There is no ripple secret key of the ripple address created using this library, so care must be taken when handling it.
You can not use the ripple ecosystem handling existing ripple secret keys.

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
// bip39 mnemonic
console.log(mnemonic)

const seed = bip39.mnemonicToSeed(mnemonic)
// seed hex string
console.log(seed.toString('hex'))
const m = bip32.fromSeedBuffer(seed)
// master xprv
console.log(m.toBase58())
// xprv
console.log(m.derivePath("m/44'/144'/0'").toBase58())
// xpub
console.log(m.derivePath("m/44'/144'/0'").neutered().toBase58())
// ripple address
console.log(m.derivePath("m/44'/144'/0'/0/0").getAddress())
// publickey / privatekey
console.log(m.derivePath("m/44'/144'/0'/0/0").keyPair.getKeyPairs())
```

## transaction sign ?


To sign using the private key generated using this library, please see below.  

see https://github.com/you21979/node-ripple-sign-keypairs

## original library

https://github.com/bitcoinjs/bitcoinjs-lib



const bip39 = require("bip39");
const bip32 = require("..");

const mnemonic = bip39.generateMnemonic()
console.log(mnemonic)

const seed = bip39.mnemonicToSeed(mnemonic)
const m = bip32.fromSeedBuffer(seed)
console.log(m.derivePath("m/44'/144'/0'").toBase58())
console.log(m.derivePath("m/44'/144'/0'").neutered().toBase58())
console.log(m.derivePath("m/44'/144'/0'/0/0").getAddress())
console.log(m.derivePath("m/44'/144'/0'/0/0").keyPair.getKeyPairs())


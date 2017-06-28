const bip39 = require("bip39");
const bip32 = require("..");
const sign = require("ripple-sign-keypairs");
const keypairs = require("ripple-keypairs");

const mnemonic = bip39.generateMnemonic()
console.log(mnemonic)
const seed = bip39.mnemonicToSeed(mnemonic)
const m = bip32.fromSeedBuffer(seed)
console.log(m.derivePath("m/44'/144'/0'/0/0").getAddress())

const srcpair = m.derivePath("m/44'/144'/0'/0/0").keyPair.getKeyPairs()
srcpair.address = keypairs.deriveAddress(srcpair.publicKey)
console.log(srcpair)

const dest = keypairs.deriveKeypair(keypairs.generateSeed())
dest.address = keypairs.deriveAddress(dest.publicKey)
const tx = JSON.parse('{"TransactionType":"Payment","Account":"","Destination":"","Amount":"100000000","Flags":2147483648,"Fee":"100000","LastLedgerSequence":30828104,"Sequence":25}')
tx.Account = srcpair.address
tx.Destination = dest.address
const txJSON = JSON.stringify(tx)
const txSign = sign(txJSON, srcpair)
console.log(txJSON)
console.log(txSign)






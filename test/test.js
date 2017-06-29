'use strict';
var assert = require('assert');
var bip32 = require('..');
var bip39 = require('bip39');
var keypairs = require("ripple-keypairs");

describe('test', function () {
    var mnemonic = 'armed bundle pudding lazy strategy impulse where identify submit weekend physical antenna flight social acoustic absurd whip snack decide blur unfold fiction pumpkin athlete';
    var password = '';
    var masterseed = bip39.mnemonicToSeed(mnemonic, password);
    it('test', function () {
        var m = bip32.fromSeedBuffer(masterseed);
        assert(m.derivePath("m/44'/144'/0'/0/0").getAddress() === "r4ocGE47gm4G4LkA9mriVHQqzpMLBTgnTY")
        assert(m.derivePath("m/44'/144'/0'/0/1").getAddress() === "rUt9ULSrUvfCmke8HTFU1szbmFpWzVbBXW")
    })
    it('compatible test 0 - 19', function () {
        var m = bip32.fromSeedBuffer(masterseed);
        m = m.derivePath("m/44'/144'/0'")
        for(var i = 0; i<20; ++i){
            var d = m.derivePath("0/" + i.toString())
            assert(d.getAddress() === keypairs.deriveAddress(d.keyPair.getKeyPairs().publicKey))
        }
    })
    it('compatible test 20 - 39', function () {
        var m = bip32.fromSeedBuffer(masterseed);
        m = m.derivePath("m/44'/144'/0'")
        for(var i = 20; i<40; ++i){
            var d = m.derivePath("0/" + i.toString())
            assert(d.getAddress() === keypairs.deriveAddress(d.keyPair.getKeyPairs().publicKey))
        }
    })
    it('compatible test 40 - 59', function () {
        var m = bip32.fromSeedBuffer(masterseed);
        m = m.derivePath("m/44'/144'/0'")
        for(var i = 40; i<60; ++i){
            var d = m.derivePath("0/" + i.toString())
            assert(d.getAddress() === keypairs.deriveAddress(d.keyPair.getKeyPairs().publicKey))
        }
    })
})

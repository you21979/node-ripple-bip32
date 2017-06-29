'use strict';
var assert = require('assert');
var bip32 = require('..');
var bip39 = require('bip39');
var keypairs = require("ripple-keypairs");

describe('test', function () {
    var mnemonic = 'armed bundle pudding lazy strategy impulse where identify submit weekend physical antenna flight social acoustic absurd whip snack decide blur unfold fiction pumpkin athlete';
    var password = '';
    var masterseed = bip39.mnemonicToSeed(mnemonic, password);
    it('address test', function () {
        var m = bip32.fromSeedBuffer(masterseed);
        assert(m.derivePath("m/44'/144'/0'/0/0").getAddress() === "r4ocGE47gm4G4LkA9mriVHQqzpMLBTgnTY")
        assert(m.derivePath("m/44'/144'/0'/0/1").getAddress() === "rUt9ULSrUvfCmke8HTFU1szbmFpWzVbBXW")
    })
    it('key test', function () {
        var m = bip32.fromSeedBuffer(masterseed);
        assert(m.derivePath("m/44'/144'/0'/0/0").keyPair.getKeyPairs().publicKey === "032E6A7359B17D56DBFB2B627F82D38E374DF622D8E15806CF607BBD44057E9C3A")
        assert(m.derivePath("m/44'/144'/0'/0/0").keyPair.getKeyPairs().privateKey === "0082A32E072DDC048967909E1C11C53BE8DC2CCA8625FE994B23BB623E91690710")
        assert(m.derivePath("m/44'/144'/0'/0/1").keyPair.getKeyPairs().publicKey === "03C555B80639FF96C0935246D527F313C8522ACF70643CA9449006E5CFBF2B66F3")
        assert(m.derivePath("m/44'/144'/0'/0/1").keyPair.getKeyPairs().privateKey === "0006DC564DED833DEEB16394D2B8A94B9DEC2AB7E839344EE44E271EF565157CA8")
    })
    it('compatible test 0 - 19', function () {
        this.timeout(5000);
        var m = bip32.fromSeedBuffer(masterseed);
        m = m.derivePath("m/44'/144'/0'")
        for(var i = 0; i<20; ++i){
            var d = m.derivePath("0/" + i.toString())
            assert(d.getAddress() === keypairs.deriveAddress(d.keyPair.getKeyPairs().publicKey))
        }
    })
    it('compatible test 20 - 39', function () {
        this.timeout(5000);
        var m = bip32.fromSeedBuffer(masterseed);
        m = m.derivePath("m/44'/144'/0'")
        for(var i = 20; i<40; ++i){
            var d = m.derivePath("0/" + i.toString())
            assert(d.getAddress() === keypairs.deriveAddress(d.keyPair.getKeyPairs().publicKey))
        }
    })
    it('compatible test 40 - 59', function () {
        this.timeout(5000);
        var m = bip32.fromSeedBuffer(masterseed);
        m = m.derivePath("m/44'/144'/0'")
        for(var i = 40; i<60; ++i){
            var d = m.derivePath("0/" + i.toString())
            assert(d.getAddress() === keypairs.deriveAddress(d.keyPair.getKeyPairs().publicKey))
        }
    })
})

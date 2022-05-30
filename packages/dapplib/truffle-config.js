require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember pupil inner clip bridge solar'; 
let testAccounts = [
"0xf13bd54ad3e9e32faf84944d4eb22c2ebbdda34b6aea3fe644b5e3d6de76b545",
"0xbf2ae352547a20efa1793159271f6638142f605168b9054d98d250aecba74037",
"0xa7aebe1ec9f52d9ecfdd4d60aa1df846447b6808768c2f6c781d773ca969b133",
"0x7af3ceb58558f6b04ef5df922bf3dbd32cb9ca5172e570fc69659e4be0b455ca",
"0xb02ad77d45e33fe89f21b66fe53154821c2cdb1e1c59d9862fb952da2f451ea6",
"0x43bc8bf5ca41ccac27b3e36a782445759fc4ef65fed20793b53ca7c5967debbc",
"0xb321666d9e893b6be66b1ae2ca8d66bbf28ee66a5e751611a7bcb9effd1de400",
"0x1d5fdfa29dd0d8f35a05e7c9ba955b113fb587ffbd1dc3390a77fd201e472915",
"0x3d30040d60a9855a64c546ca8405372a2f9cbbeb28fe916003ed5a48b74973b3",
"0x6ea516d6aec2ffcfb887d46bdb4c5ad2b36bda151784be89e0b0d7c319653406"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


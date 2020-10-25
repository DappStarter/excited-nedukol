require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth ridge prosper install fork swallow ghost'; 
let testAccounts = [
"0x76372ababa3f50b9e451ce352f65fff22777b4243ec3e5b0d215b950dee405e8",
"0xd0528240e7367b1f352300c8019194fa15c3bd0a72073bccbe475860895ebbdc",
"0x598289de0e6128c5d4265511e0c4e3cbcb427e29ce4f8c152a4f8a141e287264",
"0x9f7b532289e9e3ff37a47226a3ebe191998a920aae01386e9a520b791ab00b65",
"0x446ca1c4dc5553bb84161d84645d6e12d374c19ad76b94b4ce246272620d247e",
"0xa891cbc4c62b1985c43a650ff8b8a0a494db3d7d46acea485f0514f420bf7d69",
"0x0d80c5c38f9afaf36ac6c34b594521c2d84f10adc30ccf26e0c1d39eaebcbea3",
"0x3f14f99386fa50f52ab1839345fab22d19a68bf626bd8ebe408c42f13ff765e8",
"0x09bfff0497a6b795f54da41bd60a1811fa63dcb486f67d143b1ae49267cf75cc",
"0xe4afeffd96a41304a5d1ae2f89cb8d5392d4348a85b598f7b108314c3feaa2e2"
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
            version: '^0.5.11'
        }
    }
};

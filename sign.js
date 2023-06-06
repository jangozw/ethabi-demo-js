//const Web3 = require('web3');
var Web3 = require("web3")
const web3 = new Web3("https://cloudflare-eth.com")
web3.eth.getBlockNumber(function (error, result) {
    //console.log(result)
})
console.log(web3.eth.abi.encodeFunctionSignature("sendMessage(string,address)"));
console.log(web3.eth.abi.encodeFunctionSignature("renew(string,uint256)"));
console.log(web3.eth.abi.encodeFunctionSignature("register(string,address,uint256,address,bytes[],bool)")); //

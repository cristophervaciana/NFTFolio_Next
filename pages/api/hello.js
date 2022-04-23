// Next.js API route support: https://nextjs.`org/docs/api-routes/introduction

const API_KEY = "FGznUjY0-PijIqqHmPxC2Wb70ZjyKYu8";
const server_address = "http://localhost:8545";
const socket_address = "ws://localhost:8546";
const url = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}`;
const walletAddress =
  "0xaE9526a118dB2A81B3933b8F07A713137f910bFc".toLowerCase();

const url_api = `https://api.etherscan.io/api
?module=account
&action=tokennfttx
&address=${walletAddress}
&page=1
&offset=200
&startblock=0
&endblock=27025780
&sort=asc
&apikey=YourApiKeyToken`;

const ABI = require("./erc-721.json");

var ipc = "/Users/cris95vg/Library/Ethereum/geth.ipc";

var coolmans = "0xa5C0Bd78D1667c13BFB403E2a3336871396713c5";

const Web3 = require("web3");
const Net = require("net");
const { resourceLimits } = require("worker_threads");
const { get } = require("http");
const { type } = require("os");

var provider = new Web3(url_api);

provider.setProvider(socket_address);

var provider = new Web3(ipc, Net);

async function getData() {
  const response = await fetch(url_api);
  const data = await response.json();

  const transactions = data.result;
  //console.log(transactions);
  let buys = transactions.filter((transaction) => {
    return transaction.to == walletAddress;
  });
  let sales = transactions.filter((transaction) => {
    return transaction.from == walletAddress;
  });
  
  let owned = buys.filter((buy) => {
    return !sales.some((sell) => {
      return (
        buy.tokenID == sell.tokenID &&
        buy.contractAddress == sell.contractAddress
      );
    });
  });
  //console.log(owned[0]);
  for(let nft = 0; nft < owned.length;nft ++){
    console.log(`Name: ${owned[nft].tokenName}  ID: ${owned[nft].tokenID}`)
  }
}

async function main() {
  const balance = await provider.eth.getBalance(walletAddress);
  total_eth = await provider.utils.fromWei(balance);
  console.log(`El balance de su cuenta es de: ${total_eth}`);

  const contract = new provider.eth.Contract(ABI, coolmans);
  contract.defaultAccount = walletAddress;
  const quantity = await contract.methods.balanceOf(walletAddress).call();
  if (quantity != 0) {
    console.log(`Cantidad de coolmans en wallet: ${quantity}`);
  } else {
    console.log("Su wallet no tiene ningun coolman");
  }
}

//main();
getData();

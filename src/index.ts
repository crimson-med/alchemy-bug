// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);


const test = async () => {
    const data = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: "0x92da4BFa5E7EE868B26d5DBa1225A3B5bed1E62E",
        category: ["external", "internal", "erc20", "erc721", "erc1155"],
    });
    console.log(data);
}

test()
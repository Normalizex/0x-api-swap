# 0x-api-swap
![](./media/0x-api.png)


* `Simple 0x api v4 wrapper for node.js`
* `Node.js >= v11.0.0`
* `TypeScript >= 4.6.3`
***
# Introduction
- 0x API is a professional grade liquidity aggregator enabling the future of DeFi applications
***
# Features
* Full API coverage.
* Typescript support.
* Fully covered with annotations and comments.
***
# Installing
Using npm:
```console
npm i @normalizex/0x-api-swap
```
Using yarn:
```console
yarn add @normalizex/0x-api-swap
```
***
# Documentation
* You can find full documentation in the folder [docs/README.md](./docs/README.md) 
***
# Usage:
```js
import { OxSwapV1, OxNetworksV1 } from '@normalizex/0x-api-swap';
const oxorg = new OxSwapV1(OxNetworksV1.Ethereum);
```
# Example
```js
import { OxSwapV1, OxNetworksV1 } from '@normalizex/0x-api-swap';

const oxorg = new OxSwapV1(OxNetworksV1.Optimism);

console.log(oxorg.endpoint());//https://optimism.api.0x.org/swap/v1
console.log(oxorg.network());//optimism
// Switch Network:
oxorg.swichEndpoint(OxNetworksV1.BinanceSmartChain)
console.log(oxorg.endpoint());//https://bsc.api.0x.org/swap/v1
console.log(oxorg.network());//bsc

// Test Constants
const BUSD = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
const WETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

// EXAMPLES
oxorg.sources().then(src => {
	/**
		[
			'ACryptoS',       'ApeSwap',
			'BakerySwap',     'Belt',
			'CafeSwap',       'CheeseSwap',
			...AND MORE ITEMS...
		]
	*/
});

oxorg.price(BUSD, WETH, {
	sellAmount: 50 * 1e18,//50 BUSD
}).then(price => {
	/**
		{
			chainId: 56,
			price: '0.002581746416499861',
			estimatedPriceImpact: '4.9954',
			value: '0',
			gasPrice: '5000000000',
			gas: '136000',
			estimatedGas: '136000',
			protocolFee: '0',
			minimumProtocolFee: '0',
			buyTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			buyAmount: '129087320824993053',
			sellTokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
			sellAmount: '50000000000000000000',
			sources: [
				{ name: 'BakerySwap', proportion: '0' },
				{ name: 'Belt', proportion: '0' },
				{ name: 'DODO', proportion: '0' },
				{ name: 'DODO_V2', proportion: '0' },
				{ name: 'Ellipsis', proportion: '0' },
				{ name: 'Mooniswap', proportion: '0' },
				{ name: 'MultiHop', proportion: '0' },
				{ name: 'Nerve', proportion: '0' },
				{ name: 'Synapse', proportion: '0' },
				{ name: 'PancakeSwap', proportion: '1' },
				{ name: 'PancakeSwap_V2', proportion: '0' },
				{ name: 'SushiSwap', proportion: '0' },
				{ name: 'Smoothy', proportion: '0' },
				{ name: 'ApeSwap', proportion: '0' },
				{ name: 'CafeSwap', proportion: '0' },
				{ name: 'CheeseSwap', proportion: '0' },
				{ name: 'JulSwap', proportion: '0' },
				{ name: 'LiquidityProvider', proportion: '0' },
				{ name: 'WaultSwap', proportion: '0' },
				{ name: 'FirebirdOneSwap', proportion: '0' },
				{ name: 'JetSwap', proportion: '0' },
				{ name: 'ACryptoS', proportion: '0' },
				{ name: 'KyberDMM', proportion: '0' }
			],
			allowanceTarget: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
			sellTokenToEthRate: '367.985835408236506354',
			buyTokenToEthRate: '1'
		}
	*/
});

oxorg.quote(BUSD, WETH, {
	sellAmount: 50 * 1e18,//50 BUSD
}).then(swap => {
	/**
		{
			chainId: 56,
			price: '0.002582094429952294',
			guaranteedPrice: '0.002556273485652771',
			estimatedPriceImpact: '4.9826',
			to: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
			data: '0xc43c9ef60000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000002b5e3af16b188000000000000000000000000000000000000000000000000000001c615dc0d0ddcfd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e9e7cea3dedca5984780bafc599bd69add087d56000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee869584cd00000000000000000000000010000000000000000000000000000000000000110000000000000000000000000000000000000000000000652c51e1c1626ef7ab',
			value: '0',
			gas: '136000',
			estimatedGas: '136000',
			gasPrice: '5000000000',
			protocolFee: '0',
			minimumProtocolFee: '0',
			buyTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			sellTokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
			buyAmount: '129104721497614737',
			sellAmount: '50000000000000000000',
			sources: [
				{ name: 'BakerySwap', proportion: '0' },
				{ name: 'Belt', proportion: '0' },
				{ name: 'DODO', proportion: '0' },
				{ name: 'DODO_V2', proportion: '0' },
				{ name: 'Ellipsis', proportion: '0' },
				{ name: 'Mooniswap', proportion: '0' },
				{ name: 'MultiHop', proportion: '0' },
				{ name: 'Nerve', proportion: '0' },
				{ name: 'Synapse', proportion: '0' },
				{ name: 'PancakeSwap', proportion: '1' },
				{ name: 'PancakeSwap_V2', proportion: '0' },
				{ name: 'SushiSwap', proportion: '0' },
				{ name: 'Smoothy', proportion: '0' },
				{ name: 'ApeSwap', proportion: '0' },
				{ name: 'CafeSwap', proportion: '0' },
				{ name: 'CheeseSwap', proportion: '0' },
				{ name: 'JulSwap', proportion: '0' },
				{ name: 'LiquidityProvider', proportion: '0' },
				{ name: 'WaultSwap', proportion: '0' },
				{ name: 'FirebirdOneSwap', proportion: '0' },
				{ name: 'JetSwap', proportion: '0' },
				{ name: 'ACryptoS', proportion: '0' },
				{ name: 'KyberDMM', proportion: '0' }
			],
			orders: [
				{
					makerToken: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
					takerToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
					makerAmount: '129104721497614737',
					takerAmount: '50000000000000000000',
					fillData: [Object],
					source: 'PancakeSwap',
					sourcePathId: '0x3cd7e4174c934c9ee81fccbd86c543d0207a863e710f683b0a7df59f2667a9ca',
					type: 0
				}
			],
			allowanceTarget: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
			sellTokenToEthRate: '367.985835408236506354',
			buyTokenToEthRate: '1'
		}
	*/
});
```
***
# Donate
Of course, the project was made not for any benefit, but for my personal convenience :)

But I wanted to share this convenience with the Github community.

You can send me any amount of any coins in the **ETH / BSC** network as a donation to the address: **`0x35552CF3Ce8Cc8a0f7fdC8Aa88a89b92e9Ab5FdB`**
import axios from "axios";

import { PriceParamsV1, PriceResponseV1, QuoteParamsV1, QuoteResponseV1 } from './types/IV1';

/**
 * @readonly
 * @enum {string}
*/
export const OxNetworksV1 = {
	Ethereum: "ethereum",
	EthereumRopsten: "ropsten",
	Polygon: "polygon",
	BinanceSmartChain: "bsc",
	Optimism: "optimism",
	Fantom: "fantom",
	Celo: "celo",
	Avalanche: "avalanche"
};

/**
 * @class OxSwapV1
 * @constructor
 * @public
 */
export class OxSwapV1 {
	private _baseUrl: string;
	private _network: string;

	/**
	 * @description Find the best price to exchange via 0x router
	 * @remarks
	 * Info About Response you can find https://normalizex.github.io/0x-api-swap/v1/quote.html
	 * 
	 * **Options:**
	 * - `sellAmount` - The amount of `sellToken` (in `sellToken` base units) you want to send. 
	 * - `buyAmount` - The amount of `buyToken` (in `buyToken` base units) you want to receive. 
	 * - `slippagePercentage` - The maximum acceptable slippage of the buyToken amount if sellAmount is provided; The maximum acceptable slippage of the `sellAmount` amount if `buyAmount` is provided. E.g 0.03 for 3% slippage allowed. 
	 * - `gasPrice` - The target gas price (in wei) for the swap transaction. If the price is too low to achieve the quote, an error will be returned.
	 * - `takerAddress` - The address which will fill the quote. When provided the gas will be estimated and returned and the entire transaction will be validated for success. If the validation fails a Revert Error will be returned in the response. The quote should be fillable if this address is provided. For example, make sure this address has enough token balance.
	 * - `excludedSources` - Liquidity sources (Uniswap, SushiSwap, 0x, Curve etc) that will not be included in the provided quote.
	 * 	- Example: `excludedSources: Uniswap_V3,SushiSwap,Curve`
	 * - `includedSources` - For now only supports RFQT, which should be used when the integrator only wants RFQ-T liquidity without any other DEX orders. Requires a particular agreement with the 0x integrations team. This parameter cannot be combined with `excludedSources`.
	 * 	- Example: `includedSources: Uniswap_V3,Curve` or `includedSources: RFQT` 
	 * -  `skipValidation` - If a `takerAddress` is provided, the API can perform validations for the user. 
	 * 	- For more details, see ["How does `takerAddress` help with catching issues?"](https://docs.0x.org/developer-resources/api-faqs#how-does-takeraddress-help-with-catching-issues)
	 * 	- When this parameter is set to `false`, that validation will be run.
	 * 	- In the `quote` request, validation is the default behavior (see [here](https://docs.0x.org/market-makers/docs/introduction#quote-validation)).
	 * 	- In `price` requests, validation must be forced by setting `skipValidation: false`
	 * - `feeRecipient` - The ETH address that should receive affiliate fees specified with buyTokenPercentageFee. Can be used combination with buyTokenPercentageFee to set a commission/trading fee when using the API. 
	 * 	- More info [here](https://docs.0x.org/developer-resources/api-faqs#i-am-building-an-dex-app-using-0x-api.-can-i-charge-a-trading-fee-commission-fee-transaction-fee-whe)
	 * - `buyTokenPercentageFee` -  The percentage (between 0 - 1.0) of the `buyAmount` that should be attributed to `feeRecipient` as affiliate fees.
	 * 	- That this requires that the `feeRecipient` parameter is also specified in the request.
	 * - `affiliateAddress` - An address for which to attribute the trade for tracking and analytics purposes. 
	 * 	- `affiliateAddress` is only for tracking trades and has no impact on affiliate fees. For affiliate fees, use `feeRecipient`.
	 * ***
	 * @param sellToken - Example: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
	 * @param buyToken - Example: 0x111111111117dc0aa78b770fa6a738034120c302
	 * @param options - Full info about options you can find in "remarks"
	*/
	price = async (sellToken: string, buyToken: string, options: PriceParamsV1 = {}) => axios.get<PriceResponseV1>(`${this._baseUrl}/price`, {params: { buyToken, sellToken, ...options }}).then(res => res.data)

	/**
	 * @description Find the best price to exchange via 0x router
	 * @remarks
	 * Info About Response you can find https://normalizex.github.io/0x-api-swap/v1/price.html
	 * 
	 * **Options:**
	 * - `sellAmount` - The amount of `sellToken` (in `sellToken` base units) you want to send. 
	 * - `buyAmount` - The amount of `buyToken` (in `buyToken` base units) you want to receive. 
	 * - `slippagePercentage` - The maximum acceptable slippage of the buyToken amount if sellAmount is provided; The maximum acceptable slippage of the `sellAmount` amount if `buyAmount` is provided. E.g 0.03 for 3% slippage allowed. 
	 * - `gasPrice` - The target gas price (in wei) for the swap transaction. If the price is too low to achieve the quote, an error will be returned.
	 * - `takerAddress` - The address which will fill the quote. When provided the gas will be estimated and returned and the entire transaction will be validated for success. If the validation fails a Revert Error will be returned in the response. The quote should be fillable if this address is provided. For example, make sure this address has enough token balance.
	 * - `excludedSources` - Liquidity sources (Uniswap, SushiSwap, 0x, Curve etc) that will not be included in the provided quote.
	 * 	- Example: `excludedSources: Uniswap_V3,SushiSwap,Curve`
	 * - `includedSources` - For now only supports RFQT, which should be used when the integrator only wants RFQ-T liquidity without any other DEX orders. Requires a particular agreement with the 0x integrations team. This parameter cannot be combined with `excludedSources`.
	 * 	- Example: `includedSources: Uniswap_V3,Curve` or `includedSources: RFQT` 
	 * -  `skipValidation` - If a `takerAddress` is provided, the API can perform validations for the user. 
	 * 	- For more details, see ["How does `takerAddress` help with catching issues?"](https://docs.0x.org/developer-resources/api-faqs#how-does-takeraddress-help-with-catching-issues)
	 * 	- When this parameter is set to `false`, that validation will be run.
	 * 	- In the `quote` request, validation is the default behavior (see [here](https://docs.0x.org/market-makers/docs/introduction#quote-validation)).
	 * 	- In `price` requests, validation must be forced by setting `skipValidation: false`
	 * - `intentOnFilling` - Used to enable RFQ-T liquidity. For more details see the guide [here](https://docs.0x.org/market-makers/docs/introduction).
	 * - `feeRecipient` - The ETH address that should receive affiliate fees specified with buyTokenPercentageFee. Can be used combination with buyTokenPercentageFee to set a commission/trading fee when using the API. 
	 * 	- More info [here](https://docs.0x.org/developer-resources/api-faqs#i-am-building-an-dex-app-using-0x-api.-can-i-charge-a-trading-fee-commission-fee-transaction-fee-whe)
	 * - `buyTokenPercentageFee` -  The percentage (between 0 - 1.0) of the `buyAmount` that should be attributed to `feeRecipient` as affiliate fees.
	 * 	- That this requires that the `feeRecipient` parameter is also specified in the request.
	 * - `affiliateAddress` - An address for which to attribute the trade for tracking and analytics purposes. 
	 * 	- `affiliateAddress` is only for tracking trades and has no impact on affiliate fees. For affiliate fees, use `feeRecipient`.
	 * ***
	 * @param sellToken - Example: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
	 * @param buyToken - Example: 0x111111111117dc0aa78b770fa6a738034120c302
	 * @param options - Full info about options you can find in "remarks"
	*/
	quote = async (sellToken: string, buyToken: string, options: QuoteParamsV1 = {}) => axios.get<QuoteResponseV1>(`${this._baseUrl}/quote`, {params: { buyToken, sellToken, ...options }}).then(res => res.data)
	

	/**
	 * @returns Returns the liquidity sources enabled for the chain.
	 * @remarks Info About Response you can find https://normalizex.github.io/0x-api-swap/v1/sources.html
	*/
	sources = async () => axios.get<{ records: string[] }>(`${this._baseUrl}/sources`).then(res => res.data.records);

	/**
	 * @returns Current 0x.org base url
	*/
	endpoint = () => this._baseUrl;

	/**
	 * @returns Current network
	*/
	network = () => this._network;

	/**
	 * @param network - The name of the network or deployed api mirror
	 * @description Switch network endpoint to other
	*/
	swichEndpoint = (network: string) => {
		if (!network) throw new Error('Invalid network endpoint');

		this._network = network;
		this._baseUrl = `https://${this._network !== OxNetworksV1.Ethereum ? `${this._network}.` : ''}api.0x.org/swap/v1`;
	}

	/**
	 * @param network - The name of the network or deployed api mirror
	*/
	constructor(network: string) {
		if (!network) throw new Error('Invalid network endpoint');

		this._network = network;
		this._baseUrl = `https://${this._network !== OxNetworksV1.Ethereum ? `${this._network}.` : ''}api.0x.org/swap/v1`;
	}
};

export default OxSwapV1;
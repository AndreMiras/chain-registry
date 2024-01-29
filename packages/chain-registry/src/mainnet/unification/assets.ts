import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "unification",
  "assets": [
    {
      "description": "Staking and governance coin for the Unification Blockchain",
      "denom_units": [
        {
          "denom": "nund",
          "exponent": 0
        },
        {
          "denom": "FUND",
          "exponent": 9
        }
      ],
      "base": "nund",
      "name": "Unification Network",
      "display": "FUND",
      "symbol": "FUND",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg"
      },
      "coingecko_id": "unification"
    }
  ]
};
export default info;
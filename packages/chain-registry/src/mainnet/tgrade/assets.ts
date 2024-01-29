import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "tgrade",
  "assets": [
    {
      "description": "The native token of Tgrade",
      "denom_units": [
        {
          "denom": "utgd",
          "exponent": 0
        },
        {
          "denom": "tgd",
          "exponent": 6
        }
      ],
      "base": "utgd",
      "name": "Tgrade",
      "display": "tgd",
      "symbol": "TGD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
      },
      "coingecko_id": "tgrade",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
        }
      ]
    }
  ]
};
export default info;
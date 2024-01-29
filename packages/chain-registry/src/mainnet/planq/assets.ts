import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "planq",
  "assets": [
    {
      "description": "The native EVM, governance and staking token of the Planq Network",
      "denom_units": [
        {
          "denom": "aplanq",
          "exponent": 0
        },
        {
          "denom": "planq",
          "exponent": 18
        }
      ],
      "base": "aplanq",
      "name": "Planq",
      "display": "planq",
      "symbol": "PLQ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
      },
      "coingecko_id": "planq",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg"
        }
      ]
    }
  ]
};
export default info;
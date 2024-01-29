import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "persistencetestnet",
  "assets": [
    {
      "description": "The XPRT token is primarily a governance token for the Persistence chain.",
      "denom_units": [
        {
          "denom": "uxprt",
          "exponent": 0
        },
        {
          "denom": "xprt",
          "exponent": 6
        }
      ],
      "base": "uxprt",
      "name": "Persistence",
      "display": "xprt",
      "symbol": "XPRT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
      },
      "coingecko_id": "persistence",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        }
      ]
    },
    {
      "description": "PSTAKE Liquid-Staked ATOM",
      "denom_units": [
        {
          "denom": "stk/uatom",
          "exponent": 0,
          "aliases": []
        },
        {
          "denom": "stkatom",
          "exponent": 6,
          "aliases": [
            "stk/atom"
          ]
        }
      ],
      "base": "stk/uatom",
      "name": "PSTAKE staked ATOM",
      "display": "stkatom",
      "symbol": "stkATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg"
        }
      ]
    }
  ]
};
export default info;
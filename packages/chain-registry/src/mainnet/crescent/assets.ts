import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "crescent",
  "assets": [
    {
      "description": "The native token of Crescent",
      "denom_units": [
        {
          "denom": "ucre",
          "exponent": 0
        },
        {
          "denom": "cre",
          "exponent": 6
        }
      ],
      "base": "ucre",
      "name": "Crescent",
      "display": "cre",
      "symbol": "CRE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
      },
      "coingecko_id": "crescent-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        }
      ]
    },
    {
      "description": "The bonded token of Crescent",
      "denom_units": [
        {
          "denom": "ubcre",
          "exponent": 0
        },
        {
          "denom": "bcre",
          "exponent": 6
        }
      ],
      "base": "ubcre",
      "name": "Bonded Crescent",
      "display": "bcre",
      "symbol": "bCRE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
      },
      "coingecko_id": "liquid-staking-crescent",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        }
      ]
    }
  ]
};
export default info;
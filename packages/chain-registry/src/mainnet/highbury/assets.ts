import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "highbury",
  "assets": [
    {
      "description": "The native staking and governance token of the Blackfury ecosystem",
      "denom_units": [
        {
          "denom": "ufury",
          "exponent": 0
        },
        {
          "denom": "fury",
          "exponent": 6
        }
      ],
      "base": "ufury",
      "name": "Fury",
      "display": "fury",
      "symbol": "FURY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
      },
      "coingecko_id": "fanfury",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/fury.svg"
        }
      ]
    },
    {
      "description": "Governance token of Jinx Wallet and Fury Lend Protocol",
      "denom_units": [
        {
          "denom": "jinx",
          "exponent": 0
        },
        {
          "denom": "JINX",
          "exponent": 6
        }
      ],
      "base": "jinx",
      "name": "Jinx",
      "display": "JINX",
      "symbol": "JINX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinx.svg"
        }
      ]
    },
    {
      "description": "Governance token of Fury Swap Protocol",
      "denom_units": [
        {
          "denom": "jinxy",
          "exponent": 0
        },
        {
          "denom": "JINXY",
          "exponent": 6
        }
      ],
      "base": "jinxy",
      "name": "Jinxy",
      "display": "JINXy",
      "symbol": "JINXy",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/highbury/images/jinxy.svg"
        }
      ]
    }
  ]
};
export default info;
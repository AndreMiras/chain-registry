import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "humanstestnet",
  "assets": [
    {
      "description": "The native staking and governance token of the testnet version of Humans AI.",
      "denom_units": [
        {
          "denom": "uheart",
          "exponent": 0
        },
        {
          "denom": "heart",
          "exponent": 6
        }
      ],
      "base": "uheart",
      "name": "HEART",
      "display": "heart",
      "symbol": "HEART",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/humanstestnet/images/humans.png"
        }
      ]
    }
  ]
};
export default info;
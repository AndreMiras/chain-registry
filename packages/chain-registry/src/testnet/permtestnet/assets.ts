import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "permtestnet",
  "assets": [
    {
      "description": "Perm A Permissioned Blockchain",
      "denom_units": [
        {
          "denom": "uperm",
          "exponent": 0
        },
        {
          "denom": "perm",
          "exponent": 6
        }
      ],
      "base": "uperm",
      "name": "Perm",
      "display": "perm",
      "symbol": "PERM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.svg"
        }
      ]
    }
  ]
};
export default info;
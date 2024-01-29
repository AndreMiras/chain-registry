import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "point",
  "assets": [
    {
      "description": "The native governance and staking token of the Point network",
      "denom_units": [
        {
          "denom": "apoint",
          "exponent": 0
        },
        {
          "denom": "point",
          "exponent": 18
        }
      ],
      "base": "apoint",
      "name": "Point",
      "display": "point",
      "symbol": "POINT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg"
      },
      "coingecko_id": "point-network",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg"
        }
      ]
    }
  ]
};
export default info;
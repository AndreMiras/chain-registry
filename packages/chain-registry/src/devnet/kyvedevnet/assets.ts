import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "kyvedevnet",
  "assets": [
    {
      "description": "The native utility token of the Korellia devnet version of KYVE.",
      "denom_units": [
        {
          "denom": "tkyve",
          "exponent": 0
        },
        {
          "denom": "kyve",
          "exponent": 9
        }
      ],
      "base": "tkyve",
      "name": "KYVE",
      "display": "kyve",
      "symbol": "KYVE",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvedevnet/images/kyve.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kyvedevnet/images/kyve.svg"
        }
      ]
    }
  ]
};
export default info;
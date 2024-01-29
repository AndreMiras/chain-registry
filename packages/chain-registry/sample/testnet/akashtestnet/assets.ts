import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "akashtestnet",
  "assets": [
    {
      "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "denom_units": [
        {
          "denom": "uakt",
          "exponent": 0
        },
        {
          "denom": "akt",
          "exponent": 6
        }
      ],
      "base": "uakt",
      "name": "Akash Network",
      "display": "akt",
      "symbol": "AKT",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        }
      ]
    }
  ]
};
export default info;
    
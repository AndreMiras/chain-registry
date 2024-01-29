import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "teritori",
  "assets": [
    {
      "description": "The native token of Teritori",
      "denom_units": [
        {
          "denom": "utori",
          "exponent": 0
        },
        {
          "denom": "tori",
          "exponent": 6
        }
      ],
      "base": "utori",
      "name": "Teritori",
      "display": "tori",
      "symbol": "TORI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
      },
      "coingecko_id": "teritori",
      "images": [
        {
          "image_sync": {
            "chain_name": "teritori",
            "base_denom": "utori"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg"
        }
      ]
    },
    {
      "description": "The native token of Osmosis",
      "denom_units": [
        {
          "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "exponent": 0
        },
        {
          "denom": "osmo",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
      "name": "Osmosis",
      "display": "osmo",
      "symbol": "OSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "uosmo",
            "channel_id": "channel-362"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/uosmo"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      },
      "coingecko_id": "osmosis",
      "keywords": [
        "dex",
        "staking"
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "uosmo"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E",
          "exponent": 0,
          "aliases": [
            "uatom"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A670D9568B3E399316EEDE40C1181B7AA4BD0695F0B37513CE9B95B977DFC12E",
      "name": "Cosmos Hub Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom",
            "channel_id": "channel-431"
          },
          "chain": {
            "channel_id": "channel-10",
            "path": "transfer/channel-10/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "cosmoshub",
            "base_denom": "uatom"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      }
    },
    {
      "description": "The native staking and governance token of the Kujira chain.",
      "denom_units": [
        {
          "denom": "ibc/1FECA3491D88F4AD24DE0948ED96718CA6D93F6730CEE7708E621B953594BB5E",
          "exponent": 0
        },
        {
          "denom": "kuji",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ukuji",
      "name": "Kujira",
      "display": "kuji",
      "symbol": "KUJI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "kujira",
            "base_denom": "ukuji",
            "channel_id": "channel-89"
          },
          "chain": {
            "channel_id": "channel-30",
            "path": "transfer/channel-30/ukuji"
          }
        }
      ],
      "coingecko_id": "kujira",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
      },
      "images": [
        {
          "image_sync": {
            "chain_name": "kujira",
            "base_denom": "ukuji"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg"
        }
      ]
    }
  ]
};
export default info;
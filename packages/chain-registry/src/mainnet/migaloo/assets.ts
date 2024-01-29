import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "migaloo",
  "assets": [
    {
      "description": "The native token of Migaloo Chain",
      "denom_units": [
        {
          "denom": "uwhale",
          "exponent": 0
        },
        {
          "denom": "whale",
          "exponent": 6
        }
      ],
      "base": "uwhale",
      "name": "Whale",
      "display": "whale",
      "symbol": "WHALE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg"
      },
      "coingecko_id": "white-whale",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg"
        }
      ]
    },
    {
      "description": "ampWHALE",
      "denom_units": [
        {
          "denom": "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE",
          "exponent": 0
        },
        {
          "denom": "ampWHALE",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE",
      "name": "ampWHALE",
      "display": "ampWHALE",
      "symbol": "ampWHALE",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg"
        }
      ]
    },
    {
      "description": "boneWHALE",
      "denom_units": [
        {
          "denom": "factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale",
          "exponent": 0
        },
        {
          "denom": "boneWHALE",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale",
      "name": "boneWHALE",
      "display": "boneWHALE",
      "symbol": "bWHALE",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg"
        }
      ]
    },
    {
      "description": "FABLE",
      "denom_units": [
        {
          "denom": "factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable",
          "exponent": 0
        },
        {
          "denom": "fable",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable",
      "name": "FABLE",
      "display": "fable",
      "symbol": "FABLE",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg"
        }
      ]
    },
    {
      "description": "boneLUNA are autocompounding LUNA tokens",
      "denom_units": [
        {
          "denom": "ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708",
          "exponent": 0
        },
        {
          "denom": "bluna",
          "exponent": 6
        }
      ],
      "base": "ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708",
      "address": "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
      "type_asset": "ics20",
      "name": "boneLuna",
      "display": "bluna",
      "symbol": "bLUNA",
      "traces": [
        {
          "type": "ibc-cw20",
          "counterparty": {
            "chain_name": "terra2",
            "base_denom": "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
            "port": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
            "channel_id": "channel-87"
          },
          "chain": {
            "port": "transfer",
            "channel_id": "channel-2",
            "path": "transfer/channel-2/cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml"
          }
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png"
        }
      ]
    },
    {
      "description": "RAC",
      "denom_units": [
        {
          "denom": "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac",
          "exponent": 0
        },
        {
          "denom": "RAC",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac",
      "name": "RAC",
      "display": "RAC",
      "symbol": "RAC",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg"
        }
      ]
    },
    {
      "description": "ASH",
      "denom_units": [
        {
          "denom": "factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash",
          "exponent": 0
        },
        {
          "denom": "ASH",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash",
      "name": "ASH",
      "display": "ASH",
      "symbol": "ASH",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg"
      },
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg"
        }
      ]
    },
    {
      "description": "Tether USDt on Migaloo",
      "denom_units": [
        {
          "denom": "ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt",
            "channel_id": "channel-120"
          },
          "chain": {
            "channel_id": "channel-48",
            "path": "transfer/channel-48/erc20/tether/usdt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "Auto componded USDC despoited into Ginkou on Migaloo chain",
      "denom_units": [
        {
          "denom": "cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v",
          "exponent": 0
        },
        {
          "denom": "mUSDC",
          "exponent": 6
        }
      ],
      "type_asset": "cw20",
      "address": "migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v",
      "base": "cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v",
      "name": "mUSDC",
      "display": "mUSDC",
      "symbol": "mUSDC",
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg"
      },
      "coingecko_id": "",
      "images": [
        {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg"
        }
      ]
    },
    {
      "description": "GUPPY",
      "denom_units": [
        {
          "denom": "factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy",
          "exponent": 0
        },
        {
          "denom": "GUPPY",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy",
      "name": "GUPPY",
      "display": "GUPPY",
      "symbol": "GUPPY",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png"
        }
      ]
    },
    {
      "description": "OPHIR is a Cosmos Treasury DAO established on Migaloo.",
      "denom_units": [
        {
          "denom": "factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir",
          "exponent": 0
        },
        {
          "denom": "OPHIR",
          "exponent": 6
        }
      ],
      "base": "factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir",
      "name": "OPHIR",
      "display": "OPHIR",
      "symbol": "OPHIR",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png"
        }
      ]
    }
  ]
};
export default info;
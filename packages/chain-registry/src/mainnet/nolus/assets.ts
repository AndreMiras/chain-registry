import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "nolus",
  "assets": [
    {
      "description": "The native token of Nolus chain",
      "denom_units": [
        {
          "denom": "unls",
          "exponent": 0
        },
        {
          "denom": "nls",
          "exponent": 6
        }
      ],
      "base": "unls",
      "name": "Nolus",
      "display": "nls",
      "symbol": "NLS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
      },
      "coingecko_id": "nolus",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg"
        }
      ]
    },
    {
      "description": "axlUSDC transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911",
          "exponent": 0,
          "aliases": [
            "uusdc"
          ]
        },
        {
          "denom": "usdc",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911",
      "name": "axlUSDC",
      "display": "usdc",
      "symbol": "axlUSDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/uusdc"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg"
      }
    },
    {
      "description": "OSMO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
          "exponent": 0,
          "aliases": [
            "uosmo"
          ]
        },
        {
          "denom": "osmo",
          "exponent": 6,
          "aliases": []
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
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/uosmo"
          }
        }
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
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      }
    },
    {
      "description": "stOSMO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1",
          "exponent": 0,
          "aliases": [
            "stuosmo"
          ]
        },
        {
          "denom": "stosmo",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1",
      "name": "Osmosis",
      "display": "stosmo",
      "symbol": "stOSMO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-326/stuosmo"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
      }
    },
    {
      "description": "ATOM transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388",
          "exponent": 0,
          "aliases": [
            "uatom"
          ]
        },
        {
          "denom": "atom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388",
      "name": "Atom",
      "display": "atom",
      "symbol": "ATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-0/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
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
      "description": "stATOM transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8",
          "exponent": 0,
          "aliases": [
            "ustatom"
          ]
        },
        {
          "denom": "statom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8",
      "name": "stATOM",
      "display": "statom",
      "symbol": "stATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-326/stuatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
      }
    },
    {
      "description": "WETH transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C",
          "exponent": 0,
          "aliases": [
            "weth-wei"
          ]
        },
        {
          "denom": "weth",
          "exponent": 18,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C",
      "name": "WETH",
      "display": "weth",
      "symbol": "WETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/weth-wei"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
      }
    },
    {
      "description": "WBTC transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221",
          "exponent": 0,
          "aliases": [
            "wbtc-satoshi"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221",
      "name": "WBTC",
      "display": "wbtc",
      "symbol": "WBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/wbtc-satoshi"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
      }
    },
    {
      "description": "AKT transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459",
          "exponent": 0,
          "aliases": [
            "uakt"
          ]
        },
        {
          "denom": "akt",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459",
      "name": "AKT",
      "display": "akt",
      "symbol": "AKT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-1/uakt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4"
          }
        }
      ]
    },
    {
      "description": "AXL transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717",
          "exponent": 0,
          "aliases": [
            "uaxl"
          ]
        },
        {
          "denom": "axl",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717",
      "name": "AXL",
      "display": "axl",
      "symbol": "AXL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-208/uaxl"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E"
          }
        }
      ]
    },
    {
      "description": "JUNO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C",
          "exponent": 0,
          "aliases": [
            "ujuno"
          ]
        },
        {
          "denom": "juno",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C",
      "name": "JUNO",
      "display": "juno",
      "symbol": "JUNO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-42/ujuno"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED"
          }
        }
      ]
    },
    {
      "description": "EVMOS transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE",
          "exponent": 0,
          "aliases": [
            "aevmos"
          ]
        },
        {
          "denom": "evmos",
          "exponent": 18,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE",
      "name": "EVMOS",
      "display": "evmos",
      "symbol": "EVMOS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-204/aevmos"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A"
          }
        }
      ]
    },
    {
      "description": "stkATOM transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865",
          "exponent": 0,
          "aliases": [
            "stk/uatom"
          ]
        },
        {
          "denom": "stk/atom",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865",
      "name": "stkATOM",
      "display": "stk/atom",
      "symbol": "stkATOM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-4/stk/uatom"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC"
          }
        }
      ]
    },
    {
      "description": "SCRT transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107",
          "exponent": 0,
          "aliases": [
            "uscrt"
          ]
        },
        {
          "denom": "scrt",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107",
      "name": "SCRT",
      "display": "scrt",
      "symbol": "SCRT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-88/uscrt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A"
          }
        }
      ]
    },
    {
      "description": "CRO transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48",
          "exponent": 0,
          "aliases": [
            "basecro"
          ]
        },
        {
          "denom": "cro",
          "exponent": 8,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48",
      "name": "CRO",
      "display": "cro",
      "symbol": "CRO",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-5/basecro"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg"
      }
    },
    {
      "description": "STARS transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5",
          "exponent": 0,
          "aliases": [
            "ustars"
          ]
        },
        {
          "denom": "stars",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5",
      "name": "STARS",
      "display": "stars",
      "symbol": "STARS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-75/ustars"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg"
      }
    },
    {
      "description": "TIA transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
          "exponent": 0,
          "aliases": [
            "utia"
          ]
        },
        {
          "denom": "tia",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5",
      "name": "TIA",
      "display": "tia",
      "symbol": "TIA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-6994/utia"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg"
      }
    },
    {
      "description": "STRD transferred from the Osmosis mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B",
          "exponent": 0,
          "aliases": [
            "ustrd"
          ]
        },
        {
          "denom": "strd",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B",
      "name": "STRD",
      "display": "strd",
      "symbol": "STRD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "osmosis",
            "base_denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
            "channel_id": "channel-783"
          },
          "chain": {
            "channel_id": "channel-0",
            "path": "transfer/channel-0/transfer/channel-326/ustrd"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "osmosis",
            "base_denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
      }
    },
    {
      "description": "NTRN transferred from the Neutron mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09",
          "exponent": 0,
          "aliases": [
            "untrn"
          ]
        },
        {
          "denom": "ntrn",
          "exponent": 6,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09",
      "name": "NTRN",
      "display": "ntrn",
      "symbol": "NTRN",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "neutron",
            "base_denom": "untrn",
            "channel_id": "channel-44"
          },
          "chain": {
            "channel_id": "channel-3839",
            "path": "transfer/channel-3839/untrn"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "neutron",
            "base_denom": "untrn"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.svg"
      }
    },
    {
      "description": "DYDX transferred from the Neutron mainnet that is supported on the Nolus chain",
      "denom_units": [
        {
          "denom": "ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4",
          "exponent": 0,
          "aliases": [
            "adydx"
          ]
        },
        {
          "denom": "dydx",
          "exponent": 18,
          "aliases": []
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4",
      "name": "DYDX",
      "display": "dydx",
      "symbol": "DYDX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "neutron",
            "base_denom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
            "channel_id": "channel-44"
          },
          "chain": {
            "channel_id": "channel-3839",
            "path": "transfer/channel-3839/transfer/channel-48/adydx"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "neutron",
            "base_denom": "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg"
      }
    }
  ]
};
export default info;
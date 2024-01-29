import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "kava",
  "assets": [
    {
      "description": "The native staking and governance token of Kava",
      "denom_units": [
        {
          "denom": "ukava",
          "exponent": 0
        },
        {
          "denom": "kava",
          "exponent": 6
        }
      ],
      "base": "ukava",
      "name": "Kava",
      "display": "kava",
      "symbol": "KAVA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
      },
      "coingecko_id": "kava",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg"
        }
      ]
    },
    {
      "description": "Governance token of Kava Lend Protocol",
      "denom_units": [
        {
          "denom": "hard",
          "exponent": 0
        },
        {
          "denom": "HARD",
          "exponent": 6
        }
      ],
      "base": "hard",
      "name": "Kava Hard",
      "display": "HARD",
      "symbol": "HARD",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
      },
      "coingecko_id": "kava-lend",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
        }
      ]
    },
    {
      "description": "Governance token of Kava Swap Protocol",
      "denom_units": [
        {
          "denom": "swp",
          "exponent": 0
        },
        {
          "denom": "SWP",
          "exponent": 6
        }
      ],
      "base": "swp",
      "name": "Kava Swap",
      "display": "SWP",
      "symbol": "SWP",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
      },
      "coingecko_id": "kava-swap",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
        }
      ]
    },
    {
      "description": "The native stablecoin of Kava",
      "denom_units": [
        {
          "denom": "usdx",
          "exponent": 0
        },
        {
          "denom": "USDX",
          "exponent": 6
        }
      ],
      "base": "usdx",
      "name": "Kava USDX",
      "display": "USDX",
      "symbol": "USDX",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg"
      },
      "coingecko_id": "usdx",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg"
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "erc20/tether/usdt",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "base": "erc20/tether/usdt",
      "name": "Tether USD",
      "display": "usdt",
      "symbol": "USDT",
      "coingecko_id": "tether",
      "traces": [
        {
          "type": "additional-mintage",
          "counterparty": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "provider": "Tether"
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereum",
            "base_denom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    }
  ]
};
export default info;
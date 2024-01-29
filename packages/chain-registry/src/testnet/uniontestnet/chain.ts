import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../../chain.schema.json",
  "chain_name": "uniontestnet",
  "status": "live",
  "network_type": "testnet",
  "pretty_name": "union Testnet",
  "chain_id": "union-testnet-4",
  "bech32_prefix": "union",
  "daemon_name": "uniond",
  "node_home": "$HOME/.uniond",
  "key_algos": [
    "bn254"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "muno",
        "fixed_min_gas_price": 0,
        "low_gas_price": 0.0025,
        "average_gas_price": 0.025,
        "high_gas_price": 0.04
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "muno"
      }
    ]
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.cryptware.io",
        "provider": "cryptware"
      },
      {
        "address": "https://union-testnet-rpc.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://rpc-testnet-union.nodeist.net",
        "provider": "Nodeist"
      }
    ],
    "rest": [
      {
        "address": "https://api.cryptware.io",
        "provider": "cryptware"
      },
      {
        "address": "https://union-testnet-api.polkachu.com",
        "provider": "Polkachu"
      },
      {
        "address": "https://api-testnet-union.nodeist.net",
        "provider": "Nodeist"
      }
    ],
    "grpc": [
      {
        "address": "https://grpc.cryptware.io",
        "provider": "cryptware"
      },
      {
        "address": "http://union-testnet-grpc.polkachu.com:24690",
        "provider": "Polkachu"
      },
      {
        "address": "https://grpc-testnet-union.nodeist.net",
        "provider": "Nodeist"
      }
    ]
  },
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png"
  },
  "explorers": [
    {
      "kind": "ping.pub",
      "url": "https://explorer.cryptware.io/union",
      "tx_page": "https://explorer.cryptware.io/union/tx/${txHash}",
      "account_page": "https://explorer.cryptware.io/union/account/${accountAddress}"
    }
  ],
  "keywords": [
    "testnet"
  ],
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png"
    }
  ]
};
export default info;
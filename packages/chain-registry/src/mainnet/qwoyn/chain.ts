import { Chain } from '@chain-registry/types';
const info: Chain = {
  "$schema": "../chain.schema.json",
  "chain_name": "qwoyn",
  "status": "live",
  "network_type": "mainnet",
  "website": "https://qwoyn.studio/",
  "pretty_name": "Qwoyn",
  "chain_id": "qwoyn-1",
  "bech32_prefix": "qwoyn",
  "daemon_name": "qwoynd",
  "node_home": "$HOME/.qwoynd",
  "key_algos": [
    "secp256k1"
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "uqwoyn",
        "fixed_min_gas_price": 0.03,
        "low_gas_price": 0.03,
        "average_gas_price": 0.05,
        "high_gas_price": 0.075
      }
    ]
  },
  "staking": {
    "staking_tokens": [
      {
        "denom": "uqwoyn"
      }
    ]
  },
  "codebase": {
    "cosmos_sdk_version": "0.47.6",
    "cosmwasm_version": "0.40.0"
  },
  "apis": {
    "rpc": [
      {
        "address": "https://rpc.qwoyn.studio:443",
        "provider": "Qwoyn Studios"
      },
      {
        "address": "https://rpc-qwoyn.theamsolutions.info:443",
        "provider": "AM Solutions"
      },
      {
        "address": "https://qwoyn-rpc.staketab.org:443",
        "provider": "Staketab"
      },
      {
        "address": "https://qwoyn-rpc-archive.staketab.org:443",
        "provider": "Staketab archive"
      },
      {
        "address": "https://qwoyn-rpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://rpc-qwoyn.mzonder.com:443",
        "provider": "MZONDER"
      },
      {
        "address": "https://rpc.qwoyn.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "grpc": [
      {
        "address": "services.staketab.com:9430",
        "provider": "Staketab"
      },
      {
        "address": "services.staketab.com:2000",
        "provider": "Staketab archive"
      },
      {
        "address": "https://grpc-qwoyn.theamsolutions.info:443",
        "provider": "AM Solutions"
      },
      {
        "address": "https://qwoyn-grpc.lavenderfive.com:443",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "grpc-qwoyn.mzonder.com:443",
        "provider": "MZONDER"
      },
      {
        "address": "https://grpc.qwoyn.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ],
    "rest": [
      {
        "address": "https://rest-qwoyn.theamsolutions.info:443",
        "provider": "AM Solutions"
      },
      {
        "address": "https://qwoyn-rest.staketab.org",
        "provider": "Staketab"
      },
      {
        "address": "https://qwoyn-rest-archive.staketab.org",
        "provider": "Staketab archive"
      },
      {
        "address": "https://qwoyn-api.lavenderfive.com",
        "provider": "Lavender.Five Nodes 🐝"
      },
      {
        "address": "https://api-qwoyn.mzonder.com",
        "provider": "MZONDER"
      },
      {
        "address": "https://lcd.qwoyn.bronbro.io:443",
        "provider": "Bro_n_Bro"
      }
    ]
  },
  "explorers": [
    {
      "kind": "ping",
      "url": "https://explorer.theamsolutions.info/qwoyn-main/",
      "tx_page": "https://explorer.theamsolutions.info/qwoyn-main/blocks",
      "account_page": "https://explorer.theamsolutions.info/qwoyn-main/account/${accountAddress}"
    },
    {
      "kind": "ping",
      "url": "https://explorer.theamsolutions.info/QWOYN-MAIN",
      "tx_page": "https://explorer.theamsolutions.info/QWOYN-MAIN/tx/${txHash}",
      "account_page": "https://explorer.theamsolutions.info/QWOYN-MAIN/account/${accountAddress}"
    }
  ],
  "logo_URIs": {
    "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png"
  },
  "images": [
    {
      "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png"
    }
  ]
};
export default info;
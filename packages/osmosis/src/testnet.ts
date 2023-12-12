import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'osmosistestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Osmosis Testnet',
  chain_id: 'osmo-test-5',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uosmo',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uosmo'
      }
    ]
  },
  codebase: {
    git_repo: 'https://github.com/osmosis-labs/osmosis',
    recommended_version: 'v15.0.0',
    compatible_versions: ['v15.0.0'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url: 'https://genesis.osmotest5.osmosis.zone/genesis.json'
    },
    versions: [
      {
        name: 'v14.0.0-rc1',
        recommended_version: 'v14.0.0-rc1',
        compatible_versions: ['v14.0.0-rc1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true
      },
      {
        name: 'v15.0.0-rc3',
        recommended_version: 'v15.0.0-rc3',
        compatible_versions: ['v15.0.0-rc3'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true
      },
      {
        name: 'v15.0.0',
        recommended_version: 'v15.0.0',
        compatible_versions: ['v15.0.0-rc3'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true
      }
    ]
  },
  peers: {
    seeds: [
      {
        id: 'bb197876fd952d245ef6377e3651c157e3d7ed81',
        address: '157.245.26.231:26656',
        provider: ''
      },
      {
        id: '7c2b9e76be5c2142c76b429d9c29e902599ceb44',
        address: '157.245.21.183:26656',
        provider: ''
      }
    ],
    persistent_peers: [
      {
        id: '51084fccec1c309a415e89d39e6f0881c49493ed',
        address: '95.217.144.107:12556',
        provider: ''
      },
      {
        id: 'a5c34bdd777dd418ff7152a8646fd2f31f53f8a5',
        address: '46.232.248.117:2000',
        provider: ''
      }
    ]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      },
      {
        address: 'https://rpc.testnet.osl.zone/',
        provider: 'OSL'
      }
    ],
    rest: [
      {
        address: 'https://lcd.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/osmosis-testnet',
      tx_page: 'https://testnet.mintscan.io/osmosis-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/osmosis-testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.osmotest5.osmosis.zone',
      tx_page:
        'https://explorer.osmotest5.osmosis.zone/osmo-test-5/tx/${txHash}',
      account_page:
        'https://explorer.osmotest5.osmosis.zone/osmo-test-5/account/${accountAddress}'
    }
  ],
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    }
  ]
};
export default testnet;

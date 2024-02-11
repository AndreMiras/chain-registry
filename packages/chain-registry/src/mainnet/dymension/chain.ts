import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dymension',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://portal.dymension.xyz',
  pretty_name: 'Dymension Hub',
  chain_id: 'dymension_1100-1',
  bech32_prefix: 'dym',
  slip44: 60,
  daemon_name: 'dymd',
  fees: {
    fee_tokens: [
      {
        denom: 'adym',
        low_gas_price: 20000000000,
        average_gas_price: 20000000000,
        high_gas_price: 20000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'adym'
      }
    ]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
  },
  description:
    'Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.',
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
    }
  ],
  codebase: {},
  apis: {
    rpc: [
      {
        address: 'https://rpc.dymension.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://dymension-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://dymension-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dymension-rpc.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://m-dymension.rpc.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://rpc-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://dym.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.dymension.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://dymension.rpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://dymension-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-rpc.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://dymension-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://rpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dymension/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dymension-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dymension-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://dymension.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://rpc-dymension.hoodrun.io:443',
        provider: 'HoodRun'
      }
    ],
    rest: [
      {
        address: 'https://api.dymension.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://dymension-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://dymension-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dymension-api.kynraze.com',
        provider: 'Kynraze'
      },
      {
        address: 'https://m-dymension.api.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://api-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://dymension.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lcd.dymension.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://dymension.api.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://dymension-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-api.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://dymension-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://api-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dymension/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dymension-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dymension-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://dymension.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://lcd-dymension.hoodrun.io',
        provider: 'HoodRun'
      }
    ],
    grpc: [
      {
        address: 'grpc.dymension.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'dymension-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://dymension-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dymension-grpc.kynraze.com:77',
        provider: 'Kynraze'
      },
      {
        address: 'https://grpc-dymension.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'dymension.grpc.m.stavr.tech:7119',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'dymension.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'http://dymension-grpc.stakeandrelax.net:20590',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://dymension-grpc.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'dymension-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.dymension.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://grpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'dymension.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      },
      {
        address: 'grpc-dymension.hoodrun.io:9095',
        provider: 'HoodRun'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://dymension-jsonrpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://evm-dymension.hoodrun.io:8547',
        provider: 'HoodRun'
      }
    ]
  },
  explorers: [
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/dymension',
      tx_page: 'https://explorer.nodestake.org/dymension/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/dymension/account/${accountAddress}'
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/dymension',
      tx_page: 'https://explorer.kynraze.com/dymension/tx/${txHash}',
      account_page:
        'https://explorer.kynraze.com/dymension/account/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/dymension',
      tx_page: 'https://explorer.ist/dymension/tx/${txHash}',
      account_page: 'https://explorer.ist/dymension/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Dymension-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Dymension-Mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Dymension-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'HoodScan',
      url: 'https://hoodscan.io/dymension',
      tx_page: 'https://hoodscan.io/dymension/transactions/${txHash}',
      account_page: 'https://hoodscan.io/dymension/accounts/${accountAddress}'
    }
  ]
};
export default info;

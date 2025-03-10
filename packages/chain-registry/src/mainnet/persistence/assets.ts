import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'persistence',
  assets: [
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'uxprt',
          exponent: 0
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'uxprt',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      }
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'stk/uatom',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'stk/uatom',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'pSTAKE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      coingecko_id: 'stkatom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [{
          denom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
          exponent: 0,
          aliases: ['gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006', '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006']
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'Persistence'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            channel_id: 'channel-24'
          },
          chain: {
            channel_id: 'channel-38',
            path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      keywords: ['canon'],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-190'
          },
          chain: {
            channel_id: 'channel-24',
            path: 'transfer/channel-24/uatom'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'Tether USDT on Persistence',
      denom_units: [{
          denom: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-134'
          },
          chain: {
            channel_id: 'channel-129',
            path: 'transfer/channel-129/erc20/tether/usdt'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-36'
          },
          chain: {
            channel_id: 'channel-132',
            path: 'transfer/channel-132/uusdc'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      description: 'dydx staking token',
      denom_units: [{
          denom: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-4'
          },
          chain: {
            channel_id: 'channel-131',
            path: 'transfer/channel-131/adydx'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'stk/uosmo',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'stk/uosmo',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'pSTAKE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      coingecko_id: 'pstake-staked-osmo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked DYDX',
      denom_units: [{
          denom: 'stk/adydx',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkdydx',
          exponent: 18,
          aliases: ['stk/dydx']
        }],
      base: 'stk/adydx',
      name: 'PSTAKE staked DYDX',
      display: 'stkdydx',
      symbol: 'stkDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          provider: 'pSTAKE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked STARS',
      denom_units: [{
          denom: 'stk/ustars',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkstars',
          exponent: 6,
          aliases: ['stk/stars']
        }],
      base: 'stk/ustars',
      name: 'PSTAKE staked STARS',
      display: 'stkstars',
      symbol: 'stkSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          provider: 'pSTAKE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
            channel_id: 'channel-287'
          },
          chain: {
            channel_id: 'channel-197',
            path: 'transfer/channel-197/ustars'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      }
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-132'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-159',
            path: 'transfer/channel-159/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked HUAHUA',
      denom_units: [{
          denom: 'stk/uhuahua',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkhuahua',
          exponent: 6,
          aliases: ['stk/huahua']
        }],
      base: 'stk/uhuahua',
      name: 'PSTAKE staked HUAHUA',
      display: 'stkhuahua',
      symbol: 'stkHUAHUA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua'
          },
          provider: 'pSTAKE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua',
            channel_id: 'channel-94'
          },
          chain: {
            channel_id: 'channel-203',
            path: 'transfer/channel-203/uhuahua'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      }
    },
    {
      description: 'PSTAKE Liquid-Staked XPRT',
      denom_units: [{
          denom: 'stk/uxprt',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkxprt',
          exponent: 6,
          aliases: ['stk/xprt']
        }],
      base: 'stk/uxprt',
      name: 'PSTAKE staked XPRT',
      display: 'stkxprt',
      symbol: 'stkXPRT',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'pSTAKE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkxprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkxprt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkxprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkxprt.svg'
        }]
    }
  ]
};
export default info;
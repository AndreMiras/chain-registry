import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sei',
  assets: [
    {
      description: 'The native staking token of Sei.',
      denom_units: [
        {
          denom: 'usei',
          exponent: 0
        },
        {
          denom: 'sei',
          exponent: 6
        }
      ],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }
      ]
    },
    {
      description:
        'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [
        {
          denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
          exponent: 0
        },
        {
          denom: 'oin',
          exponent: 6
        }
      ],
      address: 'sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w',
      base: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        }
      ]
    },
    {
      description: 'ERIS liquid staked SEI',
      denom_units: [
        {
          denom:
            'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
          exponent: 0
        },
        {
          denom: 'ampSEI',
          exponent: 6
        }
      ],
      base: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
      name: 'ERIS Amplified SEI',
      display: 'ampSEI',
      symbol: 'ampSEI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
        }
      ]
    },
    {
      description: 'Popeye the Seilor',
      denom_units: [
        {
          denom: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
          exponent: 0
        },
        {
          denom: 'popeye',
          exponent: 6
        }
      ],
      base: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
      name: 'Popeye',
      display: 'popeye',
      symbol: 'POPEYE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png'
        }
      ]
    },
    {
      description: 'A wise dog and a marshal arts master',
      denom_units: [
        {
          denom: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
          exponent: 0
        },
        {
          denom: 'sensei',
          exponent: 6
        }
      ],
      base: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
      name: 'Sensei Dog',
      display: 'sensei',
      symbol: 'SENSEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png'
        }
      ]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
          exponent: 0
        },
        {
          denom: 'WOSMO',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png'
      }
    }
  ]
};
export default info;
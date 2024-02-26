import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'humans',
  assets: [
    {
      description: 'The native staking and governance token of Humans.ai.',
      denom_units: [
        {
          denom: 'aheart',
          exponent: 0
        },
        {
          denom: 'heart',
          exponent: 18
        }
      ],
      base: 'aheart',
      name: 'HEART',
      display: 'heart',
      symbol: 'HEART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg'
      },
      coingecko_id: 'humans-ai',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/humans_small_light.svg',
          theme: {
            dark_mode: false
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
          theme: {
            dark_mode: true
          }
        }
      ]
    }
  ]
};
export default info;
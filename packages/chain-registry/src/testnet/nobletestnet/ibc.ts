import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'elystestnet',
      client_id: '07-tendermint-9',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-28',
      connection_id: 'connection-26'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-42',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1374',
      connection_id: 'connection-1275'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4280',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-4504',
      connection_id: 'connection-3905'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3651',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-224',
      connection_id: 'connection-176'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-120',
      connection_id: 'connection-56'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-147',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-489',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }
];
export default info;
import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "aioz",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-1121",
      "connection_id": "connection-808"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-567",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "aioz",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-1"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2785",
      "connection_id": "connection-2285"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-779",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  }
];
export default info;
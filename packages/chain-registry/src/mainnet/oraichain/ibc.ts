import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "acrechain",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-13"
    },
    "chain_2": {
      "chain_name": "oraichain",
      "client_id": "07-tendermint-74",
      "connection_id": "connection-42"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-33",
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
      "chain_name": "oraichain",
      "client_id": "07-tendermint-49",
      "connection_id": "connection-21"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1882",
      "connection_id": "connection-1464"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-13",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-216",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  }
];
export default info;
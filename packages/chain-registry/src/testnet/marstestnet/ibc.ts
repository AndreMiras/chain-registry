import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "marstestnet",
      "client_id": "07-tendermint-31",
      "connection_id": "connection-29"
    },
    "chain_2": {
      "chain_name": "osmosistestnet",
      "client_id": "07-tendermint-1269",
      "connection_id": "connection-1167"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-27",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-4168",
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
  },
  {
    "$schema": "../../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "marstestnet",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "chain_2": {
      "chain_name": "osmosistestnet4",
      "client_id": "07-tendermint-3419",
      "connection_id": "connection-2887"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-2083",
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
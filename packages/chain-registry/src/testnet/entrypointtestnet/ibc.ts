import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "entrypointtestnet",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "osmosistestnet",
      "client_id": "07-tendermint-930",
      "connection_id": "connection-840"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1543",
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
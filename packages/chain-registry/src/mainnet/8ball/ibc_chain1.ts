import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "8ball",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-18"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2668",
      "connection_id": "connection-2163"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-16",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-641",
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
import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "noistestnet",
      "client_id": "07-tendermint-39",
      "connection_id": "connection-23"
    },
    "chain_2": {
      "chain_name": "stargazetestnet",
      "client_id": "07-tendermint-483",
      "connection_id": "connection-500"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-48",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-485",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-49",
          "port_id": "wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc"
        },
        "chain_2": {
          "channel_id": "channel-486",
          "port_id": "wasm.stars1h99p7u2tvz79jppjwdddmkplvcpnsh0pmatl7dqkmdhnkgx59y2q6s0x9s"
        },
        "ordering": "unordered",
        "version": "nois-v7",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  }
];
export default info;
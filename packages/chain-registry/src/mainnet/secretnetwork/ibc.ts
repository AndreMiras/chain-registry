import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "agoric",
      "client_id": "07-tendermint-17",
      "connection_id": "connection-17"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-111",
      "connection_id": "connection-80"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-51",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-102",
      "connection_id": "connection-69"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-47",
      "connection_id": "connection-28"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-43",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-21",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "andromeda",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-176",
      "connection_id": "connection-133"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-97",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-24",
      "connection_id": "connection-22"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-169",
      "connection_id": "connection-119"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-21",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-84",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "axelar",
      "client_id": "07-tendermint-40",
      "connection_id": "connection-22"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-44",
      "connection_id": "connection-26"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-12",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-20",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-69",
          "port_id": "transfer",
          "client_id": "07-tendermint-103",
          "connection_id": "connection-89"
        },
        "chain_2": {
          "channel_id": "channel-61",
          "port_id": "wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83",
          "client_id": "07-tendermint-120",
          "connection_id": "connection-93"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "celestia",
      "client_id": "07-tendermint-52",
      "connection_id": "connection-15"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-174",
      "connection_id": "connection-131"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-14",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-91",
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
      "chain_name": "chihuahua",
      "client_id": "07-tendermint-70",
      "connection_id": "connection-38"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-27",
      "connection_id": "connection-13"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-16",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-11",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "comdex",
      "client_id": "07-tendermint-142",
      "connection_id": "connection-74"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-125",
      "connection_id": "connection-95"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-65",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-63",
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
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "composable",
      "client_id": "07-tendermint-52",
      "connection_id": "connection-21"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-166",
      "connection_id": "connection-116"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-14",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-80",
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
          "channel_id": "channel-26",
          "port_id": "transfer",
          "client_id": "07-tendermint-52",
          "connection_id": "connection-21"
        },
        "chain_2": {
          "channel_id": "channel-83",
          "port_id": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
          "client_id": "07-tendermint-166",
          "connection_id": "connection-116"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "coreum",
      "client_id": "07-tendermint-40",
      "connection_id": "connection-27"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-186",
      "connection_id": "connection-138"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-25",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-101",
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
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-492",
      "connection_id": "connection-401"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-235",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "crescent",
      "client_id": "07-tendermint-18",
      "connection_id": "connection-13"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-53",
      "connection_id": "connection-31"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-24",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "crescent",
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "evmos",
      "client_id": "07-tendermint-50",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-24"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-15",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-18",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "gravitybridge",
      "client_id": "07-tendermint-140",
      "connection_id": "connection-139"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-40",
      "connection_id": "connection-23"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-79",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "injective",
      "client_id": "07-tendermint-97",
      "connection_id": "connection-83"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-22",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-88",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-23",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "jackal",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-3"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-124",
      "connection_id": "connection-94"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-62",
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
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "juno",
      "client_id": "07-tendermint-108",
      "connection_id": "connection-68"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-23",
      "connection_id": "connection-9"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-48",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-8",
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
          "channel_id": "channel-163",
          "port_id": "transfer",
          "client_id": "07-tendermint-108",
          "connection_id": "connection-68"
        },
        "chain_2": {
          "channel_id": "channel-45",
          "port_id": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
          "client_id": "07-tendermint-23",
          "connection_id": "connection-9"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-7"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-48",
      "connection_id": "connection-29"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-22",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis"
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-44",
          "port_id": "transfer",
          "client_id": "07-tendermint-12",
          "connection_id": "connection-7"
        },
        "chain_2": {
          "channel_id": "channel-46",
          "port_id": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
          "client_id": "07-tendermint-48",
          "connection_id": "connection-29"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "migaloo",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-9"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-116",
      "connection_id": "connection-87"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-57",
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
      "chain_name": "neutron",
      "client_id": "07-tendermint-75",
      "connection_id": "connection-54"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-19",
      "connection_id": "connection-139"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-57",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-104",
          "port_id": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4"
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
      "chain_name": "noble",
      "client_id": "07-tendermint-24",
      "connection_id": "connection-33"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-170",
      "connection_id": "connection-127"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-88",
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
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1588",
      "connection_id": "connection-1244"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-88",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis",
          "properties": "privacy"
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-476",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-44",
          "port_id": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis",
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-106",
      "connection_id": "connection-146"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-126",
      "connection_id": "connection-98"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-82",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-64",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "quicksilver",
      "client_id": "07-tendermint-28",
      "connection_id": "connection-14"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-138",
      "connection_id": "connection-99"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-52",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-65",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1"
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-14",
      "connection_id": "connection-3"
    },
    "chain_2": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-96",
      "connection_id": "connection-75"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-3",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-50",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-171",
      "connection_id": "connection-98"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-15",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-65",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-43",
      "connection_id": "connection-25"
    },
    "chain_2": {
      "chain_name": "stargaze",
      "client_id": "07-tendermint-177",
      "connection_id": "connection-110"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-19",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-48",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-75",
      "connection_id": "connection-40"
    },
    "chain_2": {
      "chain_name": "stride",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-25"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-37",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-40",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-192",
      "connection_id": "connection-185"
    },
    "chain_2": {
      "chain_name": "teritori",
      "client_id": "07-tendermint-99",
      "connection_id": "connection-122"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-111",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-63",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "chain_2": {
      "chain_name": "terra",
      "client_id": "07-tendermint-28",
      "connection_id": "connection-29"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-16",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-38",
      "connection_id": "connection-20"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-7"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-16",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-3",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  }
];
export default info;
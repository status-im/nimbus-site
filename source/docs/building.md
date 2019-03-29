---
id: building
title: Getting Started with Nimbus
---

This document will explain how to install, test, and run Nimbus on your local machine. To learn about what Nimbus is, see the [intro post](https://our.status.im/nimbus-for-newbies/).

## Installing prerequisites

_Right now, Nimbus is only available on non-Windows operating systems. We're working on Windows support. If you don't have a Linux or OS X machine, please consider using our [pre-configured Vagrant box](https://github.com/status-im/nim-vagrant)._

We use Makefiles to quickly and easily build our binaries. Before you begin, please make sure you have [RocksDB installed](https://github.com/status-im/nimbus#rocksdb). Then, run:

```bash
git clone https://github.com/status-im/nimbus
cd nimbus
make update deps # Downloads and builds submodules, dependencies, and even Nim itself
./env.sh bash # Optional, but useful. Sets the current shell's environment to use the version of Nim language the `make update deps` command just built
```

### Building and Running Nimbus

To run Nimbus in Ethereum 1.0 mode:

```bash
make nimbus
./build/nimbus
```

Nimbus will now run and attempt to synchronize with the Ethereum 1.0 blockchain. It can currently reach block 1.5 million.

### Building and Running the Ethereum 2.0 local beacon chain simulation

The beacon chain simulation runs several beacon nodes on the local machine, attaches several local validators to each, and builds a beacon chain between them. This is a precursor to our [testnet](https://our.status.im/the-nimbus-mvp-testnet-is-here/).

Enter the Ethereum 2.0 realm of Nimbus:

```bash
cd vendor/nim-beacon-chain
```

There, use this submodule's Make commands. To run the simulation:

```bash
make eth2_network_simulation
```

If you'd like to clean the previous run's data:

```bash
make clean_eth2_network_simulation_files eth2_network_simulation
```

If you'd like to see the nodes running on separated sub-terminals inside one big window, install [Multitail](https://www.vanheusden.com/multitail/), then:

```bash
USE_MULTITAIL="yes" make eth2_network_simulation
```

You'll get something like this (click for full size):

[![](https://i.imgur.com/Pc99VDO.png)](https://i.imgur.com/Pc99VDO.png)

To change the number of validators and nodes:

```bash
VALIDATORS=512 NODES=50 make eth2_network_simulation
```

Find out more about the simulation [here](https://our.status.im/nimbus-development-update-03/).

### Building and Running the Ethereum 2.0 local state transition simulation

The state transition simulation measures how fast it can process the tasks in the beacon chain's state transition.

```bash
cd research
nim c -d:release -r state_sim --help
```

Use the output of the help command to pass desired values to the sim - change number of validators, nodes, etc. to get different results.

### Nimbus Ethereum 2.0 Testnet

We have a publicly available testnet running between Nimbus nodes. Read all about it and learn how you can join it [here](https://our.status.im/the-nimbus-mvp-testnet-is-here/).

---

Congrats! You're now running Nimbus for both the Ethereum 1.0 platform, and the coming [Ethereum 2.0](https://our.status.im/tag/two-point-oh).
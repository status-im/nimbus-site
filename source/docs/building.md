---
id: building
title: Getting Started with Nimbus
---

This document will explain how to install, test, and run Nimbus on your local machine. To learn about what Nimbus is, see the [intro post](https://our.status.im/nimbus-for-newbies/).

### Building and Running Nimbus

To run Nimbus in Ethereum 1.0 mode:

```bash
git clone https://github.com/status-im/nimbus
cd nimbus
make update

# >>> WINDOWS ONLY <<<
make fetch-dlls # WINDOWS ONLY
# >>> WINDOWS ONLY <<<

make nimbus
./build/nimbus
```

Nimbus will now run and attempt to synchronize with the Ethereum 1.0 blockchain. It can currently reach block 1.5 million.

### Building and Running the Ethereum 2.0 local beacon chain simulation

The beacon chain simulation runs several beacon nodes on the local machine, attaches several local validators to each, and builds a beacon chain between them. This is a precursor to our [testnet](https://our.status.im/the-nimbus-mvp-testnet-is-here/).

Prerequisites: Golang 1.12+, because we need it to build the Go libp2p daemon for node communication. You also need `git-lfs` installed to run tests - on Windows that's a command documented below, on other operating systems it can be installed using your system's package manager (e.g. `sudo apt-get install git-lfs`).

Enter the Ethereum 2.0 realm of Nimbus:

```bash
git clone https://github.com/status-im/nim-beacon-chain
cd nim-beacon-chain

# >>> WINDOWS ONLY <<<
make fetch-dlls # WINDOWS ONLY
# >>> WINDOWS ONLY <<<

make
make test
```

To run the simulation:

```bash
make eth2_network_simulation
```

If you'd like to clean the previous run's data:

```bash
make clean  eth2_network_simulation
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

The state transition simulation quickly runs the Beacon chain state transition function in isolation and outputs JSON snapshots of the state. It runs without networking and blocks are processed without slot time delays.

```bash
# build and run the state simulator, then display its help ("-d:release" speeds it
# up substantially, allowing the simulation of longer runs in reasonable time)
make NIMFLAGS="-d:release" state_sim
build/state_sim --help
```

Use the output of the help command to pass desired values to the sim - change number of validators, nodes, etc. to get different results.

### Medalla Ethereum 2.0 Testnet

There is a publicly available [Ethereum 2.0](https://our.status.im/tag/two-point-oh) multi-client testnet running until at least October. Read all about it [here](https://blog.ethereum.org/2020/08/03/eth2-quick-update-no-14/), and learn how you can join it in [the Nimbus beacon chain book](https://status-im.github.io/nim-beacon-chain/medalla.html).

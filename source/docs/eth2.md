---
id: eth2
title: Connecting to the eth2 chain
---

Depending on your objective, there are various ways to run Nimbus in [Ethereum 2.0 mode](https://github.com/status-im/nimbus-eth2).

## Become an eth2 validator

We're writing a book that explains all the ways in which you can use Nimbus to either monitor the eth2 chain or become a fully-fledged validator.

It's hosted here: https://status-im.github.io/nimbus-eth2/

## Build and run the Ethereum 2.0 local beacon chain simulation

The beacon chain simulation runs several beacon nodes on the local machine, attaches several local validators to each, and builds a beacon chain between them. 

**Prerequisites:** At the moment, Nimbus has to be built from source, and has the following external dependencies -- developer tools (C compiler, Make, Bash, Git), [PCRE](https://www.pcre.org/); follow the instructions outlined [here](https://github.com/status-im/nim-beacon-chain#prerequisites-for-everyone) to install them.

Once you've installed the prerequisites, you're ready to enter the Ethereum 2.0 realm of Nimbus:

```bash
git clone https://github.com/status-im/nim-beacon-chain
cd nim-beacon-chain

make
make test
```

To run the simulation:

```bash
make eth2_network_simulation
```

If you'd like to clean the previous run's data:

```bash
make clean_eth2_network_simulation_all
```

To change the number of validators and nodes:

```bash
# Clear data files from your last run and start the simulation with a new genesis block:
make VALIDATORS=192 NODES=6 USER_NODES=1 eth2_network_simulation
```

If you’d like to see the nodes running on separated sub-terminals inside one big window, install [Multitail](https://www.vanheusden.com/multitail/index.php) (if you're on a Mac, follow the instructions [here](https://brewinstall.org/Install-multitail-on-Mac-with-Brew/)), then:


```
USE_MULTITAIL="yes" make eth2_network_simulation
```

You’ll get something like this (click for full size):

[![](https://i.imgur.com/Pc99VDO.png)](https://i.imgur.com/Pc99VDO.png)


You can find out more about the beacon node simulation [here](https://our.status.im/nimbus-development-update-03/#beaconsimulation).

## Build and run the Ethereum 2.0 local state transition simulation

This simulation is primarily designed for researchers, but we'll cover it briefly here in case you're curious :)

The [state transition](https://github.com/ethereum/annotated-spec/blob/master/phase0/beacon-chain.md#beacon-chain-state-transition-function) simulation quickly runs the beacon chain state transition function in isolation and outputs JSON snapshots of the state (directly to the `nim-beacon-chain` directory). It runs without networking and blocks are processed without slot time delays.

```bash
# build the state simulator, then display its help ("-d:release" speeds it
# up substantially, allowing the simulation of longer runs in reasonable time)
make NIMFLAGS="-d:release" state_sim
build/state_sim --help
```

Use the output of the `help` command to pass desired values to the simulator - experiment with changing the number of slots, validators, , etc. to get different results.

The most important options are:

- `slots` : the number of slots to run the simulation for (default 192)
- `validators`: the number of validators (default 6400)
- `attesterRatio`: the expected fraction of attesters that actually do their work for every slot (default 0.73)
- `json_interval`: how often JSON snapshots of the state are outputted (default every 32 slots -- or once per epoch)

For example, to run the state simulator for 384 slots, with 20,000 validators, and an average of 66% of attesters doing their work every slot, while outputting snapshots of the state twice per epoch, run:

```
build/state_sim --slots=384 --validators=20000 --attesterRatio=0.66 --json_interval=16
```

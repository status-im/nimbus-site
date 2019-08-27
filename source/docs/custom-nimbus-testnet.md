---
id: custom-nimbus-testnet
title: Creating your own Nimbus testnet
---

## Building your own Nimbus testnet

All beacon nodes joining your custom testnet MUST be compiled with the same beacon chain constants - i.e. if a node is compiled with 8 slots per epoch, one with 16 slots per epoch will not be compatible with it. With that in mind, let's do this step of building the basic beacon node binary from within `vendor/nim-beacon-chain`, and let's also build the tool that can generate validator keys.

> Note that you need Go 1.12+ installed to build the libp2p Go daemon!

If you haven't cloned the beacon chain implementation already, do it now:

```bash
git clone https://github.com/status-im/nim-beacon-chain
cd nim-beacon-chain
make update

# >>> WINDOWS ONLY <<<
make fetch-dlls # WINDOWS ONLY
# >>> WINDOWS ONLY <<<
```

Then let's build the binaries of the tools we'll need.

```bash
export NIMFLAGS="-d:release -d:SECONDS_PER_SLOT=6 -d:SHARD_COUNT=64 -d:SLOTS_PER_EPOCH=64" \
&& make beacon_node validator_keygen
```

This will place the `beacon_node` binary and the `validator_keygen` tool in `build/` in the current folder.

Let's generate the folders where the node will store its data and then add the validator keys in there. I picked 500 keys.

```bash
mkdir -p $HOME/testnets/custom-network/data
./build/validator_keygen --totalValidators=500 --outputDir="$HOME/testnets/custom-network"
```

This will have placed 500 private key files and 500 public key files into the specified output folder.

Next, let's have the node generate a testnet for us with all the bells and whistles we might need to have others connect to us.

```bash
export NETWORK_DIR=$HOME/testnets/custom-network && ./build/beacon_node \
--dataDir=$NETWORK_DIR/data \
createTestnet \
--networkId=666 \
--validatorsDir=$NETWORK_DIR \
--totalValidators=500 \
--outputGenesis=$NETWORK_DIR/genesis.json \
--outputNetwork=$NETWORK_DIR/custom-network.json \
--bootstrapAddress=$(curl -s ifconfig.me) \
--bootstrapPort=34000 \
--genesisOffset=600
```

- We set the home folder of the custom network, pass it to the required params and have it generate the genesis file and the metadata file for others to join us through. 
- The bootstrap address part is dynamically generated from the ifconfig.me service - you can manually input your public IP address here if you know it or if that service fails to detect it - test with `curl -s ifconfig.me` on the command line. 
- The port is optional but recommended so you don't get some cross-chain noise when accidentally connecting to other nodes on the default port.
- The `genesisOffset` flag sets the time of genesis to some time in the future - in this case 10 minutes. We do this to give everyone who intends to join ample chance to join on genesis time because if they don't and the chain expects validators to be there and perform their duties, they'll be seen as offline and penalized and eventually kicked off the beacon chain.

Running the above command will result in two new files being created. In my case `$HOME/testnets/custom-network/genesis.json` and `$HOME/testnets/custom-network/custom-network.json`.

Because these files that were generated are made for others joining you, we need to make a copy of the `custom-network` file so that we can launch our node, the bootstrap node.

```bash
cp $HOME/testnets/custom-network/custom-network.json $HOME/testnets/custom-network/custom-network_boot.json
```

Then open this new file and delete the `bootstrapNodes` object, all of it. If you don't, the node you run will try to connect to a bootstrap node that is effectively its-not-yet-running-self. Without the `bootstrapNodes` part, the node just _runs_ so others can connect _to_ it.

We are now ready to connect and to share these files with those who would connect to us.

The `genesis.json` file is the starting state, "block 0" of your testnet beacon chain. It contains the listed validators, initial shufflings, and everything the system needs in order to have the clients connecting to the network build on the same foundation. 

The `custom-network.json` file is the "metadata" file of your new network - it has identified your node, the one this file was generated with - as the bootstrap node and included its enode address under `bootstrapNodes`, along with the other required data and the root of the genesis. 

Let's run the original node now.

```bash
./build/beacon_node --network=$HOME/testnets/custom-network/custom-network_boot.json --stateSnapshot=$HOME/testnets/custom-network/genesis.json --tcpPort=34000 --udpPort=34000
```

You can host `custom-network.json` and `genesis.json` on a server somewhere or in a [Github Gist](https://gist.github.com) so anyone grabbing them will be able to join your network if they execute the command:

```bash
./build/beacon_node --network=$HOME/testnets/custom-network/custom-network.json --stateSnapshot=$HOME/testnets/custom-network/genesis2.json --tcpPort=34001 --udpPort=34001
```

Let's run another node on the same machine where the bootstrap node is running. This requires that we create a new data dir, otherwise it'll clash with the current node. Execute the following chain of commands:

```bash
export DATA_DIR=$HOME/testnets/custom-testnet/node-1 && mkdir -p $DATA_DIR/data && mkdir -p $DATA_DIR/validators && ./build/beacon_node \
--network=$HOME/testnets/custom-network/custom-network_boot.json \
--stateSnapshot=$HOME/testnets/custom-network/genesis.json \
--tcpPort=34000 \
--udpPort=34000 \
--dataDir:$DATA_DIR/data \
--nodename:node1
```

However, they MUST first build their beacon node with the same parameters you did in the beginning of this setup:

```bash
export NIMFLAGS="-d:release -d:SECONDS_PER_SLOT=6 -d:SHARD_COUNT=64 -d:SLOTS_PER_EPOCH=64" && make beacon_node
```

Congrats, you have a custom Nimbus testnet up and running! Host those startup files somewhere, distribute some validator keys, and others can join your testnet!

[![Screenshot-from-2019-03-29-21-25-15](https://our.status.im/content/images/2019/03/Screenshot-from-2019-03-29-21-25-15.png)](https://our.status.im/content/images/2019/03/Screenshot-from-2019-03-29-21-25-15.png)
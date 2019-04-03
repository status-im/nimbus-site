---
id: custom-nimbus-testnet
title: Creating your own Nimbus testnet
---

## Building your own Nimbus testnet

All beacon nodes joining your custom testnet MUST be compiled with the same beacon chain constants - i.e. if a node is compiled with 8 slots per epoch, one with 16 slots per epoch will not be compatible with it. With that in mind, let's do this step of building the basic beacon node binary from within `vendor/nim-beacon-chain`, and let's also build the tool that can generate validator keys.

If you haven't cloned Nimbus already, do it now:

```bash
git clone https://github.com/status-im/nimbus
cd nimbus
make update
cd vendor/nim-beacon-chain
```

Then let's build the binaries of the tools we'll need.

```bash
export NIMFLAGS="-d:release -d:SECONDS_PER_SLOT=30 -d:SHARD_COUNT=8 -d:SLOTS_PER_EPOCH=8" \
&& make beacon_node validator_keygen
```

This will place the `beacon_node` binary and the `validator_keygen` tool in `build` in the current folder, i.e. `vendor/nim-beacon-chain`.

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

We are now ready to connect and to share these files with those who would connect to us. Please note that in order to allow others to connect to you, you need to open the port you chose manually on your router and firewall for as long as Nimbus doesn't yet have UPnP implemented. If you're hosting your bootnode on something like DigitalOcean or AWS, there are firewall controls there that are quite intuitive. For your own local computer, please consult your router's manual on how to do that.

The `genesis.json` file is the starting state, "block 0" of your testnet beacon chain. It contains the listed validators, initial shufflings, and everything the system needs in order to have the clients connecting to the network build on the same foundation. The `custom-network.json` file is the "metadata" file of your new network - it has identified your node, the one this file was generated with - as the bootstrap node and included its enode address under `bootstrapNodes`, along with the other required data and the root of the genesis. You can host these two files on a server somewhere or in a [Github Gist](https://gist.github.com) anyone grabbing them will be able to join your network if they execute the command:

```bash
./build/beacon_node --network=$HOME/testnets/custom-network/custom-network.json --stateSnapshot=$HOME/testnets/custom-network/genesis.json --tcpPort=34001 --udpPort=34001
```

However, they MUST first build their beacon node with the same parameters you did in the beginning of this setup.

Congrats, you have a custom Nimbus testnet up and running!

[![Screenshot-from-2019-03-29-21-25-15](https://our.status.im/content/images/2019/03/Screenshot-from-2019-03-29-21-25-15.png)](https://our.status.im/content/images/2019/03/Screenshot-from-2019-03-29-21-25-15.png)
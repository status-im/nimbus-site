---
id: eth1
title: Execution layer (eth1)
---

While our core focus so far has been the consensus layer, we are now devoting significant resources to our execution layer client.

## Quickstart

To run Nimbus' [execution layer client](https://github.com/status-im/nimbus-eth1), first [install the prerequisites](https://github.com/status-im/nimbus-eth1#prerequisites).

Then run the following commands:

```bash
git clone https://github.com/status-im/nimbus-eth1
cd nimbus-eth1
make update

# >>> WINDOWS ONLY <<<
make fetch-dlls # WINDOWS ONLY
# >>> WINDOWS ONLY <<<

make nimbus
./build/nimbus
```

Nimbus will now run and attempt to synchronize with the Ethereum blockchain. 

For a more complete overview see the [repository README](https://github.com/status-im/nimbus-eth1).

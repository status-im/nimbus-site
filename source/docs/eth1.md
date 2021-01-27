---
id: eth1
title: Connecting to the eth1 chain
---

While our core focus so far has been Ethereum 2.0, going forward we will be devoting significantly more resources to our Ethereum 1.0 client. As it stands, however, this software is very much experimental.

## Quickstart

To run Nimbus in [Ethereum 1.0 mode](https://github.com/status-im/nimbus-eth1), first [install the prerequisites](https://github.com/status-im/nimbus-eth1#prerequisites).

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

>  **Note:** We currently do not guarantee that Nimbus will work on Windows.

Nimbus will now run and attempt to synchronize with the Ethereum 1.0 blockchain. 

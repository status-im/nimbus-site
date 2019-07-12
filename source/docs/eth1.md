---
id: eth1
title: Ethereum 1 Nimbus
---

## Installing prerequisites

If you are on Windows, instead of using the commands below you can also use our [pre-configured Vagrant box](https://github.com/status-im/nim-vagrant) if you prefer to run things in a Linux environment.

We use Makefiles to quickly and easily build our binaries. Before you begin, please make sure you have [RocksDB installed](https://github.com/status-im/nimbus#rocksdb). On Windows, you can skip this step and instead rely on the "WINDOWS ONLY" part of the process below:

```bash
git clone https://github.com/status-im/nimbus
cd nimbus
make update # Downloads and builds submodules, dependencies, and even Nim itself

# >>> WINDOWS ONLY <<<
make fetch-dlls # WINDOWS ONLY
# >>> WINDOWS ONLY <<<

./env.sh bash # Optional, but useful. Sets the current shell's environment to use the version of Nim language the `make update deps` command just built
```

### Building and Running Nimbus

To run Nimbus in Ethereum 1.0 mode:

```bash
make nimbus
./build/nimbus
```

Nimbus will now run and attempt to synchronize with the Ethereum 1.0 blockchain. It can currently reach block 1.5 million.
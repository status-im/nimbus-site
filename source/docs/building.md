---
id: building
title: Getting Started with Nimbus
---

This document will explain how to install, test, and run Nimbus on your local machine. For a full guide, see the [Nimbus for Newbies](https://our.status.im/nimbus-for-newbies/) post.

## Getting Started

- [install Nim](https://bitfalls.com/nim1)
- be on a command-line friendly system (i.e. access to Terminal / Console / Cmder / [Git Bash](https://git-scm.com) / Powershell)

Alternatively, [download our pre-configured Vagrant box](https://our.status.im/setting-up-a-local-vagrant-environment-for-nim-development/).

_Note: the Nimbus build system uses Makefiles to make the process identical across platforms, easy to update, and compatible with any OS. We don't use Nim's package manager Nimble because it's fundamentally broken._

### Installing

Clone Nimbus.

```bash
git clone git@github.com:status-im/nimbus
cd nimbus
```
### Dependencies

To run Nimbus, we'll need the RocksDB database and a newer version of Nim. On OS X, execute:

```bash
brew install rocksdb
curl https://nim-lang.org/choosenim/init.sh -sSf | sh
```

On Linux, this should do it:

```bash
sudo apt-get install librocksdb-dev rocksdb # or your own Linux distribution's equivalent
curl https://nim-lang.org/choosenim/init.sh -sSf | sh
```

On Windows, please first make sure you have `make` installed - either in the form of `MinGW32make.exe` via [MinGW website](http://www.mingw.org) or regular old make installed through Git Bash or a package manager like Chocolatey:

```bash
choco install make
```

_Note - Windows requires you to add programs you want to be able to execute from anywhere on your machine to your PATH environment variable. This is done by simply opening the Start Menu, searching for "Env", selecting "Edit the system environment variables", clicking on Environment Variables in the popup, and then editing the PATH variable in the list by adding a new entry that corresponds to the folder into which you installed your version of `make` (Choco takes care of this for you, only applies if you installed manually). [This is what mine looks like](https://imgur.com/a/yQIi6Qa)._

Next, run:

```
make fetch-dlls
```

or 

```
mingw32make.exe fetch-dlls
```

This downloads the rocksdb and sqlitedb DLL files into `nimbus/build` so that the built program can read them.

### Building, Testing, Running

To build Nimbus:

On OS X / Linux:

```bash
make
```

On Windows:

```bash
make
```

or 

```bash
mingw32make.exe
```

The Nimbus client will now be in `build/nimbus` on any OS and can be run with the same command:

```bash
./build/nimbus
```

It should synchronize up to block 49439 and then crash, as mentioned above. Look at flags and options with `build/nimbus --help`.

To test, run:

```bash
make test # (or mingw32make.exe test on Win if you use mingw32)
```

To update the source files for a rebuild:

```bash
make update
```

To clean the slate and start with a fresh build:

```bash
make clean
```

### Ethereum 2.0

To run and test the Ethereum 2.0 version of Nimbus:

```bash
git clone git@github.com:status-im/nim-beacon-chain
cd nim-beacon-chain
```

This one still uses Nimble, so:

```bash
nimble install
```

It is possible that Nimble will get stuck without output, or that it will ask you strange questions like overwriting a dependency that's already installed in the very same project you're installing it to. In any case, confirm if possible, or restart the installation process by canceling (CTRL+C) and re-running the command.

Once done, run:

```bash
nimble test
```

This executes the test written for the Ethereum 2.0 client version of Nimbus. To run the simulation which spins up a few beacon nodes and builds a beacon chain locally (local testnet), run:

```bash
sh tests/simulation/start.sh
```

Congrats! You're now running Nimbus for both the Ethereum 1.0 platform, and the coming [Ethereum 2.0](https://our.status.im/tag/two-point-oh).
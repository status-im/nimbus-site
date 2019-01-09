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

_In the content below, `make` will refer to `make` or `mingw32.exe`, depending on which you're using. Make the change to your commands accordingly._

### Building, Testing, Running

To build Nimbus:

On OS X / Linux:

```bash
make
```

The Nimbus client will now be in `build/nimbus` on any OS and can be run with the same command:

```bash
./build/nimbus
```

It should synchronize up to block 49439 and then crash, as mentioned above. Look at flags and options with `build/nimbus --help`.

To test, run:

```bash
make test
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

To run and test the Ethereum 2.0 version of Nimbus (the network simulation):

```bash
make eth2_network_simulation
```

You should now see attestations and blocks being produced and confirmed and a bunch of other details from the nodes as they do their thing.

![Beacon nodes communicating](/img/beacon.jpg)

---

Congrats! You're now running Nimbus for both the Ethereum 1.0 platform, and the coming [Ethereum 2.0](https://our.status.im/tag/two-point-oh).
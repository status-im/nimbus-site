---
id: building
title: Getting Started with Nimbus
---

This document will explain how to install, test, and run Nimbus on your local machine. For a full guide, see the [Nimbus for Newbies](https://our.status.im/nimbus-for-newbies/) post.

## Getting Started

- [install Nim](https://bitfalls.com/nim1)
- be on a command-line friendly system (i.e. access to Terminal / Console / Git Bash / Powershell)

## Prerequisites

- install [RocksDB](https://rocksdb.org/) via official instructions or by running the below commands:

    - on OS X:
        ```bash
        brew install rocksdb
        curl https://nim-lang.org/choosenim/init.sh -sSf | sh 
        ```
    - on Linux
        ```bash
        sudo apt-get install rocksdb # or your own Linux distribution's equivalent
        curl https://nim-lang.org/choosenim/init.sh -sSf | sh     
        ```
        
## Install Nimbus

```bash
git clone https://github.com/status-im/nimbus
cd nimbus
nimble install
nimble test
```

Run Nimbus with `nimbus` or look at flags and options with `nimbus --help`.
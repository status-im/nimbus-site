---
title: Description and architecture
sidebar_position: 2
---

Nimbus is a suite of Ethereum client implementations designed to be as lightweight, easy to use, and adaptive as possible. The consensus client is the first of three Nimbus implementations to reach production. Meanwhile, an execution client and a true Ethereum light client are still in development.

From their programming language upwards, Nimbus clients are optimised to conserve system resources, making them suitable to run on embedded systems and lower-specification devices. Nim, the language in which Nimbus clients are written, was chosen for the following reasons:

- It is an efficient, general-purpose systems programming language.

- It features Python-like syntax that compiles to C, enabling us to take advantage of the C language's mature tooling for code compilation and static code analysis. 

- It has a high degree of reasonability for researchers. 

- It is performant in production.

- The above qualities make it easy for us to bring research into production, resulting in more adaptive, dynamic clients. 

Nimbus is fortunate to have multiple Nim contributors working on its client implementations as core team members. Additionally, the wider Nim community has expressed support for the Nimbus project.

<br/>

### Nimbus consensus client

The Nimbus consensus client offers significant advantages for all levels of users from hobbyists to institutional operators. The advantages include:

- **Lightweight:** Nimbus consensus client strives to be as lightweight as possible in terms of resource overhead, leaving more headroom during times of heightened network usage. Operators can also run Nimbus together with other workloads on their servers to reduce overall costs.

- **Flexible:** Nimbus consensus client is the only Ethereum client that offers the flexibility of running beacon node and validator clients independently, as operators often require. Additionally, it offers a simpler beacon node mode in which the beacon node assumes validator responsibilities, mitigating the need for operators to manage the two separately.

- **Convenient:** Nimbus will be among the first client teams to offer both a consensus and execution client, simplifying initial installation and making it easy for operators to receive tailored support.

<br/>

![architect](/subpages/architect.png)

<br/>

### Nimbus execution client

Following Ethereum's switch to proof-of-stake in 2022, Ethereum validators must operate clients on both the consensus and execution layers. Yet as of today, no client team offers both an execution and consensus layer client.

Although the Nimbus execution client is still in development, when in production, pairing the Eth1 and Eth2 Nimbus clients will make for a user-friendly and convenient option for all levels of Ethereum node operator, in terms of both installation and subsequent support.

Like the Nimbus consensus client, the execution client is written in Nim and designed to be as lightweight as possible, preserving valuable system resources and running in environments other clients cannot. 

<br/>

### Nimbus Portal Client

An absence of true light clients presents a major issue in web3 because it contributes toward various centralising tendencies on Ethereum. When users cannot validate on-chain data themselves (due to the technical or resource overheads of running their own validating node) they fall back on RPC nodes operated by centralised entities. 

While convenient, this approach requires users to trust the data returned and represents a pale imitation of the true revolutionary promise of decentralised blockchain technology.

Nimbus Porta Client, our light client implementation known as “Fluffy”, is among a few promising efforts to develop an Ethereum light client. Its development is part of a cross-team Ethereum Foundation initiative called Portal Network that seeks to realise the light client vision. 

Alongside Nimbus Portal, Nimbus has developed a Light Web Proxy that can run in the background of applications, providing on-chain data directly to wallet apps and Ethereum-native operating systems, among other use cases. 

Ultimately, light clients will provide greater security to users, reveal new blockchain use cases, and enable the Ethereum ecosystem to reduce its dependency on centralised entities that represent single points of failure or capture.

[See the docs](https://github.com/status-im/nimbus-eth2)

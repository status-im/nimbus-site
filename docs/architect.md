---
title: Description and architecture
sidebar_position: 2
---

Nimbus is a suite of Ethereum client implementations designed to be as lightweight, easy to use and as adaptive as possible. The consensus client is the first of three Nimbus implementations to reach production. Meanwhile, an execution client and a true Ethereum light client are still in development.

From their programming language upward, Nimbus clients are optimized to conserve system resources, making them suitable to run on embedded systems and lower-specification devices. Nim, the language in which Nimbus clients are written, was chosen for the following reasons:

- It is an efficient, general-purpose systems programming language.

- It features Python-like syntax that compiles to C, enabling us to take advantage of the C language's mature tooling for code compilation and static code analysis.

- It has a high degree of reasonability for researchers.

- It is performant in production.

- The above qualities make it easy for us to bring research into production, resulting in more adaptive, dynamic clients.

Nimbus is fortunate to have multiple Nim contributors working on its client implementations as core team members. Additionally, the wider Nim community has expressed support for the Nimbus project.

<br/>

### Nimbus consensus client

Since the Nimbus consensus client's initial release in 2020, its representation in the Ethereum network has swung between 3% and 15%. We attribute this variance primarily to Nimbus' relative adoption among solo stakers and those providing services to the Rocket Pool network.

Larger node operators within the Lido network and those affiliated with centralized exchanges or other staking service providers—for which node count rises and falls with retail user interest—tend to favor alternate clients and need a strong reason to switch clients in the absence of risk.

The variation in Nimbus' representation arises from the flows of capital staked via different services. As more funds flow into centralized offerings using non-Nimbus clients, Nimbus' representation decreases. Conversely, the number of blocks produced by Nimbus clients increases when more ETH is staked via Rocketpool or by solo stakers.

The Nimbus consensus client offers significant advantages for all levels of user—from hobbyists to institutional operators—including:

- **Lightweight:** Nimbus consensus client strives to be as lightweight as possible in terms of resource overheads, leaving more headroom during times of heightened network usage. Operators also can run Nimbus together with other workloads on their server to reduce overall costs.

- **Flexible:** Nimbus consensus client is the only Ethereum client that offers the flexibility of running beacon node and validator clients independently, as operators often require. Additionally, it offers a simpler beacon node mode in which the beacon node assumes validator responsibilities, mitigating the need for operators to manage the two separately.

- **Convenient:** Nimbus will be among the first client teams to offer both a consensus and execution client, simplifying initial installation and making it easy for operators to receive tailored support.

<br/>

### Nimbus execution client

Following Ethereum's switch to proof-of-stake in 2022—aka, "The Merge"—Ethereum validators must operate clients on both the consensus and execution layers. Yet, today, no client team offers both an execution and consensus layer client.

<br/>

![architect](/subpages/architect.png)

<br/>

Although the Nimbus execution client is still in development, when in production, pairing the Eth1 and Eth2 Nimbus clients will make for a user-friendly and convenient option for all levels of Ethereum node operator in terms of both installation and subsequent support.

Like the Nimbus consensus client, the execution client is written in Nim and designed to be as lightweight as possible, preserving valuable system resources and running in environments other clients cannot.

<br/>

### Nimbus Portal

An absence of true light clients presents a major issue in today's web3 sector and contributes toward various centralizing tendencies on Ethereum. When users cannot validate on-chain data themselves—due to the technical or resource overheads of running their own validating node—they fall back on RPC nodes operated by centralized entities.

While convenient, this approach requires users to trust the data returned and represents a pale imitation of the true revolutionary promise of blockchain technology.

Nimbus Portal— our light client implementation—is among a few promising efforts to develop an Ethereum light client. Its development is part of a cross-team Ethereum Foundation initiative called Portal Network that seeks to realize the light client vision.

Alongside Nimbus Portal, Nimbus has developed a light web proxy that can run in the background of applications, providing on-chain data directly to wallet apps and Ethereum-native operating systems, among other use cases.

Ultimately, light clients will provide greater security to users, reveal new blockchain use cases and enable the Ethereum ecosystem to reduce its dependency on centralized entities that represent single points of failure or capture.

[See the docs](https://github.com/status-im/nimbus-eth2)

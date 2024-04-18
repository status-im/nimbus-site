---
title: Nimbus clients 
sidebar_position: 2
sidebar_label: Nimbus clients
hide_table_of_contents: true
---

Nimbus is a suite of Ethereum client implementations designed to be as lightweight, easy to use, and adaptive as possible. The consensus client is the first of three Nimbus implementations to reach production. Meanwhile, an execution client and a true Ethereum light client are still in development.
From their programming language upwards, Nimbus clients are optimised to conserve system resources, making them suitable to run on embedded systems and lower-specification devices. Nim, the language in which Nimbus clients are written, was chosen for the following reasons:

- It is an efficient, general-purpose systems programming language.
- It features Python-like syntax that compiles to C, enabling us to take advantage of the C language's mature tooling for code compilation and static code analysis.
- It has a high degree of reasonability for researchers.
- It is performant in production.
The above qualities make it easy for us to bring research into production, resulting in more adaptive, dynamic clients.

Nimbus is fortunate to have multiple Nim contributors working on its client implementations as core team members. Additionally, the wider Nim community has expressed support for the Nimbus project.

## Consensus client

The Nimbus consensus client offers significant advantages for all levels of users from hobbyists to institutional operators. The advantages include:

- Light and high performing: Nimbus consensus client strives to be as lightweight and high performing as possible in terms of resource overhead, leaving more headroom during times of heightened network usage. Operators can also run Nimbus together with other workloads on their servers to reduce overall costs.

- Flexible: Nimbus consensus client is the only Ethereum client that offers the flexibility of running Beacon Node and validator clients independently, as operators often require. Additionally, it offers a simpler Beacon Node mode in which the Beacon Node assumes validator responsibilities, mitigating the need for operators to manage the two separately.

- Convenient: Nimbus will be among the first client teams to offer both a consensus and execution client, simplifying initial installation and making it easy for operators to receive tailored support.

View the [Github repository](https://github.com/status-im/nimbus-eth1/tree/master/nimbus) or the [setup guide.](https://nimbus.guide/quick-start.html)

## Verified web3 proxy

Nimbus is working with ethOS on a native and embedded proof of concept to provide additional protections with the verified web3 proxy. The Ethereum JSON-RPC proxy uses the beacon chain light client sync protocol to verify the data supplied by any Ethereum node in order to deliver a new type of ultra light Ethereum client. It enables trust in data from potentially untrustworthy sources by having the proxy perform real-time verification.

It simply requires the user to set up a light web3 proxy on their phone and scan the proxy, which fetches the state root from the LC network. This allows the proxy to request the balance and proof from any provider or untrusted node, checking this against the state root and verifying the balance.

View the [Github repository.](https://github.com/status-im/nimbus-eth1/tree/master/nimbus_verified_proxy)

## Portal client

The absence of true light clients presents a major issue in web3 because it contributes to various centralising tendencies on Ethereum. When users cannot validate on-chain data themselves (due to the technical or resource overheads of running their own validating node) they fall back on RPC nodes operated by centralised entities. 

While convenient, this approach requires users to trust the data returned and represents a pale imitation of the true revolutionary promise of decentralised blockchain technology.

Nimbus portal client, our light client implementation known as “Fluffy”, is among a few promising efforts to develop an Ethereum light client. Its development is part of a cross-team Ethereum Foundation initiative called Portal Network that seeks to realise the light client vision. 

Alongside the portal client, Nimbus has developed a light, verified web3 proxy that can run in the background of applications, providing on-chain data directly to wallet apps and Ethereum-native operating systems, among other use cases. 

Ultimately, light clients will provide greater security to users, reveal new blockchain use cases, and enable the Ethereum ecosystem to reduce its dependency on centralised entities that represent single points of failure or capture.


View the [Github repository](https://github.com/status-im/nimbus-eth1/tree/master/fluffy) or [read more.]( https://fluffy.guide/quick-start.html)

## Execution client
Following Ethereum's switch to proof-of-stake in 2022, Ethereum validators must operate clients on both the consensus and execution layers. Yet, as of today, no client team offers both an execution and consensus layer client.

Although the Nimbus execution client is still in development when in production, pairing the execution layer and consensus layer clients will make for a user-friendly and convenient option for all Ethereum node operator levels in terms of installation and subsequent support.

Like the Nimbus consensus client, the execution client is written in Nim and designed to be as lightweight as possible, preserving valuable system resources.

View the [Github repository](https://github.com/status-im/nimbus-eth1)

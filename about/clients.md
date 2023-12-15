---
title: Nimbus Clients 
sidebar_position: 1.1
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

- Flexible: Nimbus consensus client is the only Ethereum client that offers the flexibility of running beacon node and validator clients independently, as operators often require. Additionally, it offers a simpler beacon node mode in which the beacon node assumes validator responsibilities, mitigating the need for operators to manage the two separately.

- Convenient: Nimbus will be among the first client teams to offer both a consensus and execution client, simplifying initial installation and making it easy for operators to receive tailored support.

View the Github repository.

## Verified web3 proxy

Nimbus is working with ethOS on a native and embedded proof of concept to provide additional protections with the Verified Web3 Proxy. The Ethereum JSON-RPC proxy uses the beacon chain light client sync protocol to verify the data supplied by any Ethereum node in order to deliver a new type of ultra light Ethereum client. It enables trust in data from potentially untrustworthy sources by having the proxy perform real-time verification.

It simply requires user to set up a light web3 proxy on their phone and scan the proxy which fetches the state root from the LC network. This allows the proxy to request the balance and proof from any provider or untrusted node, checking this against the state root and verifies the balance.

View the Github repository.

## Portal client

Following Ethereum's switch to proof-of-stake in 2022, Ethereum validators must operate clients on both the consensus and execution layers. Yet as of today, no client team offers both an execution and consensus layer client.
Although the Nimbus execution client is still in development, when in production, pairing the Eth1 and Eth2 Nimbus clients will make for a user-friendly and convenient option for all levels of Ethereum node operator, in terms of both installation and subsequent support.

Like the Nimbus consensus client, the execution client is written in Nim and designed to be as lightweight and high performing as possible, preserving valuable system resources and running in environments other clients cannot.

View the Github repository.

## Execution client
Following Ethereum's switch to proof-of-stake in 2022, Ethereum validators must operate clients on both the consensus and execution layers. Yet as of today, no client team offers both an execution and consensus layer client.

Although the Nimbus execution client is still in development, when in production, pairing the execution layer and consensus layer clients will make for a user-friendly and convenient option for all levels of Ethereum node operator, in terms of both installation and subsequent support.

Like the Nimbus consensus client, the execution client is written in Nim and designed to be as lightweight as possible, preserving valuable system resources.

View the [Github repository](https://github.com/status-im/nimbus-eth1).
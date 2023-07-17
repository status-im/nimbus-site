---
id: milestones
title: Milestones
---

Timelines are approximate and affected by research, implementation considerations, and revisions made while the team produces a detailed implementation timeline.


## Formation of the Team, and Detailed Project Implementation Timeline


### January - February 2018


### Completed:

1.  Form the initial team
1.  Define the project's scope, architecture, and implementation timelines

### Goals:


1.  Hire core contributors:
    1.  Five (5) full-time core contributors
    1.  Up to five (5) part-time core contributors
    1.  One (1) Technical Program Manager
    1.  One (1) Technical Writer
    1.  Up to ten (10) full-time core contributors by 2019
1.  Create a detailed timeline for implementing the project as a deliverable


## Compatibility with Ethereum 1.0


### January - November 2018

As an initial goal, we will focus on implementing all components required for interoperability with the Ethereum ecosystem. We will publish these components as independently reusable modules and libraries. 

However, before starting the implementation in Nim, we will develop an understanding of the existing implementations of Ethereum: [Go Ethereum](https://github.com/ethereum/go-ethereum/), [Pyethereum](https://github.com/ethereum/pyethereum), [Py-EVM](https://github.com/ethereum/py-evm), and [Parity](https://github.com/paritytech/parity).

The code will consist of independently reusable libraries that have the same permissive license as that of Nimbus itself:



1.  [RLP encoding and decoding](https://github.com/status-im/nim-rlp)
1.  [Handling of the state database and users' keyfiles](https://github.com/status-im/nim-eth-keyfile/blob/master/README.md)
1.  Connecting to the Ethereum network
1.  Ethereum Patricia Trees
1.  [RLPx](https://github.com/ethereum/devp2p/blob/master/rlpx.md#introduction) sub-protocols
1.  Ethereum [Ethash](https://github.com/ethereum/wiki/wiki/Ethash) function
1.  Implementation of EVM


### Goals:

1.  Nimbus is able to
    1.  Sync with the latest blockchain, from scratch
    1.  Accurately execute the entire transaction history
1.  The team is familiar with all codebases used to implement Ethereum.
1.  The team understands the main themes from [ethresear.ch](https://ethresear.ch/) and actively participates in EIPs.


## Sharding Phase 1


### July - November 2018

While implementing compatibility with Ethereum 1.0, we will gain early experience with the complete setup of sharding. As a result:


1.  The client will implement the core features necessary for sharding Phase 1.
1.  The team will actively participate in sharding-related EIPs.


### Goal:

The architecture of Nimbus supports sharding nodes.


## Auditing of Beta and Security


### November 2018 - March 2019

An independent security partner will continuously perform a security audit on the Nimbus codebase. We will also adopt frequent reviews of code, testing with automated fuzzing frameworks, and other practices that enhance security. In addition, we will develop a Nim-optimized fuzzing framework and will release it for use by the community at large.

### Goal:

Deliver a security-audited, production-ready client.

## Implementation of Whisper and PSS

### July - November 2018

We will set and advertise the bounties as soon as the P2P layer gets implemented. The core team will start working on this in July, unless already completed.

### Goals:

1.  Make Nimbus the leading platform for conducting research into the scalability aspects of Whisper and PSS. We consider this a key requirement for implementing a fully decentralised Status messaging platform within the Ethereum network.
1.  Deliver easy-to-use APIs for conducting large-scale and small-scale experiments within the network.

## Support for LES

### July - November 2018

We will optimize the architecture of Nimbus for implementing the [LES protocol](https://github.com/ethereum/wiki/wiki/Light-client-protocol). We will also optimize all internal state-handling operations such that they work efficiently and asynchronously. This will enable on-demand fetching of data from the network. This will also ensure that Nimbus runs with a high degree of concurrency and that the client UI is responsive.

### Goals:

1.  Enable a Light Mode switch in Nimbus.
1.  Successfully operate Nimbus in a mobile environment, without relying on a proxy service.

## Sharding Phase 2

### November 2018 - July 2019

We will focus on achieving compatibility with all other clients. In addition, we will implement an [eWASM](https://github.com/ewasm/design/blob/master/README.md) runtime and will add Nim as one of the languages that can target the new VM.

### Goals:

Implement the following in Nim:

1.  CLI tools and APIs for running Phase 2 nodes and for interacting with the Validator Manager Contract (VMC)
1.  The development tools that will target the eWASM runtime environment

## Casper Implementation

### December 2018 - February 2019

The team will closely follow the development of [Casper](https://blockgeeks.com/guides/ethereum-casper/) and will try to achieve and maintain compatibility with the existing Casper deployments.

## Implementation of Swarm

### January - July 2019 

We will set and advertise the bounties as soon as the P2P layer gets implemented. The core team will start working on this in January, unless already completed.

### Goals:

Implement the following:

1.  Ability to embed Nimbus into applications that deliver the complete Web 3.0 experience
1.  Support for the [Ethereum Name Service](https://ens.domains/)
1.  Support for a virtual file-system interface for accessing web content published on Swarm
1.  Reusable APIs for publishing and obtaining content from Swarm

## Sharding Phase 3

### March - August 2019

We will leverage our LES-optimized architecture to deliver a fully stateless client optimized for mobile devices.

### Goals:

Implement support for the following:

1.  Always-on operations on mobile devices, without disrupting the battery life or inducing significant bandwidth charges
1.  Running stateless executor nodes in deployments of headless servers

## Ongoing Improvements in Sharding

### August - December 2019

### Goals:

1.  Become one of the leading production-ready sharding implementations in the Ethereum ecosystem.
1.  Take active part in the effort to specify the new programming models required for cross-shard interactions.
1.  Provide an ongoing research into the applicability and performance characteristics of all super-quadratic sharding designs in a mobile environment.
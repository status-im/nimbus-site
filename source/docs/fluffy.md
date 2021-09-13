---
id: fluffy
title: Fluffy: an ultra light client for Ethereum
---

Nimbus has joined the Ethereum Foundation’s Portal Network team as one of the launch clients for the portal network.

In a sentence, [the Portal Network](https://github.com/ethereum/stateless-ethereum-specs/blob/master/portal-network.md#network-functionality) is an in-progress cross-team effort to re-imagine the ethereum light client, and develop a practical and functional light client experience.
=======
Nimbus has joined the Ethereum Foundation’s Portal Network team as one of the launch clients for the Portal Network.

In a sentence, [the Portal Network](https://github.com/ethereum/stateless-ethereum-specs/blob/master/portal-network.md#network-functionality) is an in-progress cross-team effort to re-imagine the Ethereum light client, and develop a practical and functional light client experience.

In particular, our aim is to work together with the EF to develop a new set of Ethereum protocols alongside the existing Eth protocol that will specifically serve this new way of accessing Ethereum data.

The overarching goal is to provide a mode of operation for Ethereum that serves common usage patterns, as opposed to keeping track of the full state at all times, as current clients do.

What we are talking about building here is the perfect client for a wallet. An ultra-light client that contributes to the network and does not require syncing (i.e. is immediately usable from a fresh install or after being offline).

As such, one of the end goals for us is to embed this sort of client directly inside the Status app.

This has the potential to both improve the security and privacy of our users (we will no longer have any reliance on Infura), as well as improve Ethereum’s resilience by allowing each user to contribute back to the health of the network.

## Resources

- [Our introductory post](https://our.status.im/nimbus-fluffly/)
- The Portal Wire protocol is added to the nim-eth repository, as Node Discovery v5.1 sub-protocol: https://github.com/status-im/nim-eth
- Specifications: https://github.com/ethereum/stateless-ethereum-specs/
- Website: https://www.ethportal.net/
- Some quick notes regarding first Portal Wire interop tests with ddht and trin- https://gist.github.com/kdeme/36795f5deae7d02ce1785e9c7d501e53
- Fluffy, our Portal Network client can be found in our nimbus-eth1 repository: https://github.com/status-im/nimbus-eth1/tree/master/fluffy
- Portal Network specifications: https://github.com/ethereum/stateless-ethereum-specs/blob/master/portal-network.md
- Portal Network website: https://www.ethportal.net/
- [The winding road to functional light clients](https://snakecharmers.ethereum.org/the-winding-road-to-functional-light-clients/) blog post series of Piper Merriam
- [This video talk](https://www.youtube.com/watch?v=MZxqRs_tLNs) about the subject.

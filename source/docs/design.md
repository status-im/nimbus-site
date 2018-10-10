---
id: design
title: Extensible, Configurable, and Modular Design
---

The application architecture should have modular abstractions for the following:

1.  Networking layer
1.  Sub-protocols
1.  Consensus
1.  Privacy
1.  Database
1.  Virtual Machine

In addition, the implementation must pass the [common tests for all Ethereum implementations](https://github.com/ethereum/tests).

## Commitment to Ethereum Improvement Proposals (EIP)

Nimbus is committed to open standards and to maintaining consensus with other Ethereum-compliant implementations. The development of Nimbus and the changes in its protocols will follow [the EIP process](https://github.com/ethereum/EIPs/).

## User Experience

Access to shards and mainchain state should be fast and responsive, the application binary should be lightweight in terms of the resources used, and the client should be dependable and robust against crashes.

## Licensing: MIT, Apache v2.0

We propose that Nimbus be licensed under Apache 2.0 and MIT. A permissive licensing structure with patent protection would 

1.  Ensure the compatibility with GPL 2.0 and LGPL 2.0
1.  Extend the reach of the Ethereum platform
1.  Foster the highest degree of adoption by governments and enterprise

One unsolved hurdle faced by Status is the [LGPLv3](https://opensource.org/licenses/LGPL-3.0) license, whose requirement for runtime linking is incompatible with major mobile app distribution channels, such as the App Store of Apple Inc.

Numerous requests for a static-linking exception have gone unanswered. This has blocked the deployment of any legally sound, full Ethereum client on popular channels for distribution of mobile devices. LGPL also prevents the adoption of Ethereum on closed hardware platforms, such as XBox. Still, we remain optimistic this issue will be rectified.

## Biweekly Development Reports, Technical Writing, and Promotion

In addition to the implementation, Nimbus will have a biweekly process for reporting development-related updates. A technical writer will document implementation efforts and translate ongoing research discussions into articles easily understood by the community.

Within the community at large, we will promote Ethereum as the leader of scalable public blockchains.

## Bounty-Based Development

To entice the community to accelerate the development, we will attach bounties to and **[publish](https://openbounty.status.im/app#/)** the tasks that can be self-contained and defined clearly.

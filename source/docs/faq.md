---
id: faq
title: Frequently Asked Questions
---

The following questions have been asked more than once by people who are familiar with and new to Ethereum clients:

### Q: When do you expect Nimbus to be production-ready?

Soon. We've got some network simulations and a [public testnet](https://our.status.im/the-nimbus-mvp-testnet-is-here/) already running for [Ethereum 2.0](https://out.status.im/tag/two-point-oh), and we're syncing up to block 1.5 million on Ethereum 1.0. To stay in the loop, please follow our development updates on [our blog](https://our.status.im/tag/nimbus).

### Q: How is a super-light node different from just calling Infura through Web3js?

A Web3js or any similar JavaScript package for communicating with the blockchain is effectively a more advanced XMLHttpRequest / Fetch wrapper. This means that these packages retrieve information from another node and trust it implicitly. When they ask "has this transaction been confirmed?", they get a response that's either a "yes" or "that transaction is unknown".

With light nodes, the packages ask to "provide the data to check if this transaction has been confirmed" and then they carry out the checks on their own. This is a trust-minimized setup combining the best of both worlds - it requires very little storage and processing power, while allowing for cryptographic verification of the full node's claims.

### Q: What's the plan for mobile? 

While true that Nimbus only compiles to C, C++ and JavaScript and iOS and Android don't support C natively (and we definitely don't want a JS version of Nimbus running on a mobile device), native compiles with Nim work for both Android and iOS, just like geth written in go works. It's all NDK/C API. We'll soon have published specific instructions on how to compile it for all manner of devices, but you can already give it a go by following the [build instructions](/docs/building.html). Nimbus already runs just fine on OS X and any flavor of Linux, including a [NanoPC-T4 ARM](https://twitter.com/bitfalls/status/1111329152928485377) computer.

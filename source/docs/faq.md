---
id: faq
title: Frequently Asked Questions
---

In talking to people both familiar and complete strangers to Ethereum clients, these questions were asked more than once.


### Q: When do you expect to have it production-ready?

Soon. We've got some network simulations already running for [Ethereum 2.0](https://out.status.im/tag/two-point-oh), and we're syncing up to block 50000 on Ethereum 1.0. To stay in the loop, please follow our development updates on [our blog](https://our.status.im/tag/nimbus).

### Q: How is a super-light node different from just calling Infura through Web3js?

A Web3js or any similar JavaScript package for communicating with the blockchain is basically a more advanced XMLHttpRequest / Fetch wrapper. What we mean by this is that these packages retrieve information from another node and trust it implicitly. They ask "has this transaction been confirmed?" and get a response that's either "yes" or "that transaction is unknown". With light nodes, they ask "give me the data to check if this transaction has been confirmed" and then check on their own. This is a trust-minimized setup which combines the best of both worlds - very little storage and processing power required while allowing for cryptographic verification of the full node's claims.

### Q: What's the plan for mobile? 

While true that Nimbus only compiles to C, C++ and JavaScript and iOS and Android don't support C natively (and we definitely don't want a JS version of Nimbus running on a mobile device), native compiles with Nim work for both Android and iOS, just like geth written in go works. It's all NDK/C API. We'll soon have published specific instructions on how to compile it for all manner of devices, but you can already give it a go by following the [build instructions](/docs/building.html).
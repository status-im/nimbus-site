---
id: faq
title: Frequently Asked Questions
---

In talking to people both familiar and complete strangers to Ethereum clients, these questions were asked more than once.


### Q: When do you expect to have it production-ready?

Not for a while. Sharding is a long ways off, and until then we'll be focusing on getting Ethereum v1 tests to pass in our full node mode. The full node will be ready in 2019, but the super-light implementation might take longer.

### Q: How is a super-light node different from just calling Infura through Web3js?

A Web3js or any similar JavaScript package for communicating with the blockchain is basically a more advanced XMLHttpRequest / Fetch wrapper. What we mean by this is that these packages retrieve information from another node and trust it implicitly. They ask "has this transaction been confirmed?" and get a response that's either "yes" or "that transaction is unknown". With light nodes, they ask "give me the data to check if this transaction has been confirmed" and then check on their own. This is a trust-minimized setup which combines the best of both worlds - very little storage and processing power required while allowing for cryptographic verification of the full node's claims.

### Q: What's the plan for mobile? You speak of deploying to mobile devices, but Nimbus only compiles to C, C++ and JavaScript and iOS and Android don't support C natively. Will you be compiling to JS and deploying with a web wrapper? That doesn't sound performant!

Native compiles with Nim work for both Android and iOS, just like geth written in go works. It's all NDK/C API. We'll soon have published specific instructions on how to compile it for all manner of devices.
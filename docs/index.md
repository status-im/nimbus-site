---
title: Get Started
sidebar_label: Get Started
---

## A lighter, high performing Ethereum client

Nimbus is a client implementation for both Ethereum's consensus layer (eth2) and execution layer (eth1) that strives to be as lightweight as possible in terms of resources used. This allows it to perform well on embedded systems, embedded devices -- including Raspberry Pis and mobile devices.

## Programming language

[Nim](https://nim-lang.org/) is an efficient, general-purpose systems programming language with a Python-like syntax that compiles to C. Nim allows us to implement Ethereum rapidly and take advantage of the mature C-language tooling: in compilation of machine code, and in the analysis of static code.

The end result of implementing in Nim is code that:

1.  Enables us to easily bring research into production
2.  Has a high degree of reasonability for researchers
3.  Is performant in production

Both the Nim core contributors and the wider Nim community have been very supportive of this choice.


## Light by design


Existing implementations of Ethereum have focused on desktop computers and servers. These implementations have played a major role in the initial success of Ethereum, however, their deployment on resource-restricted systems has been an afterthought. 

We believe the ability to run a node on resource-restricted hardware is key to a safe and secure Ethereum going forward.

As such, **Nimbus strives to perform just as well on resource-restricted hardware as it does on desktop computers and servers** as is evidenced by thousands of solo stakers running Nimbus on local hardware and several larger institutional node operators running thousands of validators on enterprise-grade servers with Nimbus.

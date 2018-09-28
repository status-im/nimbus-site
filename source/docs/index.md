title: An Ethereum 2.0 Sharding Client
---

## OVERVIEW

Draft 2018-05-22

Nimbus aims to be a [sharding](https://github.com/ethereum/wiki/wiki/Sharding-FAQ) client implementation for the Ethereum Blockchain Application Platform. Because the largest deployment of Ethereum will potentially be on embedded systems, Nimbus will be designed to perform well on IoT and personal mobile devices, including older smartphones with resource-restricted hardware. The extensible, configurable, and modular design of Nimbus will make it production ready for Web 3.0 and will ensure that it can be supported and maintained across all goals of Ethereum 2.0.


## GOALS


1.  Create an Ethereum implementation suitable for resource-restricted devices.
1.  Create an implementation team for the [Applied Research Objectives](https://hackmd.io/s/HkLkj55yb#objectives-in-applied-research) of [Ethereum Research](http://ethereumresearch.org/) (aka Ethereum Asia Pacific Limited), with focus on the following:
    1.  Proof of Stake (PoS)
    1.  Sharding
    1.  Stateless Clients
    1.  LES2
    1.  eWASM
1.  Close the gap between research modeling and production.
1.  Pledge to participate in, help implement, and conform to the [Ethereum Improvement Proposal](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md).
1.  Implement permissive licensing.
1.  Focus on production-ready [Web 3.0](https://medium.com/@matteozago/why-the-web-3-0-matters-and-you-should-know-about-it-a5851d63c949) Stack ([Whisper](https://github.com/ethereum/wiki/wiki/Whisper), [PSS](https://github.com/nolash/psstalk/blob/master/README.md), and [Swarm](https://swarm-guide.readthedocs.io/en/latest/introduction.html)) and its ongoing research and development.
1.  Focus on marketing and promotion to address community concerns on scalability and to bolster Ethereum's dominant mindshare.


## REQUIREMENTS

[Nim](https://nim-lang.org/) is an efficient, general-purpose systems programming language with a Python-like syntax that compiles to C. Nim will allow us to implement Ethereum rapidly and to take advantage of the mature C-language tooling: in compilation of machine code, and in the analysis of static code. 

With Ethereum research currently modeled in Python, the end result of implementing in Nim should be code that:

1.  Enables us to easily bring research into production
1.  Has a high degree of reasonability for researchers
1.  Is performant in production

The core contributors and Nim community have been very supportive and enthusiastic for the project.


## Development on Embedded Systems

We believe that the largest successful deployment of Ethereum will reside on embedded systems: IoT devices and mobile personal devices, such as smartphones. Although Nimbus will support archival nodes, its first implementation will be as a light client, with focus on Proof of Stake and sharding. 

Existing implementations of Ethereum have focused on desktop computers and servers. These implementations have played a major role in the initial success of Ethereum, and they are suitable for full and archival nodes. However, their deployment onto embedded systems has been an afterthought. 

In addition, throughout the development of Status, we have found that the dominant Ethereum implementations, Geth and Parity, are unsuitable for our target platform unless they are profiled and optimised (in progress).

During the deployment of Status among 40,000 alpha testers, we found that a significant portion (23.6%) of users were still running old mobile devices. In addition, recently discovered [Spectre vulnerabilities](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)) have led to an increase in the demand for open processors. For these reasons, we propose a self-imposed constraint and a requirement that Status perform well on the following:


1.  2014 [SoC](https://en.wikipedia.org/wiki/System_on_a_chip) architectures, such as the [Cortex-A53](https://developer.arm.com/products/processors/cortex-a/cortex-a53) (Samsung Note 4 & [Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)) and the Apple A8 (iPhone 6)
1.  [MIPS](https://en.wikipedia.org/wiki/MIPS_architecture)-based architectures, such as the [Onion Omega2](https://onion.io/omega2/)
1.  Open-source processors, such as [RISC-V](https://en.wikipedia.org/wiki/RISC-V)

When the 2020 scalability goal is fully realised, this constraint will help ensure that Ethereum runs performantly on resource-restricted hardware that is at least 6 years old.
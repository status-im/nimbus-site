title: A lighter Ethereum Client
---

## Overview

Nimbus is a client implementation for both Ethereum's consensus layer  (Ethereum 2) and execution layer (Ethereum 1) that strives to be as lightweight as possible in terms of resources used. This allows it to perform well on embedded systems, embedded devices -- including Raspberry Pis and mobile devices.

However, **resource-restricted hardware is not the only thing Nimbus is good for.** Its low resource consumption makes it **easy to run Nimbus together with other workloads on your server** (this is especially valuable for stakers looking to lower the cost of their server instances).


## Programming language

[Nim](https://nim-lang.org/) is an efficient, general-purpose systems programming language with a Python-like syntax that compiles to C. Nim will allow us to implement Ethereum rapidly and take advantage of the mature C-language tooling: in compilation of machine code, and in the analysis of static code.

With Ethereum research currently modeled in Python, the end result of implementing in Nim should be code that:

1.  Enables us to easily bring research into production
1.  Has a high degree of reasonability for researchers
1.  Is performant in production

The core contributors and Nim community have been very supportive and enthusiastic for the project.


## Development on Embedded Systems

We believe that the largest successful deployment of Ethereum will reside on embedded systems: IoT devices and mobile personal devices, such as smartphones. Although Nimbus will support full and archival nodes, its main implementation will be as a light client, with focus on Proof of Stake and sharding. 

Existing implementations of Ethereum have focused on desktop computers and servers. These implementations have played a major role in the initial success of Ethereum, and they are suitable for full and archival nodes. However, their deployment on embedded systems has been an afterthought. 

During the deployment of Status among 40,000 alpha testers, we found that a significant portion (23.6%) of users were still running old mobile devices. In addition, recently discovered [Spectre vulnerabilities](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)) have led to an increase in the demand for open processors. For these reasons, we propose a self-imposed constraint and a requirement that Status perform well on the following:


1.  2014 [SoC](https://en.wikipedia.org/wiki/System_on_a_chip) architectures, such as the [Cortex-A53](https://developer.arm.com/products/processors/cortex-a/cortex-a53) (Samsung Note 4 & [Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)) and the Apple A8 (iPhone 6)
1.  [MIPS](https://en.wikipedia.org/wiki/MIPS_architecture)-based architectures, such as the [Onion Omega2](https://onion.io/omega2/)
1.  Open-source processors, such as [RISC-V](https://riscv.org)

When the 2020 scalability goal is fully realised, this constraint will help ensure that Ethereum runs performantly on resource-restricted hardware that is at least 6 years old.

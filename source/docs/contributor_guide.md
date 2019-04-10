---
id: contributor_guide
title: Contributor Guide
---

# How to help with funding

We have a donation box set up at address 0x6CC55c39f51a2Da7D2DB5F2c4AAD133eb1418C4f.

We use funds from donations to:

- fund bounties
- fund audits of our production code
- fund hardware on which to build Nimbus for you, from Raspberry Pis to feature phones

If you'd like to donate a conditional amount, i.e. one that depends on a certain milestone or deadline, please [get in touch](mailto:bruno@status.im).

# How To Get Involved with Nimbus' development 

- look around [the repo](https://github.com/status-im/nimbus), especially the [open issues](https://github.com/status-im/nimbus/issues)
- check out some [open bounties](https://openbounty.status.im/app#/)
- check out some [more open bounties](https://gitcoin.co/explorer?keywords=nimbus&order_by=-web3_created)
- learn about the source code by [dissecting](https://github.com/status-im/nimbus/tree/master/tests) and [debugging](https://github.com/status-im/nimbus/wiki/Understanding-and-debugging-Nimbus-EVM-JSON-tests) the tests

To configure your setup for development:

```bash
git clone https://github.com/status-im/nimbus
cd nimbus
make update deps
./env.sh bash # configures your environment with dependencies like a locally installed Nim, etc.
```

[Build](/docs/building.html) and start hacking!

## Thought Experiments

If you have research ideas you'd like to throw at us, exotic hardware you'd like to test on, or anything else revolutionary cooking up in your mind that you think might be bite too big for Geth or Parity to chew, let us know. We'll gladly experiment!

## Testing

You can join a testnet by following instructions [here](https://our.status.im/the-nimbus-mvp-testnet-is-here/).

## Guidelines

Whatever you might expect to see in other projects applies here:

- be nice to others
- when evaluating PRs, focus exclusively on the quality of the code
- if submitting code, make sure it's tested. All code MUST come with tests. To speed up the review, ping a [team member](/docs/team).
- if submitting typo fixes or documentation changes, speed up the review process by pinging a team member. [Swader](https://github.com/swader) will usually review those very quickly.
- if submitting a tutorial for inclusion on the [official blog](https://our.status.im/tag/nimbus), also feel free to ping [Swader](https://github.com/swader).
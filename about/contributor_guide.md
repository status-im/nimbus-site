---
title: Contributor Guide
sidebar_label: Contributor Guide
sidebar_position: 6
---

## How to help with funding

We have a donation box set up at address `0xDeb4A0e8d9a8dB30a9f53AF2dCc9Eb27060c6557`, as well as a [Gitcoin Grant page](https://gitcoin.co/grants/137/nimbus-2/).

We use funds from donations to:

- fund bounties
- fund audits of our production code
- fund hardware on which to build Nimbus for you, from Raspberry Pis to feature phones

If you'd like to donate a conditional amount, i.e. one that depends on a certain milestone or deadline, please [get in touch](mailto:jacek@status.im).

## How to get involved with Nimbus' development 

- look around [the repo](https://github.com/status-im/nimbus-eth2), especially the [open issues](https://github.com/status-im/nimbus-eth2/issues)
- check out some [open bounties](https://gitcoin.co/explorer?keywords=nimbus&order_by=-web3_created)
- learn about the source code by [dissecting](https://github.com/status-im/nimbus-eth2/tree/master/tests)

To configure your setup for development:

```bash
git clone https://github.com/status-im/nimbus-eth2
cd nimbus-eth2
make update
```

[Build](/docs/eth2.html) and start hacking!

## Thought experiments

<blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Still hoping to just have my <a href="https://twitter.com/ethstatus?ref_src=twsrc%5Etfw">@ethstatus</a> desktop wallet be my bn, and have my mobile device be my <a href="https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw">@ethnimbus</a> vc 🤷🏽‍♀️😅. And then a nice little Rocketpool Staas run by <a href="https://twitter.com/search?q=%24SNT&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$SNT</a>... And anonymous staking in &quot;dark pools&quot; build on application layer, fees paid to client/network nodes. 👌🏽😻.</p>&mdash; chloethedev.eth ⟠ δούλος 🏳️‍⚧️ (@Chloethedev) <a href="https://twitter.com/Chloethedev/status/1320710462032515072?ref_src=twsrc%5Etfw">October 26, 2020</a></blockquote>

If you have research ideas you'd like to throw at us, exotic hardware you'd like to test on, or anything else revolutionary cooking up in your mind let us know. We'll gladly experiment!

## Guidelines

Whatever you might expect to see in other projects applies here:

- Be nice to others
- When evaluating PRs, focus exclusively on the quality of the code
- If submitting code, make sure it's tested. All code MUST come with tests. To speed up the review, ping a team member.
- If submitting typo fixes or documentation changes, speed up the review process by pinging a team member. [Jacek](https://github.com/arnetheduck) or [Sacha](https://github.com/unixpi) will usually review those very quickly. The same applies if submitting a tutorial for inclusion on the [official blog](https://blog.nimbus.team/).

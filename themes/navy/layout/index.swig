<div class="home-cover">
     {{ partial('partial/header') }}
    <div class="intro">
        <h1>Nimbus</h1>
        <p>Researching and implementing lighter Ethereum clients </p>
        <div class="intro-buttons">
            <a class="button button--main" href="https://discord.gg/qnjVyhatUa">JOIN OUR DISCORD</a>
            <a class="button button--main" href="https://status-im.github.io/nimbus-eth2/">Play with Nimbus</a>
                <a class="button button--main" href="http://subscribe.nimbus.team/">Stay updated</a>
        </div>
    </div>
</div>
<div class="home-wrap">
    <div id="about" class="section-header section-header--main">
        <h2 id="top-header">Lightweight as possible</h2>
        <p>
Nimbus is a client implementation for both Ethereum 2.0 and Ethereum 1.0 that strives to be as lightweight as possible in terms of resources used. This allows it to perform well on embedded systems, resource-restricted devices -- including Raspberry Pis and mobile devices -- and multi-purpose servers. 
        </p>
        <a href="/docs">See our docs <img src="../img/arrow_orange.svg" /></a>

        <div class="work-items">
        <div class="work-item">
                <img class="work-item-image work-item-image-right" src="../img/graphic-platform-support.svg" />
                <div class="work-item-inner">
                    <h2>Ready for eth2</h2>
                    <p>You can use Nimbus today to both monitor the eth2 chain and join the network as a fully-fledged validator.
                    </p>
        <a href="https://nimbus.guide">See our book <img src="../img/arrow_orange.svg" /></a>
                </div>
            </div>

            <div class="work-item">
                <div class="work-item-inner">
                    <h2>Exploring the frontiers of research</h2>
                    <p>Nimbus is a research project. We translate the latest Ethereum 2.0 research into practical, performant and reusable libraries to provide fertile exploration ground for further R&D.
                    </p>
                    <a href="https://github.com/status-im?utf8=%E2%9C%93&q=nim&type=&language=">See our libraries <img src="../img/arrow_orange.svg" /></a>
                </div>
                <img class="work-item-image" src="../img/graphic-research.svg" />
            </div>
            <div class="work-item">
                <img class="work-item-image work-item-image-right" src="../img/graphic-licensing.svg" />
                <div class="work-item-inner">
                    <h2>Free and open source philosophy</h2>
                    <p>We’re building Nimbus as a common good with liberal licensing to allow for the widest deployment of Ethereum 2.0 possible.
                    </p>
                </div>
            </div>
            <div class="work-item">
                <div class="work-item-inner">
                    <h2>Community first</h2>
                    <p>We're crazy about hacking together. If you want to make Nim or Nimbus the focus of your hackathon, we'd love to help you out and get the ball rolling. Please get in touch!
                    </p>
                </div>
                <img class="work-item-image" src="../img/graphic-network.svg" />
            </div>
        </div>
    </div>
    <div id="contribute" class="sections">
        <div class="inner-header">
            <h2>Contribute</h2>
            <p>Nimbus is an open source initiative in which anyone can get involved. There are a number of ways to contribute:</p>
        </div>
        <div class="contribute-wrap">
            <div class="contribute">
                <h3>Join the Team</h3>
                <p>We are always looking for passionate and talented individuals to join our team.
                <p>
                    <a href="https://status.im/our_team/open_positions.html">See list of open roles</a>
                    <span><a href="https://status.im/our_team/open_positions.html"><img src="../img/arrow_ogn.png" /></a></span>
            </div>
            <div class="contribute">
                <h3>Suppport</h3>
                <p>As an open source project largely dependent on the Ethereum Foundation for funding, grants are our lifeblood. See <a href="https://etherscan.io/address/0x70E47C843E0F6ab0991A3189c28F2957eb6d3842">here</a> for our donation address.
                <p>
                    <a href="https://gitcoin.co/grants/137/nimbus">Support us on Gitcoin</a>
                    <span><a href="https://gitcoin.co/explorer?keywords=nimbus&order_by=-web3_created"><img src="../img/arrow_ogn.png" /></a></span>
            </div>
            <div class="contribute">
                <h3>Join the Conversation</h3>
                <p>We are an open community and happy to answer your questions and help you learn more about Nimbus.
                <p>
                    <a href="https://discord.com/invite/qnjVyhatUa">Join us on Discord</a>
                    <span><a href="https://discord.com/invite/qnjVyhatUa"><img src="../img/arrow_ogn.png" /></a></span>
            </div>
        </div>
        <div id="team" class="inner-header">
            <h2>Core Contributors</h2>
            <p>We’re a diverse group of researchers, engineers, and scientists with a passion for web3 technologies. We work primarily in Nim.</p>
        </div>
        <div class="contribute-wrap">
            {% for member in site.data.team %}
            <div class="contribute">
                <img class="contributor" src="{{ member.image }}" />
                <h3>{{ member.name }}</h3>
                <p><a href="{{ member.statusLink }}" style="color: #939ba1;">{{ member.statusName }}</a></p>
                <p><a href="{{ member.gitHubLink }}">See Github profile</a>
                    <span><a href="{{ member.gitHubLink }}"><img src="../img/arrow_ogn.png" /></a></span>
                </p>
            </div>
            {% endfor %}
        </div>
        <div class="inner-header">
            <h2>Read our News</h2>
            <p>Check out the latest Nimbus news:</p>
        </div>
        <div class="contribute-wrap contribute-wrap-blog">
        </div>
    </div>
</div>

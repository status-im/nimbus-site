<div class="home-cover">
     {{ partial('partial/header') }}
    <div class="intro">
        <h1>Nimbus</h1>
        <p>Researching and implementing lighter Ethereum clients </p>
        <div class="intro-buttons">
            <a class="button button--main" href="https://discord.gg/qnjVyhatUa">JOIN OUR DISCORD</a>
            <a class="button button--main" href="https://status-im.github.io/nimbus-eth2/">Play with Nimbus</a>
        </div>
    </div>
</div>
<div class="home-wrap">
    <div id="about" class="section-header section-header--main">
        <h2 id="top-header">Ethereum 2.0</h2>
        <p>Nimbus is a client implementation for Ethereum 2.0 designed to perform well on embedded systems and resource-restricted devices, including Raspberry Pis and mobile devices. You can use Nimbus today to stake on eth2.
        </p>
        <a href="https://nimbus.guide">See our book <img src="../img/arrow_orange.svg" /></a>

        <div class="work-items">
            <div class="work-item">
                <img class="work-item-image work-item-image-right" src="../img/graphic-platform-support.svg" />
                <div class="work-item-inner">
                    <h2>Ethereum 1.0</h2>
                    <p>Nimbus is also a client implementation for Ethereum 1.0, currently focused on obtaining feature parity. While we have been mainly focused so far on eth2, this year we will be greatly accelerating our efforts on this front.
                    </p>
                    <a href="https://github.com/status-im?utf8=%E2%9C%93&q=nim&type=&language=">See our repos <img src="../img/arrow_orange.svg" /></a>

                </div>
            </div>
            <div class="work-item">
                <div class="work-item-inner">
                    <h2>Friendly Research</h2>
                    <p>Nimbus is a research project. We translate the latest Ethereum 2.0 research into practical, performant and reusable libraries to provide fertile exploration ground for further R&D.
                    </p>
                    <a href="/docs">See our docs <img src="../img/arrow_orange.svg" /></a>
                </div>
                <img class="work-item-image" src="../img/graphic-research.svg" />
            </div>
            <div class="work-item">
                <img class="work-item-image work-item-image-right" src="../img/graphic-licensing.svg" />
                <div class="work-item-inner">
                    <h2>Friendly Licensing</h2>
                    <p>We’re building Nimbus as a common good with liberal licensing to allow for the widest deployment of Ethereum 2.0 possible.
                    </p>
                </div>
            </div>
            <div class="work-item">
                <div class="work-item-inner">
                    <h2>Friendly Networking</h2>
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
                <h3>Support us on Gitcoin</h3>
                <p>As an open source project largely dependent on the Ethereum Foundation for funding, grants are our lifeblood.
                <p>
                    <a href="https://gitcoin.co/grants/137/nimbus">Support us</a>
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

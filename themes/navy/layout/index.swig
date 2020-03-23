<div class="home-cover">
     {{ partial('partial/header') }}
    <div class="intro">
        <h1>Nimbus</h1>
        <p>Researching and implementing lighter Ethereum 2.0 clients </p>
        <div class="intro-buttons">
            <a class="button button--main" href="https://gitter.im/status-im/nimbus">JOIN OUR GITTER</a>
            <a class="button button--main" href="/docs/">DOCUMENTATION</a>
        </div>
    </div>
</div>
<div class="home-wrap">
    <div id="about" class="section-header section-header--main">
        <h2 id="top-header">Research for Scale️️</h2>
        <p>Nimbus is a research project and a client implementation for Ethereum 2.0 designed to perform well on embedded systems and personal mobile devices, including older smartphones with resource-restricted hardware.
        </p>
        <a href="https://github.com/status-im?utf8=%E2%9C%93&q=nim&type=&language=">See our repos <img src="../img/arrow_orange.svg" /></a>

        <div class="work-items">
            <div class="work-item">
                <div class="work-item-inner">
                    <h2>Friendly Research</h2>
                    <p>We’re translating the latest Ethereum 2.0 research like BN curves, BLS signatures and RANDAO games into practical, performant and reusable 
                        libraries to provide fertile exploration ground for further R&D. Want to run advanced simulations and tests? Get in touch!
                    </p>
                    <a href="/docs">See docs <img src="../img/arrow_orange.svg" /></a>
                </div>
                <img class="work-item-image" src="../img/graphic-research.svg" />
            </div>
            <div class="work-item">
                <img class="work-item-image work-item-image-right" src="../img/graphic-licensing.svg" />
                <div class="work-item-inner">
                    <h2>Friendly Licensing</h2>
                    <p>We’re building Nimbus as a common good with liberal licensing to allow the widest deployment of Ethereum 2.0 possible. 
                        Want to integrate Nimbus in your product? Get in touch!
                    </p>
                </div>
            </div>
            <div class="work-item">
                <div class="work-item-inner">
                    <h2>Friendly Networking</h2>
                    <p>We're crazy about hacking together. Want to make Nimbus or Nim the focus of your hackathon? Coming to one of ours but not sure where to start? We'd love to help you out and get the ball rolling. Get in touch!
                    </p>
                </div>
                <img class="work-item-image" src="../img/graphic-network.svg" />
            </div>
            <div class="work-item">
                <img class="work-item-image work-item-image-right" src="../img/graphic-platform-support.svg" />
                <div class="work-item-inner">
                    <h2>Friendly Platform Support</h2>
                    <p>The Nim language delivers safe and performant code on any platform with a C compiler available. Developing the latest RISC-V 
                        boards or simply have an old Windows machine lying around? Get in touch!
                    </p>
                </div>
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
                    <a href="https://status.im/contribute/open_positions.html">See list of open roles</a>
                    <span><a href="https://status.im/contribute/open_positions.html"><img src="../img/arrow_ogn.png" /></a></span>
            </div>
            <div class="contribute">
                <h3>Work on Bounties</h3>
                <p>As an open source project, anyone anywhere can get involved and contribute code.
                <p>
                    <a href="https://gitcoin.co/explorer?keywords=nimbus&order_by=-web3_created">See open bounties</a>
                    <span><a href="https://gitcoin.co/explorer?keywords=nimbus&order_by=-web3_created"><img src="../img/arrow_ogn.png" /></a></span>
            </div>
            <div class="contribute">
                <h3>Join the Conversation</h3>
                <p>We are an open community and happy to answer your questions and help you learn more about Nimbus.
                <p>
                    <a href="https://join.status.im/chat/public/status-nimbus">Join us in Status</a>
                    <span><a href="https://join.status.im/chat/public/status-nimbus"><img src="../img/arrow_ogn.png" /></a></span>
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

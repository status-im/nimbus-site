<div class="header">
    <div class="header-left">
        <a class="logo" href={{url_for_lang('/')}}></a>
        <ul class="main-nav">
            <li class="item--to-show"><a href="https://status.im/get/" class="">App</a></li>
            <li class="item--to-show"> <a href="https://our.status.im/tag/nimbus/">Blog</a> </li>
            <li class="item--to-show"> <a href={{url_for_lang('docs')}}>Docs</a></li>
            <li class="item--dropdown item--dropdown-projects"> <a href="#" class="">Projects</a></li>
            <li><a href="https://status.im/contribute/">Contribute</a></li>
            <li class="item--dropdown"><a href="#" class="item--dropdown-community">Community</a></li>
            <li class="item--more"><a href="#" class="item--more">More</a></li>
        </ul>
    </div>
    <div class="header-right">
        <a href="http://get.status.im/chat/public/status-nimbus" class="button button--secondary" style="margin-right: 8px">Nimbus Status Chat</a>
    </div>
</div>

<div class="mobile-nav-wrap">
    <div class="mobile-nav-inner">
        <a class="logo" href={{url_for_lang('/')}}></a>
        <a class="icon-close mobile-nav-close" href="#"></a>
        <ul class="mobile-nav">
            <li><a href="https://our.status.im/tag/nimbus/">Blog</a></li>
            <li><a href={{url_for_lang('docs')}}>Docs</a></li>
            <li class="item--dropdown item--to-show">
              <span>Projects</span>
              <ul class="mobile-sub-nav">
                <li><a href="https://incubate.status.im/" class="">Incubate</a></li>
                <li><a href="https://nimbus.status.im/" class="">Nimbus</a></li>
                <li><a href="https://embark.status.im/" class="">Embark</a></li>
                <li><a href="https://studio.status.im/" class="">Studio</a></li>
                <li><a href="https://hardwallet.status.im/" class="">Hardwallet</a></li>
              </ul>
            </li>
            <li><a href="https://status.im/contribute/" class="">Contribute</a></li>
        </ul>
        <div class="mobile-nav-footer">
            <a href="http://get.status.im/chat/public/status-nimbus" class="button button--orange">Nimbus Status Chat</a>
        </div>
        <header class="dropdown">
            <nav>
                {{ partial('partial/shared-partials/partials/header-nav') }}
            </nav>
        </header>
    </div>
    <div class="popup-overlay"></div>
</div>

<div class="popup-wrap popup-wrap--projects">
    <div class="popup popup--projects">
        <a class="popup__button popup__button--close"></a>
        <h3 class="popup__title">Projects</h3>
        <div class="popup__inner">
            <h5>Help us #buidl</h5>
            <div class="cards cards-community-more cards--three cards--three--even">
                <div class="card">
                    <div class="card-inner">
                        <div class="card-content">
                            <h4>Embark</h4>
                            <p class="secondary-text">Embark is a simple and easy to use development framework that enables you to build and deploy your own decentralized applications smoothly.</p>
                        </div>
                        <div class="card-community-more__link"><a href="https://embark.status.im/" class="link-arrow">Learn more</a></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-content">
                            <h4>Nimbus</h4>
                            <p class="secondary-text">A research project and light client for Ethereum 2.0 designed to perform well on embedded systems and resource-restricted hardware.</p>
                        </div>
                        <div class="card-community-more__link"><a href="https://nimbus.status.im" class="link-arrow">Learn more</a></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-content">
                            <h4>Status Studio</h4>
                            <p class="secondary-text">Studio is an integrated developer environment and educational platform designed to be a one-stop-shop for ÐApp development.</p>
                        </div>
                        <div class="card-community-more__link"><a href="https://studio.status.im" class="link-arrow">Learn more</a></div>
                    </div>
                </div>
            </div>
            <div class="separator"></div>
            <h5>Tools for Everyone</h5>
            <div class="cards cards-community-more cards--three cards--three--even">
                <div class="card">
                    <div class="card-inner">
                        <div class="card-content">
                            <h4>Incubate</h4>
                            <p class="secondary-text">Incubate supports open source, early stage startups with funding, technical mentorship, legal and regulatory compliance and much more.</p>
                        </div>
                        <div class="card-community-more__link"><a href="https://incubate.status.im/" class="link-arrow">Learn more</a></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-inner">
                        <div class="card-content">
                            <h4>Status Hardwallet</h4>
                            <p class="secondary-text">A hardware wallet in the form of a card with a safe, contactless transaction experience</p>
                        </div>
                        <div class="card-community-more__link"><a href="https://hardwallet.status.im/" class="link-arrow">Learn more</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup-overlay"></div>
</div>

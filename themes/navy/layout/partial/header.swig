<div class="header">
    <div class="header-left">
        <a class="logo" href="/"></a>
        {{ partial('partial/header-nav') }}
    </div>
    <div class="header-right">
        <ul class="header-logos">
            <li class="header-link header-link--tw"><a href="https://twitter.com/ethnimbus" target="_blank"><span class="header-icon"></span><span class="header-link-label"></span></a></li>
            <li class="header-link header-link--gh"><a href="https://github.com/status-im/nimbus" target="_blank"><span class="header-icon"></span><span class="header-link-label"></span></a></li>
            <li class="header-link header-link--gt"><a href="https://gitter.im/status-im/nimbus" target="_blank"><span class="header-icon"></span><span class="header-link-label"></span></a></li>
            <li class="header-link header-link--st"><a href="https://get.status.im/chat/public/nimbus-general" target="_blank"><span class="header-icon"></span><span class="header-link-label"></span></a></li>
        </ul>
    </div>
</div>

<div class="mobile-nav-wrap">
    <div class="mobile-nav-inner">
        <a class="logo" href="/"></a>
        <a class="icon-close mobile-nav-close" href="#"></a>
        <ul class="mobile-nav">
            <li><a href="https://our.status.im/tag/nimbus/">Blog</a></li>
            <li><a href="/docs">Docs</a></li>
            <li class="item--dropdown item--to-show">
              <span>Projects</span>
              <ul class="mobile-sub-nav">
                <li><a href="https://incubate.status.im/" class="">Incubate</a></li>
                <li><a href="https://nimbus.status.im/" class="">Nimbus</a></li>
                <li><a href="https://embark.status.im/" class="">Embark</a></li>
                <li><a href="https://hardwallet.status.im/" class="">Hardwallet</a></li>
              </ul>
            </li>
            <li><a href="https://status.im/contribute/" class="">Contribute</a></li>
        </ul>
        <div class="mobile-nav-footer">
            <a href=" https://get.status.im/chat/public/nimbus-general" class="button button--orange">Nimbus Status Chat</a>
        </div>
        <header class="dropdown">
            <nav>
                {{ partial('partial/header-nav') }}
            </nav>
        </header>
    </div>
    <div class="popup-overlay"></div>
</div>

{{ partial('partial/community-popup') }}

{{ partial('partial/projects-popup') }}

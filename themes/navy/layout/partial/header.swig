<div class="header">
    <div class="header-left">
        <a class="logo" href={{url_for_lang('/')}}></a>
        {{ partial('partial/shared-partials/partials/header-nav') }}
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

{{ partial('partial/shared-partials/partials/community-popup') }}

{{ partial('partial/shared-partials/partials/projects-popup') }}

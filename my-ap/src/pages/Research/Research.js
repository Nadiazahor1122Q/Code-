import React from 'react';

const Research = () => {
    return <div>
        <div className="wrapper">
  <div className="header_primary" id="header-primary">
    <div className="header_primary_logo">
      {" "}
      <a href="/">
        <img src="/img/icons/logo_blks.png" alt="Blockstream" />
      </a>
    </div>
    <div
      className="hamburger header_primary_mobile-menu-button"
      onclick="mobileNavToggle()"
    >
      <div className="bar top" />
      <div className="bar middle" />
      <div className="bar bottom" />
    </div>
    <nav className="header_primary_navigation">
      <ul className="header_primary_navigation_list">
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button "
            id="nav-dropdown-products"
            href="#"
            onclick="mobileNavDropdown(event)"
          >
            {" "}
            Products{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_products"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <div className="product-subnav">
                <div className="product-subnav-col">
                  <h4>PRODUCTS</h4>
                  <ul className="product-subnav-grid-container">
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_liquid"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="liquid"
                        href="/liquid/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_liquid_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Liquid Network
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Bitcoin layer-2 for digital asset issuance.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="amp"
                        href="/amp/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_amp_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream AMP
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              An API to issue and manage digital assets on the
                              Liquid Network.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link"
                        data-nav-item="elements"
                        href="/finance/bmn"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img
                              className="finance-icon"
                              src="/img/nav_icons/navigation_icons_finance_solid_colour.svg"
                            />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Finance
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Financial products for the <br />
                              Bitcoin era.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_mining"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="lightning"
                        href="/lightning/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img
                              className="clight-icon"
                              src="/img/nav_icons/navigation_icons_lightning_solid_colour_original.svg"
                            />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              c-lightning
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Our own implementation of the Lightning protocol.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_green-address"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="mining"
                        href="/mining/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_mining_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Mining
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Colocation services for Bitcoin mining operations.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_mining"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="ice"
                        href="/cryptofeed/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link" style={{marginLeft:"109%",marginTop:"-99px"}}>
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_datafeed_solid.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Cryptocurrency Data Feed
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Real-time and historical cryptocurrency trade
                              data.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_green-address"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="energy"
                        href="/energy/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_energy_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Energy
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Instant energy demand from the Bitcoin network
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_satellite"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="satellite"
                        href="/satellite/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_satellite_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Satellite
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              The Bitcoin blockchain, delivered from space.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="elements"
                        href="/elements/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_elements_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Elements
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              An open-source, sidechain-capable blockchain
                              platform.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-subnav-col">
                  <h4>WALLETS &amp; EXPLORER</h4>
                  <ul className="product-subnav-grid-container">
                    {" "}
                    {/*<li class="header_primary_navigation_item_sub-list_item" id="primary_navigation_block-explorer"> <a class='product-subnav-grid-container_link ' data-nav-item="aqua" href="/aqua/"><div class="header_primary_navigation_item_sub-list_item_link"><div class="product-subnav-grid-container_icon"> <img src="/img/nav_icons/navigation_icons_aqua_solid_colour.svg"/></div><div class="header_primary_navigation_item_sub-list_item_link_block"><p class= "header_primary_navigation_item_sub-list_item_link_block_title">AQUA</p><p class="header_primary_navigation_item_sub-list_item_link_block_text">A simple Bitcoin and Liquid wallet built for everyone.</p></div></div></a></li>*/}
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="jade"
                        href="/jade/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_jade_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Jade
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              A fully open-source hardware wallet for Bitcoin
                              and Liquid.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_ice"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="green-address"
                        href="/green/"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_green_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Green
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              A multi-platform, feature-rich Bitcoin and Liquid
                              wallet.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_mining"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link"
                        data-nav-item="block-explorer"
                        href="https://blockstream.info"
                        target="_blank"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_explorer_solid.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Explorer
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Search data from the Bitcoin and Liquid
                              blockchains.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button"
            id="nav-dropdown-news"
            href="#"
            onclick="mobileNavDropdown(event)"
          >
            {" "}
            Newsroom{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_news"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <ul className="subnav-grid-container">
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_blog"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title blog-link"
                        href="https://blog.blockstream.com"
                        data-nav-item="blog"
                        onclick="blogLinkClicked(event)"
                      >
                        {" "}
                        <i className="fas  fa-edit header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Blog
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_press-newsroom"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/newsroom/"
                        data-nav-item="newsroom"
                      >
                        {" "}
                        <i className="fas  fa-newspaper header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        In The News
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_press-release"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/press-releases/"
                        data-nav-item="press-release"
                      >
                        {" "}
                        <i className="fas  fa-list-alt header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Press Releases
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_brand-assets"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/brand-assets/"
                        data-nav-item="brand-assets"
                      >
                        {" "}
                        <i className="fas  fa-toolbox header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Brand Assets
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button"
            id="nav-dropdown-developer"
            href="#"
            onclick="mobileNavDropdown(event)"
          >
            {" "}
            Developers{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_developer"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <ul className="subnav-grid-container">
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_eng-blog"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title"
                        href="https://medium.com/blockstream"
                        target="blank"
                        data-nav-item="eng-blog"
                      >
                        {" "}
                        <i className="fas  fa-cog header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Engineering Blog
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_documentation"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title"
                        href="https://docs.blockstream.com"
                        target="blank"
                        data-nav-item="documentation"
                      >
                        {" "}
                        <i className="fas  fa-code header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Documentation
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button "
            id="nav-dropdown-about"
            href="#"
            onclick="mobileNavDropdown(event)"
          >
            {" "}
            Company{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_about"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <ul className="subnav-grid-container">
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_research"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title nav-link-active"
                        href="/research/"
                        data-nav-item="research"
                      >
                        {" "}
                        <i className="fas  fa-book-open header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Research
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_about"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/about/"
                        data-nav-item="about"
                      >
                        {" "}
                        <i className="fas  fa-building header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        About
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_careers"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/careers/"
                        data-nav-item="careers"
                      >
                        {" "}
                        <i className="fas  fa-user header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Careers
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item store-link">
          {" "}
          <a
            className="header_primary_navigation_item_link "
            href="https://store.blockstream.com/"
          >
            Store
          </a>
        </li>
        <li className="header_primary_navigation_item store-link">
          {" "}
          <a
            className="header_primary_navigation_item_link "
            href="https://help.blockstream.com/"
          >
            Support
          </a>
        </li>
        <li className="header_primary_navigation_item header_primary_navigation_item_no-line">
          <div className="language-button" id="language-selector">
            <ul
              id="tx-live-lang-picker"
              className="txlive-langselector-list notranslate"
            >
              <li data-value="en">English</li>
              <li data-value="zh">中文</li>
              <li data-value="nl">Nederlands</li>
              <li data-value="fr">Français</li>
              <li data-value="de">Deutsch</li>
              <li data-value="it">Italiano</li>
              <li data-value="ja">日本語</li>
              <li data-value="ko">한국어</li>
              <li data-value="ru">Русский</li>
              <li data-value="es">Español</li>
            </ul>
            <div
              className="txlive-langselector-toggle notranslate"
              id="tx-live-lang-toggle"
            >
              <span
                className="txlive-langselector-current"
                id="tx-live-lang-current"
              >
                English
              </span>
              <span className="txlive-langselector-marker" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
  <div
    className="secondary-header-artboard"
    style={{ backgroundImage: "url( /img/header/header_overlay.png)" }}
  >
    <div className="secondary-header-artboard_banner">
      <div className="secondary-header-artboard_banner_title">
        {" "}
        OUR RESEARCH
      </div>
      <div className="secondary-header-artboard_banner_desc">
        {" "}
        An archive of <br />
        Blockstream's <br /> cutting-edge Bitcoin <br />
        technology research
      </div>
    </div>
  </div>
  <div className="research-background-container">
    <div className="research-content">
      <div className="main-heading">Research Areas</div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_sidechain-3x.png" />{" "}
              <img src="/img/research/white_icon_sidechain-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Sidechains</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://pdfs.semanticscholar.org/1b23/cd2050d5000c05e1da3c9997b308ad5b7903.pdf?_ga=2.100475545.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Enabling Blockchain Innovations with Pegged Sidechains
            </div>
            <div className="accordion-expand_article_author">
              A. Back, M. Corallo, L. Dashjr, M. Friedenbach, G. Maxwell, A.
              Miller, A. Poelstra, J. Timón, and P. Wuille. 2014.
            </div>
          </a>{" "}
          <a
            href="https://blockstream.com/assets/downloads/pdf/liquid-whitepaper.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Liquid: A Bitcoin Sidechain
            </div>
            <div className="accordion-expand_article_author">
              J. Nick, A. Poelstra, G. Sanders. 2020.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_privacy-3x.png" />{" "}
              <img src="/img/research/white_icon_privacy-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Privacy</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://hal.inria.fr/hal-01673293/document"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Introduction to Security and Privacy on the Blockchain
            </div>
            <div className="accordion-expand_article_author">
              H. Halpin and M. Piekarska. EuroS&amp;P 2017 - 2nd IEEE European
              Symposium on Security and Privacy, Workshops, Apr 2017, Paris,
              France. IEEE, Security and Privacy Workshops (EuroS&amp;PW), 2017
              IEEE European Symposium on, pp.1-3, 2017,
              ff10.1109/EuroSPW.2017.43ff. ffhal-01673293f
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_signature-3x.png" />{" "}
              <img src="/img/research/white_icon_signature-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Digital Signatures</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://arxiv.org/pdf/1403.6676.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Bitcoin Transaction Malleability and MtGox
            </div>
            <div className="accordion-expand_article_author">
              C. Decker and R. Wattenhofer, ETH Zurich, Switzerland, 2014.
            </div>
          </a>{" "}
          <a
            href="https://pdfs.semanticscholar.org/d34a/222c500ebc3a733391b41cd0b486d8675279.pdf?_ga=2.58411949.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Efficient Accountable Multisignatures
            </div>
            <div className="accordion-expand_article_author">
              Andrew Poelstra. 2015.
            </div>
          </a>{" "}
          <a
            href="https://eprint.iacr.org/2018/068.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Simple Schnorr multi-signatures with applications to Bitcoin
            </div>
            <div className="accordion-expand_article_author">
              G. Maxwell, A. Poelstra, Y. Seurin, and P. Wuille. 2018.
            </div>
          </a>{" "}
          <a
            href="https://eprint.iacr.org/2020/1057.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              MuSig-DN: Schnorr Multi-Signatures with Verifiably Deterministic
              Nonces
            </div>
            <div className="accordion-expand_article_author">
              J. Nick, T. Ruffing, Y. Seurin, and P. Wuille. 2020.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_scripting-3x.png" />{" "}
              <img src="/img/research/white_icon_scripting-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Scripting</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://fc17.ifca.ai/bitcoin/papers/bitcoin17-final28.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Enhancing Bitcoin Transactions with Covenants
            </div>
            <div className="accordion-expand_article_author">
              R. O’Connor and M. Piekarska. 2017.
            </div>
          </a>{" "}
          <a
            href="https://dl.acm.org/doi/pdf/10.1145/3139337.3139340"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Simplicity - A New Language for Blockchains
            </div>
            <div className="accordion-expand_article_author">
              Russell O’Connor. 2017.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_micropay_copy-3x.png" />{" "}
              <img src="/img/research/white_icon_micropay_copy-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Micropayments</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://tik-old.ee.ethz.ch/file//716b955c130e6c703fac336ea17b1670/duplex-micropayment-channels.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              A Fast and Scalable Payment Network with Bitcoin Duplex
              Micropayment Channels
            </div>
            <div className="accordion-expand_article_author">
              C. Decker and R. Wattenhofer. Distributed Computing Group, ETH
              Zurich, 2015.
            </div>
          </a>{" "}
          <a
            href="https://royalsocietypublishing.org/doi/pdf/10.1098/rsos.180089"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Scalable funding of Bitcoin micropayment channel networks
            </div>
            <div className="accordion-expand_article_author">
              C. Burchert, C. Decker, and R. Wattenhofer. 2018.
            </div>
          </a>{" "}
          <a
            href="https://pdfs.semanticscholar.org/afc2/e810be32e0c0b20c277fa0c2774d3ec82ac7.pdf?_ga=2.98208408.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              eltoo - A Simple Layer 2 Protocol for Bitcoin
            </div>
            <div className="accordion-expand_article_author">
              C. Decker and R. Russell. 2018.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_bandwidth-3x.png" />{" "}
              <img src="/img/research/white_icon_bandwidth-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Bitcoin Bandwidth</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://pdfs.semanticscholar.org/957e/05cf0a0ee016b2227fd43e86122982193767.pdf?_ga=2.24997821.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Bandwidth-Efficient Transaction Relay in Bitcoin
            </div>
            <div className="accordion-expand_article_author">
              Pieter Wuille. 2019.
            </div>
          </a>{" "}
          <a
            href="https://www.ece.ubc.ca/~sasha/papers/ccs19.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Erlay - Efficient Transaction Relay for Bitcoin
            </div>
            <div className="accordion-expand_article_author">
              G. Naumenko, G. Maxwell, P. Wuille, S. Fedorova, and I.
              Beschastnikh. 2019.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_payments-3x.png" />{" "}
              <img src="/img/research/white_icon_payments-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Bitcoin Payments</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="http://people.cs.georgetown.edu/~cnewport/teaching/cosc841-spring19/papers/new/fast-payments.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Have a snack, pay with Bitcoins
            </div>
            <div className="accordion-expand_article_author">
              T. Bamert, C. Decker, L. Elsen, R. Wattenhofer, and S. Welten.
              2013.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_confidential.png" />{" "}
              <img src="/img/research/white_icon_confidential.png" />
            </div>
            <h4 className="card-link-wide_text">Confidential Transactions</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div
          className="accordion-expand"
          style={{ height: 0, opacity: 0, padding: 0 }}
        >
          {" "}
          <a
            href="https://pdfs.semanticscholar.org/4160/470c7f6cf05ffc81a98e8fd67fb0c84836ea.pdf?_ga=2.69412503.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Borromean Ring Signatures
            </div>
            <div className="accordion-expand_article_author">
              A. Poelstra and G. Maxwell. 2015.
            </div>
          </a>{" "}
          <a
            href="https://pdfs.semanticscholar.org/384a/32d1e37cbe1395bc87a5a4f4b1a9a9af9b8f.pdf?_ga=2.32148409.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Bulletproofs - Efficient Range Proofs for Confidential
              Transactions
            </div>
            <div className="accordion-expand_article_author">
              A. Poelstra, P. Wuille, and G. Maxwell. 2017.
            </div>
          </a>{" "}
          <a
            href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8418611"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Bulletproofs - Short Proofs for Confidential Transactions and More
            </div>
            <div className="accordion-expand_article_author">
              B. Bunz, J. Bootle, D. Boneh, A. Poelstra, P. Wuille, and G.
              Maxwell. 2017.
            </div>
          </a>{" "}
          <a
            href="https://blockstream.com/bitcoin17-final41.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Confidential Assets
            </div>
            <div className="accordion-expand_article_author">
              A. Poelstra, A. Back, M. Friedenbach, G. Maxwell, and P. Wuille.
              2018.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_consensus.png" />{" "}
              <img src="/img/research/white_icon_consensus.png" />
            </div>
            <h4 className="card-link-wide_text">Consensus</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://sites.cs.ucsb.edu/~rich/class/cs293b-cloud/papers/bitcoin-delay"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Information propagation in the Bitcoin network
            </div>
            <div className="accordion-expand_article_author">
              C. Decker and R. Wattenhofer. 2013.
            </div>
          </a>{" "}
          <a
            href="https://pdfs.semanticscholar.org/db93/1683d60181cf7420031d1c38aaf42fe949b8.pdf?_ga=2.87368479.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              On Stake and Consensus
            </div>
            <div className="accordion-expand_article_author">
              Andrew Poelstra. 2015.
            </div>
          </a>{" "}
          <a
            href="https://tik-old.ee.ethz.ch/file/ed3e5da74fbca5584920e434d9976a12/peercensus.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Bitcoin meets strong consistency
            </div>
            <div className="accordion-expand_article_author">
              C. Decker, J. Seidel, and R. Wattenhofer. Distributed Computing
              Group, ETH Zurich, 2015.
            </div>
          </a>{" "}
          <a
            href="https://fc16.ifca.ai/bitcoin/papers/CDE+16.pdf"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              On Scaling Decentralized Blockchains
            </div>
            <div className="accordion-expand_article_author">
              K. Croman, C. Decker, I. Eyal, A. Efe Gencer, A. Juels, A. Kosba,
              A. Miller, P. Saxena, E. Shi, E. Gun Sirer, D. Song, and R.
              Wattenhofer. 2016.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_mining-3x.png" />{" "}
              <img src="/img/research/white_icon_mining-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Mining Decentralization</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://pdfs.semanticscholar.org/9f76/3ace9e1bcc4f5db0708e43661f5983d3dc74.pdf?_ga=2.56888109.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              ASICs and Decentralization FAQ
            </div>
            <div className="accordion-expand_article_author">
              Andrew Poelstra. 2015.
            </div>
          </a>
        </div>
      </div>
      <div className="accordion-container accordion">
        <div className="card-link-wide">
          <div className="card-link-wide_content">
            <div className="card-link-wide_icon">
              {" "}
              <img src="/img/research/icon_altcoins-3x.png" />{" "}
              <img src="/img/research/white_icon_altcoins-3x.png" />
            </div>
            <h4 className="card-link-wide_text">Altcoins</h4>
            <h5 className="card-link-wide_viewAll">
              VIEW{" "}
              <span>
                <div className="arrow-icon">
                  <div className="arrow a-top" />
                  <div className="arrow a-bottom" />
                </div>
              </span>
            </h5>
          </div>
        </div>
        <div className="accordion-expand">
          {" "}
          <a
            href="https://pdfs.semanticscholar.org/9d1c/b62f7fde9b03882567ee01adba31b7108276.pdf?_ga=2.69412503.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              Distributed Consensus from Proof of Stake is Impossible
            </div>
            <div className="accordion-expand_article_author">
              A. Poelstra. 2014.
            </div>
          </a>{" "}
          <a
            href="https://pdfs.semanticscholar.org/e246/abb304521341a58642e062e3cc3906bdc8fe.pdf?_ga=2.28526523.620164229.1584035150-434165105.1584035150"
            className="accordion-expand_article"
            target="_blank"
          >
            <div className="accordion-expand_article_title">
              A Treatise on Altcoins
            </div>
            <div className="accordion-expand_article_author">
              A. Poelstra. 2014.
            </div>
          </a>
        </div>
      </div>
      <div className="two-column-grid">
        {" "}
        <a href="/about/" className="card-item">
          <div className="text">
            <h4 style={{ color: "" }}>
              About Blockstream{" "}
              <span>
                <i className="fas  fa-long-arrow-right" />
              </span>
            </h4>
            <p>Our mission, vision and information.</p>
          </div>
          <div className="icon">
            {" "}
            <img
              className="press-footer-icon"
              src="/img/brand_assets/logo_no_text.png"
            />
          </div>
        </a>{" "}
        <a
          href="https://www.youtube.com/blockstream"
          className="card-item"
          target="_blank"
        >
          <div className="text">
            <h4 style={{ color: "" }}>
              Watch Our Talks{" "}
              <span>
                <i className="fas  fa-long-arrow-right" />
              </span>
            </h4>
            <p>Presentations from around the world</p>
          </div>
          <div className="icon">
            {" "}
            <img
              className="press-footer-icon"
              src="/img/research/play-button-3x.png"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
  <footer>
    <div className="social-mobile">
      <div className="social-links">
        {" "}
        <a href="https://twitter.com/Blockstream" target="_blank">
          {" "}
          <i className="fab fa-twitter" />{" "}
        </a>{" "}
        <a href="https://ca.linkedin.com/company/blockstream" target="_blank">
          {" "}
          <i className="fab fa-linkedin-in" />{" "}
        </a>{" "}
        <a href="https://www.facebook.com/Blockstream/" target="_blank">
          {" "}
          <i className="fab fa-facebook-f" />{" "}
        </a>{" "}
        <a href="https://t.me/blockstream" target="_blank">
          {" "}
          <i className="fab fa-telegram" />{" "}
        </a>{" "}
        <a href="https://github.com/Blockstream" target="_blank">
          {" "}
          <i className="fab fa-github" />{" "}
        </a>{" "}
        <a
          href="https://www.youtube.com/channel/UCZNt3fZazX9cwWcC9vjDJ4Q"
          target="_blank"
        >
          {" "}
          <i className="fab fa-youtube" />{" "}
        </a>
      </div>
    </div>
    <div id="footer">
      <div className="footer-sitemap">
        <div className="footer-sitemap_logo-grid">
          {" "}
          <img src="/img/icons/BLKS_LOGO.svg" alt="Blockstream" />
          <div className="social-desktop">
            <div className="social-links">
              {" "}
              <a href="https://twitter.com/Blockstream" target="_blank">
                {" "}
                <i className="fab fa-twitter" />{" "}
              </a>{" "}
              <a
                href="https://ca.linkedin.com/company/blockstream"
                target="_blank"
              >
                {" "}
                <i className="fab fa-linkedin-in" />{" "}
              </a>{" "}
              <a href="https://www.facebook.com/Blockstream/" target="_blank">
                {" "}
                <i className="fab fa-facebook-f" />{" "}
              </a>{" "}
              <a href="https://t.me/blockstream" target="_blank">
                {" "}
                <i className="fab fa-telegram" />{" "}
              </a>{" "}
              <a href="https://github.com/Blockstream" target="_blank">
                {" "}
                <i className="fab fa-github" />{" "}
              </a>{" "}
              <a
                href="https://www.youtube.com/channel/UCZNt3fZazX9cwWcC9vjDJ4Q"
                target="_blank"
              >
                {" "}
                <i className="fab fa-youtube" />{" "}
              </a>
            </div>
          </div>
          <div className="footer-sitemap_logo-grid_terms_privacy">
            <ul>
              <li>
                {" "}
                <a href="/terms">Terms</a>
              </li>
              <li>
                {" "}
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="footer-sitemap_logo-grid_copyright">
            {" "}
            © 2022 Blockstream Corporation Inc.
            <br /> All rights reserved.
          </div>
        </div>
        <div className="footer-sitemap_sitelinks">
          <div className="footer-sitemap_products">
            <h4 className="footer-title">Products</h4>
            <div className="footer-sitemap_products_twoColGrid collapse">
              <ul>
                <li>
                  {" "}
                  <a href="/liquid">Liquid Network</a>
                </li>
                <li>
                  {" "}
                  <a href="/finance/bmn">Blockstream Finance</a>
                </li>
                {/*<li> <a href="/aqua">AQUA Wallet</a></li>*/}
                <li>
                  {" "}
                  <a href="/amp">Blockstream AMP</a>
                </li>
                <li>
                  {" "}
                  <a href="/jade">Blockstream Jade</a>
                </li>
                <li>
                  {" "}
                  <a href="/green">Blockstream Green</a>
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <a href="/mining">Blockstream Mining</a>
                </li>
                <li>
                  {" "}
                  <a href="/satellite">Blockstream Satellite</a>
                </li>
                <li>
                  {" "}
                  <a href="https://blockstream.info/" target="_blank">
                    Blockstream Explorer
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/cryptofeed">Cryptocurrency Data Feed</a>
                </li>
                <li>
                  {" "}
                  <a href="/lightning">Lightning Network</a>
                </li>
                <li>
                  {" "}
                  <a href="/elements">Elements</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-sitemap_otherlinks">
            <div>
              <h4 className="footer-title">Developers</h4>
              <ul className="collapse">
                <li>
                  {" "}
                  <a href="https://medium.com/blockstream" target="_blank">
                    Engineering Blog
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://docs.blockstream.com/" target="_blank">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Company</h4>
              <ul className="collapse">
                <li>
                  {" "}
                  <a href="/research">Research</a>
                </li>
                <li>
                  {" "}
                  <a href="/about">About</a>
                </li>
                <li>
                  {" "}
                  <a href="/careers">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Resources</h4>
              <ul className="collapse">
                <li>
                  {" "}
                  <a href="https://help.blockstream.com/">Support</a>
                </li>
                <li>
                  {" "}
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  {" "}
                  <a href="/brand-assets">Brand Assets</a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.blockstreamscamdb.com/">Scam DB</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a id="back-to-top" className="show" />
  </footer>
</div>

    </div>
}



export default Research;
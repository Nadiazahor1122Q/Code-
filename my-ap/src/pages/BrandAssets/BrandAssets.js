import React from 'react';

const BrandAssets = () => {
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
                        className="header_primary_navigation_item_sub-list_item_link_block_title nav-link-active"
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
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
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
    style={{ backgroundImage: "url( /img/header/Artboard_2.png)" }}
  >
    <div className="secondary-header-artboard_banner">
      <div className="secondary-header-artboard_banner_title"> OUR BRAND</div>
      <div className="secondary-header-artboard_banner_desc">
        {" "}
        Blockstream Corporate <br />
        Brand Guidelines
      </div>
      <a
        href="/assets/downloads/blockstream_assets/blockstream_brand_assets.zip"
        className="gradient-button secondary-header-artboard_banner_link"
        download=""
      >
        {" "}
        Download Assets{" "}
      </a>
    </div>
  </div>
  <div className="brand-content">
    <div className="brand-content_elements fly">
      <div className="main-heading">Brand Elements</div>
      <div className="brand-content_elements_grid">
        {" "}
        <a href="#logo" className="brand-content_elements_grid_logo">
          <div className="brand-content_elements_grid_logo_title">LOGO</div>
          <img src="/img/brand_assets/logo.png" />{" "}
        </a>{" "}
        <a href="#colors" className="brand-content_elements_grid_color">
          <div className="brand-content_elements_grid_logo_title">COLOUR</div>
          <img src="/img/brand_assets/brand-colors.png" />{" "}
        </a>
      </div>
    </div>
    <div id="logo" />
    <div className="brand-content_color fly">
      <div className="brand-content_color_title"> Colour Logo</div>
      <div className="brand-content_color_desc">
        {" "}
        The Blockstream Corporate logo is an important expression of our brand
        identity. It should in no way be distorted or redrawn when applied to
        communications.
      </div>
      <div className="brand-content_color_grid fly">
        <div className="brand-content_color_grid_left">
          {" "}
          <img src="/img/brand_assets/logo.png" />
        </div>
        <div className="brand-content_color_grid_right">
          <div className="brand-content_color_grid_right_title">
            COLOUR LOGO ON DARK
          </div>
          <div className="brand-content_color_grid_right_rgb-flex">
            <div className="cell-blue" />
            <div className="cell">#00C3FF</div>
            <div className="cell">R=0, G=195, B=255</div>
            <div className="cell">C=63, M=0, Y=0, K=0</div>
          </div>
          <div className="brand-content_color_grid_right_rgb-flex">
            <div className="cell-lightblue" />
            <div className="cell">#7EE0FF</div>
            <div className="cell">R=126, G=224, B=255</div>
            <div className="cell">C=42, M=0, Y=1, K=0</div>
          </div>
          <div className="brand-content_color_grid_right_rgb-flex">
            <div className="cell-white" />
            <div className="cell">#FFFFFF</div>
            <div className="cell">R=255, G=255, B=255</div>
            <div className="cell">C=0, M=0, Y=0, K=0</div>
          </div>
        </div>
      </div>
      <div className="brand-content_color_grid grid-whitebg fly">
        <div className="brand-content_color_grid_left">
          {" "}
          <img src="/img/brand_assets/black_logo.png" />
        </div>
        <div className="brand-content_color_grid_right">
          <div className="brand-content_color_grid_right_title">
            COLOUR LOGO ON LIGHT
          </div>
          <div className="brand-content_color_grid_right_rgb-flex">
            <div className="cell-blue" />
            <div className="cell">#00C3FF</div>
            <div className="cell">R=0, G=195, B=255</div>
            <div className="cell">C=63, M=0, Y=0, K=0</div>
          </div>
          <div className="brand-content_color_grid_right_rgb-flex">
            <div className="cell-lightblue" />
            <div className="cell">#7EE0FF</div>
            <div className="cell">R=126, G=224, B=255</div>
            <div className="cell">C=42, M=0, Y=1, K=0</div>
          </div>
          <div className="brand-content_color_grid_right_rgb-flex">
            <div className="cell-black" />
            <div className="cell">#121217</div>
            <div className="cell">R=18, G=18, B=23</div>
            <div className="cell">C=76, M=70, Y=62, K=80</div>
          </div>
        </div>
      </div>
    </div>
    <div className="brand-content_grayscale fly">
      <div className="brand-content_grayscale_title"> Greyscale Logo</div>
      <div className="brand-content_grayscale_desc">
        {" "}
        A monochrome version of the logo is only acceptable when media
        reproduction is limited. In these cases, the logo may be reversed to
        white only or black only.
      </div>
      <div className="brand-content_grayscale_grid fly">
        <div className="brand-content_grayscale_grid_left">
          {" "}
          <img src="/img/brand_assets/all-white-logo.png" />
        </div>
        <div className="brand-content_grayscale_grid_right">
          <div className="brand-content_grayscale_grid_right_title">
            WHITE LOGO ON BLACK
          </div>
          <div className="brand-content_grayscale_grid_right_desc">
            {" "}
            This version can be used on dark colour backgrounds, as well as dark
            areas on photographs.
          </div>
        </div>
      </div>
      <div className="brand-content_grayscale_grid whitebg fly">
        <div className="brand-content_grayscale_grid_left">
          {" "}
          <img src="/img/brand_assets/all-black-logo.png" />
        </div>
        <div className="brand-content_grayscale_grid_right">
          <div className="brand-content_grayscale_grid_right_title">
            BLACK LOGO ON WHITE
          </div>
          <div className="brand-content_grayscale_grid_right_desc blacktext">
            {" "}
            This version can be used on light or white backgrounds.
          </div>
        </div>
      </div>
    </div>
    <div className="brand-content_alignment fly">
      <div className="brand-content_alignment_title">
        {" "}
        Alignment and Spacing
      </div>
      <div className="brand-content_alignment_desc">
        {" "}
        The icon in the Blockstream corporate logo may be separated from the
        full logo and used on its own. The individual icon must always be
        accompanied by the company name or our other product logos somewhere in
        the communications.
      </div>
      <div className="brand-content_alignment_grid fly">
        <div className="brand-content_alignment_grid_left">
          {" "}
          <img src="/img/brand_assets/logo_align_2.png" />
        </div>
        <div className="brand-content_alignment_grid_right">
          <div className="brand-content_alignment_grid_right_title">
            CLEAR SPACE AND POSITIONING
          </div>
          <div className="brand-content_alignment_grid_right_desc">
            {" "}
            The logo should always be surrounded by generous white space. The
            minimum required space around the logo is equivalent to the radius
            of the symbol.
          </div>
        </div>
      </div>
    </div>
    <div className="brand-content_incorrect fly">
      <div className="brand-content_incorrect_title"> Incorrect Usage</div>
      <div className="brand-content_incorrect_desc">
        {" "}
        Listed below are examples of incorrect usage of the Blockstream
        Corporate logo.
      </div>
      <div className="brand-content_incorrect_grid fly">
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_1.png" />
          <p>
            Do not change the size relationship of the symbol and the wordmark.
          </p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_2.png" />
          <p>Do not make the logo a single colour.</p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_3.png" />
          <p>Do not alter the colour of the symbol or the wordmark.</p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_4.png" />
          <p>Do not add effects such as drop shadows, gradients or glow.</p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_5.png" />
          <p>Do not use as a mask or holding shape for imagery.</p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_6.png" />
          <p>
            Do not place onto backgrounds with insufficient contrast to the
            logo.
          </p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_7.png" />
          <p>Do not rotate, skew, or shear.</p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_8.png" />
          <p>Do not distort proportions.</p>
        </div>
        <div className="incorrect_item">
          {" "}
          <img src="/img/brand_assets/incorrect_9.png" />
          <p>Do not add text closely to the logotype to create another logo.</p>
        </div>
      </div>
    </div>
    <div className="brand-content_partnerships fly">
      <div className="brand-content_partnerships_title"> Partnerships</div>
      <div className="brand-content_partnerships_desc">
        {" "}
        When pairing the Blockstream corporate logo or any other Blockstream
        logo with another logo, a thin line is used to separate the two logos.
      </div>
      <div className="brand-content_partnerships_grid fly">
        <div className="brand-content_partnerships_grid_left">
          {" "}
          <img src="/img/brand_assets/partnerships.png" />
        </div>
        <div className="brand-content_partnerships_grid_right">
          <div className="brand-content_partnerships_grid_right_title">
            VISUAL BALANCE
          </div>
          <div className="brand-content_partnerships_grid_right_desc">
            {" "}
            Ensure that each logo is visually balanced in terms of size.
          </div>
          <div className="brand-content_partnerships_grid_right_title">
            EQUAL DISTANCE
          </div>
          <div className="brand-content_partnerships_grid_right_desc">
            {" "}
            Ensure that the space between the logos and the line are visually
            equal on both sides of the line.
          </div>
        </div>
      </div>
    </div>
    <div id="colors" />
    <div className="brand-content_solid-colors fly">
      <div className="brand-content_solid-colors_title"> Solid Colours</div>
      <div className="brand-content_solid-colors_desc">
        {" "}
        A colour palette dominated by black and blue, and a wide variety of
        colours that represent each of our products.
      </div>
      <div className="brand-content_solid-colors_grid">
        <div className="brand-colors">
          <div className="brand-blue colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Blue</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 0 195 255</span> <span>CMYK - 62 0 0 0</span>{" "}
                <span>HEX - 00C3FF</span>
              </div>
            </div>
          </div>
          <div className="brand-black colorBg">
            <div className="colorContent">
              <div className="colorTitle">Black</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 0 0 0</span> <span>CMYK - 75 68 67 90</span>{" "}
                <span>HEX - 000000</span>
              </div>
            </div>
          </div>
          <div className="brand-white colorBg">
            <div className="colorContent">
              <div className="colorTitle">White</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 255 255 255</span> <span>CMYK - 0 0 0 0</span>{" "}
                <span>HEX - FFFFFF</span>
              </div>
            </div>
          </div>
          <div className="brand-gray colorBg">
            <div className="colorContent">
              <div className="colorTitle">Space Grey</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 17 19 22</span> <span>CMYK - 76 68 64 80</span>{" "}
                <span>HEX - 111316</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-content_solid-colors_grid_allColors fly">
        <div className="color-flex-container solidContainer">
          <div className="solid-liquid colorBg">
            <div className="colorContent">
              <div className="colorTitle">Liquid Network</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 44 204 191</span> <span>CMYK - 65 0 34 0</span>{" "}
                <span>HEX - 2CCCBF</span>
              </div>
            </div>
          </div>
          <div className="solid-amp colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream AMP</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 28 173 178</span> <span>CMYK - 75 9 33 0</span>{" "}
                <span>HEX - 1CADB2</span>
              </div>
            </div>
          </div>
          <div className="solid-aqua colorBg">
            <div className="colorContent">
              <div className="colorTitle">AQUA</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 70 180 165</span> <span>CMYK - 69 6 42 0</span>{" "}
                <span>HEX - 46B4A5</span>
              </div>
            </div>
          </div>
          <div className="solid-green colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Green</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 0 180 90</span> <span>CMYK - 79 0 90 0</span>{" "}
                <span>HEX - 00B45A</span>
              </div>
            </div>
          </div>
          <div className="solid-jade colorBg">
            <div className="colorContent">
              <div className="colorTitle">Jade</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 0 176 147</span> <span>CMYK - 78 4 55 0</span>{" "}
                <span>HEX - 00B093</span>
              </div>
            </div>
          </div>
          <div className="solid-mining colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Mining</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 221 31 72</span> <span>CMYK - 7 99 68 1</span>{" "}
                <span>HEX - DD1F48</span>
              </div>
            </div>
          </div>
          <div className="solid-satellite colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Satellite</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 53 141 229</span> <span>CMYK - 72 49 0 0</span>{" "}
                <span>HEX - 358DE5</span>
              </div>
            </div>
          </div>
          <div className="solid-energy colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Energy</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 50 178 132</span> <span>CMYK - 74 3 64 0</span>{" "}
                <span>HEX - 32B284</span>
              </div>
            </div>
          </div>
          <div className="solid-finance colorBg">
            <div className="colorContent">
              <div className="colorTitle">Finance</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 56 145 206</span> <span>CMYK - 73 32 0 0</span>{" "}
                <span>HEX - 3891CE</span>
              </div>
            </div>
          </div>
          <div className="solid-crypto colorBg">
            <div className="colorContent">
              <div className="colorTitle">Crypto Data Feed</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 0 195 255</span> <span>CMYK - 63 3 0 0</span>{" "}
                <span>HEX - 00C3FF</span>
              </div>
            </div>
          </div>
          <div className="solid-clight colorBg">
            <div className="colorContent">
              <div className="colorTitle">c-lightning</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 232 184 16</span> <span>CMYK - 7 14 99 0</span>{" "}
                <span>HEX - E8B810</span>
              </div>
            </div>
          </div>
          <div className="solid-elements colorBg">
            <div className="colorContent">
              <div className="colorTitle">Elements</div>
              <div className="colorValue">
                {" "}
                <span>RGB - 108 138 221</span> <span>CMYK - 58 43 0 0</span>{" "}
                <span>HEX - 6C8ADD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brand-content_gradients fly">
      <div className="brand-content_gradients_title"> Gradients</div>
      <div className="brand-content_gradients_desc">
        {" "}
        Gradients should be used sparingly throughout illustration, photography,
        and product.
      </div>
      <div className="brand-content_gradients_grid fly">
        <div className="color-flex-container gradContainer">
          <div className="grad-liquid colorBg">
            <div className="colorContent">
              <div className="colorTitle">Liquid Network</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#007687</span> <span>#039590</span> <span>#05B298</span>
              </div>
            </div>
          </div>
          <div className="grad-amp colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream AMP</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#006C7F</span> <span>#0E8D99</span> <span>#1CADB2</span>
              </div>
            </div>
          </div>
          <div className="grad-aqua colorBg">
            <div className="colorContent">
              <div className="colorTitle">AQUA</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#00354E</span> <span>#006D78</span> <span>#00A3A0</span>
              </div>
            </div>
          </div>
          <div className="grad-green colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Green</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#0D7749</span> <span>#069652</span> <span>#00B452</span>
              </div>
            </div>
          </div>
          <div className="grad-jade colorBg">
            <div className="colorContent">
              <div className="colorTitle">Jade</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#006D62</span> <span>#008F74</span> <span>#00AF85</span>
              </div>
            </div>
          </div>
          <div className="grad-mining colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Mining</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#9E003D</span> <span>#BB1147</span> <span>#D62151</span>
              </div>
            </div>
          </div>
          <div className="grad-satellite colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Satellite</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#3939C9</span> <span>#3560D6</span> <span>#3283E2</span>
              </div>
            </div>
          </div>
          <div className="grad-energy colorBg">
            <div className="colorContent">
              <div className="colorTitle">Blockstream Energy</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#05492C</span> <span>#186B49</span> <span>#00BE8B</span>
              </div>
            </div>
          </div>
          <div className="grad-finance colorBg">
            <div className="colorContent">
              <div className="colorTitle">Finance</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#1D4063</span> <span>#2A6596</span> <span>#6CC7F4</span>
              </div>
            </div>
          </div>
          <div className="grad-crypto colorBg">
            <div className="colorContent">
              <div className="colorTitle">Crypto Data Feed</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#0B9FE7</span> <span>#0BB6EB</span> <span>#00E0F2</span>
              </div>
            </div>
          </div>
          <div className="grad-clight colorBg">
            <div className="colorContent">
              <div className="colorTitle">c-lightning</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#EB9B21</span> <span>#F2B434</span> <span>#F9CD47</span>
              </div>
            </div>
          </div>
          <div className="grad-elements colorBg">
            <div className="colorContent">
              <div className="colorTitle">Elements</div>
              <div className="colorValue gradColors">
                {" "}
                <span>#5A4EB3</span> <span>#5A5FC0</span> <span>#5A6FCB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brand-content_about-grid fly">
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
        href="/assets/downloads/blockstream_assets/blockstream_brand_assets.zip"
        className="card-item"
        download=""
      >
        <div className="text">
          <h4 style={{ color: "" }}>
            Brand Assets{" "}
            <span>
              <i className="fas  fa-long-arrow-right" />
            </span>
          </h4>
          <p>Official logos and other resources.</p>
        </div>
        <div className="icon">
          {" "}
          <img
            className="press-footer-icon"
            src="/img/brand_assets/tools.png"
          />
        </div>
      </a>
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



export default BrandAssets;
import React from 'react';

const BlockstreamEnergy = () => {
    return <div>
           <div className="wrapper">
  <div id="mining-confirmation">
    <div className="submission-confirmation" id="submission-confirmation">
      {" "}
      Thank you for your submission!
    </div>
  </div>
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
                        className="product-subnav-grid-container_link nav-link-active"
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
                        <i className="fas fa-edit header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-newspaper header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-list-alt header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-toolbox header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-cog header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-code header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-book-open header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-building header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-user header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
    className="header-new_backdrop header-new_backdrop_energy"
    id="header-backdrop"
    data-page="energy"
  >
    {" "}
    {/* svgs are added as includes so they are compiled into the page and fully loaded when the page loads. */}{" "}
    {/*?xml version="1.0" encoding="utf-8"?*/}{" "}
    {/* Generator: Adobe Illustrator 25.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) */}{" "}
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 2550 1599"
      style={{ enableBackground: "new 0 0 2550 1599" }}
      xmlSpace="preserve"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            " .st0{fill:none;stroke:url(#SVGID_1_);stroke-width:1.75;} .st1{fill:none;stroke:url(#SVGID_2_);stroke-width:1.75;} .st2{fill:none;stroke:url(#SVGID_3_);stroke-width:1.75;} .st3{fill:none;stroke:url(#SVGID_4_);stroke-width:1.75;} .st4{fill:none;stroke:url(#SVGID_5_);stroke-width:1.75;} .st5{fill:none;stroke:url(#SVGID_6_);stroke-width:1.75;} .st6{fill:none;stroke:url(#SVGID_7_);stroke-width:1.75;} .st7{fill:none;stroke:url(#SVGID_8_);stroke-width:1.75;} .st8{fill:none;stroke:url(#SVGID_9_);stroke-width:1.75;}"
        }}
      />
      <g id="Layer_10">
        {" "}
        <g>
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="-2267.9807"
            y1="6774.7065"
            x2="-1578.5592"
            y2="6774.7065"
            gradientTransform="matrix(2.5268 -2.2367 2.3225 7.473627e-02 -9803.8379 -4002.071)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st0"
            points="389,1581.2 14.6,1569.1 1344,17.8 2535.4,56.2 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.3s ease-out 0.3s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_9">
        {" "}
        <g>
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="-1834.0851"
            y1="6159.0552"
            x2="-1144.6635"
            y2="6159.0552"
            gradientTransform="matrix(2.452 -1.8077 1.8798 0.3932 -6875.584 -4273.7949)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st1"
            points="358.4,1493.2 55.3,1429.9 1411.1,117.6 2375.4,319.3 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.32s ease-out 0.33s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_8">
        {" "}
        <g>
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="-1426.0923"
            y1="5449.4629"
            x2="-736.6707"
            y2="5449.4629"
            gradientTransform="matrix(2.3157 -1.4044 1.463 0.639 -4441.3359 -4131.0244)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st2"
            points="348.9,1404.2 113,1301.2 1448.3,223.2 2198.8,551 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.34s ease-out 0.36s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_7">
        {" "}
        <g>
          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="-1065.6047"
            y1="4650.9492"
            x2="-376.1832"
            y2="4650.9492"
            gradientTransform="matrix(2.1338 -1.0342 1.0802 0.8185 -2482.4558 -3656.8184)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st3"
            points="356.7,1317.1 182.6,1185.1 1460.1,330 2014.2,749.9 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.36s ease-out 0.39s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_6">
        {" "}
        <g>
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="-777.4752"
            y1="3773.0962"
            x2="-88.0536"
            y2="3773.0962"
            gradientTransform="matrix(1.9206 -0.7024 0.7367 0.9387 -969.1757 -2928.7004)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st4"
            points="378.4,1234.1 259.7,1082.8 1450.9,434.8 1828.8,916.3 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.38s ease-out 0.42s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_5">
        {" "}
        <g>
          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1="-589.6213"
            y1="2830.749"
            x2="99.8002"
            y2="2830.749"
            gradientTransform="matrix(1.6885 -0.4119 0.4357 1.0071 136.3718 -2017.317)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st5"
            points="410.7,1157.1 340.5,994.7 1425,534.5 1648.5,1051.1 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.4s ease-out 0.45s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_4">
        {" "}
        <g>
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="-532.681"
            y1="1844.6866"
            x2="156.7405"
            y2="1844.6866"
            gradientTransform="matrix(1.4485 -0.1638 0.1784 1.0315 877.448 -985.5631)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st6"
            points="450.5,1087.3 421.7,921 1386.5,627.1 1478,1156.2 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.42s ease-out 0.48s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_3">
        {" "}
        <g>
          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="-639.4825"
            y1="842.2193"
            x2="49.9391"
            y2="842.2193"
            gradientTransform="matrix(1.2093 4.231946e-02 -3.567425e-02 1.0194 1300.35 111.8872)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st7"
            points="495.2,1025.4 500.9,861.1 1338.8,711 1320.5,1234 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.44s ease-out 0.51s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
      <g id="Layer_2">
        {" "}
        <g>
          <linearGradient
            id="SVGID_9_"
            gradientUnits="userSpaceOnUse"
            x1="-944.3071"
            y1="-142.3226"
            x2="-254.8856"
            y2="-142.3226"
            gradientTransform="matrix(0.9781 0.208 -0.208 0.9781 1452.4064 1228.708)"
          >
            {" "}
            <stop offset="1.095822e-03" style={{ stopColor: "#186B49" }} />{" "}
            <stop offset="3.992811e-02" style={{ stopColor: "#115038" }} />{" "}
            <stop offset="8.513231e-02" style={{ stopColor: "#0A3729" }} />{" "}
            <stop offset="0.1266" style={{ stopColor: "#06281F" }} />{" "}
            <stop offset="0.1605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.7605" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.8424" style={{ stopColor: "#05231C" }} />{" "}
            <stop offset="0.868" style={{ stopColor: "#05271F" }} />{" "}
            <stop offset="0.8912" style={{ stopColor: "#053226" }} />{" "}
            <stop offset="0.9136" style={{ stopColor: "#054433" }} />{" "}
            <stop offset="0.9353" style={{ stopColor: "#055E46" }} />{" "}
            <stop offset="0.9567" style={{ stopColor: "#05805D" }} />{" "}
            <stop offset="0.9778" style={{ stopColor: "#05A97A" }} />{" "}
            <stop offset="0.9982" style={{ stopColor: "#05D89C" }} />{" "}
            <stop offset={1} style={{ stopColor: "#05DD9F" }} />{" "}
          </linearGradient>
          <polygon
            className="st8"
            points="542.5,972 576,814.3 1285.2,785.4 1178.5,1287.2 "
            style={{
              transformOrigin: "center center",
              animation:
                "0.46s ease-out 0.54s 1 normal forwards running energy_transform_anim"
            }}
          />{" "}
        </g>{" "}
      </g>{" "}
    </svg>
  </div>
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
                        <div className="header_primary_navigation_item_sub-list_item_link">
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
                        className="product-subnav-grid-container_link nav-link-active"
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
                        <i className="fas fa-edit header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-newspaper header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-list-alt header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-toolbox header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-cog header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-code header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-book-open header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-building header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
                        <i className="fas fa-user header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
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
          <div className="language-button" id="language-selector" />
        </li>
      </ul>
    </nav>
  </div>
  <header className="header-new header-new_energy">
    <div className="header-new_intro">
      <div className="header-new_intro_left">
        <h2 className="header-new_intro_title">
          Instant energy demand from the Bitcoin network
        </h2>
        <p className="header-new_intro_text">
          Connect Blockstream's modular Bitcoin mining units to your power
          generation facilities and create scalable energy demand.
        </p>
        <div className="header-new_intro_button_holder">
          <div className="gradient-holder ">
            {" "}
            <a
              href=" #mining-join-waitlist "
              className=" gradient-button gradient-button_energy "
            >
              {" "}
              Contact Sales{" "}
            </a>
          </div>
          <div className=" simple-button simple-button_ ">
            {" "}
            <a href=" "> </a>
          </div>
        </div>
      </div>
      <div className="header-new_intro_right">
        <div className="header-new_intro_right_logo header-new_intro_right_logo_energy">
          {" "}
          {/*?xml version="1.0" encoding="UTF-8"?*/}{" "}
          <svg
            width="399px"
            height="auto"
            viewBox="0 0 828 238"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>Slice 1</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g
                id="energy_for_web"
                transform="translate(0.200000, 0.400000)"
                fillRule="nonzero"
              >
                {" "}
                <g id="Group" transform="translate(231.300000, 15.500000)">
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="64.7 117.1 64.7 100.1 0.1 100.1 0.1 204.8 64.7 204.8 64.7 187.9 20.3 187.9 20.3 159 60.2 159 60.2 142.2 20.3 142.2 20.3 117.1"
                  />
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="178.6 204.8 178.6 100.1 159.5 100.1 159.5 168.2 117 100.1 100.2 100.1 100.2 204.8 119.3 204.8 119.3 137.6 161.7 204.8"
                  />
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="279.4 117.1 279.4 100.1 214.7 100.1 214.7 204.8 279.4 204.8 279.4 187.9 234.9 187.9 234.9 159 274.8 159 274.8 142.2 234.9 142.2 234.9 117.1"
                  />
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="573 100.1 553.6 140.4 534.3 100.1 510.9 100.1 543.5 162.1 543.5 204.8 563.7 204.8 563.7 161.8 596.3 100.1"
                  />{" "}
                  <g transform="translate(0.000000, 0.000000)" fill="#FFFFFF">
                    <path
                      d="M35.3,34.3 C37.5,36.3 38.7,39.3 38.7,43.3 C38.7,48.9 36.7,52.9 32.8,55.2 C28.8,57.6 23.4,58.8 16.2,58.8 L-5.68434189e-14,58.8 L-5.68434189e-14,5.1 L14.1,5.1 C28.9,5.1 36.3,9.7 36.3,18.8 C36.4,21.6 35.4,24.5 33.4,26.5 C31.5,28.5 29,29.9 26.3,30.4 C29.7,30.9 32.7,32.3 35.3,34.3 Z M10.3,27.2 L16.6,27.2 C19,27.3 21.4,26.7 23.4,25.3 C25.1,23.9 26,21.8 25.9,19.6 C26.1,17.4 25.1,15.4 23.3,14.2 C20.8,13 18,12.5 15.2,12.7 L10.4,12.7 L10.3,27.2 L10.3,27.2 Z M24.9,49.4 C26.9,48.3 27.9,46.1 27.9,42.9 C28.2,40.3 27,37.9 25.1,36.3 C22.8,34.8 20.1,34.1 17.4,34.3 L10.3,34.3 L10.3,51.1 L16.3,51.1 C19.3,51.3 22.2,50.7 24.9,49.4 L24.9,49.4 Z"
                      id="Shape"
                    />
                    <path
                      d="M57.5,51.3 C58,51.8 58.6,52.1 59.3,52 C60.1,52 60.9,51.9 61.6,51.6 L63.7,58.6 C61.5,59.5 59,60 56.6,60 C54,60.2 51.3,59.2 49.5,57.3 C47.7,55.1 46.8,52.3 47,49.4 L47,1.1 L57,-5.32907052e-15 L57,48.8 C56.9,49.7 57.1,50.5 57.5,51.3 Z"
                      id="Path"
                    />
                    <path
                      d="M100.6,22.3 C104,26.1 105.7,31.5 105.7,38.2 C105.8,42.1 105,46 103.4,49.6 C101.9,52.8 99.6,55.4 96.7,57.3 C93.6,59.1 90,60.1 86.3,60 C80.2,60 75.5,58.1 72,54.2 C68.5,50.3 66.9,45 66.9,38.2 C66.8,34.3 67.6,30.4 69.2,26.8 C70.7,23.6 73,21 75.9,19.1 C79.1,17.3 82.6,16.3 86.3,16.4 C92.5,16.5 97.1,18.4 100.6,22.3 Z M77.3,38.2 C77.3,43.1 78,46.6 79.5,49 C81,51.2 83.5,52.6 86.2,52.4 C88.9,52.5 91.4,51.2 92.9,48.9 C94.4,46.6 95.1,43 95.1,38.1 C95.1,33.2 94.4,29.7 92.9,27.4 C91.5,25.2 89,23.8 86.3,24 C80.4,24.1 77.4,28.8 77.3,38.2 L77.3,38.2 L77.3,38.2 Z"
                      id="Shape"
                    />
                    <path
                      d="M138.8,17.7 C141,18.6 143.1,19.7 144.9,21.3 L140.4,27.4 C139.2,26.5 137.9,25.7 136.4,25.1 C135,24.6 133.6,24.4 132.1,24.4 C125.9,24.4 122.8,29.1 122.8,38.5 C122.8,43.3 123.6,46.7 125.2,48.8 C126.8,50.9 129.4,52 132.1,51.9 C133.5,51.9 134.9,51.7 136.2,51.2 C137.7,50.5 139,49.7 140.3,48.8 L144.9,55.3 C141.1,58.4 136.5,60.1 131.6,60.1 C128,60.2 124.5,59.3 121.3,57.5 C118.4,55.7 116,53.1 114.6,50.1 C113,46.5 112.2,42.6 112.3,38.7 C112.2,34.7 113,30.8 114.6,27.2 C116.1,24 118.4,21.3 121.3,19.5 C124.3,17.6 127.9,16.7 131.5,16.7 C134,16.5 136.5,16.9 138.8,17.7 Z"
                      id="Path"
                    />
                    <path
                      d="M152.2,58.8 L152.2,1.2 L162.2,0.1 L162.2,58.8 L152.2,58.8 Z M188.1,58.8 L176.7,58.8 L162.5,36.3 L176.3,17.6 L186.8,17.6 L173.1,35.7 L188.1,58.8 Z"
                      id="Shape"
                    />
                    <path
                      d="M221.3,21.4 L217.4,27.4 C214.4,25.2 210.9,24 207.3,23.9 C205.7,23.8 204,24.2 202.5,25 C201.4,25.7 200.8,26.8 200.9,28 C200.9,28.9 201.1,29.6 201.6,30.3 C202.3,31.1 203.2,31.7 204.1,32 C205.9,32.7 207.7,33.3 209.5,33.8 C213.1,34.6 216.6,36.2 219.4,38.6 C221.6,40.8 222.8,43.7 222.6,46.8 C222.7,50.6 220.8,54.3 217.7,56.4 C214.1,58.8 209.7,60 205.4,59.9 C202.2,60 199.1,59.4 196.1,58.4 C193.5,57.5 191,56 188.9,54.1 L193.9,48.4 C197,51 200.9,52.5 205,52.5 C206.8,52.6 208.8,52.1 210.3,51.2 C211.6,50.5 212.3,49.2 212.3,47.7 C212.4,46.7 212.1,45.7 211.6,44.8 C210.9,43.9 210,43.3 209,42.9 C207.1,42.1 205,41.4 203.1,40.9 C199.6,40.2 196.4,38.5 193.8,36.1 C191.8,34.1 190.8,31.2 190.8,28.4 C190.7,26.2 191.5,24 192.8,22.2 C194.3,20.3 196.2,18.8 198.4,17.9 C201,16.8 203.8,16.3 206.6,16.4 C211.9,16.3 217.1,18.1 221.3,21.4 Z"
                      id="Path"
                    />
                    <path
                      d="M249.4,59.2 C247.6,59.7 245.8,60 243.9,60 C240.5,60.2 237.1,58.9 234.6,56.6 C232.5,54.4 231.5,51 231.5,46.6 L231.5,24.9 L225,24.9 L225,17.6 L231.5,17.6 L231.5,8.5 L241.5,7.3 L241.5,17.6 L251.1,17.6 L250.1,24.8 L241.5,24.8 L241.5,46.2 C241.4,47.7 241.7,49.2 242.6,50.6 C243.4,51.5 244.6,52.1 245.9,51.9 C247.6,51.8 249.3,51.3 250.8,50.4 L254.3,56.9 C252.8,57.9 251.1,58.7 249.4,59.2 Z"
                      id="Path"
                    />
                    <path
                      d="M284.3,17.1 L282.6,26.7 C281.4,26.4 280.2,26.2 278.9,26.2 C276.7,26.1 274.5,27.1 273.2,28.8 C271.5,31.2 270.4,33.9 269.8,36.9 L269.8,58.7 L259.9,58.7 L259.9,17.6 L268.5,17.6 L269.4,25.7 C270.2,23.1 271.6,20.8 273.7,18.9 C275.5,17.4 277.8,16.5 280.2,16.5 C281.6,16.5 283,16.7 284.3,17.1 Z"
                      id="Path"
                    />
                    <path
                      d="M323.3,41.2 L297.5,41.2 C297.8,45.2 299,48.1 300.6,49.8 C302.4,51.6 305,52.5 307.5,52.4 C309.3,52.4 311,52.1 312.6,51.5 C314.4,50.8 316.2,49.9 317.7,48.7 L321.8,54.4 C317.5,58 312.2,59.9 306.6,59.9 C300.3,59.9 295.5,58 292.1,54.2 C288.7,50.4 287,45.2 287,38.5 C286.9,34.6 287.7,30.8 289.2,27.1 C290.5,23.9 292.7,21.2 295.5,19.2 C298.4,17.3 301.8,16.2 305.3,16.4 C311,16.4 315.5,18.2 318.7,21.9 C321.9,25.6 323.5,30.7 323.5,37.2 C323.6,37.7 323.5,39.1 323.3,41.2 Z M313.7,34.3 C313.7,27.1 311.1,23.5 305.7,23.5 C303.5,23.4 301.3,24.4 300,26.2 C298.6,28 297.8,30.8 297.6,34.8 L313.8,34.8 L313.7,34.3 L313.7,34.3 Z"
                      id="Shape"
                    />
                    <path
                      d="M363.8,51.4 C364.4,52.3 365.2,52.9 366.2,53.2 L364.1,59.8 C362.1,59.7 360.1,59.1 358.4,58.2 C356.8,57.1 355.6,55.6 355,53.8 C353.7,55.8 351.9,57.4 349.8,58.4 C347.6,59.5 345.2,60 342.7,59.9 C339.1,60.1 335.6,58.8 333,56.4 C330.6,54 329.3,50.7 329.4,47.2 C329.2,43.2 331,39.3 334.3,37 C337.5,34.6 342.2,33.4 348.2,33.4 L353.3,33.4 L353.3,31.1 C353.5,29.1 352.8,27.1 351.5,25.6 C349.8,24.4 347.7,23.9 345.6,24.1 C341.9,24.2 338.2,25 334.7,26.3 L332.4,19.5 C337.2,17.6 342.2,16.6 347.3,16.5 C357.9,16.5 363.1,21.2 363.1,30.6 L363.1,47.9 C363,49.1 363.2,50.3 363.8,51.4 Z M353.3,47.6 L353.3,39.2 L349.1,39.2 C342.7,39.2 339.5,41.6 339.5,46.4 C339.4,48 339.9,49.8 341,51 C342.1,52.2 343.7,52.8 345.4,52.6 C348.7,52.6 351.9,50.7 353.3,47.6 L353.3,47.6 Z"
                      id="Shape"
                    />
                    <path
                      d="M426.7,19.8 C428.8,22.4 429.9,25.6 429.7,28.9 L429.7,58.7 L419.7,58.7 L419.7,30.5 C419.7,26.1 418.2,23.9 415.2,23.9 C413.7,23.9 412.2,24.4 411,25.4 C409.5,26.7 408.4,28.3 407.4,30 L407.4,58.7 L397.4,58.7 L397.4,30.5 C397.4,26.1 395.9,23.9 392.8,23.9 C391.2,23.9 389.8,24.4 388.6,25.4 C387.1,26.7 386,28.3 385,30 L385,58.7 L375,58.7 L375,17.6 L383.6,17.6 L384.4,22.9 C387,18.8 391.5,16.4 396.3,16.4 C398.5,16.3 400.7,17 402.5,18.2 C404.3,19.5 405.7,21.2 406.3,23.3 C407.7,21.2 409.5,19.5 411.7,18.1 C413.8,16.9 416.2,16.3 418.6,16.3 C421.8,16.3 424.7,17.5 426.7,19.8 Z"
                      id="Path"
                    />{" "}
                  </g>
                  <path
                    d="M364.3,204.8 L386.7,204.8 L360.3,161 L361,160.9 C363.3,160.4 365.4,159.9 367.3,159.3 C379.1,155 386.2,144.8 386.2,132 C386.2,113.3 372.3,100.2 352.4,100.2 L311.5,100.2 L311.5,204.9 L331,204.9 L331,162.7 L339.4,162.7 L364.3,204.8 Z M331.2,117.4 L351.2,117.4 C360.4,117.4 366.8,123.3 366.8,131.9 C366.8,140.5 360.4,146.4 351.2,146.4 L331.2,146.4 L331.2,117.4 Z"
                    id="Shape"
                    fill="#32B284"
                  />
                  <path
                    d="M459.5,205.9 C459.6,205.9 459.7,205.9 459.8,205.9 C460,205.8 460.1,205.8 460.3,205.8 C471.3,204.9 480.4,200.8 487.6,193.6 C494.8,186.4 497.6,177.4 497.6,161.5 L497.6,146.7 L458.8,146.7 L458.8,162.5 L478.5,162.5 L478.5,167.4 C478.5,173.9 476.8,178.9 473.4,182.3 C469.1,186.7 464.1,187.9 460.2,188.5 C458.6,188.8 457.1,188.9 455.6,188.9 C442.1,188.9 428.5,177.6 428.5,152.5 C428.5,134.3 436.6,115.9 454.8,115.9 C456.1,115.9 457.4,116 458.8,116.2 C466,117.4 474.5,122.1 477.5,130.1 L493.5,120.7 C490.9,115.8 481.6,101.5 459.7,99.3 L458.9,99.2 C457.3,99.1 455.8,99 454.4,99 C451,99 447.6,99.4 444.2,100.2 L443.5,100.4 C442.8,100.6 442.2,100.7 441.6,100.9 C421.1,106.7 408.7,126.6 409.1,152.8 C409.1,179.3 421.8,199.2 442.4,204.7 L442.7,204.8 C443.2,204.9 443.6,205 444,205.1 L444.2,205.2 C445.5,205.5 446.9,205.8 448.2,205.9 L448.5,206 C452.5,206.5 455.4,206.5 459.1,206.2 C459.4,205.9 459.4,205.9 459.5,205.9 Z"
                    id="Path"
                    fill="#32B284"
                  />{" "}
                </g>{" "}
                <g id="Group" transform="translate(0.000000, 0.000000)">
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="-2.83106871e-15 150.6 -2.83106871e-15 174.6 108.5 237.2 108.5 183.1"
                  />
                  <polygon
                    id="Path"
                    fill="#186B49"
                    points="108.5 237.2 162.7 205.9 162.7 165.6 108.5 183.1"
                  />
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="-2.83106871e-15 86.6 -2.83106871e-15 62.6 108.5 -5.66213743e-15 108.5 54.1"
                  />
                  <polygon
                    id="Path"
                    fill="#FFFFFF"
                    points="108.5 -5.66213743e-15 162.7 31.3 162.7 71.6 108.5 54.1"
                  />
                  <polygon
                    id="Path"
                    fill="#32B284"
                    points="-2.83106871e-15 131.4 -2.83106871e-15 105.9 108.5 78.2 108.5 159.1"
                  />
                  <polygon
                    id="Path"
                    fill="#186B49"
                    points="108.5 159.1 162.7 142.9 162.7 93.4 108.5 78.2"
                  />{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
        </div>
      </div>
    </div>
  </header>
  <div className="mining_energy">
    <div className="headline-row fly reverse headline-row_spacing_top-large ">
      <div className="headline-row_block">
        <div className="headline-row_block_content">
          {" "}
          <span className="headline-row_block_content_title">
            Create supply, <br />
            control demand
          </span>
          <div className="headline-row_block_content_text">
            {" "}
            Demand from energy grids fluctuates through the day, but energy
            production is not easily adjusted on the fly. This leads to energy
            waste and suboptimal energy capacity. With Blockstream Energy, you
            can maximize your energy production potential by providing scalable
            baseload demand direct from the Bitcoin network.
          </div>
        </div>
      </div>
      <div className="headline-row_icon">
        {" "}
        <img
          className="headline-row_image-size_large"
          src="/img/img/mining_create_supply_control_demand.svg"
          alt="Mining"
        />
      </div>
    </div>
    <div className="headline-row fly headline-row_spacing_top-large ">
      <div className="headline-row_block">
        <div className="headline-row_block_content">
          {" "}
          <span className="headline-row_block_content_title">
            Supporting renewables
          </span>
          <div className="headline-row_block_content_text">
            {" "}
            Blockstream Energy can be operated with consistent, high load
            factors or powered only when needed via automated demand response,
            making them the perfect companion for alternative energy projects
            such as solar or wind.
          </div>
        </div>
      </div>
      <div className="headline-row_icon">
        {" "}
        <img
          className="headline-row_image-size_large"
          src="/img/img/mining_supporting_renewables.svg"
          alt="Mining"
        />
      </div>
    </div>
    <div className="headline-row fly reverse headline-row_spacing_top-large ">
      <div className="headline-row_block">
        <div className="headline-row_block_content">
          {" "}
          <span className="headline-row_block_content_title">
            Unlock stranded energy
          </span>
          <div className="headline-row_block_content_text">
            {" "}
            Energy resources are often isolated far away from where they can be
            fully utilized. With Blockstream Energy, we move the demand to you.
            Our Blockstream Satellite connection also ensures that you can
            connect to the Bitcoin network regardless of the quality of the
            local internet connection.
          </div>
        </div>
      </div>
      <div className="headline-row_icon">
        {" "}
        <img
          className="headline-row_image-size_large"
          src="/img/img/mining_unlock.svg"
          alt="Mining"
        />
      </div>
    </div>
    <div className="mining_energy_section2">
      <h3 className="title-section">
        The Modular Mining Unit
        <br /> (MMU)
      </h3>
      <img src="/img/img/mining_modular.png" alt="mmu" />
    </div>
    <div className="mining_energy_section3">
      <div className="mining_energy_section3_card">
        <div className="mining_energy_section3_card_icon">
          {" "}
          <img src="/img/img/mining_icon_standard.svg" alt="mining-icon" />
        </div>
        <div className="mining_energy_section3_card_title">
          {" "}
          Standard form factor
        </div>
        <div className="mining_energy_section3_card_text">
          {" "}
          Standard 40-foot shipping container dimensions enable easy global
          transport and simple deployments.
        </div>
      </div>
      <div className="mining_energy_section3_card">
        <div className="mining_energy_section3_card_icon">
          {" "}
          <img src="/img/img/mining_icon_plug.svg" alt="mining-icon" />
        </div>
        <div className="mining_energy_section3_card_title"> Plug-and-play</div>
        <div className="mining_energy_section3_card_text">
          {" "}
          Fully self-contained and ready to go. Just connect to power and be
          fully operational on the day of delivery.
        </div>
      </div>
      <div className="mining_energy_section3_card">
        <div className="mining_energy_section3_card_icon">
          {" "}
          <img src="/img/img/mining_icon_unlimited.svg" alt="mining-icon" />
        </div>
        <div className="mining_energy_section3_card_title">
          {" "}
          Unlimited scale
        </div>
        <div className="mining_energy_section3_card_text">
          {" "}
          Each MMU consumes one megawatt of power with a load factor greater
          than 95%. Deploy as many MMUs as you need.
        </div>
      </div>
      <div className="mining_energy_section3_card">
        <div className="mining_energy_section3_card_icon">
          {" "}
          <img src="/img/img/mining_icon_fully.svg" alt="mining-icon" />
        </div>
        <div className="mining_energy_section3_card_title">
          {" "}
          Fully autonomous
        </div>
        <div className="mining_energy_section3_card_text">
          {" "}
          Automatically connects to our operations center for remote management
          of all internal systems.
        </div>
      </div>
    </div>
    <div className="mining_energy_section4 fly">
      <h3 className="title-section">How it works</h3>
      <div className="mining_energy_section4_container fly">
        <div className="mining_energy_section4_container_card">
          <div className="mining_energy_section4_container_card_icon">
            {" "}
            <img src="/img/img/mining_icon_equipment.svg" alt="mining-icon" />
          </div>
          <div className="mining_energy_section4_container_card_title">
            {" "}
            Equipment lease
          </div>
          <div className="mining_energy_section4_container_card_text">
            {" "}
            You lease our Modular Mining Units (MMU) and we sign a power
            purchase agreement for all electricity consumed by the MMUs.
          </div>
        </div>
        <div className="mining_energy_section4_container_card">
          <div className="mining_energy_section4_container_card_icon">
            {" "}
            <img src="/img/img/mining_icon_install.svg" alt="mining-icon" />
          </div>
          <div className="mining_energy_section4_container_card_title">
            {" "}
            Installation
          </div>
          <div className="mining_energy_section4_container_card_text">
            {" "}
            We help deploy the MMU at your power generation facility, connecting
            the units to onsite power and the Bitcoin network.
          </div>
        </div>
        <div className="mining_energy_section4_container_card">
          <div className="mining_energy_section4_container_card_icon">
            {" "}
            <img src="/img/img/mining_icon_supply.svg" alt="mining-icon" />
          </div>
          <div className="mining_energy_section4_container_card_title">
            {" "}
            Supply power
          </div>
          <div className="mining_energy_section4_container_card_text">
            {" "}
            Supply power to the MMUs, the grid, or a mix of both, adjusting as
            necessary to ensure all energy capacity is consistently utilized.
          </div>
        </div>
        <div className="mining_energy_section4_container_card">
          <div className="mining_energy_section4_container_card_icon">
            {" "}
            <img src="/img/img/mining_icon_support.svg" alt="mining-icon" />
          </div>
          <div className="mining_energy_section4_container_card_title">
            {" "}
            Support
          </div>
          <div className="mining_energy_section4_container_card_text">
            {" "}
            We monitor the MMUs 24/7 to ensure they are always generating
            reliable ROI, with onsite support delivered as needed.
          </div>
        </div>
      </div>
    </div>
    <div className="mining_energy_section5">
      <h3 className="title-section">Service &amp; Support</h3>
      <div className="mining_energy_section5_container fly">
        <div className="mining_energy_section5_container_card">
          <div className="mining_energy_section5_container_card_icon">
            {" "}
            24x7
          </div>
          <div className="mining_energy_section5_container_card_title">
            {" "}
            Active monitoring
          </div>
          <div className="mining_energy_section5_container_card_text">
            {" "}
            To ensure maximum reliability and fast response times in the event
            of an issue.
          </div>
        </div>
        <div className="mining_energy_section5_container_card">
          <div className="mining_energy_section5_container_card_icon"> 95%</div>
          <div className="mining_energy_section5_container_card_title">
            {" "}
            Load factor
          </div>
          <div className="mining_energy_section5_container_card_text">
            {" "}
            MMUs are designed to operate at a stable and consistent load factor
            exceeding 95%.
          </div>
        </div>
        <div className="mining_energy_section5_container_card">
          <div className="mining_energy_section5_container_card_icon">
            {" "}
            24 hr
          </div>
          <div className="mining_energy_section5_container_card_title">
            {" "}
            Installation service
          </div>
          <div className="mining_energy_section5_container_card_text">
            {" "}
            We can install and have MMUs operational within 24 hours of
            delivery.
          </div>
        </div>
        <div className="mining_energy_section5_container_card">
          <div className="mining_energy_section5_container_card_icon">
            {" "}
            72 hr
          </div>
          <div className="mining_energy_section5_container_card_title">
            {" "}
            Equipment replacement
          </div>
          <div className="mining_energy_section5_container_card_text">
            {" "}
            Equipment failures replaced within 72 hours to minimize downtime.
          </div>
        </div>
        <div className="mining_energy_section5_container_card">
          <div className="mining_energy_section5_container_card_icon">
            {" "}
            72 hr
          </div>
          <div className="mining_energy_section5_container_card_title">
            {" "}
            Onsite service
          </div>
          <div className="mining_energy_section5_container_card_text">
            {" "}
            Engineering team to arrive onsite within 72 hours of detecting a
            problem.
          </div>
        </div>
        <div className="mining_energy_section5_container_card">
          <div className="mining_energy_section5_container_card_icon">
            {" "}
            90 days
          </div>
          <div className="mining_energy_section5_container_card_title">
            {" "}
            Periodic maintenance
          </div>
          <div className="mining_energy_section5_container_card_text">
            {" "}
            Regular maintenance and upgrades throughout the lifetime of the
            contract.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mining_energy_join fly" id="mining-join-waitlist">
    <div className="product-form product-form-energy">
      <div className="product-form_block">
        <div className="product-form_block_title">Contact our sales team</div>
        <div className="product-form_block_text">
          Want to learn more about how you can use Bitcoin to support your
          company’s energy production? Leave us your details and our sales team
          will be in touch.
        </div>
      </div>
      <div className="product-form_container">
        {" "}
        <div className="hbspt-form" id="hbspt-form-1648452656222-8853619104">
          <form
            noValidate=""
            acceptCharset="UTF-8"
            action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/5867842/89936627-2cd0-4b36-b37f-cb2f7964900e"
            encType="multipart/form-data"
            id="hsForm_89936627-2cd0-4b36-b37f-cb2f7964900e"
            method="POST"
            className="hs-form stacked hs-form-private hsForm_89936627-2cd0-4b36-b37f-cb2f7964900e hs-form-89936627-2cd0-4b36-b37f-cb2f7964900e hs-form-89936627-2cd0-4b36-b37f-cb2f7964900e_ce4e7c22-20fd-4a07-9597-604e0a24a3c6"
            data-form-id="89936627-2cd0-4b36-b37f-cb2f7964900e"
            data-portal-id={5867842}
            target="target_iframe_89936627-2cd0-4b36-b37f-cb2f7964900e"
            data-reactid=".hbspt-forms-0"
          >
            <div
              className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"
              data-reactid=".hbspt-forms-0.1:$0"
            >
              <label
                id="label-firstname-89936627-2cd0-4b36-b37f-cb2f7964900e"
                className=""
                placeholder="Enter your First name"
                htmlFor="firstname-89936627-2cd0-4b36-b37f-cb2f7964900e"
                data-reactid=".hbspt-forms-0.1:$0.0"
              >
                <span data-reactid=".hbspt-forms-0.1:$0.0.0">First name</span>
              </label>
              <legend
                className="hs-field-desc"
                style={{ display: "none" }}
                data-reactid=".hbspt-forms-0.1:$0.1"
              />
              <div
                className="input"
                data-reactid=".hbspt-forms-0.1:$0.$firstname"
              >
                <input
                  id="firstname-89936627-2cd0-4b36-b37f-cb2f7964900e"
                  className="hs-input"
                  type="text"
                  name="firstname"
                  defaultValue=""
                  placeholder=""
                  autoComplete="given-name"
                  data-reactid=".hbspt-forms-0.1:$0.$firstname.0"
                  inputMode="text"
                />
              </div>
            </div>
            <div
              className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"
              data-reactid=".hbspt-forms-0.1:$1"
            >
              <label
                id="label-lastname-89936627-2cd0-4b36-b37f-cb2f7964900e"
                className=""
                placeholder="Enter your Last name"
                htmlFor="lastname-89936627-2cd0-4b36-b37f-cb2f7964900e"
                data-reactid=".hbspt-forms-0.1:$1.0"
              >
                <span data-reactid=".hbspt-forms-0.1:$1.0.0">Last name</span>
              </label>
              <legend
                className="hs-field-desc"
                style={{ display: "none" }}
                data-reactid=".hbspt-forms-0.1:$1.1"
              />
              <div
                className="input"
                data-reactid=".hbspt-forms-0.1:$1.$lastname"
              >
                <input
                  id="lastname-89936627-2cd0-4b36-b37f-cb2f7964900e"
                  className="hs-input"
                  type="text"
                  name="lastname"
                  defaultValue=""
                  placeholder=""
                  autoComplete="family-name"
                  data-reactid=".hbspt-forms-0.1:$1.$lastname.0"
                  inputMode="text"
                />
              </div>
            </div>
            <div
              className="hs_email hs-email hs-fieldtype-text field hs-form-field"
              data-reactid=".hbspt-forms-0.1:$2"
            >
              <label
                id="label-email-89936627-2cd0-4b36-b37f-cb2f7964900e"
                className=""
                placeholder="Enter your Email"
                htmlFor="email-89936627-2cd0-4b36-b37f-cb2f7964900e"
                data-reactid=".hbspt-forms-0.1:$2.0"
              >
                <span data-reactid=".hbspt-forms-0.1:$2.0.0">Email</span>
                <span
                  className="hs-form-required"
                  data-reactid=".hbspt-forms-0.1:$2.0.1"
                >
                  *
                </span>
              </label>
              <legend
                className="hs-field-desc"
                style={{ display: "none" }}
                data-reactid=".hbspt-forms-0.1:$2.1"
              />
              <div className="input" data-reactid=".hbspt-forms-0.1:$2.$email">
                <input
                  id="email-89936627-2cd0-4b36-b37f-cb2f7964900e"
                  className="hs-input"
                  type="email"
                  name="email"
                  required=""
                  placeholder=""
                  defaultValue=""
                  autoComplete="email"
                  data-reactid=".hbspt-forms-0.1:$2.$email.0"
                  inputMode="email"
                />
              </div>
            </div>
            <div
              className="hs_company hs-company hs-fieldtype-text field hs-form-field"
              data-reactid=".hbspt-forms-0.1:$3"
            >
              <label
                id="label-company-89936627-2cd0-4b36-b37f-cb2f7964900e"
                className=""
                placeholder="Enter your Company"
                htmlFor="company-89936627-2cd0-4b36-b37f-cb2f7964900e"
                data-reactid=".hbspt-forms-0.1:$3.0"
              >
                <span data-reactid=".hbspt-forms-0.1:$3.0.0">Company</span>
              </label>
              <legend
                className="hs-field-desc"
                style={{ display: "none" }}
                data-reactid=".hbspt-forms-0.1:$3.1"
              />
              <div
                className="input"
                data-reactid=".hbspt-forms-0.1:$3.$company"
              >
                <input
                  id="company-89936627-2cd0-4b36-b37f-cb2f7964900e"
                  className="hs-input"
                  type="text"
                  name="company"
                  defaultValue=""
                  placeholder=""
                  autoComplete="organization"
                  data-reactid=".hbspt-forms-0.1:$3.$company.0"
                  inputMode="text"
                />
              </div>
            </div>
            <div
              className="hs_contact_type hs-contact_type hs-fieldtype-checkbox field hs-form-field"
              style={{ display: "none" }}
              data-reactid=".hbspt-forms-0.1:$4"
            >
              <label
                id="label-contact_type-89936627-2cd0-4b36-b37f-cb2f7964900e"
                className=""
                placeholder="Enter your Contact Type"
                htmlFor="contact_type-89936627-2cd0-4b36-b37f-cb2f7964900e"
                data-reactid=".hbspt-forms-0.1:$4.0"
              >
                <span data-reactid=".hbspt-forms-0.1:$4.0.0">Contact Type</span>
              </label>
              <legend
                className="hs-field-desc"
                style={{ display: "none" }}
                data-reactid=".hbspt-forms-0.1:$4.1"
              />
              <div
                className="input"
                data-reactid=".hbspt-forms-0.1:$4.$contact_type"
              >
                <input
                  name="contact_type"
                  className="hs-input"
                  type="hidden"
                  defaultValue="Energy"
                  data-reactid=".hbspt-forms-0.1:$4.$contact_type.0"
                />
              </div>
            </div>
            <noscript data-reactid=".hbspt-forms-0.2" />
            <div
              className="hs_recaptcha hs-recaptcha field hs-form-field"
              data-reactid=".hbspt-forms-0.3"
            >
              <div className="input" data-reactid=".hbspt-forms-0.3.0">
                <div
                  className="grecaptcha-badge"
                  data-style="inline"
                  style={{
                    width: 256,
                    height: 60,
                    boxShadow: "gray 0px 0px 5px"
                  }}
                >
                  <div className="grecaptcha-logo">
                    <iframe
                      title="reCAPTCHA"
                      src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm&co=aHR0cHM6Ly9ibG9ja3N0cmVhbS5jb206NDQz&hl=en&v=2uoiJ4hP3NUoP9v_eBNfU6CR&size=invisible&badge=inline&cb=ko4538odl96c"
                      width={256}
                      height={60}
                      role="presentation"
                      name="a-m0hpezodumdu"
                      frameBorder={0}
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    />
                  </div>
                  <div className="grecaptcha-error" />
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: 250,
                      height: 40,
                      border: "1px solid rgb(193, 193, 193)",
                      margin: "10px 25px",
                      padding: 0,
                      resize: "none",
                      display: "none"
                    }}
                    defaultValue={""}
                  />
                </div>
                <iframe style={{ display: "none" }} />
              </div>
              <input
                type="hidden"
                name="g-recaptcha-response"
                id="hs-recaptcha-response"
                defaultValue=""
                data-reactid=".hbspt-forms-0.3.1"
              />
            </div>
            <div
              className="hs_submit hs-submit"
              data-reactid=".hbspt-forms-0.5"
            >
              <div
                className="hs-field-desc"
                style={{ display: "none" }}
                data-reactid=".hbspt-forms-0.5.0"
              />
              <div className="actions" data-reactid=".hbspt-forms-0.5.1">
                <input
                  type="submit"
                  defaultValue="Submit"
                  className="hs-button primary large"
                  data-reactid=".hbspt-forms-0.5.1.0"
                />
              </div>
            </div>
            <noscript data-reactid=".hbspt-forms-0.6" />
            <input
              name="hs_context"
              type="hidden"
              defaultValue='{"rumScriptExecuteTime":1421,"rumServiceResponseTime":3771.2000000178814,"rumFormRenderTime":14.899999976158142,"rumTotalRenderTime":3789,"rumTotalRequestTime":2346,"lang":"en","renderRawHtml":"true","embedAtTimestamp":"1648452653243","formDefinitionUpdatedAt":"1628796306313","pageUrl":"https://blockstream.com/energy/","pageTitle":"Blockstream Energy: Instant energy demand from the Bitcoin network","source":"FormsNext-static-5.461","sourceName":"FormsNext","sourceVersion":"5.461","sourceVersionMajor":"5","sourceVersionMinor":"461","timestamp":1648452653243,"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36","referrer":"https://blockstream.com/mining/","originalEmbedContext":{"portalId":"5867842","formId":"89936627-2cd0-4b36-b37f-cb2f7964900e","target":"#hbspt-form-1648452656222-8853619104","hutk":"7f68a783fb3b1efc85da104a521155ec"},"renderedFieldsIds":["firstname","lastname","email","company"],"formTarget":"#hbspt-form-1648452656222-8853619104","correlationId":"c7f1cf93-d9b3-4816-94bb-24575155431f","hutk":"7f68a783fb3b1efc85da104a521155ec","captchaStatus":"LOADED"}'
              data-reactid=".hbspt-forms-0.7"
            />
            <iframe
              name="target_iframe_89936627-2cd0-4b36-b37f-cb2f7964900e"
              style={{ display: "none" }}
              data-reactid=".hbspt-forms-0.8"
            />
          </form>
        </div>
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



export default BlockstreamEnergy;
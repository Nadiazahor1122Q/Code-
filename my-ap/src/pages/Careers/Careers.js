import React from 'react';

const Careers = () => {
    return <div>
        <div className="wrapper">
  <header className="header header_careers">
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
                                Our own implementation of the Lightning
                                protocol.
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
                                Colocation services for Bitcoin mining
                                operations.
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
                          <div className="header_primary_navigation_item_sub-list_item_link"  style={{marginLeft:"109%",marginTop:"-99px"}}>
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
                                A multi-platform, feature-rich Bitcoin and
                                Liquid wallet.
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
                          className="header_primary_navigation_item_sub-list_item_link_block_title nav-link-active"
                          href="/careers/"
                          data-nav-item="careers"
                          style={{ color: "rgb(0, 195, 255)" }}
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
    <div className="header_secondary careers_header">
      <div className="header_secondary_product_intro careers_header_intro">
        <h2 className="header_secondary_product_intro_title careers_header_intro_title">
          Careers
        </h2>
        <p className="header_secondary_product_intro_text keep-header-text careers_header_intro_text">
          {" "}
          We’re building Bitcoin solutions that will change the way the world of
          finance works forever. Join us on our journey. The future’s not going
          to build itself.
        </p>
      </div>
    </div>
  </header>
  <div className="centering">
    <div className="reason-cards_career">
      <div className="reason-cards_career_card">
        {" "}
        <img
          className="reason-cards_career_card_image"
          src="https://blockstream.com/img/img_svg/bulb.svg"
          alt="icon"
        />
        <h3 className="reason-cards_career_card_title">Innovation</h3>
        <p className="reason-cards_career_card_text">
          The work we do requires expertise in mathematics, computer science,
          game theory, cryptography, design, and more. We’re boldly going where
          no company has been before.
        </p>
      </div>
      <div className="reason-cards_career_card">
        {" "}
        <img
          className="reason-cards_career_card_image"
          src="https://blockstream.com/img/img_svg/checkbox.svg"
          alt="icon"
        />
        <h3 className="reason-cards_career_card_title">Execution</h3>
        <p className="reason-cards_career_card_text">
          Changing the world doesn’t just require out-of-the-box thinking, it
          needs execution too. We’re putting together the best team possible to
          develop exciting new ideas and get things done.
        </p>
      </div>
      <div className="reason-cards_career_card">
        {" "}
        <img
          className="reason-cards_career_card_image"
          src="https://blockstream.com/img/img_svg/heart.svg"
          alt="icon"
        />
        <h3 className="reason-cards_career_card_title">Passion</h3>
        <p className="reason-cards_career_card_text">
          Working at Blockstream is more than just a job, it’s an opportunity to
          build the future. We love what we do, and continue to contribute to
          Bitcoin in our spare time.
        </p>
      </div>
    </div>
  </div>
  <div className="careers_open-positions fly" id="careers_open-positions">
    <div className="careers_open-positions_header_title">
      <h2>Open Roles</h2>
    </div>
    <div className="careers_open-positions_body">
      <div className="careers_open-positions_body_department">
        <div className="careers_open-positions_body_department_title">
          <h3>Engineering</h3>
        </div>
        <div className="careers_open-positions_body_department_jobs">
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Full-Stack Software Engineer
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3233535"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  QA Engineer
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/2260733"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Software Library Engineer (C++)
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3943905"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Software Library Engineer (Rust)
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3885967"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Technical Project Manager
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3912662"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers_open-positions_body_department">
        <div className="careers_open-positions_body_department_title">
          <h3>DevOps &amp; Security</h3>
        </div>
        <div className="careers_open-positions_body_department_jobs">
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Network Engineer
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3587332"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers_open-positions_body_department">
        <div className="careers_open-positions_body_department_title">
          <h3>Product</h3>
        </div>
        <div className="careers_open-positions_body_department_jobs">
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Head of Product Design
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3661242"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Product Manager
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3943655"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Senior Product Manager
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3633200"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="careers_open-positions_body_department">
        <div className="careers_open-positions_body_department_title">
          <h3>Business Development</h3>
        </div>
        <div className="careers_open-positions_body_department_jobs">
          <div className="careers-position-card">
            <div className="inside-wrapper">
              <div className="careers-position-card_description">
                <p className="careers-position-card_description_title">
                  {" "}
                  Business Development Associate
                </p>
                <span className="careers-position-card_description_location">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div className="careers-position-card_apply">
                {" "}
                <a
                  href="https://boards.greenhouse.io/blockstream/jobs/3585384"
                  target="blank"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add a new department here */} {/* End of a new department */}
      <div className="careers_open-positions_body_puzzle">
        {" "}
        <a href="/puzzle" className="careers_puzzles_link fly">
          {" "}
          Love Solving Puzzles? Try this one{" "}
          <i className="fas  fa-long-arrow-right careers_puzzles_arrow" />{" "}
        </a>
      </div>
    </div>
  </div>
  <div className="general_application_career_card">
    <h3 className="general_application_career_card_title">
      Don't see an open position that fits? <br />
      Apply Here!
    </h3>
    <div className="general_application_career_card_description">
      <p className="general_application_career_card_description_text">
        At Blockstream, you’ll be in good company. We’re proud to count some of
        the brightest minds in the industry as members of our team. Combining
        engineering talent with creativity, we’re united by a mission to
        accelerate Bitcoin adoption and expand its usability.
      </p>
      <div className="careers-position-card_apply general_application_career_card_description_button">
        {" "}
        <a
          href="https://boards.greenhouse.io/blockstream/jobs/3583502"
          target="blank"
        >
          Apply
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
    <a id="back-to-top" />
  </footer>
</div>

    </div>
}



export default Careers;
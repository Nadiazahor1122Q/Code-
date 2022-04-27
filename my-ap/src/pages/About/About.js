import React from 'react';

const About = () => {
    return <div>
        <div className="wrapper">
  <header className="header header_about">
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
              className="header_primary_navigation_item_link header_primary_navigation_dropdown-button primary-link-active"
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
                          className="header_primary_navigation_item_sub-list_item_link_block_title nav-link-active"
                          href="/about/"
                          data-nav-item="about"
                          style={{ color: "rgb(0, 195, 255)" }}
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
    <div className="header_secondary">
      <div className="header_secondary_product_intro">
        <p className="header_secondary_product_intro_text keep-header-text">
          {" "}
          Founded in 2014, Blockstream has been the leading provider of
          blockchain technologies and has remained on the forefront of work in
          cryptography and distributed systems.
        </p>
        <div className="header_secondary_product_intro_buttons">
          <div className="gradient-holder ">
            {" "}
            <a
              href=" /careers/ "
              className=" gradient-button gradient-button_ fly "
            >
              {" "}
              Join Our Team{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="about_mission fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>Our Mission</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="about_mission_content">
      <div className="about_mission_content_text">
        <p>
          {" "}
          Blockstream’s mission is to create the financial infrastructure of the
          future. We build crypto-financial infrastructure based on Bitcoin, the
          most robust and secure blockchain. Applying cutting-edge cryptography
          and security engineering, we’re building the technology that makes
          financial markets more efficient by reducing reliance on trust. With a
          long-term outlook on delivering robust and scalable solutions, we
          invest heavily in research and development to strengthen the Bitcoin
          ecosystem and protocol. <br /> <br /> Peer-to-peer, open-network
          finance holds the promise to change the world for the benefit of all.
          Blockstream is proud to be making this a reality.
        </p>
      </div>
      <div className="about_mission_content_products">
        <div className="our-mission-logos">
          <div className="our-mission-logos_product_1">
            {" "}
            <a href="/liquid/">
              {" "}
              <img
                src="/img/about_mission_logos/liquid_logo_with_pattern.png"
                alt="Liquid"
              />{" "}
            </a>
          </div>
          <div className="our-mission-logos_product_2">
            {" "}
            <a href="/satellite/">
              {" "}
              <img
                src="/img/about_mission_logos/satellite_logo_with_pattern.png"
                alt="Satellite"
              />{" "}
            </a>
          </div>
          <div className="our-mission-logos_product_3">
            {" "}
            <a href="/mining/">
              {" "}
              <img
                src="/img/about_mission_logos/mining_logo_with_pattern.png"
                alt="Mining"
              />{" "}
            </a>
          </div>
          <div className=" our-mission-logos_product_5">
            {" "}
            <a href="/cryptofeed/">
              {" "}
              <img
                src="/img/about_mission_logos/ice_logo_with_pattern.png"
                alt="Ice"
              />{" "}
            </a>
          </div>
          <div className="our-mission-logos_product_6">
            {" "}
            <a href="/lightning/">
              {" "}
              <img
                src="/img/about_mission_logos/c-lightning_logo_with_pattern.svg"
                alt="Lightning"
              />{" "}
            </a>
          </div>
          <div className="our-mission-logos_product_7">
            {" "}
            <a href="/green/">
              {" "}
              <img
                src="/img/about_mission_logos/green_logo_with_pattern.png"
                alt="Green"
              />{" "}
            </a>
          </div>
          <div className="our-mission-logos_product_8">
            {" "}
            <a href="/elements/">
              {" "}
              <img
                src="/img/about_mission_logos/elements_logo_with_pattern.png"
                alt="Elements"
              />{" "}
            </a>
          </div>
          <div className="our-mission-logos_product_9">
            {" "}
            <a href="/amp/">
              {" "}
              <img
                src="/img/about_mission_logos/amp_logo_with_pattern.png"
                alt="AMP"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about_core-values fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>Core Values</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="core-values-row">
      <div className="core-values-col">
        <div className="core-values-col_title"> Permissionless innovation.</div>
        <div className="core-values-col_text">
          {" "}
          The success of the internet in recent years is built on permissionless
          innovation -- nowhere is this kind of progress more important than in
          the financial industry.
        </div>
      </div>
      <div className="core-values-col">
        <div className="core-values-col_title"> Don’t trust. Verify.</div>
        <div className="core-values-col_text">
          {" "}
          We believe in empowering individuals and businesses to take control of
          their own finances and reducing the need for trusted third parties.
        </div>
      </div>
      <div className="core-values-col">
        <div className="core-values-col_title"> Open finance for everyone.</div>
        <div className="core-values-col_text">
          {" "}
          We build software that accelerates the adoption of Bitcoin and
          peer-to-peer finance for a fairer financial system that benefits
          everyone, not just a privileged few.
        </div>
      </div>
    </div>
  </div>
  <div className="about_leadership fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>Leadership</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="leadership-row">
      <div className="leadership-col">
        <div className="leadership-col_img">
          {" "}
          <img src="/img/leadership/adam.png" width="100%" />
        </div>
        <div className="leadership-col_name"> Dr Adam Back</div>
        <div className="leadership-col_role"> CEO</div>
      </div>
      <div className="leadership-col">
        <div className="leadership-col_img">
          {" "}
          <img src="/img/leadership/erik.png" width="100%" />
        </div>
        <div className="leadership-col_name"> Erik Svenson</div>
        <div className="leadership-col_role"> COO</div>
      </div>
      <div className="leadership-col">
        <div className="leadership-col_img">
          {" "}
          <img src="/img/leadership/lawrence.png" width="100%" />
        </div>
        <div className="leadership-col_name"> Lawrence Nahum</div>
        <div className="leadership-col_role"> CHIEF ARCHITECT</div>
      </div>
      <div className="leadership-col">
        <div className="leadership-col_img">
          {" "}
          <img src="/img/leadership/jeff.png" width="100%" />
        </div>
        <div className="leadership-col_name"> Jeff Boortz</div>
        <div className="leadership-col_role"> CPO</div>
      </div>
    </div>
  </div>
  <div className="about_investors fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>Investors</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="investors">
      <div className="investors_container">
        {" "}
        <a
          href="https://www.amecloudventures.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_ame.png"
            alt="AME Cloud Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://www.axavp.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_axa_1.png"
            alt="AXA Strategic Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://blockchain.capital/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_blockchaincapital.png"
            alt="Blockchain Capital"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a href="https://dcg.co/" target="blank" className="investors_link">
          {" "}
          <img
            src="/img/img/investor-logos/logo_dcg.png"
            alt="Digital Currency Group"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://www.garage.co.jp/en/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_dg.png"
            alt="Digital Garage"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://futureperfectventures.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_fpv.png"
            alt="Future \ Perfect \ Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://horizonsventures.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_horizonsv.png"
            alt="Horizons Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a href="http://east.vc/" target="blank" className="investors_link">
          {" "}
          <img
            src="/img/img/investor-logos/EV_logo.png"
            alt="East Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://www.khoslaventures.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_khosla.png"
            alt="Khosla Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://www.mosaicventures.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_mosaic.png"
            alt="Mosaic Ventures"
            className="investors_investor investors_investor_small"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://realventures.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_real_ventures.png"
            alt="Real Ventures"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="http://7seasvc.com/en/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/logo_sevenseas.png"
            alt="Seven Seas Partners"
            className="investors_investor investors_investor_medium"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a href="#" target="blank" className="investors_link">
          {" "}
          <img
            src="/img/img/investor-logos/ifinex_white.svg"
            alt="iFinex"
            className="investors_investor investors_investor_medium-1"
          />{" "}
        </a>
      </div>
      <div className="investors_container">
        {" "}
        <a
          href="https://www.bailliegifford.com/"
          target="blank"
          className="investors_link"
        >
          {" "}
          <img
            src="/img/img/investor-logos/bailey_gifford.svg"
            alt="Bailey Gifford"
            className="investors_investor investors_investor_medium-1"
          />{" "}
        </a>
      </div>
      <div className="investors_container" />
      <div className="investors_container" />
    </div>
  </div>
  <div className="about_our-offices fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>Our Offices</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="our-offices-row">
      <div className="our-offices-row_map">
        {" "}
        <img src="/img/img/our_offices_map.png" />
      </div>
      <div className="our-offices-row-content">
        <div className="our-offices-row-content_col">
          <div className="our-offices-row-content_col_title">
            {" "}
            Distributed By Design
          </div>
          <div className="our-offices-row-content_col_text">
            {" "}
            60+ team of the very best in Bitcoin. Wide range of experience,
            backgrounds, and expertise.
          </div>
        </div>
        <div className="our-offices-row-content_col">
          <div className="our-offices-row-content_col_title">
            {" "}
            Global Presence
          </div>
          <div className="our-offices-row-content_col_text">
            {" "}
            Offices in Montreal and Mountain View, and remote team around the
            world.
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* DESKTOP VERSION */}
  <div className="about_history fly">
    <div className="about_history_title">
      <div className="title-section fly">
        <div className="title-section_title ">
          <h3>History</h3>
        </div>
        <div className="">
          <hr className="title-section_underline " style={{ opacity: 0 }} />
          <div className="title-section_text" />
        </div>
      </div>
    </div>
    <div className="about_history_timeline fly">
      {" "}
      <img
        className="about_history_timeline_birth"
        src="/img/img/company_blks_birthday-min.png"
        alt="Blockstream"
        // srcSet=" /assets/resized/250/company_blks_birthday-min.png 250w, /assets/resized/400/company_blks_birthday-min.png 400w, /assets/resized/550/company_blks_birthday-min.png 550w, /assets/resized/800/company_blks_birthday-min.png 800w, "
        style={{}}
      />
      <div className="about_history_timeline_years fly">
        <div className="about_history_timeline_vertical-line fly" />
        <div className="about_history_timeline_years_year fly">2014</div>
        <div className="about_history_timeline_years_year fly">2015</div>
        <div className="about_history_timeline_years_year fly">2016</div>
        <div className="about_history_timeline_years_year fly">2017</div>
        <div className="about_history_timeline_years_year fly">2018</div>
        <div className="about_history_timeline_years_year fly">2019</div>
        <div className="about_history_timeline_years_year fly">2020</div>
        <div
          className="about_history_timeline_years_year fly"
          style={{ opacity: 0 }}
        />
        <div className="about_history_timeline_years_year about_history_timeline_years_future">
          Future
        </div>
      </div>
    </div>
    {/* LEFT side bullets */}
    <div className="about_history_bullets_left">
      <div className="history-bullet-left fly" id="history_2014-1">
        {" "}
        <a
          className="history-bullet_link"
          href="/2014/10/23/en-why-we-are-co-founders-of-blockstream/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title" />
            <div className="history-bullet-left_block_text">
              Founded by Adam Back, Erik Svenson, Pieter Wuille, and others.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet history-bullet_omit-title">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_june-2015">
        {" "}
        <a
          className="history-bullet_link"
          href="/2015/06/08/en-714/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">June 2015</div>
            <div className="history-bullet-left_block_text">
              First version of Elements released.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_july-2016">
        {" "}
        <a
          className="history-bullet_link"
          href="/2016/07/27/en-blockstream-greenaddress-acquisition/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">July 2016</div>
            <div className="history-bullet-left_block_text">
              Bitcoin wallet provider GreenAddress is acquired.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_august-2017">
        {" "}
        <a
          className="history-bullet_link"
          href="/2017/08/15/en-announcing-blockstream-satellite/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">August 2017</div>
            <div className="history-bullet-left_block_text">
              Blockstream Satellite is launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_december-2017">
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/06/25/en-c-lightning-06/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">December 2017</div>
            <div className="history-bullet-left_block_text">
              Lightning, Blockstream’s implementation of the Lightning Network,
              is launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_march-2018">
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/03/29/en-ice-data-services-cryptocurrency-data-feed-is-live/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">March 2018</div>
            <div className="history-bullet-left_block_text">
              The Cryptocurrency Data Feed is launched in partnership with
              Intercontinental Exchange.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_january-2019-left">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/01/16/en-satellite_api_beta_live/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">January 2019</div>
            <div className="history-bullet-left_block_text">
              The Blockstream Satellite API is launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_march-2019">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/03/19/en-the-all-new-blockstream-green-wallet/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">March 2019</div>
            <div className="history-bullet-left_block_text">
              Blockstream Green Wallet launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_july-2019-2">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/07/29/en-tether-lands-on-the-liquid-network/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">July 2019</div>
            <div className="history-bullet-left_block_text">
              Tether launches on the Liquid Network.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_august-2019">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/08/08/en-mining-launch/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">August 2019</div>
            <div className="history-bullet-left_block_text">
              Blockstream Mining service revealed.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_march-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/03/27/en-liquid-network-grows-to-45-members/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">March 2020</div>
            <div className="history-bullet-left_block_text">
              The Liquid Federation grows to 45 members.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_may-2020-2">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/05/04/en-announcing-blockstream-satellite-2/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">May 2020</div>
            <div className="history-bullet-left_block_text">
              Blockstream Satellite 2.0 launched, providing expanded coverage
              and full-history sync support.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_jun-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/06/02/en-liquid-ventures-now-taking-applications/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">June 2020</div>
            <div className="history-bullet-left_block_text">
              Liquid Ventures Initiative launched to generate funding for
              startups building on Liquid.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-left fly" id="history_sep-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/09/26/en-introducing-aqua-wallet/"
          target="blank"
        >
          <div className="history-bullet-left_block">
            <div className="history-bullet-left_block_title">
              September 2020
            </div>
            <div className="history-bullet-left_block_text">
              Mobile wallet AQUA launched to make using Bitcoin and Liquid
              assets easy.
            </div>
          </div>
        </a>
        <div className="history-bullet-left_bullet ">
          <div className="history-bullet-left_bullet_circle" />
          <div className="history-bullet-left_bullet_line" />
        </div>
      </div>
    </div>
    {/* RIGHT ride bullets */}
    <div className="about_history_bullets_right">
      <div className="history-bullet-right fly" id="history_november-2014">
        {" "}
        <a
          className="history-bullet_link"
          href="/2014/11/17/en-blockstream-closes-21m-seed-round/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              November 2014
            </div>
            <div className="history-bullet-right_block_text">
              Raised $21M in seed funding.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_february-2016">
        {" "}
        <a
          className="history-bullet_link"
          href="/2016/02/02/en-blockstream-new-investors-55-million-series-a/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              February 2016
            </div>
            <div className="history-bullet-right_block_text">
              Raised $55M in Series A funding.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_april-2017">
        {" "}
        <a
          className="history-bullet_link"
          href="/2017/04/03/en-blockstream-releases-elements-confidential-assets/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">April 2017</div>
            <div className="history-bullet-right_block_text">
              Confidential Assets is released.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_november-2017">
        {" "}
        <a
          className="history-bullet_link"
          href="/2017/11/20/en-dg-tokyo-tanshi/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              November 2017
            </div>
            <div className="history-bullet-right_block_text">
              Digital Garage invests in Blockstream, raising total funding to
              more than $80M.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_january-2018">
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/01/16/en-lightning-charge/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2018</div>
            <div className="history-bullet-right_block_text">
              Lightning Charge is launched to support developers building
              applications on the Lightning Network.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_october-2018">
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/10/10/en-liquid-launch/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">October 2018</div>
            <div className="history-bullet-right_block_text">
              The Liquid Network is launched in partnership with some of the
              world’s largest cryptocurrency exchanges and trading desks.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_january-2019-right">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/01/21/en-new-joint-venture-expand-applications-japan/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2019</div>
            <div className="history-bullet-right_block_text">
              Blockstream enter joint venture, Crypto Garage, with Digital
              Garage and The Tokyo Tanshi to expand Bitcoin application in
              Japan.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_july-2019-1">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/07/05/en-liquid-arrives-on-green/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2019</div>
            <div className="history-bullet-right_block_text">
              Liquid support added to Green.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_july-2019-3">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/07/31/en-lightning-on-liquid/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2019</div>
            <div className="history-bullet-right_block_text">
              Liquid support added to Lightning.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_january-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/01/15/en-announcing-liquid-support-for-btcpay-server/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2020</div>
            <div className="history-bullet-right_block_text">
              Liquid Network support added for BTCPay Server.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_may-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/05/04/en-liquid-asset-support-now-on-ledger-nano-s/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">May 2020</div>
            <div className="history-bullet-right_block_text">
              Ledger adds support for the Liquid Network.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_may-2020-3">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/05/21/en-blockstream-green-now-on-desktop/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">May 2020</div>
            <div className="history-bullet-right_block_text">
              Blockstream Green desktop app launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="history_july-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/07/29/en-eight-new-members-join-the-liquid-federation/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2020</div>
            <div className="history-bullet-right_block_text">
              The Liquid Federation grows to 53 members.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
    </div>
  </div>
  {/* MOBILE VERSION */}
  <div className="about_mobile_history fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>History</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="about_mobile_history_timeline fly">
      {" "}
      <img
        className="about_mobile_history_timeline_birth"
        src="/img/img/company_blks_birthday-min.png"
        alt="Blockstream"
        srcSet=" /assets/resized/250/company_blks_birthday-min.png 250w, /assets/resized/400/company_blks_birthday-min.png 400w, /assets/resized/550/company_blks_birthday-min.png 550w, /assets/resized/800/company_blks_birthday-min.png 800w, "
        style={{}}
      />
      <div className="about_mobile_history_timeline_years fly">
        <div className="about_mobile_history_timeline_vertical-line fly" />
        <div className="about_mobile_history_timeline_years_year fly">2014</div>
        <div className="about_mobile_history_timeline_years_year fly">2015</div>
        <div className="about_mobile_history_timeline_years_year fly">2016</div>
        <div
          className="about_mobile_history_timeline_years_year fly"
          id="mobile-year-bubble-2017"
        >
          2017
        </div>
        <div
          className="about_mobile_history_timeline_years_year fly"
          id="mobile-year-bubble-2018"
        >
          2018
        </div>
        <div
          className="about_mobile_history_timeline_years_year fly"
          id="mobile-year-bubble-2019"
        >
          2019
        </div>
        <div
          className="about_mobile_history_timeline_years_year fly"
          id="mobile-year-bubble-2020"
        >
          2020
        </div>
        <div
          className="about_mobile_history_timeline_years_year fly"
          id="mobile-year-bubble-2020-2"
          style={{ opacity: 0 }}
        />
        <div className="about_mobile_history_timeline_years_year about_mobile_history_timeline_years_future">
          Future
        </div>
      </div>
    </div>
    {/* RIGHT ride bullets */}
    <div className="about_mobile_history_bullets_right">
      <div className="history-bullet-right fly" id="mobile_history_2014-1">
        {" "}
        <a
          className="history-bullet_link"
          href="/2014/10/23/en-why-we-are-co-founders-of-blockstream/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title" />
            <div className="history-bullet-right_block_text">
              Founded by Adam Back, Erik Svensen, Pieter Wuille, and others.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet history-bullet_omit-title">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div
        className="history-bullet-right fly"
        id="mobile_history_november-2014"
      >
        {" "}
        <a
          className="history-bullet_link"
          href="/2014/11/17/en-blockstream-closes-21m-seed-round/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              November 2014
            </div>
            <div className="history-bullet-right_block_text">
              Raised $21M in seed funding.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_history_june-2015">
        {" "}
        <a
          className="history-bullet_link"
          href="/2015/06/08/en-714/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">June 2015</div>
            <div className="history-bullet-right_block_text">
              First version of Elements released.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div
        className="history-bullet-right fly"
        id="mobile_history_february-2016"
      >
        {" "}
        <a
          className="history-bullet_link"
          href="/2016/02/02/en-blockstream-new-investors-55-million-series-a/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              February 2016
            </div>
            <div className="history-bullet-right_block_text">
              Raised $55M in Series A funding.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_history_july-2016">
        {" "}
        <a
          className="history-bullet_link"
          href="/2016/07/27/en-blockstream-greenaddress-acquisition/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2016</div>
            <div className="history-bullet-right_block_text">
              Bitcoin wallet provider GreenAddress is acquired.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_history_april-2017">
        {" "}
        <a
          className="history-bullet_link"
          href="/2017/04/03/en-blockstream-releases-elements-confidential-assets/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">April 2017</div>
            <div className="history-bullet-right_block_text">
              Confidential Assets is released.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_history_august-2017">
        {" "}
        <a
          className="history-bullet_link"
          href="/2017/08/15/en-announcing-blockstream-satellite/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">August 2017</div>
            <div className="history-bullet-right_block_text">
              Blockstream Satellite is launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div
        className="history-bullet-right fly"
        id="mobile_history_november-2017"
      >
        {" "}
        <a
          className="history-bullet_link"
          href="/2017/11/20/en-dg-tokyo-tanshi/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              November 2017
            </div>
            <div className="history-bullet-right_block_text">
              Digital Garage invest in Blockstream, raising total funding to
              more than $80m.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div
        className="history-bullet-right fly"
        id="mobile_history_december-2017"
      >
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/06/25/en-c-lightning-06/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              December 2017
            </div>
            <div className="history-bullet-right_block_text">
              Lightning, Blockstream’s implementation of the Lightning Network,
              is launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div
        className="history-bullet-right fly"
        id="mobile_history_january-2018"
      >
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/01/16/en-lightning-charge/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2018</div>
            <div className="history-bullet-right_block_text">
              Lightning Charge is launched to support developers building
              applications on the Lightning Network.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_history_march-2018">
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/03/29/en-ice-data-services-cryptocurrency-data-feed-is-live/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">March 2018</div>
            <div className="history-bullet-right_block_text">
              The Cryptocurrency Data Feed is launched in partnership with
              Intercontinental Exchange.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div
        className="history-bullet-right fly"
        id="mobile_history_october-2018"
      >
        {" "}
        <a
          className="history-bullet_link"
          href="/2018/10/10/en-liquid-launch/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">October 2018</div>
            <div className="history-bullet-right_block_text">
              The Liquid Network is launched in partnership with some of the
              world’s largest cryptocurrency exchanges and trading desks.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_january-2019-1">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/01/16/en-satellite_api_beta_live/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2019</div>
            <div className="history-bullet-right_block_text">
              The Blockstream Satellite API is launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_january-2019-2">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/01/21/en-new-joint-venture-expand-applications-japan/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2019</div>
            <div className="history-bullet-right_block_text">
              Blockstream enter joint venture, Crypto Garage, with Digital
              Garage and The Tokyo Tanshi to expand Bitcoin application in
              Japan.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_march-2019">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/03/19/en-the-all-new-blockstream-green-wallet/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">March 2019</div>
            <div className="history-bullet-right_block_text">
              Blockstream Green Wallet launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_july-2019-1">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/07/05/en-liquid-arrives-on-green/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2019</div>
            <div className="history-bullet-right_block_text">
              Liquid support added to Green.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_july-2019-2">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/07/29/en-tether-lands-on-the-liquid-network/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2019</div>
            <div className="history-bullet-right_block_text">
              Tether launches on the Liquid Network.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_july-2019-3">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/07/31/en-lightning-on-liquid/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2019</div>
            <div className="history-bullet-right_block_text">
              Liquid support added to Lightning
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_august-2019">
        {" "}
        <a
          className="history-bullet_link"
          href="/2019/08/08/en-mining-launch/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">August 2019</div>
            <div className="history-bullet-right_block_text">
              Blockstream Mining service revealed.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_january-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/01/15/en-announcing-liquid-support-for-btcpay-server/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">January 2020</div>
            <div className="history-bullet-right_block_text">
              Liquid Network support added for BTCPay Server.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_march-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/03/27/en-liquid-network-grows-to-45-members/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">March 2020</div>
            <div className="history-bullet-right_block_text">
              The Liquid Federation grows to 45 members.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_may-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/05/04/en-liquid-asset-support-now-on-ledger-nano-s/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">May 2020</div>
            <div className="history-bullet-right_block_text">
              Ledger adds support for the Liquid Network.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_may-2020-2">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/05/04/en-announcing-blockstream-satellite-2/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">May 2020</div>
            <div className="history-bullet-right_block_text">
              Blockstream Satellite 2.0 launched, providing expanded coverage
              and full-history sync support.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_may-2020-3">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/05/21/en-blockstream-green-now-on-desktop/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">May 2020</div>
            <div className="history-bullet-right_block_text">
              Blockstream Green desktop app launched.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_jun-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/06/02/en-liquid-ventures-now-taking-applications/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">June 2020</div>
            <div className="history-bullet-right_block_text">
              Liquid Ventures Initiative launched to generate funding for
              startups building on Liquid.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_july-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/07/29/en-eight-new-members-join-the-liquid-federation/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">July 2020</div>
            <div className="history-bullet-right_block_text">
              The Liquid Federation grows to 53 members.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
      <div className="history-bullet-right fly" id="mobile_sep-2020">
        {" "}
        <a
          className="history-bullet_link"
          href="/2020/09/26/en-introducing-aqua-wallet/"
          target="blank"
        >
          <div className="history-bullet-right_block">
            <div className="history-bullet-right_block_title">
              September 2020
            </div>
            <div className="history-bullet-right_block_text">
              Mobile wallet AQUA launched to make using Bitcoin and Liquid
              assets easy.
            </div>
          </div>
        </a>
        <div className="history-bullet-right_bullet ">
          <div className="history-bullet-right_bullet_circle" />
          <div className="history-bullet-right_bullet_line" />
        </div>
      </div>
    </div>
  </div>
  <div className="about_news fly">
    <div className="title-section fly">
      <div className="title-section_title ">
        <h3>In the News</h3>
      </div>
      <div className="">
        <hr className="title-section_underline " style={{ opacity: 0 }} />
        <div className="title-section_text" />
      </div>
    </div>
    <div className="in-the-news">
      <div
        className="in-the-news_arrow-back"
        onclick="backNewsArticle(1, 'article')"
        style={{ visibility: "hidden" }}
      >
        {" "}
        ❮
      </div>
      <a
        href="https://www.bloomberg.com/news/articles/2021-08-24/bitcoin-infrastructure-firm-valued-at-3-2-billion-on-series-b"
        target="_blank"
      >
        <div
          className="in-the-news_article"
          id="in-the-news_article_1"
          style={{ display: "block" }}
        >
          <div className="in-the-news_article_header">
            {" "}
            <img
              src="/img/blog/default_banners/company_banner_display.jpg"
              alt="Bloomberg"
            />
          </div>
          <div className="in-the-news_article_title">
            {" "}
            Bitcoin Infrastructure Firm Blockstream Valued at $3.2 Billion in
            New Deal
          </div>
        </div>
      </a>{" "}
      <a
        href="https://bitcoinmagazine.com/markets/blockstream-210-million-raise"
        target="_blank"
      >
        <div
          className="in-the-news_article"
          id="in-the-news_article_2"
          style={{ display: "block" }}
        >
          <div className="in-the-news_article_header">
            {" "}
            <img
              src="/img/news_images/blockstream-open-sources-development-of-its-proof-of-reserves-tool.jpeg"
              alt="Bloomberg"
            />
          </div>
          <div className="in-the-news_article_title">
            {" "}
            Blockstream's $210 million raise is critical in the global Bitcoin
            arms race
          </div>
        </div>
      </a>{" "}
      <a href="https://www.youtube.com/watch?v=363Q2w6ZZsc" target="_blank">
        <div
          className="in-the-news_article"
          id="in-the-news_article_3"
          style={{ display: "block" }}
        >
          <div className="in-the-news_article_header">
            {" "}
            <img src="/img/news_images/cnbc-blockstream.png" alt="CNBC" />
          </div>
          <div className="in-the-news_article_title">
            {" "}
            CNBC TechCheck chats with Blockstream CSO Samson Mow
          </div>
        </div>
      </a>{" "}
      <a
        href="https://www.forbes.com/sites/ninabambysheva/2021/08/24/blockstream-raises-210-million-series-b-round-to-fund-the-companys-expansion-into-asic-development-hits-unicorn-status/?sh=7ca20c694cdd"
        target="_blank"
      >
        <div
          className="in-the-news_article"
          id="in-the-news_article_4"
          style={{ display: "none" }}
        >
          <div className="in-the-news_article_header">
            {" "}
            <img src="/img/news_images/forbes-newsroom_01.jpeg" alt="Forbes" />
          </div>
          <div className="in-the-news_article_title">
            {" "}
            Satoshi Nakamoto Source Adam Back Raising $210 Million...
          </div>
        </div>
      </a>{" "}
      <a
        href="https://www.coindesk.com/markets/2021/08/24/blockstream-raises-210m-acquires-mining-chip-manufacturer-spondoolies/"
        target="_blank"
      >
        <div
          className="in-the-news_article"
          id="in-the-news_article_5"
          style={{ display: "none" }}
        >
          <div className="in-the-news_article_header">
            {" "}
            <img
              src="/img/news_images/coindesk-newsroom_01.jpg"
              alt="Coindesk"
            />
          </div>
          <div className="in-the-news_article_title">
            {" "}
            Blockstream Raises $210M, Acquires Mining Chip Manufacturer
            Spondoolies
          </div>
        </div>
      </a>
      <div
        className="in-the-news_arrow-forward"
        onclick="forwardNewsArticle(1, 'article')"
        style={{ visibility: "visible" }}
      >
        {" "}
        ❯
      </div>
    </div>
  </div>
  <div className="about_hiring fly">
    <div className="about_hiring_title"> Blockstream is Hiring</div>
    <hr />
    <div className="about_hiring_open-jobs">
      <div className="gradient-holder gradient-button_center ">
        {" "}
        <a
          href=" /careers/#careers_open-positions "
          className=" gradient-button gradient-button_ fly "
        >
          {" "}
          View Job Openings{" "}
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



export default About;
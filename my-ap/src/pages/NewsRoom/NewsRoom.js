import React from 'react';

 
const NewsRoom = () => {
    return <div>
        <div className="wrapper">
  <header className="header header_press-releases">
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
                          className="header_primary_navigation_item_sub-list_item_link_block_title nav-link-active"
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
  </header>
  <div className="newsroom-header_secondary">
    <div className="newsroom-header">
      <div className="header-left">
        {" "}
        <a href="https://edition.cnn.com/2021/11/21/tech/el-salvador-bitcoin-city/index.html">
          {" "}
          <img src="/img/news_images/cnn-logo.jpg" width="100%" />{" "}
        </a>
      </div>
      <div className="header-right">
        <div className="header-right-content">
          <p className="press-article-block_block_publication">
            CNN | November 21, 2021
          </p>
          <h4 className="press-article-block_block_title">
            El Salvador plans first 'Bitcoin City', backed by bitcoin bonds
          </h4>
          <p className="press-article-block_block_text">
            The bitcoin company said it has ambitions to scale to new sites as
            infrastructure is further developed. The first site will be in the
            U.S.
          </p>
          <a
            className="gradient-button"
            href="https://edition.cnn.com/2021/11/21/tech/el-salvador-bitcoin-city/index.html"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="newsroom-logo">
    <div className="newsroom-logo_container">
      <div className="logo_item logo-bloomberg">
        {" "}
        <img src="/img/news_images/source-icons/bloomberg.svg" />
      </div>
      <div className="logo_item logo-forbes">
        {" "}
        <img src="/img/news_images/source-icons/forbes.svg" />
      </div>
      <div className="logo_item logo-inc">
        {" "}
        <img src="/img/news_images/source-icons/inc.svg" />
      </div>
      <div className="logo_item logo-coindesk">
        {" "}
        <img src="/img/news_images/source-icons/coindesk.svg" />
      </div>
      <div className="logo_item logo-techcrunch">
        {" "}
        <img src="/img/news_images/source-icons/tech_crunch.svg" />
      </div>
      <div className="logo_item logo-cnbc">
        {" "}
        <img src="/img/news_images/source-icons/cnbc.svg" />
      </div>
      <div className="logo_item logo-entrepreneur">
        {" "}
        <img src="/img/news_images/source-icons/entrepreneur.svg" />
      </div>
      <div className="logo_item logo-fortune">
        {" "}
        <img src="/img/news_images/source-icons/fortune.svg" />
      </div>
      <div className="logo_item logo-business_insider">
        {" "}
        <img src="/img/news_images/source-icons/business_insider.svg" />
      </div>
      <div className="logo_item logo-the_verge">
        {" "}
        <img src="/img/news_images/source-icons/the_verge.svg" />
      </div>
      <div className="logo_item logo-wired">
        {" "}
        <img src="/img/news_images/source-icons/wired.svg" />
      </div>
      <div className="logo_item logo-independent">
        {" "}
        <img src="/img/news_images/source-icons/independent.svg" />
      </div>
      <div className="logo_item logo-morningstar">
        {" "}
        <img src="/img/news_images/source-icons/morningstar.svg" />
      </div>
      <div className="logo_item logo-engadget">
        {" "}
        <img src="/img/news_images/source-icons/engadget.svg" />
      </div>
      {/*<div class="logo_item logo-investopedia"> <img src="/img/news_images/source-icons/investopedia.svg"></div>*/}
      <div className="logo_item logo-tnw">
        {" "}
        <img src="/img/news_images/source-icons/tnw.svg" />
      </div>
      {/*<div class="logo_item logo-times_colonist"> <img src="/img/news_images/source-icons/times_colonist.svg"></div>*/}
      <div className="logo_item logo-the_street">
        {" "}
        <img src="/img/news_images/source-icons/the_street.svg" />
      </div>
      <div className="logo_item logo-the_korea_herald">
        {" "}
        <img src="/img/news_images/source-icons/the_korea_herald.svg" />
      </div>
      {/*<div class="logo_item logo-news_btc"> <img src="/img/news_images/source-icons/news_btc.svg"></div>*/}{" "}
      {/*<div class="logo_item logo-gestion"> <img src="/img/news_images/source-icons/gestion.svg"></div>*/}
      <div className="logo_item logo-el_pais">
        {" "}
        <img src="/img/news_images/source-icons/el_pais.svg" />
      </div>
      <div className="logo_item logo-ejinsight">
        {" "}
        <img src="/img/news_images/source-icons/ejinsight.svg" />
      </div>
      <div className="logo_item logo-dr">
        {" "}
        <img src="/img/news_images/source-icons/dr.svg" />
      </div>
      <div className="logo_item logo-decrypt">
        {" "}
        <img src="/img/news_images/source-icons/decrypt.svg" />
      </div>
      {/*<div class="logo_item logo-coin_rivit"> <img src="/img/news_images/source-icons/coin_rivit.svg"></div>*/}
      <div className="logo_item logo-cointelegraph">
        {" "}
        <img src="/img/news_images/source-icons/cointelegraph.svg" />
      </div>
      <div className="logo_item logo-bitcoin_magazine">
        {" "}
        <img src="/img/news_images/source-icons/bitcoin_magazine.svg" />
      </div>
      <div className="logo_item logo-ars_technica">
        {" "}
        <img src="/img/news_images/source-icons/ars_technica.svg" />
      </div>
    </div>
  </div>
  <div className="newsroom-content">
    <div className="press">
      <div className="newsroom-subtitle">News</div>
      <div className="press_articles newsroom-articles">
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.wsj.com/articles/el-salvador-to-issue-bitcoin-bond-in-2022-11637616550?mod=latest_headlines"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="El Salvador to Issue ‘Bitcoin Bond’ in 2022"
              style={{
                backgroundImage: "url(/img/news_images/WSJ-logo-black.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                WSJ | November 22, 2021
              </div>
              <div className="press-article-block_block_title">
                El Salvador to Issue ‘Bitcoin Bond’ in 2022
              </div>
              <div className="press-article-block_block_text">
                The first nation to adopt bitcoin as national currency now aims
                to raise $1 billion to buy bitcoin and invest in bitcoin-related
                infrastructure.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.reuters.com/markets/rates-bonds/el-salvador-plans-first-bitcoin-city-backed-by-bitcoin-bonds-2021-11-21/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="El Salvador plans first 'Bitcoin City', backed by bitcoin bonds"
              style={{
                backgroundImage: "url(/img/news_images/reuters_black.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Reuters | November 22, 2021
              </div>
              <div className="press-article-block_block_title">
                El Salvador plans first 'Bitcoin City', backed by bitcoin bonds
              </div>
              <div className="press-article-block_block_text">
                El Salvador plans to build the world's first 'Bitcoin City',
                funded initially by bitcoin-backed bonds.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://cointelegraph.com/news/blockstream-raises-16m-for-its-bitcoin-mining-sto-in-a-matter-of-hours"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream raises $16M for its Bitcoin mining STO in a matter of hours"
              style={{
                backgroundImage:
                  "url(/img/news_images/cointelegraph-blockstream-2210.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | October 23, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream raises $16M for its Bitcoin mining STO in a matter
                of hours
              </div>
              <div className="press-article-block_block_text">
                Blockstream allows investors to mine Bitcoin by simply
                purchasing the Blockstream Mining Note security token.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.coindesk.com/business/2021/09/06/australias-macquarie-group-and-blockstream-to-pilot-renewable-bitcoin-mining-facility/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream to Pilot Renewable Bitcoin Mining Facility With Australia’s Macquarie Group"
              style={{
                backgroundImage:
                  "url(/img/news_images/coindesk-blockstream-mining.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | September 08, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream to Pilot Renewable Bitcoin Mining Facility With
                Australia’s Macquarie Group
              </div>
              <div className="press-article-block_block_text">
                The bitcoin company said it has ambitions to scale to new sites
                as infrastructure is further developed. The first site will be
                in the U.S.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://bitcoinmagazine.com/business/blockstream-asic-change-bitcoin-mining"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="How Blockstream´s New ASIC Division Will Propel Bitcoin Mining"
              style={{
                backgroundImage:
                  "url(/img/news_images/bitcoin-magazine-blockstream-mining.webp)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bitcoin Magazine | September 08, 2021
              </div>
              <div className="press-article-block_block_title">
                How Blockstream´s New ASIC Division Will Propel Bitcoin Mining
              </div>
              <div className="press-article-block_block_text">
                Following a strategic acquisition and unicorn valuation,
                Blockstream is ready to drive the Bitcoin mining industry
                forward.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://bitcoinmagazine.com/markets/blockstream-210-million-raise"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream's $210 million raise is critical in the global Bitcoin arms race"
              style={{
                backgroundImage:
                  "url(/img/news_images/blockstream-open-sources-development-of-its-proof-of-reserves-tool.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bitcoin Magazine | August 25, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream's $210 million raise is critical in the global
                Bitcoin arms race
              </div>
              <div className="press-article-block_block_text">
                Blockstream's $210 million raise will play a big role in North
                American ASIC production and manufacturing.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a href="https://www.youtube.com/watch?v=363Q2w6ZZsc" target="_blank">
            <div
              className="press-article-block_image-container"
              role="CNBC TechCheck chats with Blockstream CSO Samson Mow"
              style={{
                backgroundImage: "url(/img/news_images/cnbc-blockstream.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                CNBC | August 25, 2021
              </div>
              <div className="press-article-block_block_title">
                CNBC TechCheck chats with Blockstream CSO Samson Mow
              </div>
              <div className="press-article-block_block_text">
                CNBC TechCheck’s Deirdre Bosa chats with Samson Mow,
                Blockstream's chief strategy officer.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.bloomberg.com/news/articles/2021-08-24/bitcoin-infrastructure-firm-valued-at-3-2-billion-on-series-b"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin Infrastructure Firm Blockstream Valued at $3.2 Billion in New Deal"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bloomberg | August 24, 2021
              </div>
              <div className="press-article-block_block_title">
                Bitcoin Infrastructure Firm Blockstream Valued at $3.2 Billion
                in New Deal
              </div>
              <div className="press-article-block_block_text">
                Bitcoin infrastructure firm Blockstream has raised $210 million
                as part of a Series B financing, giving it a valuation of $3.2
                billion.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.forbes.com/sites/ninabambysheva/2021/08/24/blockstream-raises-210-million-series-b-round-to-fund-the-companys-expansion-into-asic-development-hits-unicorn-status/?sh=7ca20c694cdd"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Satoshi Nakamoto Source Adam Back Raising $210 Million For His Bitcoin Infrastructure Provider Blockstream"
              style={{
                backgroundImage: "url(/img/news_images/forbes-newsroom_01.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | August 24, 2021
              </div>
              <div className="press-article-block_block_title">
                Satoshi Nakamoto Source Adam Back Raising $210 Million For His
                Bitcoin Infrastructure Provider Blockstream
              </div>
              <div className="press-article-block_block_text">
                Bitcoin infrastructure firm Blockstream, led by British
                cryptographer Adam Back, whose proof of work [...]
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.coindesk.com/markets/2021/08/24/blockstream-raises-210m-acquires-mining-chip-manufacturer-spondoolies/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Raises $210M, Acquires Mining Chip Manufacturer Spondoolies"
              style={{
                backgroundImage:
                  "url(/img/news_images/coindesk-newsroom_01.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | August 24, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Raises $210M, Acquires Mining Chip Manufacturer
                Spondoolies
              </div>
              <div className="press-article-block_block_text">
                The Series B round values Adam Back's Bitcoin technology firm at
                $3.2 billion.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://cointelegraph.com/news/canadian-bitcoin-miner-blockstream-joins-crypto-unicorns-with-3-2b-valuation"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Canadian Bitcoin miner Blockstream joins crypto unicorns with $3.2B valuation"
              style={{
                backgroundImage:
                  "url(/img/news_images/cointelegraph-blockstream-news.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Cointelegraph | August 24, 2021
              </div>
              <div className="press-article-block_block_title">
                Canadian Bitcoin miner Blockstream joins crypto unicorns with
                $3.2B valuation
              </div>
              <div className="press-article-block_block_text">
                Blockstream has secured $210 million in fresh investment from a
                U.K. private equity firm and crypto exchange Bitfinex’s
                operator.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a href="https://www.youtube.com/watch?v=797MkiBVW9c" target="_blank">
            <div
              className="press-article-block_image-container"
              role="Blockstream Energy Expands Bitcoin Mining Offerings"
              style={{
                backgroundImage:
                  "url(/img/news_images/bloomberg-technology.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bloomberg | August 17, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Energy Expands Bitcoin Mining Offerings
              </div>
              <div className="press-article-block_block_text">
                Blockstream CEO Adam Back speaks with Emily Chang about
                Blockstream's new modular mining unit that let's bitcoin miners
                utilize any power source to make operations more energy
                efficient.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.nasdaq.com/articles/blockstream-rolls-out-a-bitcoin-lightning-node-for-n00bs-2021-07-21"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Rolls Out a Bitcoin Lightning Node for N00bs"
              style={{
                backgroundImage: "url(/img/news_images/bs_rolls_out.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | July 21, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Rolls Out a Bitcoin Lightning Node for N00bs
              </div>
              <div className="press-article-block_block_text">
                Blockstream, a prominent and influential Bitcoin technology
                startup, has introduced a service designed to make setting up a
                node on the cryptocurrency’s Lightning Network a snap.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.bloomberg.com/news/articles/2021-07-02/blockstream-proposes-digital-blockchain-bond-for-el-salvador"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Proposes Digital Blockchain Bond for El Salvador"
              style={{
                backgroundImage: "url(/img/news_images/bs_proposes.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bloomberg | July 2, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Proposes Digital Blockchain Bond for El Salvador
              </div>
              <div className="press-article-block_block_text">
                Canada-based Blockstream Corp, a blockchain technology company,
                proposed the issuance of a digital U.S. dollar-denominated bond
                to El Salvador’s government
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.cnbc.com/2021/06/05/el-salvador-becomes-the-first-country-to-adopt-bitcoin-as-legal-tender-.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="El Salvador looks to become the world’s first country to adopt bitcoin as legal tender"
              style={{
                backgroundImage: "url(/img/news_images/elsalvador_looks.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                CNBC | June 5, 2021
              </div>
              <div className="press-article-block_block_title">
                El Salvador looks to become the world’s first country to adopt
                bitcoin as legal tender
              </div>
              <div className="press-article-block_block_text">
                El Salvador President Nayib Bukele plans to introduce
                legislation that will make it the world’s first sovereign nation
                to adopt bitcoin as legal tender.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.yahoo.com/entertainment/square-invests-5-million-blockstream-174519804.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Square will invest $5 million to build solar-powered bitcoin mining facility"
              style={{
                backgroundImage: "url(/img/news_images/square_invests.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                The Verge | June 5, 2021
              </div>
              <div className="press-article-block_block_title">
                Square will invest $5 million to build solar-powered bitcoin
                mining facility
              </div>
              <div className="press-article-block_block_text">
                Financial services and digital payments company Square will
                invest $5 million in blockchain technology company Blockstream
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/blockstream-buys-demeester-adamant-expansion-193050327.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Buys Demeester’s Adamant in Expansion Into Bitcoin Investment Products"
              style={{ backgroundImage: "url(/img/news_images/bs_buys.png)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | May 22, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Buys Demeester’s Adamant in Expansion Into Bitcoin
                Investment Products
              </div>
              <div className="press-article-block_block_text">
                Bitcoin tech firm Blockstream said it’s buying Adamant Capital,
                the bitcoin hedge fund manager founded by noted investor and
                analyst Tuur Demeester.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/blockfi-offer-bitcoin-mining-blockstream-075923045.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="BlockFi to Offer Bitcoin Mining With Blockstream Partnership"
              style={{
                backgroundImage: "url(/img/news_images/be-in-crypto.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Be In Crypto| May 19, 2021
              </div>
              <div className="press-article-block_block_title">
                BlockFi to Offer Bitcoin Mining With Blockstream Partnership
              </div>
              <div className="press-article-block_block_text">
                Blockchain technology provider Blockstream has announced a
                strategic bitcoin mining partnership with crypto asset service
                manager BlockFi.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://bitcoinmagazine.com/business/blockfi-mining-bitcoin-with-blockstream"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="BlockFi Hosts Bitcoin Mining Operations With Blockstream"
              style={{
                backgroundImage:
                  "url(/img/news_images/bitcoin-magazine-miners.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bitcoin Magazine | May 18, 2021
              </div>
              <div className="press-article-block_block_title">
                BlockFi Hosts Bitcoin Mining Operations With Blockstream
              </div>
              <div className="press-article-block_block_text">
                Bitcoin lending platform BlockFi is now hosting bitcoin mining
                operations with Blockstream Mining.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/blockstream-hosts-blockfi-bitcoin-mining-170546137.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Hosts BlockFi’s New Bitcoin Mining Venture"
              style={{ backgroundImage: "url(/img/news_images/bs_hosts.png)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | May 18, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Hosts BlockFi’s New Bitcoin Mining Venture
              </div>
              <div className="press-article-block_block_text">
                Bitcoin and crypto lender BlockFi is now in a bitcoin mining
                partnership with Blockstream.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.nasdaq.com/articles/blockstream-releases-base-station-for-bitcoin-broadcasting-satellite-2021-04-29"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Releases Base Station For Bitcoin Broadcasting Satellite"
              style={{
                backgroundImage: "url(/img/news_images/bs_releases.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Bitcoin Magazine | April 29, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Releases Base Station For Bitcoin Broadcasting
                Satellite
              </div>
              <div className="press-article-block_block_text">
                Blockstream is now offering a receiver base to help users
                leverage its Bitcoin blockchain broadcasting satellite.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/blockstream-issues-security-token-tied-120000330.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Issues Security Token Tied to Bitcoin Hashrate, Payable in BTC"
              style={{
                backgroundImage: "url(/img/news_images/blockstream_issues.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | March 30, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Issues Security Token Tied to Bitcoin Hashrate,
                Payable in BTC
              </div>
              <div className="press-article-block_block_text">
                Bitcoin development company Blockstream is launching a token
                that is tied to the company’s Bitcoin mining production and
                which is redeemable in bitcoin.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.nasdaq.com/articles/galaxy-digital-taps-blockstream-for-hosted-mining-operations-2021-03-05"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Galaxy Digital Taps Blockstream for Hosted Mining Operations"
              style={{
                backgroundImage: "url(/img/news_images/galaxy_digital.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | March 5, 2021
              </div>
              <div className="press-article-block_block_title">
                Galaxy Digital Taps Blockstream for Hosted Mining Operations
              </div>
              <div className="press-article-block_block_text">
                Galaxy Digital said its new bitcoin-mining business will use
                Blockstream facilities for an initial deployment of machines in
                the U.S. and Canada.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://thenextweb.com/hardfork/2019/07/10/shitposters-are-using-sophisticated-bitcoin-satellites-to-troll-each-other/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Shitposters are using sophisticated Bitcoin satellites to troll each other"
              style={{
                backgroundImage: "url(/img/news_images/shitposters.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                The Next Web | February 21, 2020
              </div>
              <div className="press-article-block_block_title">
                Shitposters are using sophisticated Bitcoin satellites to troll
                each other
              </div>
              <div className="press-article-block_block_text">
                Since December, a sophisticated set of satellites has beamed the
                entire Bitcoin...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/btcpay-server-now-processing-blockstream-203356708.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="BTCPay Server Now Processing Blockstream’s Liquid Assets"
              style={{
                backgroundImage: "url(/img/news_images/adam_back.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coindesk | January 15, 2020
              </div>
              <div className="press-article-block_block_title">
                BTCPay Server Now Processing Blockstream’s Liquid Assets
              </div>
              <div className="press-article-block_block_text">
                Blockstream’s Liquid sidechain is now integrated with BTCPay
                Server, the self-hosted bitcoin payment processor.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://cheddar.com/media/anyone-can-start-mining-bitcoin-blockstream-cso-says"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="‘Anyone’ Can Start Mining Bitcoin, Blockstream CSO Says"
              style={{
                backgroundImage:
                  "url(/img/news_images/anyone_can_start_mining_bitcoin.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Cheddar | October 24, 2019
              </div>
              <div className="press-article-block_block_title">
                ‘Anyone’ Can Start Mining Bitcoin, Blockstream CSO Says
              </div>
              <div className="press-article-block_block_text">
                Blockstream is launching Blockstream Mining to provide secure
                bitcoin mining equipment to institutional and enterprise
                customers
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/canadian-bitcoin-mining-firm-ramps-140014561.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Canadian Bitcoin mining firm ramps up capabilities as hashrate rises ..."
              style={{
                backgroundImage: "url(/img/news_images/canadian_bitcoin.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Decrypt | September 20, 2019
              </div>
              <div className="press-article-block_block_title">
                Canadian Bitcoin mining firm ramps up capabilities as hashrate
                rises ...
              </div>
              <div className="press-article-block_block_text">
                Canadian company Bitfarms has bought 2,500 A10 Avalon miners, to
                increase its mining capacity...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/blockstream-developers-release-miniscript-coding-143357455.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream developers release Miniscript to make coding Bitcoin easier"
              style={{
                backgroundImage:
                  "url(/img/news_images/blockstream_developers.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Decrypt | August 26, 2019
              </div>
              <div className="press-article-block_block_title">
                Blockstream developers release Miniscript to make coding Bitcoin
                easier
              </div>
              <div className="press-article-block_block_text">
                Developers at Blockstream Research think they’ve found a way to
                make coding Bitcoin easier...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/blockstream-makes-bitcoin-mining-operations-140013921.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream makes its Bitcoin mining operations public"
              style={{
                backgroundImage: "url(/img/news_images/blockstream_makes.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Decrypt | August 16, 2019
              </div>
              <div className="press-article-block_block_title">
                Blockstream makes its Bitcoin mining operations public
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the Canadian blockchain services company well known
                for its work on the ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.forbes.com/sites/ktorpey/2019/08/08/blockstream-reveals-massive-bitcoin-mining-facilities-fidelity-an-early-customer/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Reveals Massive Bitcoin Mining Facilities, Fidelity An Early Customer "
              style={{
                backgroundImage: "url(/img/news_images/blockstream_reveals.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | August 8, 2019
              </div>
              <div className="press-article-block_block_title">
                Blockstream Reveals Massive Bitcoin Mining Facilities, Fidelity
                An Early Customer
              </div>
              <div className="press-article-block_block_text">
                On Thursday, blockchain technology company Blockstream revealed
                details related to their massive...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.forbes.com/sites/ktorpey/2019/06/30/2-people-cited-in-the-bitcoin-white-paper-share-their-thoughts-on-cryptos-future/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="2 People Cited In The Bitcoin White Paper Share Their Thoughts On Crypto's Future"
              style={{ backgroundImage: "url(/img/news_images/2_people.png)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | June 30, 2019
              </div>
              <div className="press-article-block_block_title">
                2 People Cited In The Bitcoin White Paper Share Their Thoughts
                On Crypto's Future
              </div>
              <div className="press-article-block_block_text">
                Most of the discussion around bitcoin last week had to do
                with...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a href="https://www.entrepreneur.com/article/335944" target="_blank">
            <div
              className="press-article-block_image-container"
              role="How Cryptocurrency Projects Are Tackling Transparency and Security Problems"
              style={{
                backgroundImage: "url(/img/news_images/how_cryptocurrency.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Entrepreneur | June 27, 2019
              </div>
              <div className="press-article-block_block_title">
                How Cryptocurrency Projects Are Tackling Transparency and
                Security Problems
              </div>
              <div className="press-article-block_block_text">
                I invested in BTC in 2010 (and sold shortly after, but have
                bought and sold all along since then)...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.wired.com/story/cypherpunks-bitcoin-ham-radio/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="The Cypherpunks Tapping Bitcoin via Ham Radio"
              style={{
                backgroundImage: "url(/img/news_images/the_cypherpunks.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Wired | June 27, 2019
              </div>
              <div className="press-article-block_block_title">
                The Cypherpunks Tapping Bitcoin via Ham Radio
              </div>
              <div className="press-article-block_block_text">
                Every six hours, at his home in the high desert outside Kingman,
                Arizona, midway between Phoenix and Las Vegas...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://finance.yahoo.com/news/why-schnorr-signatures-important-privacy-160018577.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Why Schnorr Signatures are important for privacy"
              style={{
                backgroundImage: "url(/img/news_images/why_schnorr.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Coin Rivet | May 24, 2019
              </div>
              <div className="press-article-block_block_title">
                Why Schnorr Signatures are important for privacy
              </div>
              <div className="press-article-block_block_text">
                Whilst much of Bitcoin’s development has recently been focused
                on the Lightning Network...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://news.yahoo.com/sacrilegious-binance-reorg-erode-bitcoin-092505964.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Sacrilegious Binance Reorg Would ‘Erode’ Bitcoin: Blockstream"
              style={{
                backgroundImage:
                  "url(/img/news_images/sacrilegious_binance.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                CCN | May 15, 2019
              </div>
              <div className="press-article-block_block_title">
                Sacrilegious Binance Reorg Would ‘Erode’ Bitcoin: Blockstream
              </div>
              <div className="press-article-block_block_text">
                Blockstream CEO Adam Back told the What Bitcoin Did podcast that
                the block reshuffling proposed by Binance CEO Changpeng Zhao ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://techcrunch.com/2019/05/14/bitcoin-shrug-emoji/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin has surged above $8,000 and theories around why abound"
              style={{
                backgroundImage: "url(/img/news_images/bitcoin_has_surged.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                TechCrunch | May 14, 2019
              </div>
              <div className="press-article-block_block_title">
                Bitcoin has surged above $8,000 and theories around why abound
              </div>
              <div className="press-article-block_block_text">
                Bitcoin is now trading at around $8,130, up a whopping 60.84%
                over the past month, with the price surging $3,086.14 over the
                period...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.engadget.com/2019/02/28/htc-exodus-blockchain-smartphone-interview/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="HTC's Exodus smartphone is about much more than Bitcoin"
              style={{
                backgroundImage: "url(/img/news_images/htc_exodus.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Engadget | February 28, 2019
              </div>
              <div className="press-article-block_block_title">
                HTC's Exodus smartphone is about much more than Bitcoin
              </div>
              <div className="press-article-block_block_text">
                'A blockchain phone? But why?' ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.forbes.com/sites/ktorpey/2019/02/27/its-2019-where-are-bitcoins-sidechains/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="It's 2019, Where Are Bitcoin's Sidechains?"
              style={{ backgroundImage: "url(/img/news_images/its_2019.png)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | February 27, 2019
              </div>
              <div className="press-article-block_block_title">
                It's 2019, Where Are Bitcoin's Sidechains?
              </div>
              <div className="press-article-block_block_text">
                Back in 2014, a white paper co-authored by many of the
                individuals who co-founded Blockstream ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.timescolonist.com/business/on-the-street-shared-office-spaces-opening-developer-joins-b-c-ferries-board-1.23616777"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="On the Street: Shared office spaces opening; developer joins B.C. Ferries board"
              style={{
                backgroundImage: "url(/img/news_images/on_the_street.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Times Columnist | January 30, 2019
              </div>
              <div className="press-article-block_block_title">
                On the Street: Shared office spaces opening; developer joins
                B.C. Ferries board
              </div>
              <div className="press-article-block_block_text">
                Real estate agents Kirsten Marten and Mark Rice have acquired
                Coldwell Banker Slegg Realty ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://techcrunch.com/2019/01/21/digital-garage-teams-up-with-blockstream-to-develop-blockchain-financial-services-in-japan/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Digital Garage teams up with Blockstream to develop blockchain financial services in Japan"
              style={{
                backgroundImage: "url(/img/news_images/digital_garage.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                TechCrunch | January 21, 2019
              </div>
              <div className="press-article-block_block_title">
                Digital Garage teams up with Blockstream to develop blockchain
                financial services in Japan
              </div>
              <div className="press-article-block_block_text">
                The global crypto market may have tanked last year, but notable
                names have joined...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.ejinsight.com/20190108-ice-owned-crypto-startup-bakkt-gets-li-ka-shing-on-board/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="ICE-owned crypto startup Bakkt gets Li Ka-shing on board"
              style={{ backgroundImage: "url(/img/news_images/ice_owned.png)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Ejiinsight | January 8, 2019
              </div>
              <div className="press-article-block_block_title">
                ICE-owned crypto startup Bakkt gets Li Ka-shing on board
              </div>
              <div className="press-article-block_block_text">
                Hong Kong billionaire Li Ka-shing has joined other tech and
                venture capital heavyweights in supporting cryptocurrency
                venture Bakkt ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.wired.com/story/bitcoin-exposed-silicon-valley-aim-making-money/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin Exposed Silicon Valley's Ultimate Aim: Making Money"
              style={{
                backgroundImage:
                  "url(/img/news_images/bitcoin_exposed_silicon.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Wired | January 7, 2019
              </div>
              <div className="press-article-block_block_title">
                Bitcoin Exposed Silicon Valley's Ultimate Aim: Making Money
              </div>
              <div className="press-article-block_block_text">
                Bitcoin turned 10 this month, and what a ride it’s been—initial
                obscurity; the kind of exponential price spike...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.forbes.com/sites/michaeldelcastillo/2018/12/17/who-needs-verizon-blockstream-broadcasts-entire-bitcoin-blockchain-from-space/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Who Needs Verizon? Blockstream Broadcasts Entire Bitcoin Blockchain From Space"
              style={{
                backgroundImage: "url(/img/news_images/who_needs_verizon.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | December 17, 2018
              </div>
              <div className="press-article-block_block_title">
                Who Needs Verizon? Blockstream Broadcasts Entire Bitcoin
                Blockchain From Space
              </div>
              <div className="press-article-block_block_text">
                A new age of bitcoin is about to begin, as users around the
                world will no longer need internet access...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.independent.co.uk/life-style/gadgets-and-tech/news/bitcoin-price-collapse-cryptocurrency-latest-value-prediction-analysis-a8675766.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin price collapse set to continue, cyptocurrency analysts warn"
              style={{
                backgroundImage: "url(/img/news_images/bitcoin_price.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Independent | December 10, 2018
              </div>
              <div className="press-article-block_block_title">
                Bitcoin price collapse set to continue, cyptocurrency analysts
                warn
              </div>
              <div className="press-article-block_block_text">
                Bitcoin has experienced a modest price recovery following weeks
                of heavy losses...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.independent.co.uk/life-style/gadgets-and-tech/news/bitcoin-price-prediction-2019-cryptocurrency-forecast-cost-analysis-a8644266.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin price just hit new 2018 low but cryptocurrency analysts predict dramatic market reversal"
              style={{
                backgroundImage:
                  "url(/img/news_images/bitcoin_price_just_hit.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Independent | November 21, 2018
              </div>
              <div className="press-article-block_block_title">
                Bitcoin price just hit new 2018 low but cryptocurrency analysts
                predict dramatic market reversal
              </div>
              <div className="press-article-block_block_text">
                Bitcoin has faslen to its lowest price since October 2017,
                marking the latest...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.forbes.com/sites/francescoppola/2018/10/11/blockstreams-new-solution-to-bitcoins-liquidity-problem-looks-oddly-familiar/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream's New Solution To Bitcoin's Liquidity Problem Looks Oddly Familiar"
              style={{
                backgroundImage:
                  "url(/img/news_images/blockstreams_new_solution.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | October 11, 2018
              </div>
              <div className="press-article-block_block_title">
                Blockstream's New Solution To Bitcoin's Liquidity Problem Looks
                Oddly Familiar
              </div>
              <div className="press-article-block_block_text">
                Bitcoin is illiquid. Proof of work is appallingly slow and
                expensive...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://thenextweb.com/hardfork/2018/09/05/bitmain-bitcoin-mining-asicboost/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitmain’s AntPool quietly activates controversial hack for faster Bitcoin mining"
              style={{
                backgroundImage: "url(/img/news_images/bitmains_antpool.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                The Next Web | September 5, 2018
              </div>
              <div className="press-article-block_block_title">
                Bitmain’s AntPool quietly activates controversial hack for
                faster Bitcoin mining
              </div>
              <div className="press-article-block_block_text">
                It looks like one of Bitcoin’s premier mining pools, AntPool,
                has activated AsicBoost on its mining operations...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.dr.dk/nyheder/penge/bitcoin-har-faet-bank-fasd-pa-70-procent"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin har fået bank: fasd på 70 procent"
              style={{
                backgroundImage: "url(/img/news_images/bitcoin_har.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                DR | August 14, 2018
              </div>
              <div className="press-article-block_block_title">
                Bitcoin har fået bank: fasd på 70 procent
              </div>
              <div className="press-article-block_block_text">
                Efter en vinter, hvor kryptomanien hærgede og nyslåede...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://fortune.com/2018/08/14/bitcoin-price-usd-today/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="‘They Sense Panic:’ Why the Price of Bitcoin Is Tanking"
              style={{
                backgroundImage: "url(/img/news_images/they_sense_panic.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Forbes | August 14, 2018
              </div>
              <div className="press-article-block_block_title">
                ‘They Sense Panic:’ Why the Price of Bitcoin Is Tanking
              </div>
              <div className="press-article-block_block_text">
                Bitcoin dropped below $6,000 and dozens of smaller digital
                tokens tumbled as this month’s ...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.businessinsider.co.za/tesla-is-making-a-mini-car-says-elon-musk-on-twitter-2018-8"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Tesla is making a mini car that can fit an adult, says Elon Musk"
              style={{
                backgroundImage: "url(/img/news_images/tesla_is_making.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Business Insider | August 6, 2018
              </div>
              <div className="press-article-block_block_title">
                Tesla is making a mini car that can fit an adult, says Elon Musk
              </div>
              <div className="press-article-block_block_text">
                Tesla CEO Elon Musk said on Sunday that the company is making a
                mini car that can fit an adult...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://techcrunch.com/2018/07/24/mosaic-ventures-is-looking-to-raise-150m-second-fund/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Mosaic Ventures is looking to raise $150M second fund"
              style={{
                backgroundImage: "url(/img/news_images/mosaic_ventures.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                TechCrunch | July 24, 2018
              </div>
              <div className="press-article-block_block_title">
                Mosaic Ventures is looking to raise $150M second fund
              </div>
              <div className="press-article-block_block_text">
                UK based, Europe focused early stage VC firm Mosaic Ventures...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://retina.elpais.com/retina/2018/06/27/innovacion/1530096818_489633.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Cadena de bloques Cinco mitos de ‘blockchain’ que debes conocer para entender su presente"
              style={{ backgroundImage: "url(/img/news_images/cadena_de.jpg)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                El Pais | July 1, 2018
              </div>
              <div className="press-article-block_block_title">
                Cadena de bloques Cinco mitos de ‘blockchain’ que debes conocer
                para entender su presente
              </div>
              <div className="press-article-block_block_text">
                Hasta principios de 2017, blockchain...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.morningstar.com/articles/868176/how-is-blockchain-used"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="How Is Blockchain Used?"
              style={{
                backgroundImage: "url(/img/news_images/company_banner.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Morningstar | June 4, 2018
              </div>
              <div className="press-article-block_block_title">
                How Is Blockchain Used?
              </div>
              <div className="press-article-block_block_text">
                In this second article of our blockchain series, we look at
                where the investment activity...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.newsbtc.com/2018/06/26/bitcoins-lightning-network-capacity-issues-remain-pressing-problem/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin’s Lightning Network Capacity Problems Addressed with New Client"
              style={{
                backgroundImage: "url(/img/news_images/bitcoin_lightning.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                NewsBTC | June 4, 2018
              </div>
              <div className="press-article-block_block_title">
                Bitcoin’s Lightning Network Capacity Problems Addressed with New
                Client
              </div>
              <div className="press-article-block_block_text">
                Bitcoin’s Lightning Network is considered to be a major
                development...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.thestreet.com/opinion/cryptocurrency-backed-by-institutional-money-from-ice-goldman-14606026"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Cryptocurrency Looks More Legit Now Backed by Institutional Money, ICE, Goldman"
              style={{
                backgroundImage:
                  "url(/img/news_images/cryptocurrency_looks.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                The Street | June 11, 2018
              </div>
              <div className="press-article-block_block_title">
                Cryptocurrency Looks More Legit Now Backed by Institutional
                Money, ICE, Goldman
              </div>
              <div className="press-article-block_block_text">
                Decentralization and a lack of clear regulations have played a
                significant role in the ups and downs of cryptocurrency...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.inc.com/jemima-mcevoy/these-are-top-10-tech-companies-to-watch-in-2018.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockchain, AI, Cybersecurity: Industries Hatching the Hottest Startups"
              style={{
                backgroundImage: "url(/img/news_images/blockchain_ai.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Inc. | June 13, 2018
              </div>
              <div className="press-article-block_block_title">
                Blockchain, AI, Cybersecurity: Industries Hatching the Hottest
                Startups
              </div>
              <div className="press-article-block_block_text">
                These companies are predicted to turn ripples into waves in
                2018...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.wsj.com/articles/wsj-top-25-tech-companies-to-watch-2018-1528825018"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="WSJ Top 25 Tech Companies to Watch 2018"
              style={{
                backgroundImage: "url(/img/news_images/wsj_top25_tech.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Wall Street Journal | June 12, 2018
              </div>
              <div className="press-article-block_block_title">
                WSJ Top 25 Tech Companies to Watch 2018
              </div>
              <div className="press-article-block_block_text">
                The Journal 25 spotlights young companies that have generated
                buzz in the tech community and attracted cash from
                venture-capital investors.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://thenextweb.com/hardfork/2018/05/15/app-trade-bitcoin-without-internet/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="This app lets you trade Bitcoin without an internet connection – but there’s a catch"
              style={{
                backgroundImage: "url(/img/news_images/this_app_lets.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                The Next Web | May 15, 2018
              </div>
              <div className="press-article-block_block_title">
                This app lets you trade Bitcoin without an internet connection –
                but there’s a catch
              </div>
              <div className="press-article-block_block_text">
                If you’re a cryptocurrency trader and often find often find
                yourself dealing with a spotty...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.ccn.com/bloomberg-inks-deal-with-novogratz-founded-galaxy-digital-to-launch-cryptocurrency-price-index/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bloomberg, Billionaire Bull Novogratz Partner to Launch Cryptocurrency Price Index"
              style={{
                backgroundImage:
                  "url(/img/news_images/bloomberg_billionaire.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                CCN | May 9, 2018
              </div>
              <div className="press-article-block_block_title">
                Bloomberg, Billionaire Bull Novogratz Partner to Launch
                Cryptocurrency Price Index
              </div>
              <div className="press-article-block_block_text">
                One of bitcoin’s biggest bulls has inked a deal with an unlikely
                partner...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.investopedia.com/news/mining-bitcoin-21-miles-above-earth/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Mining Bitcoin From 21 Miles Above the Earth"
              style={{
                backgroundImage: "url(/img/news_images/company_banner.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Investopedia | May 3, 2018
              </div>
              <div className="press-article-block_block_title">
                Mining Bitcoin From 21 Miles Above the Earth
              </div>
              <div className="press-article-block_block_text">
                Bitcoin is reaching for the stars, literally! Though the most
                popular cryptocurrency has had...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.koreaherald.com/view.php?ud=20180430000575"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream CSO urges crypto caution"
              style={{
                backgroundImage: "url(/img/news_images/herald_interview.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Korea Herald | April 30, 2018
              </div>
              <div className="press-article-block_block_title">
                Blockstream CSO urges crypto caution
              </div>
              <div className="press-article-block_block_text">
                Overly-hyped sentiments have begun to give way to skepticism
                toward a flurry...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.techzone360.com/topics/techzone/articles/2018/04/10/437785-blockcha-space.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockchain in Space"
              style={{
                backgroundImage: "url(/img/news_images/blockchain_inspace.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Techzone360 | April 10, 2018
              </div>
              <div className="press-article-block_block_title">
                Blockchain in Space
              </div>
              <div className="press-article-block_block_text">
                Yes, we’re talking about taking Blockchain where no distributed
                ledger has gone before...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://gestion.pe/tecnologia/tecnologia-facilitar-pagos-bitcoin-comienza-funcionar-229480-noticia/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Tecnología para facilitar pagos de bitcoin comienza a funcionar"
              style={{
                backgroundImage: "url(/img/news_images/tecnologia.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Gestion | March 16, 2018
              </div>
              <div className="press-article-block_block_title">
                Tecnología para facilitar pagos de bitcoin comienza a funcionar
              </div>
              <div className="press-article-block_block_text">
                Una versión de la tecnología diseñada para hacer que los pagos
                de criptomonedas sean...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://fortune.com/2018/03/15/bitcoin-lightning-network-technology/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Technology Meant to Make Bitcoin Money Again Just Went Live"
              style={{
                backgroundImage: "url(/img/news_images/technology_meant.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Fortune | March 15, 2018
              </div>
              <div className="press-article-block_block_title">
                Technology Meant to Make Bitcoin Money Again Just Went Live
              </div>
              <div className="press-article-block_block_text">
                The software, called Lightning Network, can now be used for
                Bitcoin...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://arstechnica.com/tech-policy/2018/02/bitcoins-lightning-network-a-deep-dive/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin has a huge scaling problem—Lightning could be the solution"
              style={{
                backgroundImage:
                  "url(/img/news_images/bitcoin_has_a_huge_scalling.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Ars Technica | February 4, 2018
              </div>
              <div className="press-article-block_block_title">
                Bitcoin has a huge scaling problem—Lightning could be the
                solution
              </div>
              <div className="press-article-block_block_text">
                The Lightning network could enable much cheaper and faster
                bitcoin payments...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.cnbc.com/2018/01/29/after-500-million-japan-cryptocurrency-theft-heres-how-to-keep-yours-secure.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="After $500 million Japan cryptocurrency theft, here’s how to keep yours secure"
              style={{
                backgroundImage: "url(/img/news_images/million_japan.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                CNBC | January 29, 2018
              </div>
              <div className="press-article-block_block_title">
                After $500 million Japan cryptocurrency theft, here’s how to
                keep yours secure
              </div>
              <div className="press-article-block_block_text">
                Hackers stole more than half a billion dollars in
                cryptocurrencies from...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.wired.com/story/the-lightning-network-could-make-bitcoin-faster-and-cheaper/"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="The Lightning Network Could Make Bitcoin Faster—and Cheaper"
              style={{
                backgroundImage:
                  "url(/img/news_images/the_lightning_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Wired | January 19, 2018
              </div>
              <div className="press-article-block_block_title">
                The Lightning Network Could Make Bitcoin Faster—and Cheaper
              </div>
              <div className="press-article-block_block_text">
                In 2014, Joseph Poon and Thaddeus Dryja were bitcoin-obsessed
                engineers...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a href="https://money.com/walking-dead-bitcoin/" target="_blank">
            <div
              className="press-article-block_image-container"
              role="The Surprising Personality Trait Shared by Bitcoin Lovers and 'Walking Dead' Fans"
              style={{
                backgroundImage:
                  "url(/img/news_images/the_surprising_personality.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Money.com | October 20, 2017
              </div>
              <div className="press-article-block_block_title">
                The Surprising Personality Trait Shared by Bitcoin Lovers and
                'Walking Dead' Fans
              </div>
              <div className="press-article-block_block_text">
                I’m a reporter for The Wall Street Journal and I write about
                bitcoin and zombies. I’ve traveled deep down the rabbit hole of
                both subjects for years...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.wsj.com/articles/bitcoin-startup-blockstream-raises-55-million-in-funding-round-1454518655"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Bitcoin Startup Blockstream Raises $55 Million in Funding Round"
              style={{
                backgroundImage:
                  "url(/img/news_images/bitcoin_startup_blockstream.jpeg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Wall Street Journal | February 3, 2016
              </div>
              <div className="press-article-block_block_title">
                Bitcoin Startup Blockstream Raises $55 Million in Funding Round
              </div>
              <div className="press-article-block_block_text">
                Blockstream, a bitcoin-focused startup founded by some of the
                industry’s most high-profile developers, raised $55 million in
                one of the largest funding rounds in the history of the virtual
                currency.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a href="https://www.wsj.com/articles/BL-MBB-42432" target="_blank">
            <div
              className="press-article-block_image-container"
              role="BitBeat: Blockstream Releases Liquid, First ‘Sidechain’"
              style={{ backgroundImage: "url(/img/news_images/bitbeat.png)" }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Wall Street Journal | October 13, 2015
              </div>
              <div className="press-article-block_block_title">
                BitBeat: Blockstream Releases Liquid, First ‘Sidechain’
              </div>
              <div className="press-article-block_block_text">
                Blockstream, a group comprising some of the best-known
                cryptocurrency developers, on Tuesday released the first product
                to come out of its effort to address some of bitcoin's perceived
                weaknesses…
              </div>
            </div>
          </a>
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


export default NewsRoom;
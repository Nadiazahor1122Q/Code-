import React from 'react';

const PressReleases = () => {
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
                          className="header_primary_navigation_item_sub-list_item_link_block_title nav-link-active"
                          href="/press-releases/"
                          data-nav-item="press-release"
                          style={{ color: "rgb(0, 195, 255)" }}
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
  </header>
  <div className="newsroom-content press-release">
    <div className="press">
      <div className="newsroom-subtitle">Press Releases</div>
      <div className="press_articles newsroom-articles">
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prweb.com/releases/el_salvador_to_issue_bitcoin_bond_a_1b_tokenized_bond_issuance_on_the_liquid_network/prweb18349640.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="El Salvador to Issue “Bitcoin Bond,” a $1B Tokenized Bond Issuance on the Liquid Network"
              style={{
                backgroundImage:
                  "url(/img/blog/2021-11-21/20211120_liquid_el_salvador_1920x1080px.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                November 21, 2021
              </div>
              <div className="press-article-block_block_title">
                El Salvador to Issue “Bitcoin Bond,” a $1B Tokenized Bond
                Issuance on the Liquid Network
              </div>
              <div className="press-article-block_block_text">
                This Bitcoin Bond offering sets El Salvador on the path to
                become the Singapore of digital capital markets.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/specter_integrates_blockstream_jade_and_liquid_network/prweb18272618.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Specter Integrates Blockstream Jade and Liquid Network"
              style={{
                backgroundImage:
                  "url(/img/blog/2021-10-19/specter_blockstream.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                October 19, 2021
              </div>
              <div className="press-article-block_block_title">
                Specter Integrates Blockstream Jade and Liquid Network
              </div>
              <div className="press-article-block_block_text">
                Specter Solutions has integrated Blockstream Jade and the Liquid
                Network into its desktop and hardware solutions.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prweb.com/releases/liquid_asset_support_comes_to_merchant_payments_software_bitfinex_pay/prweb18253609.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Liquid Asset Support Comes to Merchant Payments Software Bitfinex Pay"
              style={{
                backgroundImage:
                  "url(/img/blog/2021-10-08/blockstream-bitfinex-pay.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                October 08, 2021
              </div>
              <div className="press-article-block_block_title">
                Liquid Asset Support Comes to Merchant Payments Software
                Bitfinex Pay
              </div>
              <div className="press-article-block_block_text">
                The Liquid Network, the world’s leading Bitcoin sidechain
                developed by Bitcoin infrastructure company Blockstream, is now
                supported by merchant payments technology Bitfinex Pay.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prweb.com/releases/blockstream_and_macquarie_group_partner_on_pilot_investment_in_bitcoin_mining_facilities_and_explore_carbon_neutral_initiatives/prweb18174347.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream and Macquarie Group Partner on Pilot Investment in Bitcoin Mining Facilities and Explore Carbon Neutral Initiatives"
              style={{
                backgroundImage:
                  "url(/img/blog/2021-09-07/blockstream_macquire.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                September 08, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream and Macquarie Group Partner on Pilot Investment in
                Bitcoin Mining Facilities and Explore Carbon Neutral Initiatives
              </div>
              <div className="press-article-block_block_text">
                The initiative builds on Blockstream’s previously announced
                collaborations with Aker and Square to establish
                renewable-powered facilities.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_raises_210m_makes_move_into_asic_development/prweb18139105.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Raises $210M, Makes Move Into ASIC Development"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                August 24, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Raises $210M, Makes Move Into ASIC Development
              </div>
              <div className="press-article-block_block_text">
                Blockstream increases valuation to $3.2 billion as it expands
                team and acquires a mining hardware manufacturer.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/introducing_blockstream_energy_a_new_service_focused_on_renewable_sourced_bitcoin/prweb18132547.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Introducing Blockstream Energy, a New Service Focused on Renewable-Sourced Bitcoin"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_energy.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                August 17, 2021
              </div>
              <div className="press-article-block_block_title">
                Introducing Blockstream Energy, a New Service Focused on
                Renewable-Sourced Bitcoin
              </div>
              <div className="press-article-block_block_text">
                Blockstream Energy will significantly improve the financial
                viability of renewable energy projects by delivering scalable
                energy demand.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_simplifies_lightning_with_on_demand_node_service_greenlight/prweb18082478.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Simplifies Lightning with On-Demand Node Service—Greenlight"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_c-lightning.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                July 21, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Simplifies Lightning with On-Demand Node
                Service—Greenlight
              </div>
              <div className="press-article-block_block_text">
                Greenlight brings ‘not your keys, not your coins’ to Lightning
                node hosting
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_and_square_inc_join_forces_to_build_solar_powered_bitcoin_mine_in_the_us/prweb17985526.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream and Square, Inc. Join Forces to Build Solar-Powered Bitcoin Mine in the US"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_blockstream_mining_square.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                June 05, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream and Square, Inc. Join Forces to Build Solar-Powered
                Bitcoin Mine in the US
              </div>
              <div className="press-article-block_block_text">
                The new 100% solar-powered Bitcoin mine will offer live
                performance reporting to the public as a real-time case study
                for renewable energy Bitcoin mining.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_acquires_adamant_capital_establishes_new_financial_division_blockstream_finance/prweb17955232.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Acquires Adamant Capital, Establishes New Financial Division—Blockstream Finance"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_finance.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                May 22, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Acquires Adamant Capital, Establishes New Financial
                Division—Blockstream Finance
              </div>
              <div className="press-article-block_block_text">
                Blockstream Finance will deliver new Bitcoin-focused investment
                products based on the Liquid Network.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/announcing_raretoshi_an_nft_and_physical_art_marketplace_built_on_the_liquid_network/prweb17951781.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Announcing Raretoshi, an NFT and Physical Art Marketplace Built on the Liquid Network"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_liquid_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                May 21, 2021
              </div>
              <div className="press-article-block_block_title">
                Announcing Raretoshi, an NFT and Physical Art Marketplace Built
                on the Liquid Network
              </div>
              <div className="press-article-block_block_text">
                Raretoshi enables artists to put their digital and physical art
                up for auction and direct sale using LNFTs.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockfi_taps_blockstream_for_mining_colocation_services/prweb17943684.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="BlockFi Taps Blockstream for Mining Colocation Services"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_mining.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                May 18, 2021
              </div>
              <div className="press-article-block_block_title">
                BlockFi Taps Blockstream for Mining Colocation Services
              </div>
              <div className="press-article-block_block_text">
                BlockFi joins a growing list of technology companies choosing to
                host mining operations with Blockstream Mining.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_releases_bitcoin_mining_security_token_the_blockstream_mining_note_bmn_on_stokr/prweb17829659.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream releases Bitcoin mining security token, the Blockstream Mining Note (BMN), on STOKR"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_finance.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                March 30, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream releases Bitcoin mining security token, the
                Blockstream Mining Note (BMN), on STOKR
              </div>
              <div className="press-article-block_block_text">
                The BMN provides investors with access to Bitcoin mining
                hashrate based in Blockstream's mining facilities.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_purchase_25m_of_bitcoin_mining_hardware_from_microbt/prweb17686701.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Purchase $25M of Bitcoin Mining Hardware from MicroBT"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                January 28, 2021
              </div>
              <div className="press-article-block_block_title">
                Blockstream Purchase $25M of Bitcoin Mining Hardware from
                MicroBT
              </div>
              <div className="press-article-block_block_text">
                $25 million of Bitcoin mining equipment added to one of the
                largest mining operations in North America
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/secure_your_bitcoin_and_liquid_assets_with_the_new_blockstream_jade_hardware_wallet/prweb17639123.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Secure Your Bitcoin and Liquid Assets With the New Blockstream Jade Hardware Wallet"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_jade.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                January 03, 2021
              </div>
              <div className="press-article-block_block_title">
                Secure Your Bitcoin and Liquid Assets With the New Blockstream
                Jade Hardware Wallet
              </div>
              <div className="press-article-block_block_text">
                Blockstream launch a new open-source Bitcoin hardware wallet for
                storing bitcoin, Tether USDt, and other Liquid assets.
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/blockstream_launches_aqua_a_new_bitcoin_liquid_wallet/prweb17427288.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Launches AQUA: a New Bitcoin & Liquid Wallet"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_aqua.png)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                September 28, 2020
              </div>
              <div className="press-article-block_block_title">
                Blockstream Launches AQUA: a New Bitcoin &amp; Liquid Wallet
              </div>
              <div className="press-article-block_block_text">
                A new wallet designed for the next wave of Bitcoin and Liquid
                asset adoption
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/the_liquid_networks_federation_adds_eight_new_members/prweb17287330.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="The Liquid Network’s Federation Adds Eight New Members"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_liquid_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                July 29, 2020
              </div>
              <div className="press-article-block_block_title">
                The Liquid Network’s Federation Adds Eight New Members
              </div>
              <div className="press-article-block_block_text">
                New batch of Liquid Federation members brings a range of new
                integrations for Liquid users
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="http://www.prweb.com/releases/liquid_network_grows_to_45_members/prweb17008086.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Liquid Network Grows to 45 Members"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_liquid_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                March 27, 2020
              </div>
              <div className="press-article-block_block_title">
                Liquid Network Grows to 45 Members
              </div>
              <div className="press-article-block_block_text">
                Ten more cryptocurrency businesses onboarded as members of the
                Liquid Federation
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
              role="Blockstream Reveals Massive Bitcoin Mining Facilities, Fidelity An Early Customer"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_mining.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                August 8, 2019
              </div>
              <div className="press-article-block_block_title">
                Blockstream Reveals Massive Bitcoin Mining Facilities, Fidelity
                An Early Customer
              </div>
              <div className="press-article-block_block_text">
                On Thursday, blockchain technology company Blockstream revealed
                details related to their massive Bitcoin mining data centers in
                Quebec, Canada and Adel, Georgia
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prweb.com/releases/blockstream_reveals_liquid_securities_and_major_launch_partners/prweb16314271.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Reveals Liquid Securities and Major Launch Partners"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_liquid_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                May 15, 2019
              </div>
              <div className="press-article-block_block_title">
                Blockstream Reveals Liquid Securities and Major Launch Partners
              </div>
              <div className="press-article-block_block_text">
                Blockstream revealed the coming release of its new Liquid
                Securities platform, a user-friendly solution for businesses
                issuing security tokens on the Liquid Network
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prweb.com/releases/liquid_network_expands_with_new_members_and_integrations/prweb16296505.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Liquid Network Expands with New Members and Integrations"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_liquid_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                May 8, 2019
              </div>
              <div className="press-article-block_block_title">
                Liquid Network Expands with New Members and Integrations
              </div>
              <div className="press-article-block_block_text">
                Multiple new members join the Liquid Network and Bitfinex opens
                up new integration
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prweb.com/releases/blockstream_launches_the_liquid_network/prweb15828874.htm"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Launches the Liquid Network"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_liquid_network.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Oct 10, 2018
              </div>
              <div className="press-article-block_block_title">
                Blockstream Launches the Liquid Network
              </div>
              <div className="press-article-block_block_text">
                New sidechain technology enables fast and secure inter-exchange
                settlement of digital assets
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/digital-garage-and-blockstream-expand-partnership-to-accelerate-cryptocurrency-and-blockchain-deployments-in-japan-300559984.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Digital Garage and Blockstream Expand Partnership to Accelerate Cryptocurrency and Blockchain Deployments in Japan"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Nov 20, 2017
              </div>
              <div className="press-article-block_block_title">
                Digital Garage and Blockstream Expand Partnership to Accelerate
                Cryptocurrency and Blockchain Deployments in Japan
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the leader in blockchain technologies and financial
                cryptography, and Digital Garage, Inc., the Japanese company
                that provides "new...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/announcing-blockstream-satellite-broadcasting-bitcoin-from-space-300504390.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Announcing Blockstream Satellite: Broadcasting Bitcoin from Space"
              style={{
                backgroundImage:
                  "url(/img/blog/blog_placeholder/blog_placeholders_satellite.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Aug 15, 2017
              </div>
              <div className="press-article-block_block_title">
                Announcing Blockstream Satellite: Broadcasting Bitcoin from
                Space
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the leader in blockchain and financial
                cryptography, today announced the availability of Blockstream
                Satellite, a new service that...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/blockstream-welcomes-samson-mow-as-chief-strategy-officer-300438516.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Welcomes Samson Mow as Chief Strategy Officer"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Apr 12, 2017
              </div>
              <div className="press-article-block_block_title">
                Blockstream Welcomes Samson Mow as Chief Strategy Officer
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the leader in blockchain and related technologies,
                today announced a new member to its executive team. Starting
                this month, Samson Mow...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/blockstream-launches-new-confidential-assets-feature-for-enterprise-blockchain-customers-300432727.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Launches New Confidential Assets Feature for Enterprise Blockchain Customers"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Apr 03, 2017
              </div>
              <div className="press-article-block_block_title">
                Blockstream Launches New Confidential Assets Feature for
                Enterprise Blockchain Customers
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the leader in advanced blockchain technology and
                applied cryptography, today announced the availability of
                Confidential Assets, a new...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/blockstream-appoints-hashcash-inventor-dr-adam-back-as-ceo-300337815.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Appoints Hashcash Inventor Dr. Adam Back as CEO"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Oct 03, 2016
              </div>
              <div className="press-article-block_block_title">
                Blockstream Appoints Hashcash Inventor Dr. Adam Back as CEO
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the leader in blockchain and related technologies,
                today announced that its board of directors unanimously
                appointed the company's...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/blockstream-announces-55-million-series-a-investment-bringing-total-capital-raised-to-76-million-300214279.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="Blockstream Announces $55 Million Series A Investment Bringing Total Capital Raised to $76 Million"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Feb 03, 2016
              </div>
              <div className="press-article-block_block_title">
                Blockstream Announces $55 Million Series A Investment Bringing
                Total Capital Raised to $76 Million
              </div>
              <div className="press-article-block_block_text">
                Blockstream, the leader in blockchain and related technologies,
                today announces that it has raised $55 million in Series A
                funding to bring next...
              </div>
            </div>
          </a>
        </div>
        <div className="press-article-block">
          {" "}
          <a
            href="https://www.prnewswire.com/news-releases/pwc-and-blockstream-announce-strategic-partnership-300211895.html"
            target="_blank"
          >
            <div
              className="press-article-block_image-container"
              role="PwC and Blockstream Announce Strategic Partnership"
              style={{
                backgroundImage:
                  "url(/img/blog/default_banners/company_banner_display.jpg)"
              }}
            />
            <div className="press-article-block_block">
              <div className="press-article-block_block_publication">
                Jan 28, 2016
              </div>
              <div className="press-article-block_block_title">
                PwC and Blockstream Announce Strategic Partnership
              </div>
              <div className="press-article-block_block_text">
                Blockstream is pleased to announce today a strategic partnership
                with PwC to bring blockchain technology and services to
                companies around the world....
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
    <a id="back-to-top" className="" />
  </footer>
</div>

    </div>
}



export default PressReleases;
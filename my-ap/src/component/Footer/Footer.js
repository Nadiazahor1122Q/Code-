import React from 'react';

const Footer = () => {
    return <div>
        <footer>
  <div className="social-mobile">
    <div className="social-links">
      <a href="https://twitter.com/Blockstream" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://ca.linkedin.com/company/blockstream" target="_blank">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="https://www.facebook.com/Blockstream/" target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://t.me/blockstream" target="_blank">
        <i className="fab fa-telegram" />
      </a>
      <a href="https://github.com/Blockstream" target="_blank">
        <i className="fab fa-github" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCZNt3fZazX9cwWcC9vjDJ4Q"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
    </div>
  </div>
  <div id="footer">
    <div className="footer-sitemap">
      <div className="footer-sitemap_logo-grid">
        <img src="/img/icons/BLKS_LOGO.svg" alt="Blockstream" />
        <div className="social-desktop">
          <div className="social-links">
            <a href="https://twitter.com/Blockstream" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://ca.linkedin.com/company/blockstream"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.facebook.com/Blockstream/" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://t.me/blockstream" target="_blank">
              <i className="fab fa-telegram" />
            </a>
            <a href="https://github.com/Blockstream" target="_blank">
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZNt3fZazX9cwWcC9vjDJ4Q"
              target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="footer-sitemap_logo-grid_terms_privacy">
          <ul>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="footer-sitemap_logo-grid_copyright">
          © 2022 Blockstream Corporation Inc.
          <br />
          All rights reserved.
        </div>
      </div>
      <div className="footer-sitemap_sitelinks">
        <div className="footer-sitemap_products">
          <h4 className="footer-title">Products</h4>
          <div className="footer-sitemap_products_twoColGrid collapse">
            <ul>
              <li>
                <a href="/liquid">Liquid Network</a>
              </li>
              <li>
                <a href="/finance/bmn">Blockstream Finance</a>
              </li>
              {/*<li> <a href="/aqua">AQUA Wallet</a></li>*/}
              <li>
                <a href="/amp">Blockstream AMP</a>
              </li>
              <li>
                <a href="/jade">Blockstream Jade</a>
              </li>
              <li>
                <a href="/green">Blockstream Green</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/mining">Blockstream Mining</a>
              </li>
              <li>
                <a href="/satellite">Blockstream Satellite</a>
              </li>
              <li>
                <a href="https://blockstream.info/" target="_blank">
                  Blockstream Explorer
                </a>
              </li>
              <li>
                <a href="/cryptofeed">Cryptocurrency Data Feed</a>
              </li>
              <li>
                <a href="/lightning">Lightning Network</a>
              </li>
              <li>
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
                <a href="https://medium.com/blockstream" target="_blank">
                  Engineering Blog
                </a>
              </li>
              <li>
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
                <a href="/research">Research</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Resources</h4>
            <ul className="collapse">
              <li>
                <a href="https://help.blockstream.com/">Support</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/brand-assets">Brand Assets</a>
              </li>
              <li>
                <a href="https://www.blockstreamscamdb.com/">Scam DB</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <a id="back-to-top" className="show" /> */}
</footer>

    </div>
}


export default Footer;
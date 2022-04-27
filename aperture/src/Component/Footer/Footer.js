import "./Footer.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div>
           
          <div className="sc-gKcln LQbtq" id="partners">
  <div className="padding textContainer"  data-aos="fade-up"
     data-aos-duration="3000">
    <p className="sc-kDTinF iUjOKQ textHeader">partners &amp; investors</p>
    <div className="sponsorClass">
      <div>
        <img src="/static/media/inv4.168de45d.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv6.a6be82dd.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv5.b7b050c2.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv2.2832020b.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv3.37fe4daf.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv1.e96326be.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv7.85f0286f.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv8.ca1a8a2f.webp" alt="sponsor" />
      </div>
      <div>
        <img src="/static/media/inv9.3a0aa9cb.webp" alt="sponsor" />
      </div>
      <div>
        <p className="">Do Kwon</p>
      </div>
      <div>
        <p className="">Richard Dai</p>
      </div>
      <div>
        <p className="textSmall">Ashwin Ramachandran</p>
      </div>
    </div>
  </div>
</div>
<footer className="sc-bdvvtL nyYEC">
  <div className="container">
    <div className="footerContainer">
      <div className="linkContainer">
        <span className="footerChild">
          <a target="_blank" rel="noreferrer" href="/terms-conditions">
            <p>T&amp;C</p>
          </a>
          <hr />
        </span>
        <span className="footerChild">
          <a target="_blank" rel="noreferrer" href="/privacy">
            <p>privacy policy</p>
          </a>
        </span>
      </div>
      <div className="iconContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@aperturefinance"
        >
          <img
            src="/static/media/medium.224aab48.webp"
            alt="/static/media/medium.224aab48.webp"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/MGHguks25G"
        >
          <img
            src="/static/media/discord.b516fcd7.webp"
            alt="/static/media/discord.b516fcd7.webp"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ApertureFinance"
        >
          <img
            src="/static/media/twitter.8eb18ec4.webp"
            alt="/static/media/twitter.8eb18ec4.webp"
          />
        </a>
      </div>
      <div className="linkContainer">
        <span className="footerChild">
          <a target="_blank" rel="noreferrer" href="/mediakit">
            <p>media kit</p>
          </a>
          <hr />
        </span>
        <span className="footerChild">
          <a href="mailto:contact@aperture.finance">
            <p>contact</p>
          </a>
          <hr />
        </span>
        <span className="footerChild">
          <p style={{ alignSelf: "center" }}>© Aperture Finance 2022</p>
        </span>
      </div>
    </div>
  </div>
</footer>

    </div>
}



export default Footer;

import React, { useEffect } from "react";
import AOS from "aos";
import "./Backers.css"
import "aos/dist/aos.css";
const Backers = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div>
            <div className="container-fluid border-bottom border-1 border-secondary mb-5 text-center py-5 logo-section">
  <p
    className="text-primary banner-subheading "
    data-aos="fade-down"
    data-aos-offset={-200}
  />
  <h2 className="banner-heading " data-aos="fade-up" data-aos-offset={-200}>
    OUR BACKERS
  </h2>
  <div className="container ">
    <div className="row d-flex align-items-center ">
      <div className="col">
        <a href="https://www.basics.vip/" target="_blank">
          <img src="images/Investor Logos/basic-Capitals.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://moonwhale.ventures/" target="_blank">
          <img src="images/Investor Logos/MOONWHALE_LOGOFINAL_RevWhite.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://mavencapital.io/" target="_blank">
          <img src="images/Investor Logos/Maven.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://au21.capital/" target="_blank">
          <img src="images/Investor Logos/AU21 Capital Logo white background - Final V3-01 copy.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://www.gains-associates.com/#/home" target="_blank">
          <img src="images/Investor Logos/gains.png" />
        </a>
      </div>
    </div>
    <div className="row d-flex align-items-center ">
      <div className="col">
        <a href="https://magnusdigitalassets.com/" target="_blank">
          <img src="images/Investor Logos/magnus.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://eversecapital.com/" target="_blank">
          <img src="images/Investor Logos/everse.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://exnetworkcapital.com/" target="_blank">
          <img src="images/Investor Logos/Exnetwork.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://zbs.capital/" target="_blank">
          <img src="images/Investor Logos/ZBS.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://x21digital.com/" target="_blank">
          <img src="images/Investor Logos/x21.png" />
        </a>
      </div>
      <div className="col">
        <a href="https://twitter.com/GlockVentures" target="_blank">
          <img src="images/glock.png" />
        </a>
      </div>
    </div>
    <div className="col"></div>
  </div>
</div>

    </div>
}



export default Backers;
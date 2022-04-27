import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Offer.css"

const Offer = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div className='sc-jrQzAO'>
        <div id="offering">
  <div className="padding textContainer">
    <p className="textHeader">product offering</p>
    <div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="MuiGrid-root MuiGrid-container offeringClass css-1d3bbye">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 grid css-1ekasd5">
            <h2 style={{ color: "rgb(100, 63, 255)" }}>invest</h2>
            <p>
              An ecosystem that presents you the investment opportunities
              aggregated cross-chain, paired with a frictionless cross-chain
              experience.
            </p>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 grid css-1ekasd5">
            <img src="/static/media/investImage.0a994470.webp" alt="invest" />
          </div>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="MuiGrid-root MuiGrid-container offeringClass css-1d3bbye">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 grid css-1ekasd5">
            <h2 style={{ color: "rgb(246, 177, 102)" }}>invest +</h2>
            <p>
              A marketplace for community-driven strategies to deliver
              exceptional returns – featuring delta-neutral strategy on
              synthetic stock assets and auto yield optimizer.
            </p>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 grid css-1ekasd5">
            <img src="/static/media/plusImage.adcc5bec.webp" alt="invest +" />
          </div>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="MuiGrid-root MuiGrid-container offeringClass css-1d3bbye">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 grid css-1ekasd5">
            <h2 style={{ color: "rgb(0, 172, 237)" }}>SDK</h2>
            <p>
              Our SDK empowers community developers to collaborate and build on
              Aperture whether you code with Rust, Solidity or the C language.{" "}
            </p>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 grid css-1ekasd5">
            <img src="/static/media/sdkImage.ded8b7c9.webp" alt="SDK" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
}


export default Offer;
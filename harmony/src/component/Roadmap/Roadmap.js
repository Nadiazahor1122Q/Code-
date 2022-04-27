import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return <div>
        <div
  className="container-fluid border-bottom border-1 border-secondary mb-5 py-5 text-center"
  id="roadmap"
>
  <p
    className="text-primary banner-subheading "
    data-aos="fade-down"
    data-aos-offset={-200}
    data-aos-easing="ease-in-sine "
  >
    CURRENT PLANS
  </p>
  <h2
    className="banner-heading "
    data-aos="fade-up"
    data-aos-offset={-200}
    data-aos-easing="ease-in-sine "
  >
    ROADMAP
  </h2>
  <div className="container ">
    <div
      className="row g-0 h-100 py-5"
      style={{ paddingBottom: "140px !important" }}
    >
      <div
        className="col timeline-wrapper "
        data-aos="fade-right"
        data-aos-offset={-200}
        data-aos-easing="ease-in-sine "
      >
        <div className="middle-line " />
        <div className="box box-top ">
          <div className="date ">
            <p>
              Q4
              <br />
              2021
            </p>
          </div>
        </div>
        <div className="asd">
          <ul className="text-white" style={{fontSize:"20px"}}>
            <li>Harmony Launcher Private Sale</li>
            <li> Public sale</li>
          </ul>
        </div>
      </div>
      <div
        className="col timeline-wrapper "
        data-aos="fade-right"
        data-aos-offset={-200}
        data-aos-easing="ease-in-sine "
        data-aos-delay={200}
      >
        <div className="middle-line " />
        <div className="box box-top ">
          <div className="date dark ">
            <p>
              Q1
              <br />
              2022
            </p>
          </div>
        </div>
        <div className="asd ">
          <ul className="text-white" style={{fontSize:"22px"}}> 
            <li>Platform Launch</li>
            <li> Harmony Launcher IDOs</li>
            <li> AMM DEX Testnet</li>
          </ul>
        </div>
      </div>
      <div
        className="col timeline-wrapper "
        data-aos="fade-right"
        data-aos-offset={-200}
        data-aos-easing="ease-in-sine "
        data-aos-delay={400}
      >
        <div className="middle-line " />
        <div className="box box-top ">
          <div className="date dark ">
            <p>
              Q1
              <br />
              2022
            </p>
          </div>
        </div>
        <div className="asd ">
          <ul className="text-white" style={{fontSize:"22px"}}>
            <li>Mobile App Testnet</li>
            <li> $Harl TGE &amp; Listing</li>
            <li>AMM DEX Beta V1</li>
          </ul>
        </div>
      </div>
      <div
        className="col timeline-wrapper "
        data-aos="fade-right"
        data-aos-offset={-200}
        data-aos-easing="ease-in-sine "
        data-aos-delay={600}
      >
        <div className="middle-line " />
        <div className="box box-top ">
          <div className="date dark ">
            <p>
              Q2
              <br />
              2022
            </p>
          </div>
        </div>
        <div className="asd ">
          <ul className="text-white" style={{fontSize:"22px"}}>
            <li>AMM DEX Mainnet</li>
            <li>Migration on another chains</li>
            <li>Mobile App Mainnet</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
}


export default Roadmap;
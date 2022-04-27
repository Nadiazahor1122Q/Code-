import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
  return <div>
    <div className='css-177f0xs'>
    <div className='css-1ymyi8'>
      <div className='css-1tetxn'>
        <div className='css-270x0e'>
          <p className="chakra-text css-17h59v9">BY THE COMMUNITY</p>
          <p className="chakra-text css-prk6ch">A Centralized Exchange</p>
        </div>
        <div className="css-1ysf78c">
          <div className="css-a5gf7c">
            <img className="chakra-image css-0"id='css-a5gf7c' style={{ width: "76%" }} src="/img/killer.svg" />
            <img class="chakra-image css-0" id='mobile'  style={{ width: "100%" }}  src="/img/killer_mobile.svg"></img>
          </div>
        </div>
        <p className="chakra-text css-xm1q5y">
          Position Exchange is The Next-Gen Decentralized Trading &amp; Crypto Platform
          with a whole Ecosystem running fully on-chain.
        </p>
        <div className="css-kj1ykd">
          <div className="css-1w9zbz">
            <button type="button" className="chakra-button css-qjpgu9">
              Open Exchange
            </button>
          </div>
          <div className="css-jpxj4s">
            <button type="button" className="chakra-button css-bwfc1h">
              Connect <div className="css-15tnlkm">Wallet</div>{" "}
            </button>
          </div>
        </div>

      </div>
      <div className="css-q50xov">
        <div className="css-psah9x">
          <video  src="/img/landing_introduction.webm" loop="true" muted="true"  style={{ pointerEvents: "none", display: "flex",marginLeft:"30%",marginTop:"-19px" }} autoplay="true" preload="auto"
            playsinline="true"></video>
        </div>
      </div>
            </div>
            </div>


  </div>
}



export default HeroSection;
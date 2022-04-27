import React from 'react';
import "./AboutUs.css"
const AboutUs = () => {
    return <div>
         <div className="container-fluid border-bottom border-1 border-secondary mb-5">
  <div className="container d-flex ">
    <div
      className="row d-flex align-items-center aos-init aos-animate"
      data-aos="fade-up"
      data-aos-offset={100}
    >
      <div className="col text-md-start text-center">
        <img src="images/earth.png " alt="earth " className="img-fluid" />
      </div>
      <div className="col text-md-start text-center">
        <p className="text-primary banner-subheading">WHO WE ARE?</p>
        <h2 className="banner-heading text-md-start text-center">About Us</h2>
        <p className="text-grey banner-description">
          Harmony Launcher is the world’s first decentralized IDO + IGO
          launchpad and incubator with an integrated AMM DEX who’s primary focus
          is to provide all the necessary grounds for start-ups and projects
          based on the harmony network to build, raise funds &amp; launch
          successfully.
        </p>
        {/* <a href="# " class="btn-neo ">Launch with us</a> */}
      </div>
    </div>
  </div>
</div>

    </div>
}

export default AboutUs;







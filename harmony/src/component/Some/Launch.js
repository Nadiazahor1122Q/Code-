
import "./Launch.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  



export  const Launch = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return <div>
<div
  className="container-fluid border-bottom border-1 border-secondary mb-6"
  id="home"
>
  <div className="row vh-100 d-flex align-items-center">
    <div className="col-md-2 " />
    <div className="col">
    <p class="line-1 anim-typewriter" id="main-heading"> World’s First IDO + IGO Incubator & LaunchPad ...</p>
     <p className='mt-3 text-primary fs-3 animate__animated animate__fadeIn animate__slow animate__delay-2s'>Built On Harmony Blockchain</p>
     <p id="font" className='text-grey banner-description text-justify animate__animated animate__fadeIn animate__slow animate__delay-2s'>The secure and hassle-free way to launch your projects on the Harmony Network.</p>
      <a href="https://app.harmonylauncher.io/" className="btn-neo">
        Open App
      </a>
    </div>
    <div className="col">
      {/* <img src="images/hand.png " alt="hands " class="float-end "> */}
    </div>
  </div>
</div>
 </div>
};
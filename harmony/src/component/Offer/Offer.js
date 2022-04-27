
import "./Offer.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Offer = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return <div>
  <div
  className="container-fluid border-bottom border-1 border-secondary text-center mb-0"
  id="cases"
>
  <p
    className="text-primary banner-subheading aos-init aos-animate"
    data-aos="fade-down"
    data-aos-offset={-200}
  >
    WHAT WE OFFER?
  </p>
  <h2
    className="banner-heading aos-init aos-animate"
    data-aos="fade-up"
    data-aos-offset={-200}
  >
    Harmony Launcher's Aim
  </h2>
  <div className="container">
    <div className="row py-5 ">
      <div
        className="col aos-init aos-animate"
        data-aos="fade-up"
        data-aos-offset={-200}
      >
        <div className="neo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQXxD4qdWs0VGllaAH_PJBN_xiHAtwnxCdOaQ-_gAL0j043t6" className="ic-icon mx-auto"  width={80} height={80}/>
          {/*<i class="fas fa-university text-primary fa-3x py-4 "></i>*/}
          <p className="text-white neo-description ">
            To lay the foundation for harmony based projects/startups to Build,
            Nourish, Raise Funds &amp; Launch in a safe, secure, and hassle-free
            way.
          </p>
        </div>
      </div>
      <div
        className="col aos-init aos-animate"
        data-aos="fade-up"
        data-aos-offset={-200}
      >
        <div className="neo ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQXxD4qdWs0VGllaAH_PJBN_xiHAtwnxCdOaQ-_gAL0j043t6" className="ic-icon mx-auto"  width={80} height={80}/>
          {/*<i class="fas fa-money-check text-primary fa-3x py-4 "></i>*/}
          <p className="text-white neo-description ">
            To provide investors with numerous opportunities to directly invest
            into legit and verified start-ups based on the Harmony Network.
          </p>
        </div>
      </div>
      <div
        className="col aos-init aos-animate"
        data-aos="fade-up"
        data-aos-offset={-200}
      >
        <div className="neo ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQXxD4qdWs0VGllaAH_PJBN_xiHAtwnxCdOaQ-_gAL0j043t6" className="ic-icon mx-auto"  width={80} height={80}/>
          {/*<i class="fas fa-chart-area text-primary fa-3x py-4 "></i>*/}
          <p className="text-white neo-description ">
            To guide harmony based startups through their growth and
            developmental stages by providing all the necessary elements &amp;
            support.
          </p>
        </div>
      </div>
    </div>
    <div className="row mb-md-5 mb-sm-1 ">
      <div className="col-md-2 "></div>
      <div
        className="col aos-init aos-animate"
        data-aos="fade-up"
        data-aos-offset={-200}
      >
        <div className="neo ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQXxD4qdWs0VGllaAH_PJBN_xiHAtwnxCdOaQ-_gAL0j043t6" className="ic-icon mx-auto"  width={80} height={80}/>
          {/*<i class="fas fa-chart-pie text-primary fa-3x py-4 "></i>*/}
          <p className="text-white neo-description ">
            To encourage and promote biggest numerous of the projects and
            start-ups to build with the help of Harmony Network’s opportunities.
          </p>
        </div>
      </div>
      <div
        className="col aos-init aos-animate"
        data-aos="fade-up"
        data-aos-offset={-200}
      >
        <div className="neo ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQXxD4qdWs0VGllaAH_PJBN_xiHAtwnxCdOaQ-_gAL0j043t6" className="ic-icon mx-auto"  width={80} height={80}/>
          {/*<i class="fas fa-microchip text-primary fa-3x py-4 "></i>*/}
          <p className="text-white neo-description ">
            To eliminate the possibility of unfair allocations methodology
            within the De-Fi ecosystem with Harmony Launcher’s core products.
          </p>
        </div>
      </div>
      <div className="col-md-2 d-none d-md-block"></div>
    </div>
  </div>
</div>


    </div>
}



export default Offer;
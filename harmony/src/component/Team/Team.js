import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div>
        
<div className="container-fluid border-bottom border-1 border-secondary mb-5 text-center py-5 ">
  {/* <p class="text-primary banner-subheading " data-aos="fade-down " data-aos-offset="100 " data-aos-easing="ease-in-sine ">WHO WE ARE?</p> */}
  <h2
    className="banner-heading "
    data-aos="fade-up"
    data-aos-offset={-200}
    data-aos-easing="ease-in-sine "
  >
    OUR ADVISORS
  </h2>
  <div className="container h-100" style={{ overflow: "hidden" }}>
    <div className="row d-flex align-items-top justify-content-center gy-4">
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/Yuen.jpg "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Yuen Wong</h3>
        <h5 className="text-secondary mb-4 ">Founder of Labs group</h5>
        <a
          href="https://twitter.com/Yuenwonglabs"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-twitter-square " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src=" images/nik.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Nikolaos Kost</h3>
        <h5 className="text-secondary mb-4 ">
          Founder of Rebaked &amp; Ex-Harmony
        </h5>
        <a
          href="https://twitter.com/NikolaosKost"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-twitter-square " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/Larry.jpg "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Larry</h3>
        <h5 className="text-secondary mb-4 ">Founder of basics capital</h5>
        <a
          href="https://twitter.com/Larry__Shi"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-twitter-square " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/jeff.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Jeff</h3>
        <h5 className="text-secondary mb-4 ">Co-founder Maven Capital</h5>
        <a
          href="https://twitter.com/mavencapitalio"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-twitter-square " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/justin.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Justin</h3>
        <h5 className="text-secondary mb-4 ">Co-founder Maven Capital</h5>
        <a
          href="https://twitter.com/mavencapitalio"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-twitter-square " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/Denelza.jpg "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Demelza Hays</h3>
        <h5 className="text-secondary mb-4 ">
          Director of research at Cointelegraph
        </h5>
        <a
          href="https://twitter.com/CryptoPhD"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-twitter-square " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/evan.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Evan Luthra</h3>
        <h5 className="text-secondary mb-4 ">Angel Investor</h5>
        <a
          href="https://www.linkedin.com/in/evanluthra/"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-linkedin " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/yash.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Yash Dahenkar</h3>
        <h5 className="text-secondary mb-4 ">Founder of Acknoledger</h5>
        <a
          href="https://www.linkedin.com/in/yash-dahenkar/ "
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-linkedin " />
        </a>
      </div>
      <br />
    </div>
  </div>
  <p
    className="text-primary banner-subheading "
    data-aos="fade-down"
    data-aos-offset={-200}
    data-aos-easing="ease-in-sine "
  >
    WHO WE ARE?
  </p>
  <h2
    className="banner-heading "
    data-aos="fade-up"
    data-aos-offset={-200}
    data-aos-easing="ease-in-sine "
    id="team"
  >
    OUR TEAM
  </h2>
  <div className="container h-100 ">
    <div className="row py-5 d-flex align-items-center justify-content-center">
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/harshad.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Harshad</h3>
        <h5 className="text-secondary mb-4 ">CEO</h5>
        <a
          href="https://www.linkedin.com/in/harshad-wagh-708438215/"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-linkedin " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/ankit.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Ankit</h3>
        <h5 className="text-secondary mb-4 ">Co-Founder</h5>
        <a
          href=" https://www.linkedin.com/in/ankit-k-8b17b815a/ "
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-linkedin " />
        </a>
      </div>
      <div className="col-6 col-md-4" data-aos="fade-up" data-aos-offset={-200}>
        <img
          src="images/prashant.png "
          alt=" "
          className="img-fluid rounded-circle border border-2 border-white mb-3 "
        />
        <h3 className="fs-3 text-white ">Prashant</h3>
        <h5 className="text-secondary mb-4 ">CMO</h5>
        <a
          href="https://www.linkedin.com/in/prashant-s-719578189/"
          target="_blank"
          className="btn-social-icons "
        >
          <i className="fab fa-linkedin " />
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
}


export default Team;
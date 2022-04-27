import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Feel.css";
const Feel = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div>
        <>
  <div className="container h-100 py-5 " style={{ overflow: "hidden" }}>
    <div
      className="row align-items-center newsletter text-left p-5 position-relative "
      data-aos="fade-down "
      data-aos-offset={-200}
      data-aos-easing="ease-in-sine "
    >
      <div className="newsletter-icon position-relative ">
        <img
          src="images/hand-hat.png "
          alt=" "
          className="img-fluid w-25 position-absolute start-100 translate-middle "
          data-aos="fade-up"
          data-aos-offset={-200}
        />
      </div>
      <h2 className="text-white " data-aos="fade-left" data-aos-offset={-200} style={{fontSize:"20px"}}>
        Have Any Questions?
      </h2>
      <h5
        className="text-secondary "
        data-aos="fade-left"
        data-aos-offset={-200}
      >
        Feel Free To Reach Out!
      </h5>
      <div className="row">
        <div className="col mb-2" data-aos="fade-up" data-aos-offset={-200}>
          <input
            type="text "
            className="form-control neo-field p-3 text-white "
            placeholder="First name "
            aria-label="First name "
          />
        </div>
        <div className="col mb-2" data-aos="fade-up" data-aos-offset={-200}>
          <input
            type="text "
            className="form-control neo-field p-3 text-white "
            placeholder="Last name "
            aria-label="Last name "
          />
        </div>
        <div className="col mb-2" data-aos="fade-down" data-aos-offset={-200}>
          <button className="btn btn-primary py-2 px-5 " type="submit ">
            <i className="fab fa-telegram-plane fa-2x " /> Send
          </button>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer bg-dark border-top border-1 border-secondary py-5 ">
    <div className="container ">
      <div className="row ">
        <div className="col " data-aos="fade-up" data-aos-offset={-200}>
          <a
            href="/ "
            className=" align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none "
          >
            <img src="images/logo.png " alt="Harmony Launcher logo " />
          </a>
        </div>
        <div className="col " data-aos="fade-up" data-aos-offset={-300}>
          <p className="text-white text-end " style={{fontSize:"22px"}}>
            The secure and hassle-free way to launch your projects on the
            Harmony Network.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col " data-aos="fade-up" data-aos-offset={-400}>
          <ul className="list-group list-group-horizontal ">
            <li className="list-group-item " style={{fontSize:"21px"}}> 
              © 2021 Harmonylauncher. All right reserved.
            </li>
            <li className="list-group-item ">
              <a href="privacy-policy.html" style={{fontSize:"22px"}}>Privacy Policy</a>
            </li>
            <li className="list-group-item ">
              <a href="# " style={{fontSize:"22px"}}>Terms of Service</a>
            </li>
            <address>
              <li className="list-group-item ">
                <a href="mailto:Contact@harmonylauncher.io " style={{fontSize:"22px"}}>Contact Us</a>
              </li>
            </address>
          </ul>
        </div>
        <div className="col " data-aos="fade-up" data-aos-offset={-400}>
          <ul className="socia-icons list-group list-group-horizontal float-end ">
            <li className="list-group-item ">
              <a
                href="https://HarmonyLauncher.medium.com "
                target="_blank"
                style={{ fontSize: 30 }}
              >
                <i className="fab fa-mastodon " />
              </a>
            </li>
            <li className="list-group-item ">
              <a
                href="https://twitter.com/harmonylauncher "
                target="_blank"
                style={{ fontSize: 30 }}
              >
                <i className="fab fa-twitter " />
              </a>
            </li>
            <li className="list-group-item ">
              <a
                href="https://t.me/harmonylauncher"
                target="_blank"
                style={{ fontSize: 30 }}
              >
                <i className="fab fa-telegram-plane " />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</>

    </div>
}


export default Feel;
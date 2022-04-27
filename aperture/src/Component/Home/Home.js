import React from 'react';
import "./Home.css";

const Home = () => {
    return <div>
        <nav id="mobileNav">
          
  <div id="navbar" className="container">
    <div className="sc-gKcln dwjQd">
      <a style={{ cursor: "pointer" }}>
        <img
          className="logoMain"
          src="./static/media/logo.14c495a9.webp"
          alt="aperture finance"
          width={125}
        />
        <img
          className="logoHidden"
          src="./static/media/logoColor.43df5d4d.webp"
          alt="aperture finance"
          width={125}
        />
      </a>
    </div>
    <div className="linkContainer">
      <a href='#home'>
        <p className="linkClass">home</p>
      </a>
      <a href='#strategy'>
        <p className="linkClass" >strategy highlight</p>
      </a>
      <a href='#how'>
        <p className="linkClass">how it works</p>
      </a>
      <a href='#about'>
        <p className="linkClass">about</p>
      </a>
      <div className="navButton">
        <div className="sc-dkPtRN gWsouE">
          <div>
            <a
              className="linkClass"
              href="https://aperture-private-beta.kickoffpages.com"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root sc-gsDKAQ iHtIbJ css-1hw9j7s"
                tabIndex={0}
                type="button"
              >
                <p style={{ fontSize: 17 }}>Join Waitlist</p>
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
<div  className="sc-jrQzAO LQbtq">
<div id="home" className="sc-iCfMLu jaMJrP">
      <div className="videoContainer">
        <video
          src="./static/media/heroBG.117c0188.mp4"
          id="bgVideo"
          playsInline=""
          style={{width:"100%"}}
          loop=""
          poster="./static/media/poster.d1099ee7.webp"
          className="sc-furwcr cWBjRv"
        />
      </div>
      <div className="container">
        <h1>Cross-chain Investment Made Easy</h1>
        <h6>
          With integrated bridge solutions Aperture is your gateway to DeFi
          2.0.
        </h6>
      </div>
    </div>
</div>

    </div>
}



export default Home;

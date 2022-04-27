import React from 'react';
import "./Home.css"

const Home = () => {
  
    return <div>
        <header className="header position-fixed align-items-center justify-content-center justify-content-md-between py-3 mb-4 zindex-fixed">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a
        href="/"
        className="align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none animate__animated animate__fadeInDown"
      >
        <img src="images/logo.png" alt="Harmony Launcher logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="header-bar animate__animated animate__fadeInUp collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="nav justify-content-center mb-md-0 navbar-nav mr-auto">
          <li>
            {" "}
            <a
              href="#home"
              className="nav-link px-2 link-dark header-nav__link"
            >
              <i className="fas fa-home" /> Home
            </a>
          </li>
          <li>
            <a
              href="#cases"
              className="nav-link px-2 link-dark header-nav__link"
            >
              <i className="far fa-lightbulb" /> Use Cases
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="nav-link px-2 link-dark header-nav__link"
            >
              <i className="fas fa-bolt" /> Features
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="nav-link px-2 link-dark header-nav__link"
            >
              <i className="fas fa-map" /> Roadmap
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="nav-link px-2 link-dark header-nav__link"
            >
              <i className="fas fa-user" /> Team
            </a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <a
            type=" button "
            className="btn btn-primary btn-skew float-end tooltip23"
            href="https://referral.harmonylauncher.io/#/harmony-launcher"
            data-bs-placement="bottom"
            title=""
          >
            <i className="fas fa-globe " /> whitelist
          </a>
          <a
            type=" button "
            className="btn btn-primary btn-skew float-end tooltip23"
            href="https://app.harmonylauncher.io/"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title=""
          >
            <i className="fas fa-globe " /> Go to App
          </a>
        </div>
      </div>
    </nav>
  </div>
</header>

    </div>
}


export default Home; 


import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ReactGA from 'react-ga';
import "./NavBar.css";

export default function NavBar(props) {
  const history = useHistory();
  const [activeMenu, setActivMenu] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if(window.location.pathname == '/' || window.location.pathname == 'home'){
      setActivMenu(0);
    }else if(window.location.pathname == '/team' ){
      setActivMenu(1);
    }
  })
  
  const navigationHandle = (e,router) => {
    setActivMenu(e);
    ReactGA.event({
      category: 'Page Change',
      action: 'Page change',
      label: 'User change page from ' +window.location.pathname+ ' to /'+ router
    });
    history.push(router)
  }

  const captureEvents = (page,link) => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked',
      label: 'User clicked ' +page+' from ' +window.location.pathname
    });
    window.open(link)
  }

  const isMenuOpenCall = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <React.Fragment>
      <Navbar expand="lg" className={props.position}>
        <Container className={isMenuOpen ? 'opened': 'closed'}>
        
        <div className="d-flex">
          <Navbar.Toggle onClick={() => isMenuOpenCall()}/>
          <a href="/" className="navbar-brand"></a>
        </div>
        <div className="enterButton1" onClick={() => window.open('https://app.bullieverse.com/')}>Enter Metaverse</div>

          <Navbar.Collapse id="basic-navbar-nav">
            <ul>
              <li className={activeMenu == 0 ? 'active' : ''}>
                <a onClick={() => navigationHandle(0,'home')}>Home</a>
              </li>
              <li className={activeMenu == 1 ? 'active' : ''}>
                <a onClick={() => navigationHandle(1,'team')}>Team</a>
              </li>
              <li>
                <a target="_blank" onClick={()=> captureEvents('Whitepaper','https://docs.bullieverse.com/')}>White paper</a>
              </li>
              <li>
                <a target="_blank" onClick={()=> captureEvents('Token','https://docs.bullieverse.com/white-paper/bullieverse-ecosystem/tokenomics/bull-token')}>Token</a>
              </li>
              
              
             {/* <li>
                <NavDropdown title="Documentation" id="menuBarNavDropDown">
                <OverlayTrigger placement="left" delay={{ show: 20, hide: 40 }} overlay={<Tooltip id="button-tooltip-2">Coming Soon</Tooltip>}>
                  <NavDropdown.Item eventKey="whitepaper">White paper</NavDropdown.Item>
                </OverlayTrigger>
                <OverlayTrigger placement="left" delay={{ show: 20, hide: 40 }} overlay={<Tooltip id="button-tooltip-2">Coming Soon</Tooltip>}>
                  <NavDropdown.Item eventKey="faq">FAQs</NavDropdown.Item>
                </OverlayTrigger>
                </NavDropdown>
              </li>*/}
              <li>
                <NavDropdown title="Community" id="menuBarNavDropDown">
                  <NavDropdown.Item eventKey="discord" onClick={()=> captureEvents('Discord','https://discord.com/invite/bullieverse')}>Discord</NavDropdown.Item>
                  <NavDropdown.Item eventKey="twitter" onClick={()=> captureEvents('Twitter','https://twitter.com/Bullieverse')}>Twitter</NavDropdown.Item>
                  <NavDropdown.Item eventKey="telegram" onClick={()=> captureEvents('Telegram','https://t.me/Bullieverse')}>Telegram</NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </Navbar.Collapse>
          <div className="enterButton" onClick={() => window.open('https://token.bullieverse.com/')}>Staking</div>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

import React, { useRef, useState } from "react";
import NavBar from '../../Components/NavBar/NavBar';
import logo from '../../assets/header/logo.9806bc37.svg';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Modal from 'react-bootstrap/Modal';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import './swiper.css'
import ReactGA from 'react-ga';
import "./Home.css";



class Home extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview('/home');
    window.addEventListener("scroll", this.handleScroll, true);
    this.sliderCarousel = React.createRef();
    this.featuredOnSection = React.createRef();
    this.mobileSliderCarousel = React.createRef();
    this.state = {
      navBarPosition:'white',
      showHeroModal:false,
      show3DAvatarModal:false,
      showBarHuntModal:false,
      sliderImages : [{name:'assets/bulls/bull1.png'},{name:'assets/bulls/bull2.png'},{name:'assets/bulls/bull3.png'},
      {name:'assets/bulls/bull4.png'},
      {name:'assets/bulls/bull5.png'},
      {name:'assets/bulls/bull6.png'},
      {name:'assets/bulls/bull7.png'},
      {name:'assets/bulls/bull8.png'},
      {name:'assets/bulls/bull9.png'},
      {name:'assets/bulls/bull10.png'},
      {name:'assets/bulls/bull11.png'},
      {name:'assets/bulls/bull12.png'}
      ],
      activeSlideIndex:0,
      roadMapSlider:[
        
      ],
      partners:[
        {img:'fundamental', name:'big'},
        {img:'okex', name:'big'},
        {img:'IBA', name:'big'},
        {img:'6thman', name:'big'},
        {img:'au21', name:'big'},
        {img:'mavincapital', name:'big'},
        {img:'TheChainCollective', name:'big'},
        {img:'girnas', name:'big'},
        {img:'dweb3', name:'big'},
        {img:'kaizen', name:'big'},
        {img:'everse',name:'big'},
        {img:'goodgame'},
        {img:'ldcapital'},
        {img:'gravity'},
        {img:'lithum'},
        {img:'zbs'},
        {img:'18venture'},
        {img:'roark', name:'big'},
        {img:'computerventure'},
        {img:'liberty'},
        {img:'mintable'},
        {img:'newtrie'},
        {img:'kernel'},
        {img:'jsquare'},
        {img:'seedify'},
        {img:'trustpad'},
        {img:'metaversepad'},
        {img:'redkite'},
        {img:'gamefi'},
        {img:'infinitelaunch'},
        {img:'c2ventures',name:''},
        {img:'simacapital'},
        {img:'bloom'},
        {img:'polinate'},
        {img:'sl2'},
        {img:'polygon'},
        {img:'HGventures'},
        {img:'solrazr'},
        {img:'spark'},
        {img:'mask',name:''},
        {img:'ex', name:'big1'},
        {img:'3DGamers', name:'big1'},
        {img:'BanterCapital', name:'big1'},
        {img:'RR2', name:'big1'},
        {img:'MGG', name:'big1'},
        {img:'CryptoFomo', name:'big1'},
        {img:'avstar', name:'big1'},
        {img:'gc',name:'big1'},
        {img:'exclaiber',name:'big1'},
        {img:'CSLOGO',name:'big1'},
        {img:'21m',name:'big1'},
        {img:'rg',name:'big1'},
        {img:'gate', name:'big1'},
      ],
      featuredOnArray:[
        {
          name:'newsbtc',
          img:'newsbtc.png',
          link:'https://www.newsbtc.com/news/company/fantasy-metaverse-island-bullieverse-creates-a-community-owned-platform-for-arcade-games/'
        },
        {
          name:'hacker',
          img:'hacker.png',
          link:'https://hackernoon.com/we-were-shaping-bullieverse-since-before-metaverse-was-a-thing-srini-anala'
        },
        {
          name:'techbullion',
          img:'techbullion.png',
          link:'https://techbullion.com/bullieverse-launches-fantasy-open-gaming-metaverse-for-web-3-0-citizens/'
        },
        {
          name:'block',
          img:'block.png',
          link:'https://blockonomi.com/bullieverse-guide/'
        }
      ]

    }
      
  }

  handleScroll = (event) => {
    if(window.innerWidth < 800){
      if (window.pageYOffset < this.featuredOnSection.current.offsetTop - 10) {
        this.setState({ navBarPosition: "white"});
      } else {
        this.setState({ navBarPosition: "black"});
      }
    }else{
      if (window.pageYOffset < this.featuredOnSection.current.offsetTop - 10) {
        this.setState({ navBarPosition: "white"});
      } else {
        this.setState({ navBarPosition: "black"});
      }  
    }
    
  };

  componentDidMount() {
    
  }

  changeCarouselSlider(selectedIndex){
    this.setState({ activeSlideIndex: selectedIndex });
  };

  render() {
    return (
      <React.Fragment>
      
        <NavBar position={this.state.navBarPosition}/>
        
        <Modal size="lg" centered keyboard={true} fullscreen={false} show={this.state.show3DAvatarModal} onHide={() => this.setState({show3DAvatarModal:false})} dialogClassName="" aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header>
            <img src="assets/closeIcon.png" onClick={()=> this.setState({show3DAvatarModal:false})}/>
          </Modal.Header>
          <Modal.Body className="p-0">
            <video webkit-playsInline={true} playsInline={true} controls>
              <source src="assets/3DAvatars.mp4" type="video/webm" />
              <source src="assets/3DAvatars.mp4" type="video/mp4" />
            </video>
          </Modal.Body>
        </Modal>

        <Modal size="lg" centered keyboard={true} fullscreen={false} show={this.state.showHeroModal} onHide={() => this.setState({showHeroModal:false})} dialogClassName="" aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header>
            <img src="assets/closeIcon.png" onClick={()=> this.setState({showHeroModal:false})}/>
          </Modal.Header>
          <Modal.Body className="p-0">
            <video webkit-playsInline={true} playsInline={true} controls>
              <source src="assets/watchPromo.mp4" type="video/webm" />
              <source src="assets/watchPromo.mp4" type="video/mp4" />
            </video>
          </Modal.Body>
        </Modal>

        <Modal size="lg" centered keyboard={true} fullscreen={false} show={this.state.showBarHuntModal} onHide={() => this.setState({showBarHuntModal:false})} dialogClassName="" aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header>
            <img src="assets/closeIcon.png" onClick={()=> this.setState({showBarHuntModal:false})}/>
          </Modal.Header>
          <Modal.Body className="p-0">
            <video webkit-playsInline={true} playsInline={true} controls>
              <source src="assets/BearNFTTeaser.mp4" type="video/webm" />
              <source src="assets/BearNFTTeaser.mp4" type="video/mp4" />
            </video>
          </Modal.Body>
        </Modal>

        {/*<div className="heroSectionNew">
          
          <div className="heroImage-overlay"></div>
          
          <div className="textArea container">
              <div className="row mainRow">
                <div className="col-12 col-md-6">
                  <h1>$BULL</h1>
                  <h2>UP FOR GRABS!</h2>
                  <div className="buttonSection">
                    <div className="enterButton" onClick={() => window.open('https://sale.bullieverse.com/')}>Participate in IDO</div>
                    <div className="enterButton-outline" onClick={() => window.open('https://opensea.io/collection/citizens-of-bulliever-island')}>Buy COBI NFT</div>
                  </div>
                </div>
                
                <div className="col-12 col-md-6 rightBullSection">
                  <img src="/assets/hero/rightBull.png" className="rightBull"/>
                </div>
              </div>
              
           
            <div className="buttonSection">
              <div className="enterButton-outline" onClick={() => window.open('https://opensea.io/collection/citizens-of-bulliever-island')}>Buy COBI NFT</div>
            </div>
          
          </div>
        
        </div>*/}
        
        <div className="heroSection">
          <img src="/assets/hero/heroNew.png" className="heroImageWeb" />
          <img src="/assets/hero/heroMobile.png" className="heroImageMobile" />
          <div className="heroImage-overlay"></div>
          <div className="textArea">
          
            <h2>
              WELCOME TO
            </h2>
            
            <h1>
              BULLIEVERSE 
            </h1>
            
            <p>
              A fantasy Metaverse Island where you can play games, create experiences and earn rewards
            </p>
            <div className="buttonSection">
              <div className="enterButton-outline" onClick={() => window.open('https://opensea.io/collection/citizens-of-bulliever-island')}>Buy COBI NFT</div>
              <div className="enterButton-metaverse" onClick={() => window.open('https://app.bullieverse.com/')}>Enter Metaverse</div>
            </div>
          </div>
        </div>

        <div className="featuredOnSection container" ref={this.featuredOnSection}>
          <h1>
            As Featured on
          </h1>
          <div className="imageSection">
            {this.state.featuredOnArray.map((item,index) => (
              <img src={'assets/featured/'+item.img} onClick={() => window.open(item.link)}/>
            ))}
            </div>
        </div>

        <div className="sliderCarousel container" ref={this.sliderCarousel}>
          
          <div className="upperSection">
            <h6>
              Our Vision
            </h6>
            <h1>
              Open World Metaverse Platform
            </h1>
            <p>
              Metaverse truly owned by players, creators and community. 
            </p>
          </div>
          
          <div className="CarouselSlider">
            <Carousel activeIndex={this.state.activeSlideIndex} onSelect={(e)=>this.changeCarouselSlider(e)}>
              <Carousel.Item>
                <div className="firstSliderImage">
                  <img src="assets/bulls/firstSlider.png" className="img1" />
                </div>  
              </Carousel.Item>
              <Carousel.Item>
                <div className="secondSliderImage">
                  <img src="assets/bulls/secondSlider.png" className="img1" />
                </div>  
              </Carousel.Item>
              <Carousel.Item>
                <div className="thirdSliderImage">
                  <img src="assets/bulls/thirdSlider.png" className="img1" />
                </div>  
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="bottomSection">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className={'innerContent ' + (this.state.activeSlideIndex == 0 ? 'active' : '')} onClick={()=> this.changeCarouselSlider(0)}>
                  <div className="number">1</div>
                  <h1>Own</h1>
                  <p>
                    Own NFTs to join the community and get access to the Metaverse
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className={'innerContent ' + (this.state.activeSlideIndex == 1 ? 'active' : '')} onClick={()=> this.changeCarouselSlider(1)}>
                  <div className="number">2</div>
                  <h1>Create</h1>
                  <p>
                    Creators can unleash imagination and build a new breed of blockchain games powered by Unreal Engine
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className={'innerContent ' + (this.state.activeSlideIndex == 2 ? 'active' : '')} onClick={()=> this.changeCarouselSlider(2)}>
                  <div className="number">3</div>
                  <h1>Immerse</h1>
                  <p>
                    Your home to hang out with friends and connect in an immersive experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobileSliderCarousel container" ref={this.mobileSliderCarousel}>
          
          <div className="upperSection">
            <h6>
              Our Vision
            </h6>
            <h1>
              Open World Metaverse Platform
            </h1>
            <p>
              Metaverse truly owned by players, creators and community.
            </p>
          </div>

          <div className="bottomSection">
            <div className="row justify-content-center">
              <div className="col-2 col-md-4 p-0">
                <div className={'innerContent ' + (this.state.activeSlideIndex == 0 ? 'active' : '')} onClick={()=> this.changeCarouselSlider(0)}>
                  <div className="number">1</div>
                </div>
              </div>
              <div className="col-2 col-md-4 p-0">
                <div className={'innerContent ' + (this.state.activeSlideIndex == 1 ? 'active' : '')} onClick={()=> this.changeCarouselSlider(1)}>
                  <div className="number">2</div>
                </div>
              </div>
              <div className="col-2 col-md-4 p-0">
                <div className={'innerContent ' + (this.state.activeSlideIndex == 2 ? 'active' : '')} onClick={()=> this.changeCarouselSlider(2)}>
                  <div className="number">3</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="CarouselSlider">
            <Carousel activeIndex={this.state.activeSlideIndex} onSelect={(e)=>this.changeCarouselSlider(e)}>
              <Carousel.Item>
                <div className="firstSliderImage">
                  <img src="assets/bulls/firstSlider.png" className="img1" />
                </div>  
                <h1>Own</h1>
                <p>
                  Own NFTs to join the community and get access to the Metaverse
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <div className="secondSliderImage">
                  <img src="assets/bulls/secondSlider.png" className="img1" />
                </div>
                <h1>Create</h1>
                <p>
                  Creators can unleash imagination and build a new breed of blockchain games powered by Unreal Engine
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <div className="thirdSliderImage">
                  <img src="assets/bulls/thirdSlider.png" className="img1" />
                </div>
                <h1>Immerse</h1>
                <p>
                  Your home to hang out with friends and connect in an immersive experience
                </p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="middleGreenColorBG">
          <h6>
            Main Features
          </h6>
          <h1>
            What you can do in the Metaverse?
          </h1>
          <div className="blurDiv">
          </div>
        </div>

        <div className="webPlaytoearnSection container">
          <div className="row firstRow">
            
            <div className="col-12 col-md-5 columnn">
              <h1>
                01
              </h1>

              <h2>
              Play 2 Earn
              </h2>

              <p>
                Earn rewards and collectibles by playing fun games in the Metaverse. 
              </p>

              {/*<a href="#">
                Learn More about <br/>Bull tokens
              </a>*/}
            </div>
            <div className="col-0 col-md-1 columnn"></div>
            <div className="col-12 col-md-6 columnn">
              <img src="assets/playtoearn.svg" className="fiimg"/> 
            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-6 columnn">
              <img src="assets/CreateOwn.svg" className="simg"/> 
            </div>
            <div className="col-0 col-md-1 columnn"></div>
            <div className="col-12 col-md-5 columnn">
              <h1>
                02
              </h1>

              <h2>
                Create to Earn
              </h2>

              <p>
                Create games and publish on our game store. Each game will be represented as an NFT and you own the IP. Monetize by creating engaging experiences.
              </p>

            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-5 columnn">
              <h1>
                03
              </h1>

              <h2>
                Craft your Experience
              </h2>

              <p>
                Buy land and craft your experiences in the Bulliever Island Metaverse. Unleash imagination, hang out with friends and immerse yourself in the virtual world.
              </p>

            </div>
            <div className="col-0 col-md-1 columnn"></div>
            <div className="col-12 col-md-6 columnn">
              <img src="assets/CraftyourExperience.png" className="timg"/> 
            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-6 columnn">
              <img src="assets/DAOGovernance.svg" className="fthimg" /> 
            </div>
            <div className="col-0 col-md-1 columnn"></div>
            <div className="col-12 col-md-5 columnn">
              <h1>
                04
              </h1>

              <h2>
                DAO Governance
              </h2>

              <p>
                Have a say in the future of Metaverse experience of the Bulliever Island. 
              </p>

              {/*<a href="#">
                Learn More 
              </a>*/}

            </div>
          
          </div>
          <div className="row secondRow">

            <div className="col-0 col-md-1 columnn"></div>
            <div className="col-12 col-md-5 columnn">
              <h1>
                05
              </h1>

              <h2>
                3D Avatars
              </h2>

              <p>
                Bring your NFT to life and wear them as your avatar in the Metaverse. Your avatar is your digital representation.
              </p>

              <a onClick={() => this.setState({show3DAvatarModal:true})}>
                <img src="assets/watchPromo.png" alt="play" /> Watch Promo
              </a>

            </div>
            <div className="col-12 col-md-6 columnn">
              <img src="assets/3davatar.png" className="simg"/>
            </div>
          
          </div>

        </div>

        <div className="mobilePlaytoearnSection container">
          <div className="row firstRow">
            
            <div className="col-12 col-md-5 columnn">
              <h1>
                01
              </h1>

              <img src="assets/playtoearn.svg" className="fiimg"/> 

              <h2>
                Play 2 Earn
              </h2>

              <p>
                Earn rewards and collectibles by playing fun games in the Metaverse. 
              </p>

              {/*<a href="#">
                Learn More about <br/>Bull tokens
              </a>*/}
            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-5 columnn">
              <h1>
                02
              </h1>

              <img src="assets/CreateOwn.svg" className="simg"/> 

              <h2>
                Create to Earn
              </h2>

              <p>
                Create games and publish on our game store. Each game will be represented as an NFT and you own the IP.  Montize by creating engaging experiences. 
              </p>

            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-5 columnn">
              <h1>
                03
              </h1>

              <img src="assets/CraftyourExperience.png" className="timg"/> 

              <h2>
                Craft your Experience
              </h2>

              <p>
                Buy land and craft your experiences in the Bulliever Island Metaverse. Unleash imagination, hang out with friends and immerse yourself in the virtual world.
              </p>

            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-5 columnn">
              <h1>
                04
              </h1>

              <img src="assets/DAOGovernance.svg" className="fthimg" /> 

              <h2>
                DAO Governance
              </h2>

              <p>
                Have a say in the future of  Metaverse experience of  Bulliever Island. 
              </p>

              {/*<a href="#">
                Learn More 
              </a>*/}

            </div>
          
          </div>

          <div className="row secondRow">

            <div className="col-12 col-md-5 columnn">
              <h1>
                05
              </h1>

              <img src="assets/3davatar.png" className="simg"/>

              <h2>
                3D Avatars
              </h2>

              <p>
                Bring your NFT to life and wear them as your avatar in the Metaverse. Your avatar is your digital representation.
              </p>

              <a onClick={() => this.setState({show3DAvatarModal:true})}>
                <img src="assets/watchPromo.png" alt="play" /> Watch Promo
              </a>

            </div>
          
          </div>

        </div>

        <div className="middlePurpleColorBG">
          <h6>
            Marketplace
          </h6>
          <h1>
            Join the Network
          </h1>
          <p>
            Buy NFTs, Own land and trade in-game assets on the Bullieverse marketplace.
          </p>
          <div className="blurDiv">
          </div>
        </div>

        <div className="marketplaceSection container">
          <div className="row">

          <div className="col-12 col-md-4 clm">
              <div className="columnn">
                <img src="assets/marketplace/BuyNFTs.png" className="icon3" />
                <h1>
                  Buy NFTs
                </h1>
                <p>
                  Buy NFTs that give you access to the Metaverse and use them as your avatar.
                </p>
                {/*<a href="#">
                  Learn More
                </a>*/}
              </div>

            </div>
            
            <div className="col-12 col-md-4 clm">
              <div className="columnn">
                <img src="assets/marketplace/ownLand.png" className="icon1" />
                <h1>
                  Own Land
                </h1>
                <p>
                  Acquire your own piece of digital real estate. Land parcels can be obtained from the auction or buy from other players in the market place.
                </p>
                {/*<a href="#">
                  Learn More
                </a>*/}
              </div>

            </div>
            
            <div className="col-12 col-md-4 clm">
              <div className="columnn">
                <img src="assets/marketplace/TradeAssets.png" className="icon2" />
                <h1>
                  Trade Assets
                </h1>
                <p>
                  This is your one stop shop to buy and sell in-game assets, cosmetics and rare collectibles.
                </p>
                {/*<a href="#">
                  Learn More
                </a>*/}
              </div>

            </div>
            
            
            
          </div>
        </div>

        <div className="middleOrangeColorBG">
          <h6>
            Upcoming
          </h6>
          <h1>
            Unlock the Bear NFTs
          </h1>
          <p>
            Bear hunt is one of the first games for the community to play on the Bullieverse
          </p>
          <div className="blurDiv">
          </div>
        </div>

        <div className="container stepsSection">
          <div className="col-10 col-md-6 m-auto">
            <img src="assets/video.png" className="mobileVideo"/>
            <div className="playSectionMobile" onClick={()=> this.setState({showBarHuntModal:true})}>
                <img src="assets/playRed.png" className="icon"/> Bear NFT Teaser
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              
              <div className="titleBar">
                <div>01</div>
                Signup and Connect Wallet 
              </div>
              <p>
                Signup and register to access the game store. Connect with your wallet to claim NFT from the game. 
              </p>

              <div className="titleBar">
                <div>02</div>
                Hunt the Bear
              </div>
              <p>
                Download the game, Explore the Island and start the hunt
              </p>

              <div className="titleBar">
                <div>03</div>
                Claim your Bear NFT
              </div>
              <p>
                Bear NFT is an ERC-721 Token. Each Bull can claim a Bear.
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-end flex-column">
              <img src="assets/video.png" className="webVideo"/>
              <div className="playSectionWeb" onClick={()=> this.setState({showBarHuntModal:true})}>
                <img src="assets/playRed.png" className="icon"/> Bear NFT Teaser
              </div>
            </div>

          </div>
        </div>

        <div className="partnersSection container" ref={this.partnersSection}>
          <h1>
            Our Investors and Partners
          </h1>
          <div className="partnersImages">
            {this.state.partners.map((item,index) => (
              <img src={'assets/partners/'+item.img+'.png'} className={item.name}/>
            ))}
          </div>
          
        </div>

        <div className="middleGreenColorBG">
          <h6>
            Get Access Now!
          </h6>
          <h1>
            Your chance to be a Bulliever
          </h1>
          <p>
            Bulliever Island is a fantasy Metaverse Island where you can play to earn, have fun and make new friends. A collection of 10,000 citizens live on The Bulliever Island as ERC-721 NFTs.
          </p>
          <div className="blurDiv">
          </div>
        </div>

        <div className="gallerySection container">
          <div className="row">
          
          {this.state.sliderImages.map((item,i) => (
              <div className="col-4 col-md-2 columnn">
                <img src={item.name} className="bullImage"/>
              </div>
          ))}
            
          </div>
        </div>
        
        <div className="mobileOpenseaButtonSection">
          <a href="https://opensea.io/collection/citizens-of-bulliever-island" target="_blank" className="mobileOpenseaButton">Go to Opensea</a>
          {/*<button className="mobileOpenseaButton">Be A Bulliever!</button>*/}
          <button className="mobileOpenseaButton-outline" onClick={() => this.setState({showHeroModal:true})}><img src="assets/play_black.png" className="icon" /> Watch Promo</button>
        </div>

        <div className="webOpenseaMainSection">
          <div className="openseaSection container">
            <a href="https://opensea.io/collection/citizens-of-bulliever-island" target="_blank" className="openseaButton">Go to Opensea</a>
            {/*<button className="openseaButton">Be A Bulliever!</button>*/}
            <button className="openseaButton-outline" onClick={() => this.setState({showHeroModal:true})}><img src="assets/play_black.png" className="icon" /> Watch Promo</button>
          </div>
        </div>

        <div className="webFooterSection">
          <div className="container">
            <div className="logoSection">
              <img src={logo} />
              <h1>CITIZENS OF BULLIEVER ISLAND</h1>
            </div>

            <div className="socialIconSection">
                <div className="socialIcon">
                  <a href="https://discord.com/invite/bullieverse" target="_blank"><img src="assets/social/discord.svg" /></a>
                </div>
                <div className="socialIcon">
                  <a href="https://twitter.com/Bullieverse" target="_blank"><img src="assets/social/twitter.svg" /></a>
                </div>
                <div className="socialIcon">
                  <a href="https://instagram.com/bullieverse" target="_blank"><img src="assets/social/instagram.svg"/></a>
                </div>
                <div className="socialIcon">
                  <a href="https://t.me/Bullieverse" target="_blank"><img src="assets/social/tg.svg" className="telegram"/></a>
                </div>
                <div className="socialIcon">
                  <a href="https://bullieverse.medium.com/" target="_blank"><img src="assets/social/medium.svg" /></a>
                </div>
            </div>
            <div className="copyrights">
              Copyright © 2021 Bullieverse Inc. All rights reserved
            </div>

          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Home;

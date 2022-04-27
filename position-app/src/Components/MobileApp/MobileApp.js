import React from 'react';
import "./MobileApp.css";
const MobileApp = () => {
    return <div>
        <div className="css-1sjozv0">
  <img
    className="chakra-image css-1m5ol03"
    src="/img/bg_start_mobile_app.svg"
  />
  <div className="css-1wrpzpl">
    <div className="css-fjn4fn">
      <p className="chakra-text css-1bysa3b">
        Trade anywhere with Our Mobile App
      </p>
      <p className="chakra-text css-12fgzb1">
        Download our user-friendly and practical Mobile App: Store your tokens,
        keep an eye on the markets, Swap, Trade and Stake!
      </p>
      <a
        href="https://mapp.position.exchange/installapk.html"
        target="_blank"
        className="css-ffimpb"
      >
        <div className="css-11lhwve">
          <img className="chakra-image css-0" src="/img/andoird-icon.svg" />
        </div>
        <div className="css-17xejub" />
        <p className="chakra-text css-1hbj5v0">
          {" "}
          Download the APK file for Android
        </p>
      </a>
      <a
        href="https://testflight.apple.com/join/Ghm7wnte"
        target="_blank"
        className="css-53whmz"
      >
        <div className="css-11lhwve">
          <img className="chakra-image css-ldihrc" src="/img/apple-icon.svg" />
        </div>
        <div className="css-17xejub" />
        <p className="chakra-text css-1hbj5v0"> Download in Apple TestFlight</p>
      </a>
    </div>
    <div className="css-i31zha">
      <img className="size-image css-1tm9roc" src="/img/mobile-image.png" />
      
      <div className="video-bg css-ea0pfj">
        <video
          className="video-mobile-app"
          loop="true" muted="true"
          autoPlay="true"
          style={{ pointerEvents: "none" }}
          src="/img/video_mobile_app.mp4"
        >
      
        </video>
      </div>
    </div>
  </div>
  <div className="css-1shh6lp">
    <a
      className="chakra-button css-1m6hi68"
      href="https://mapp.position.exchange/installapk.html"
      target="_blank"
    >
      {/* <div className="css-8eq436">
        <img className="chakra-image css-0" src="/img/andoird-icon.svg" />
      </div> */}
      {/* <div className="css-1uowy7d">
        <p className="chakra-text css-0">Download the APK file for</p>Android
      </div> */}
    </a>
    <a
      className="chakra-button css-1w4782p"
      href="https://testflight.apple.com/join/Ghm7wnte"
      target="_blank"
    >
      <div className="css-8eq436">
        <img className="chakra-image css-0" src="/img/apple-icon.svg" />
      </div>
      {/* <div className="css-1uowy7d">
        <p className="chakra-text css-0">Download in Apple</p>TestFlight
      </div> */}
    </a>
  </div>
  <img className="chakra-image css-6aw7rj" src="/img/bg_end_mobile_app.svg" />
</div>

    </div>
}



export default MobileApp;
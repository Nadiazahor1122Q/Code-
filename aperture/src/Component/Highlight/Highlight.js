
import "./Highlight.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Highlight = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div className="sc-jrQzAO">
        <div id="strategy">
  <div className="padding">
    <p className="textHeader">strategy highlight</p>
    <p className="subHeader">
      <span className="colorPrimary">aperture</span>{" "}
      <span className="colorSecondary">invest +</span>
    </p>
    <div className="cardContainer">
      <div data-aos="fade-up"
     data-aos-duration="3000"
    //   style={{
    //       transition: "opacity 1000ms ease 0s, transform 1000ms ease 0s",
    //       transform: "translateY(20px)",
    //       opacity: 1
    //     }}
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/terraUST.321480c4.png" />
            </div>
            <p>Δ-neutral mNFLX</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">34.53%</p>
          </span>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/terraUST.321480c4.png" />
            </div>
            <p>Δ-neutral mSQ</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">33.16%</p>
          </span>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/terraUST.321480c4.png" />
            </div>
            <p>Δ-neutral mTWTR</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">32.52%</p>
          </span>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/terraUST.321480c4.png" />
            </div>
            <p>Δ-neutral mGS</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">31.77%</p>
          </span>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/terraUST.321480c4.png" />
            </div>
            <p>Δ-neutral mGOOGL</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">29.83%</p>
          </span>
        </div>
      </div>
    </div>
    <p className="colorPrimary subHeader">aperture invest</p>
    <div className="cardContainer"
     style={{
        marginLeft:"18%"
    }}
    >
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/terra.148067b9.png" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAELklEQVR4Xu2aTW/TWBSGW9gg0Cxokw5Di/iQugAES4RaUcqCjyB2TGcEKFASOzHwJ5gR7BASG34AQoiPHX8DgWANC9QVAs0KIdQ41Pg2GJLn2JNr+9qxEa/0bFzf97zn5JLYxmNjOahe97a0LXfVx9PBsdz3S0veRvqUSmwqJV36F1Jt230ZEt4stvsP645cfrA1ETRzum+YI3e1rc4DGUxy4vh9b7KyzecPLSYmp7y//nwufMJwmp1DzJWLGIRUp3aKxpKyZ8+i8CfMl5naducqiwc49poIbxp/64u6AcvL3ibmNSoW7IdBs4b1f9BZYW4jkoV6VKozIlxeHDhwSeQJYP5UonkAA40K5jI6BJoWrfmAqO8G9hNLNFP8vfRSFC8K6kuYeX2esy8ttazONZoVufkAx/7CAfi7wBtnf0NFEwWLFRXm7g0hhri4TM0HML/2EMIub2leFtiHui1nv0JcVKnuEMZlYfHoHTEE9jsgnqygadlgPy3LvcG+v4sn06yMTEz+LobAvtflT+ZV/0lpb2wifpNTwzo60MNxPu9i/8Y+/TOnn4qCpmHNYWjtAp5AEz22iUJZIOsOhx7/2/zU1C5hoEPYVVgWsK4OtZOPBjwc230cOQAu1oU+2dAVdXWh18gGoHYK1+YBc6w332h4v/UfPHH8nlioCwsMQ3050SNL+MsUfPpu/8E4T28JG9Qhz90wPX0Q9bvnjG1/xcULK6JBXfLaDaxrdABhBeKQx25gTeMDCNg6WU0MvUzCfjMbQFFhv78GwANc8LPBfn8NgAe4wCRHF24nRv2PMf2SwH5zHYDCbnwWIeJAv7jQL/cB9Eh+27xw5FaInz70UwP40H/A1FbTIeluoI8us7OnB3xs250bU29j9R9cOvtMLMySiQS7gR66hN4MmbwdVkz4V3JJsC5/FI1GwZq60Mf4AOiTDdk8EPnS/4fduxfEYh1YIAtqpx6LujrwTrXV7FjfB/BtCAMn0EAHemQBa+pCn4HmyzKA5M8Mtgsv9j/mWO6/PEkaDYceaVHPCObnboo6caBn5PsCPJFGZaSi8+kHalnd1zyZhmWD/bQvr+5j3wPigv37zwnTstC49J8YAPsVumJ1DnMRjcuBvMJkr5HiwjIOgfljDUCJi9NcgeWNzB6zeaVWy9tMkzweW6eFmRM1H0i9eEyzIg+BWRV2o1tjX7FEwwAWHzXM18PQm+PSuEhDkN/23/jEPlIppMA6xxbvhoTKh+X6O5Gnh6FPnvLNX8hiPZLfqMSnUp0W9QNS/5sfLm+cRfMcBOv1w6SZisVJ7dQTET4p9fNvhT9hvlzEt0uiUA8jp2cOisaimJ2tiQeYUTDTSNRqujcYLGuuWqt7mWPksixvhkFNc/26t4F1Cyn/p+ghwyfFaXYa9C+dnGa3zsYiWHOa7jzXZ6WvLUOPlNFhh6oAAAAASUVORK5CYII=" />
            </div>
            <p>Terra/Anchor</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">19.48%</p>
          </span>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/solana.e50484d1.png" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAELklEQVR4Xu2aTW/TWBSGW9gg0Cxokw5Di/iQugAES4RaUcqCjyB2TGcEKFASOzHwJ5gR7BASG34AQoiPHX8DgWANC9QVAs0KIdQ41Pg2GJLn2JNr+9qxEa/0bFzf97zn5JLYxmNjOahe97a0LXfVx9PBsdz3S0veRvqUSmwqJV36F1Jt230ZEt4stvsP645cfrA1ETRzum+YI3e1rc4DGUxy4vh9b7KyzecPLSYmp7y//nwufMJwmp1DzJWLGIRUp3aKxpKyZ8+i8CfMl5naducqiwc49poIbxp/64u6AcvL3ibmNSoW7IdBs4b1f9BZYW4jkoV6VKozIlxeHDhwSeQJYP5UonkAA40K5jI6BJoWrfmAqO8G9hNLNFP8vfRSFC8K6kuYeX2esy8ttazONZoVufkAx/7CAfi7wBtnf0NFEwWLFRXm7g0hhri4TM0HML/2EMIub2leFtiHui1nv0JcVKnuEMZlYfHoHTEE9jsgnqygadlgPy3LvcG+v4sn06yMTEz+LobAvtflT+ZV/0lpb2wifpNTwzo60MNxPu9i/8Y+/TOnn4qCpmHNYWjtAp5AEz22iUJZIOsOhx7/2/zU1C5hoEPYVVgWsK4OtZOPBjwc230cOQAu1oU+2dAVdXWh18gGoHYK1+YBc6w332h4v/UfPHH8nlioCwsMQ3050SNL+MsUfPpu/8E4T28JG9Qhz90wPX0Q9bvnjG1/xcULK6JBXfLaDaxrdABhBeKQx25gTeMDCNg6WU0MvUzCfjMbQFFhv78GwANc8LPBfn8NgAe4wCRHF24nRv2PMf2SwH5zHYDCbnwWIeJAv7jQL/cB9Eh+27xw5FaInz70UwP40H/A1FbTIeluoI8us7OnB3xs250bU29j9R9cOvtMLMySiQS7gR66hN4MmbwdVkz4V3JJsC5/FI1GwZq60Mf4AOiTDdk8EPnS/4fduxfEYh1YIAtqpx6LujrwTrXV7FjfB/BtCAMn0EAHemQBa+pCn4HmyzKA5M8Mtgsv9j/mWO6/PEkaDYceaVHPCObnboo6caBn5PsCPJFGZaSi8+kHalnd1zyZhmWD/bQvr+5j3wPigv37zwnTstC49J8YAPsVumJ1DnMRjcuBvMJkr5HiwjIOgfljDUCJi9NcgeWNzB6zeaVWy9tMkzweW6eFmRM1H0i9eEyzIg+BWRV2o1tjX7FEwwAWHzXM18PQm+PSuEhDkN/23/jEPlIppMA6xxbvhoTKh+X6O5Gnh6FPnvLNX8hiPZLfqMSnUp0W9QNS/5sfLm+cRfMcBOv1w6SZisVJ7dQTET4p9fNvhT9hvlzEt0uiUA8jp2cOisaimJ2tiQeYUTDTSNRqujcYLGuuWqt7mWPksixvhkFNc/26t4F1Cyn/p+ghwyfFaXYa9C+dnGa3zsYiWHOa7jzXZ6WvLUOPlNFhh6oAAAAASUVORK5CYII=" />
            </div>
            <p>Saber BUSDbs/USDC</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">15.00%</p>
          </span>
        </div>
      </div>
      <div
       data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="strategyCard">
          <span>
            <div className="poolImages">
              <img src="/static/media/solana.e50484d1.png" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAELklEQVR4Xu2aTW/TWBSGW9gg0Cxokw5Di/iQugAES4RaUcqCjyB2TGcEKFASOzHwJ5gR7BASG34AQoiPHX8DgWANC9QVAs0KIdQ41Pg2GJLn2JNr+9qxEa/0bFzf97zn5JLYxmNjOahe97a0LXfVx9PBsdz3S0veRvqUSmwqJV36F1Jt230ZEt4stvsP645cfrA1ETRzum+YI3e1rc4DGUxy4vh9b7KyzecPLSYmp7y//nwufMJwmp1DzJWLGIRUp3aKxpKyZ8+i8CfMl5naducqiwc49poIbxp/64u6AcvL3ibmNSoW7IdBs4b1f9BZYW4jkoV6VKozIlxeHDhwSeQJYP5UonkAA40K5jI6BJoWrfmAqO8G9hNLNFP8vfRSFC8K6kuYeX2esy8ttazONZoVufkAx/7CAfi7wBtnf0NFEwWLFRXm7g0hhri4TM0HML/2EMIub2leFtiHui1nv0JcVKnuEMZlYfHoHTEE9jsgnqygadlgPy3LvcG+v4sn06yMTEz+LobAvtflT+ZV/0lpb2wifpNTwzo60MNxPu9i/8Y+/TOnn4qCpmHNYWjtAp5AEz22iUJZIOsOhx7/2/zU1C5hoEPYVVgWsK4OtZOPBjwc230cOQAu1oU+2dAVdXWh18gGoHYK1+YBc6w332h4v/UfPHH8nlioCwsMQ3050SNL+MsUfPpu/8E4T28JG9Qhz90wPX0Q9bvnjG1/xcULK6JBXfLaDaxrdABhBeKQx25gTeMDCNg6WU0MvUzCfjMbQFFhv78GwANc8LPBfn8NgAe4wCRHF24nRv2PMf2SwH5zHYDCbnwWIeJAv7jQL/cB9Eh+27xw5FaInz70UwP40H/A1FbTIeluoI8us7OnB3xs250bU29j9R9cOvtMLMySiQS7gR66hN4MmbwdVkz4V3JJsC5/FI1GwZq60Mf4AOiTDdk8EPnS/4fduxfEYh1YIAtqpx6LujrwTrXV7FjfB/BtCAMn0EAHemQBa+pCn4HmyzKA5M8Mtgsv9j/mWO6/PEkaDYceaVHPCObnboo6caBn5PsCPJFGZaSi8+kHalnd1zyZhmWD/bQvr+5j3wPigv37zwnTstC49J8YAPsVumJ1DnMRjcuBvMJkr5HiwjIOgfljDUCJi9NcgeWNzB6zeaVWy9tMkzweW6eFmRM1H0i9eEyzIg+BWRV2o1tjX7FEwwAWHzXM18PQm+PSuEhDkN/23/jEPlIppMA6xxbvhoTKh+X6O5Gnh6FPnvLNX8hiPZLfqMSnUp0W9QNS/5sfLm+cRfMcBOv1w6SZisVJ7dQTET4p9fNvhT9hvlzEt0uiUA8jp2cOisaimJ2tiQeYUTDTSNRqujcYLGuuWqt7mWPksixvhkFNc/26t4F1Cyn/p+ghwyfFaXYa9C+dnGa3zsYiWHOa7jzXZ6WvLUOPlNFhh6oAAAAASUVORK5CYII=" />
            </div>
            <p>Mercurial USD-4Pool</p>
          </span>
          <span>
            <div className="apy">APY</div>
            <p className="percentClass">12.71%</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
}



export default Highlight;
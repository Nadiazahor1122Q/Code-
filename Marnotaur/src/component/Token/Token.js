import React from 'react';

const Token = () => {
    return (

        <div>
              <div className="mt-4 overflow-visible relative" id='token'>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff",marginLeft:"4rem"}}>
        Token Economy
      </h2>
      <div className="w-screen -ml-16">
        <div className=" lg:bottom-32 w-screen left-0 hidden lg:block mt-6">
          <div className="mx-auto grid grid-cols-5 ">
            <div className="flex-col justify-center">
              <div className="mb-6 mx-auto relative z-20 h-80 px-2">
                <img
                  src="/tokenomics/1.svg"
                  alt=""
                  className="w-36 h-36 mx-auto"
                />
                <div className="text-white font-greek text-xl text-center mt-5 h-20"  style={{color:"#fff"}}>
                  Providing liquidity
                </div>
                <div className="mt-2" />
                <div className="leading-normal text-xl font-bold whitespace-pre-wrap"  style={{color:"#fff"}}>
                  <div className="text-second-gray text-center text-base px-6">
                    Users will receive the native token as a reward for
                    providing liquidity
                  </div>
                </div>
              </div>
              <img src="/column.png" alt="" className="mx-auto " />
            </div>
            <div className="flex-col justify-center">
              <div className="mb-6 mx-auto relative z-20 h-80 px-2">
                <img
                  src="/tokenomics/2.svg"
                  alt=""
                  className="w-36 h-36 mx-auto"
                />
                <div className="text-white font-greek text-xl text-center mt-5 h-20"  style={{color:"#fff"}}>
                  Buyback and burn
                </div>
                <div className="mt-2" />
                <div className="leading-normal text-xl font-bold whitespace-pre-wrap"  style={{color:"#fff"}}>
                  <div className="text-second-gray text-center text-base px-6">
                    Buyback and burn program will reduce pressure on the token
                    price
                  </div>
                </div>
              </div>
              <img src="/column.png" alt="" className="mx-auto " />
            </div>
            <div className="flex-col justify-center">
              <div className="mb-6 mx-auto relative z-20 h-80 px-2">
                <img
                  src="/tokenomics/3.svg"
                  alt=""
                  className="w-36 h-36 mx-auto"
                />
                <div className="text-white font-greek text-xl text-center mt-5 h-20"  style={{color:"#fff"}}>
                  Revenue shared to staked tokens on platform
                </div>
                <div className="mt-2" />
                <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
                  <div className="text-second-gray text-center text-base px-6" >
                    Token stakers will receive a share of revenue from
                    liquidations
                  </div>
                </div>
              </div>
              <img src="/column.png" alt="" className="mx-auto " />
            </div>
            <div className="flex-col justify-center">
              <div className="mb-6 mx-auto relative z-20 h-80 px-2">
                <img
                  src="/tokenomics/4.svg"
                  alt=""
                  className="w-36 h-36 mx-auto"
                />
                <div className="text-white font-greek text-xl text-center mt-5 h-20"  style={{color:"#fff"}}>
                  Farming
                </div>
                <div className="mt-2" />
                <div className="leading-normal text-xl font-bold whitespace-pre-wrap"  style={{color:"#fff"}}>
                  <div className="text-second-gray text-center text-base px-6">
                    Users will receive the native token as a reward for farming
                  </div>
                </div>
              </div>
              <img src="/column.png" alt="" className="mx-auto " />
            </div>
            <div className="flex-col justify-center">
              <div className="mb-6 mx-auto relative z-20 h-80 px-2">
                <img
                  src="/tokenomics/5.svg"
                  alt=""
                  className="w-36 h-36 mx-auto"
                />
                <div className="text-white font-greek text-xl text-center mt-5 h-20"  style={{color:"#fff"}}>
                  Governance
                </div>
                <div className="mt-2" />
                <div className="leading-normal text-xl font-bold whitespace-pre-wrap"  style={{color:"#fff"}}>
                  <div className="text-second-gray text-center text-base px-6">
                    Token holders will be able to participate in Governance and
                    vote for platform proposals
                  </div>
                </div>
              </div>
              <img src="/column.png" alt="" className="mx-auto " />
            </div>
          </div>
          <div className="absolute z-40 lg:-mt-64 flex w-full justify-center ml-16">
            <a href="https://farm.marnotaur.com" target="_blank">
              <div className="relative flex justify-center cursor-pointer group text-gold-main">
                <div className="py-4 z-10 font-greek uppercase text-lg flex justify-center items-center text-gold-main px-4 group-hover:text-black" >
                  Farming of TAUR
                </div>
                <div className="absolute z-0 top-0 pointer-events-none left-0 w-full h-full">
                  <svg
                    width={200}
                    height={60}
                    className="w-full h-full"
                    viewBox="0 0 168 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0.5H167.452L164.392 33.7012L0.5 43.4693V0.5Z"
                      className="group-hover:fill-current stroke-current"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          style={{ width: "140%" }}
          className="absolute z-20 -bottom-56 hidden lg:block left-0 w-full -ml-32"
        >
          <img
            src="/smoke.png"
            draggable="false"
            className="w-full select-none z-0"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ height: 1060 }}
        className="mt-10 min-h-screen overflow-visible lg:hidden mb-20"
      >
        <img
          src="/column-mobile.png"
          alt=""
          style={{ height: "105%" }}
          className=" -ml-6 absolute -top-10 max-w-sm md:-ml-24 w-full "
        />
        <div className=" mt-10 overflow-visible  absolute top-10">
          <div className="flex-col justify-center pl-16">
            <div className="mb-6 pr-14  relative z-20 ">
              <img src="/tokenomics/1.svg" className="w-28 h-28 mb-5" alt="" />
              <h3 className="text-xl text-gold-main font-greek"  style={{color:"#fff"}}>
                <div className="text-white">Providing liquidity</div>
              </h3>
              <div className="mt-2" />
              <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
                <div className="text-base text-second-gray">
                  Users will receive the native token as a reward for providing
                  liquidity
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center pl-16">
            <div className="mb-6 pr-14  relative z-20 ">
              <img src="/tokenomics/2.svg" className="w-28 h-28 mb-5" alt="" />
              <h3 className="text-xl text-gold-main font-greek">
                <div className="text-white"  style={{color:"#fff"}}>Buyback and burn</div>
              </h3>
              <div className="mt-2" />
              <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
                <div className="text-base text-second-gray" >
                  Buyback and burn program will reduce pressure on the token
                  price
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center pl-16">
            <div className="mb-6 pr-14  relative z-20 ">
              <img src="/tokenomics/3.svg" className="w-28 h-28 mb-5" alt="" />
              <h3 className="text-xl text-gold-main font-greek">
                <div className="text-white">
                  Revenue shared to staked tokens on platform
                </div>
              </h3>
              <div className="mt-2" />
              <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
                <div className="text-base text-second-gray">
                  Token stakers will receive a share of revenue from
                  liquidations
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center pl-16">
            <div className="mb-6 pr-14  relative z-20 ">
              <img src="/tokenomics/4.svg" className="w-28 h-28 mb-5" alt="" />
              <h3 className="text-xl text-gold-main font-greek">
                <div className="text-white">Farming</div>
              </h3>
              <div className="mt-2" />
              <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
                <div className="text-base text-second-gray">
                  Users will receive the native token as a reward for farming
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center pl-16">
            <div className="mb-6 pr-14  relative z-20 ">
              <img src="/tokenomics/5.svg" className="w-28 h-28 mb-5" alt="" />
              <h3 className="text-xl text-gold-main font-greek">
                <div className="text-white">Governance</div>
              </h3>
              <div className="mt-2" />
              <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
                <div className="text-base text-second-gray">
                  Token holders will be able to participate in Governance and
                  vote for platform proposals
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-40 mt-2 w-full flex justify-center ">
            <a href="https://farm.marnotaur.com" target="_blank">
              <div className="relative flex justify-center cursor-pointer group text-gold-main">
                <div className="py-4 z-10 font-greek uppercase text-lg flex justify-center items-center text-gold-main px-4 group-hover:text-black">
                  Farming of TAUR
                </div>
                <div className="absolute z-0 top-0 pointer-events-none left-0 w-full h-full">
                  <svg
                    width={200}
                    height={60}
                    className="w-full h-full"
                    viewBox="0 0 168 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0.5H167.452L164.392 33.7012L0.5 43.4693V0.5Z"
                      className="group-hover:fill-current stroke-current"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0px 4px 100px 100px #181818",
          background: "#181818"
        }}
        className="absolute w-full bottom-40 md:bottom-10"
      />
      <div
        style={{
          boxShadow: "0px 4px 100px 100px #181818",
          background: "#181818"
        }}
        className="absolute w-full bottom-40 md:bottom-10"
      />
    </div>
    <div id="tokenomics" className="lg:-ml-16 -ml-4 h-24" />
        </div>
    )
}


export default Token;
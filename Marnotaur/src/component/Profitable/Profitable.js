import React from 'react';


const Profitable = () => {
    return (
    <div>
            <div className="z-10 relative" style={{marginLeft:"4rem"}}>
     
      <div className=" max-w-4xl lg:max-w-full lg:flex lg:flex-row-reverse" id='frees'>
        <div className="w-full">
          <div>
            <img className="w-full" src="/section-6.png" alt="" />
          </div>
        </div>
        <div className="w-full ">
          <div className="hidden lg:block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
              MARNOTAUR FEES
            </h2>
            <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
              <div className="text-gold-main mt-12">
                Profitable Liquidity Services
              </div>
            </div>
          </div>
          <div className="flex mt-20">
            <img
              src="/chevron-left.svg"
              className="inline-block w-5 h-5"
              alt=""
            />
            <div className="inline-block ml-4 font-bold text-second-gray text-xl">
              Trading: Leveraged trades are charged 5 basis points (0.05%).
            </div>
          </div>
          <br />
          <div className="flex mt-12">
            <img
              src="/chevron-left.svg"
              className="inline-block w-5 h-5 relative top-0"
              alt=""
            />
            <div className="-mt-1 ml-4 font-bold text-second-gray text-xl whitespace-pre-wrap">
              Farming: Leveraged farming incurs a fee on surplus farmed rewards
              earned due to provisioned margin.
            </div>
          </div>
          <br />
          <div className="flex mt-12">
            <img
              src="/chevron-left.svg"
              className="inline-block w-5 h-5"
              alt=""
            />
            <div className="inline-block ml-4 font-bold text-second-gray text-xl">
              Flash Loans: A 25 basis points fee is applied to flash loans.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tokenomics" className="lg:-ml-16 -ml-4 h-24" />

    </div>
    )
}



export default Profitable;
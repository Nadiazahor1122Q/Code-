import React from 'react';


const Traders = () => {
    return (
        <div >
            <div className="fixed z-40 bg-black top-0 left-0 w-full h-full invisible opacity-0 "></div>
            <div className="h-20 bg-black fixed left-0 top-0 w-full transition-all duration-300   blur-lg backdrop-blur-md bg-opacity-30 backdrop-filter   z-40" />
            <div className="grid xl:grid-cols-2 pt-0 xl:pt-20 relative">
      <div className="xl:flex justify-end items-center pr-16 absolute top-32 -left-10 hidden" id='traders'>
        <img
          className="max-w-none transform scale-110"
          src="./inh-dec.png"
          alt=""
        />
      </div>
      <div />
      <div className="pt-14 mb-36">
        <div className="absolute w-1/2 lg:hidden -left-8 top-0 overflow-hidden">
          <img className="relative " src="./inh-dec.png" alt="" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek">
          <div className="w-1/2 ml-auto lg:ml-0 lg:w-full relative" style={{color:"#fff",fontSize:"3rem"}}>
            Maze inhabitants
          </div>
        </h2>
        <div className="max-w-6xl w-full mt-32 xl:mt-10 grid sm:grid-cols-2 gap-x-16 gap-y-20 relative">
          <div className="relative flex">
            <img
              src="/rock2.png"
              className="absolute max-w-none w-96 left-1/2 xl:-left-20 transform -translate-x-1/2 xl:transform-none"
            />
            <div className="h-full pl-12 sm:pl-20 xl:pl-0 pr-14 xl:pr-24 pt-14 pb-16 xl:pb-6 relative w-96 m-auto" style={{ marginLeft:'-1rem'}}>
              <h3 className="text-xl text-gold-main font-greek">Traders</h3>
              <div className="text-lg font-bold mt-4 text-light-gray">
                Up to 5x undercollateralized margin for DEX trading.
              </div>
            </div>
          </div>
          <div className="relative flex">
            <img
              src="/rock1.png"
              className="absolute max-w-none w-96 left-1/2 xl:-left-20 transform -translate-x-1/2 xl:transform-none"
            />
            <div className="h-full pl-12 sm:pl-20 xl:pl-0 pr-14 xl:pr-24 pt-14 pb-16 xl:pb-6 relative w-96 m-auto">
              <h3 className="text-xl text-gold-main font-greek" style={{ marginLeft:'-4rem'}}>
                Strong holders
              </h3>
              <div className="text-lg font-bold mt-4 text-light-gray" style={{ marginLeft:'-3rem'}}>
                Provide larger loans to traders and earn more interest.
              </div>
            </div>
          </div>
          <div className="relative flex">
            <img
              src="/rock4.png"
              className="absolute max-w-none w-96 left-1/2 xl:-left-20 transform -translate-x-1/2 xl:transform-none"
            />
            <div className="h-full pl-12 sm:pl-20 xl:pl-0 pr-14 xl:pr-24 pt-14 pb-6 relative w-96 m-auto">
              <h3 className="text-xl text-gold-main font-greek" style={{ marginLeft:'-3rem'}}>Keepers</h3>
              <div className="text-lg font-bold mt-4 text-light-gray" style={{ marginLeft:'-2rem'}}>
                Deep flash loan liquidity to settle debt positions or bid on
                defaulting loans.
              </div>
            </div>
          </div>
          <div className="relative flex">
            <img
              src="/rock3.png"
              className="absolute max-w-none w-96 left-1/2 xl:-left-20 transform -translate-x-1/2 xl:transform-none"
            />
            <div className="h-full pl-12 sm:pl-20 xl:pl-0 pr-14 xl:pr-24 pt-14 pb-16 xl:pb-6 relative w-96 m-auto">
              <h3 className="text-xl text-gold-main font-greek" style={{ marginLeft:'-1rem'}}>Farmers</h3>
              <div className="text-lg font-bold mt-4 text-light-gray" style={{ marginLeft:'-2rem'}}>
                Up to 9x leverage on farming, beating the competition.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="traders" className="lg:-ml-16 -ml-4 h-24" />
        
        </div>
    )
}



export default Traders;
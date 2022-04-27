import React from 'react';

const Marnotaur = () => {
    return  ( 
    <div>
     <div className="mt-4 relative" id='features'>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff",marginLeft:"4rem"}}>
        MARNOTAUR FEATURES
      </h2>
      <div className="mt-12 max-w-3xl">
        <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff",marginLeft:"4rem"}}>
          Marnotaur enables the most important liquidity operations in DeFi.
        </div>
      </div>
    </div>
    <div className="flex items-center relative flex-col lg:grid grid-cols-3 gap-x-10 -ml-10"  style={{display: 'grid'}}>
      <div className="relative h-112 w-132">
        <img
          src="/five/ornament-1.png"
          style={{ mixBlendMode: "luminosity" }}
          alt=""
          className="absolute w-48 h-48 right-0 top-0 opacity-50"
        />
        <img src="/five/rock-1.png" className="w-full relative z-10 " />
        <div className="absolute pl-24 pr-16 pt-20 top-0 z-10">
          <h3 className="text-xl text-gold-main font-greek">
            Leveraged Trading
          </h3>
          <div className="mt-3" />
          <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
            Marnotaur technology can tap into both order book and swap
            decentralized exchanges and it provides 5x leveraged long or short
            trades on assets.
            <div className="font-thin mt-3 relative flex items-start" style={{color:"#fff"}}>
              <img className="mr-2 -ml-9 " src="/feat1.svg" />
              This technology is a pillar to the success of DeFi in the struggle
              to overcome centralized solutions. Non-custodial trading with
              leverage is an evolutionary advantage of Marnotaur.
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-112 w-132">
        <img
          src="/five/ornament-2.png"
          style={{ mixBlendMode: "luminosity" }}
          alt=""
          className="absolute w-48 h-48 -right-8 -top-8 opacity-50"
        />
        <img src="/five/rock-2.png" className="relative z-10 w-full" />
        <div className="absolute pl-24 pr-16 pt-20 z-10 top-0">
          <h3 className="text-xl text-gold-main font-greek">
            Leveraged Farming
          </h3>
          <div className="mt-3" />
          <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
            Farming has become an established form of acquiring both traders and
            liquidity. Marnotaur ensures that the campaigns stay true to the
            ethos of decentralization.
            <div className="font-thin mt-3 relative flex items-start" style={{color:"#fff"}}>
              <img className="mr-2 -ml-9" src="/feat2.svg" />
              The protocol provides under-collateralized access to liquidity
              farmers, enabling them to farm with greatly multiplied wealth and
              allowing anyone to operate like a whale.
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-112 w-132">
        <img
          src="/five/ornament-3.png"
          style={{ mixBlendMode: "luminosity" }}
          alt=""
          className="absolute w-48 h-48 right-0 top-0 opacity-50"
        />
        <img src="/five/rock-3.png" className="relative z-10 w-full" />
        <div className="absolute pl-24 pr-28 pt-20 z-10 top-0">
          <h3 className="text-xl text-gold-main font-greek" >
            Maximum Leverage
          </h3>
          <div className="mt-3" />
          <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
            Marnotaur offers easily deployable flash loans to the retail market
            and developers alike.
            <br />
            <br />
            <div className="font-thin mt-3 relative flex items-start" style={{color:"#fff"}}>
              <img className="mr-2 -ml-9" src="/feat3.svg" />
              Profit on arbitrage, win auctions of debt liquidations and settle
              outstanding loans with high-frequency execution.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#E8934B",
          mixBlendMode: "hard-light",
          boxShadow: "0px 4px 200px 200px #E8934B"
        }}
        className="absolute -left-20 -bottom-20 w-full h-20 opacity-20"
      />
    </div>
    <div id="fees" className="lg:-ml-16 -ml-4 h-24 mt-10" />

    </div>
    )
}



export default Marnotaur;
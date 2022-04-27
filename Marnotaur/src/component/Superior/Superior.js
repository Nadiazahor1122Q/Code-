import React from 'react';

const Superior = () => {
    return (
    
         <div>
            <div className="">
  <div className="lg:hidden">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
      Professional DeFi Trading: SUperior Capital Efficiency
    </h2>
  </div>
  <div className="lg:flex-row-reverse flex flex-col items-center relative">
    <div className="max-w-2xl w-full md:px-24">
      <img className="w-full mt-10 " src="/sec-2.png" />
      <div className="grid grid-cols-2 font-bold text-gold-main md:text-2xl">
        <div className="text-center -ml-8 md:-ml-10">Uniswap</div>
        <div className="text-center">Marnotaur + Uniswap</div>
      </div>
      <div
        style={{
          background: "#E8934B",
          mixBlendMode: "hard-light",
          boxShadow: "0px 4px 200px 200px #E8934B"
        }}
        className="absolute -right-80 w-full h-10 opacity-20 max-w-xl hidden"
      />
    </div>
    <div className="z-10 relative w-full">
      <div className="hidden lg:block">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff", marginLeft:"4rem"}} >
          Professional DeFi Trading: SUperior Capital Efficiency
        </h2>
      </div>
      <div style={{ width: "100%" }} className="mt-12 max-w-3xl w-full">
        <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff", marginLeft:"4rem"}}>
          The average leverage trade on most CEXs is 25x. DeFi struggles to
          offer 1.5x.
        </div>
        <br />
        <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff", marginLeft:"4rem"}}>
          DeFi margin is a combination of borrowing funds from lending protocols
          like Aave and then trading on a DEX like Uniswap. This system requires
          over-collateralization and is capital inefficient.
        </div>
        <br />
        <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff",marginLeft:"4rem"}}>
          The crypto market runs on high leverage. Marnotaur lets traders escrow
          their funds in a smart contract and then trade on a DEX with
          <span className="text-gold-main whitespace-pre-wrap">
            {" "}
            5x leverage, an almost 250% improvement on current DeFi margin
            standards.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
   <div id="retail" className="lg:-ml-16 -ml-4 h-24" />

    </div>
    )
}

export default Superior;
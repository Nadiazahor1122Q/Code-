import React from 'react';

const Lending = () => {
    return (

        <div>
             <div className="mt-4">
      <div className="lg:hidden">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
          FLASH LOANS FOR GOOD: SECURING DEPOSITS
        </h2>
      </div>
      <div />
      <div className="lg:flex lg:flex-row-reverse">
        <div style={{ width: "110%" }} className="mt-10 w-full max-w-3xl -ml-6">
          <img className="w-full" src="/section-4.png" />
        </div>
        <div className="mt-12 max-w-3xl">
          <div className="hidden lg:block mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
              FLASH LOANS FOR GOOD: SECURING DEPOSITS
            </h2>
          </div>
          <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
            Lending protocols in DeFi require collateral. If the collateral
            price drops sharply, lenders may be at risk of having issued more
            value in loans than the value held as collateral.
          </div>
          <br />
          <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
            Marnotaur provides flash loans that allow anyone to become a
            protocol keeper. This technology enables under-collateralized loans
            to quickly auction off the depreciating collateral in lending
            protocols.
          </div>
          <br />
          <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
            This is an execution of flash loans that deliver a positive impact
            in the DeFi market by ensuring lenders’ funds are secure, with loans
            reaching under-collateralization being rapidly liquidated to secure
            lenders’ funds.
          </div>
        </div>
      </div>
    </div>
    <div id="features" className="lg:-ml-16 -ml-4 h-24" />
        </div>
    )
}



export default Lending;
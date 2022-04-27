import React from 'react';

const lscriviti = () => {
    return (
        <div>
      <div className="relative" id='roadmap'>
  <div className="absolute top-0 -left-24 -top-12 transform -rotate-70 hidden lg:block">
    <img src="leaves.png" alt="" />
  </div>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
    <div className="w-full text-center mt-14">Subscribe now</div>
  </h2>
  <div className="leading-normal text-xl font-bold whitespace-pre-wrap" style={{color:"#fff"}}>
    <div className="mt-3 lg:mt-6 mx-auto text-center max-w-xl">
      Subscribe to our newsletter today to get the must-read news &amp; insights
      in your inbox
    </div>
  </div>
  <form>
    <div className="mt-12 w-full lg:w-1/2 mx-auto">
      <div className="border-gold-main border-b-2 w-full flex justify-center">
        <input
          className="w-full bg-transparent text-center text-2xl lg:text-3xl mb-4 lg:mb-6 outline-none placeholder-light-gray"
          name="email"
          placeholder="Enter your e-mail address"
          defaultValue=""
        />
      </div>
      <div
        className="mt-2 text-xl text-center w-full"
        style={{ color: "rgb(255, 153, 0)" }}
      />
    </div>
    <div className="mt-8 lg:mt-12 w-full flex justify-center">
      <button
        type="submit"
        className="relative w-auto min-w-80 max-w-screen-md lg:cursor-pointer"
      >
        <div className="relative z-30 w-full px-2">
          <div className="text-2xl w-full mt-2  uppercase text-center text-black">
            Subscribe
          </div>
        </div>
        <div className="absolute text-gold-main top-0 left-0 z-0 w-full">
          <svg
            width={352}
            height={60}
            className="h-full w-full"
            viewBox="0 0 352 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5H351.461L348.038 45.6292L0.5 59.4797V0.5Z"
              className="fill-current stroke-current"
            />
          </svg>
        </div>
      </button>
    </div>
  </form>
  <div className="absolute z-50 -top-1 left-0 w-full pointer-events-none opacity-0 transition-opacity duration-500">
    <div className=" flex flex-col h-96 w-full lg:w-3/5 bg-form mx-auto px-3">
      <div className="mx-auto mt-16 mb-auto">
        <div className="flex items-center flex-shrink-0">
          <img
            className="w-10 h-8 lg:w-14 lg:h-12 mr-4 flex-shrink-0"
            src="/logo-image.png"
          />
          <img src="/logo-text.png" className="flex-shrink-0 h-7 lg:h-10" />
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek">
        <div className="w-full text-center">Thanks for your subscription!</div>
      </h2>
      <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
        <div className="mt-3 lg:mt-6 mx-auto text-center max-w-xl">
          Stay with us and receive the latest news and updates to your mail.
        </div>
      </div>
      <div className="relative h-auto w-64 lg:cursor-pointer mx-auto mb-14 h-20  mt-4">
        <div className="relative h-20 z-30 w-full px-2">
          <div className="text-2xl w-full mt-3  uppercase text-center text-black">
            ok
          </div>
        </div>
        <div className="absolute text-gold-main top-0 left-0 z-0 h-16 w-full">
          <svg
            width={352}
            height={60}
            className="h-full w-full"
            viewBox="0 0 352 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5H351.461L348.038 45.6292L0.5 59.4797V0.5Z"
              className="fill-current stroke-current"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="contact-us" className="lg:-ml-16 -ml-4 h-24"></div>

        </div>
    )
}


export default lscriviti;
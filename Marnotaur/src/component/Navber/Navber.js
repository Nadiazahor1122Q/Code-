import React,{useState} from 'react';
import "./Navber.css";
const Navber = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
    


    <div id=''>
        <div className="fixed top-0 justify-between lg:justify-start left-0 w-full pt-2 pl-2 pr-10 lg:pl-12 flex items-center transition-all duration-300 z-50 h-20" id={colorChange ? 'navbar colorChange' : 'navbar'}>
  <a className="flex-shrink-0 flex cursor-pointer ">
    <div className="flex items-center flex-shrink-0">
      <a href='/'>
      <img className="w-10 h-8 mr-4 flex-shrink-0" src="/logo-image.png" />
      </a>
      <img
        src="/logo-text.png"
        className="flex-shrink-0 h-7 hidden xl:block"
        />
    </div>
  </a>
  <div className="hidden lg:flex ml-4">
    <a href="https://nft.marnotaur.com" target="_blank">
      <div className="relative flex justify-center group text-gold-main cursor-pointer ml-1 lx:ml-5 mt-2">
        <div className="absolute w-full h-full z-10 font-greek uppercase text-sm flex justify-center items-center text-gold-main px-4 group-hover:text-black">
          nft
        </div>
        <svg
          width={120}
          height={44}
          viewBox="0 0 120 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            
          <path
            d="M0.5 0.5H119.466L117.279 33.7123L0.5 43.4565V0.5Z"
            className="group-hover:fill-current stroke-current"
          />
        </svg>
      </div>
    </a>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#traders" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive">
        Traders
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 hidden">
      <a className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  " />
    </div>
    <div className="xl:ml-8 ml-5 mt-3 hidden">
      <a className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  " />
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#features" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Features
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href='#frees' className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Fees
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#token" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Tokenomics
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#team/advisors" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Team/Advisors
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#Investors" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Investors
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#roadmap" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Roadmap
      </a>
    </div>
    <div className="xl:ml-8 ml-5 mt-3 false">
      <a href="#contact" className="text-lg cursor-pointer hover:text-white transition-all text-ui-inactive  ">
        Contact us
      </a>
    </div>
  </div>
  <div className="block lg:hidden  w-7">
    <svg
      width={24}
      height={16}
      className="w-full h-full"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={24} height={2} fill="#B8B8B8" />
      <rect y={7} width={24} height={2} fill="#B8B8B8" />
      <rect y={14} width={24} height={2} fill="#B8B8B8" />
    </svg>
  </div>
  <div className="h-16 absolute right-8 hidden lg:block">
    <div className="relative flex justify-center cursor-pointer">
      <img className="" src="./language-active-block.png" />
      <div className="absolute top-1/4  text-sm uppercase text-gold-main">
        en
      </div>
    </div>
    <div className="absolute top-22 transform origin-top transition-all duration-300 invisible opacity-0 scale-50">
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          en
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          ch
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          ko
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          it
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          es
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          vn
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          ja
        </div>
      </div>
      <div className="relative flex -mt-8 justify-center cursor-pointer">
        <img className="" src="./language-block.png" />
        <div className="absolute top-1/4 text-sm uppercase text-light-gray">
          ru
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    )
}


export default Navber;
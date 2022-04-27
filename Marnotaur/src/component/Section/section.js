import React from 'react';
import "./section.css";

const Section = () => {
    return (
      <>
    

    <div id='left' className='w-full h-full text-white lg:px-16 px-4 pt-8'>
    <div className="fixed z-40 bg-black top-0 left-0 w-full h-full invisible opacity-0 "></div>
          <div className="h-20 bg-black fixed left-0 top-0 w-full transition-all duration-300   blur-lg backdrop-blur-md bg-opacity-30 backdrop-filter  z-40 " />
    <div id="main" className="lg:-ml-16 -ml-4 h-16 relative" />
    <div className="w-full relative">
      <img
        style={{ maxHeight: "160%",marginRight:"5rem" }}
        src="/big-rock-1.png"
        className="absolute -right-36 -top-36 hidden lg:block"
        alt=""
      />
      <div>
        <h2 className="text-3xl sm:text-4x llg:text-5xl whitespace-pre-wrap uppercase font-greek">
   
          <div className="sm:h-24 text-4xl lg:text-6xl mt-6 mb-2 leading-relaxed" style={{ fontSize:"3rem", }}>
            THE ROAR OF DEMOCRATIC LIQUIDITY
          </div>
        </h2>
      </div>
      <div className="max-w-3xl sm:-mt-8 mt-8 ">
        <div className="leading-normal text-xl font-bold whitespace-pre-wrap">
          Marnotaur is a liquidity protocol for secure undercollateralized
          margin. It is fully compatible with any other DeFi protocol or
          network, enabling traders, farmers and keepers to multiply their
          gains.
        </div>
      </div>
   
      <div className=" flex justify-start mb-4 mt-4  orangeButton w-52 ">
        <a href="https://app.marnotaur.com/" target="_blank">
          <div className="relative flex justify-center text-gold-main cursor-pointer lg:w-52 lg:h-14">
            <div className=" z-10 w-64 h-20 font-greek uppercase text-lg flex justify-center items-center text-black px-4 ">
              app
            </div>
            <div className="absolute z-0 top-0 pointer-events-none left-0 object-fill w-full h-20 drop-shadow-orangeButtonHover ">
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
                  className=" fill-current stroke-current "
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="text-gold-main mt-9">
        <div>
          <a
            href="https://5x.finance/wechat"
            target="_blank"
            className="inline-flex items-center mb-5 hover:text-white group"
          >
            <div className="relative flex justify-center mr-8">
              <img
                className="absolute max-w-none w-28 top-1/2 transform -translate-y-9"
                src="./social-block.png"
              />
              <div className="relative w-12 h-12">
                <svg
                  width={54}
                  height={54}
                  className="w-full h-full flex-shrink-0"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4772 7.67041C12.3261 7.67041 4.90906 13.8531 4.90906 21.4772C4.90906 25.8733 7.38876 29.7724 11.2353 32.2962L9.0511 36.6647L15.0018 34.116C16.2776 34.5688 17.603 34.9416 19.0196 35.1156C18.8263 34.2734 18.7159 33.4091 18.7159 32.5227C18.7159 24.9096 26.1467 18.7159 35.2841 18.7159C36.1207 18.7159 36.9381 18.7849 37.7444 18.8843C36.2864 12.5 29.5625 7.67041 21.4772 7.67041ZM15.9545 18.0255C14.8113 18.0255 13.8835 17.0977 13.8835 15.9545C13.8835 14.8113 14.8113 13.8835 15.9545 13.8835C17.0977 13.8835 18.0255 14.8113 18.0255 15.9545C18.0255 17.0977 17.0977 18.0255 15.9545 18.0255ZM27 18.0255C25.8568 18.0255 24.9289 17.0977 24.9289 15.9545C24.9289 14.8113 25.8568 13.8835 27 13.8835C28.1432 13.8835 29.071 14.8113 29.071 15.9545C29.071 17.0977 28.1432 18.0255 27 18.0255Z"
                    className="fill-current"
                  />
                  <path
                    d="M49.0911 32.5225C49.0911 26.4227 42.9084 21.4771 35.2842 21.4771C27.6601 21.4771 21.4774 26.4227 21.4774 32.5225C21.4774 38.6224 27.6601 43.568 35.2842 43.568C36.5379 43.568 37.7308 43.3912 38.8878 43.1399L46.3297 46.3293L43.7561 41.1849C46.9814 39.1636 49.0911 36.0543 49.0911 32.5225ZM31.1422 31.8322C29.999 31.8322 29.0712 30.9043 29.0712 29.7611C29.0712 28.6179 29.999 27.6901 31.1422 27.6901C32.2854 27.6901 33.2132 28.6179 33.2132 29.7611C33.2132 30.9043 32.2854 31.8322 31.1422 31.8322ZM39.4263 31.8322C38.2831 31.8322 37.3553 30.9043 37.3553 29.7611C37.3553 28.6179 38.2831 27.6901 39.4263 27.6901C40.5695 27.6901 41.4973 28.6179 41.4973 29.7611C41.4973 30.9043 40.5695 31.8322 39.4263 31.8322Z"
                    className="fill-current"
                  />
                </svg>
              </div>
            </div>
            <div className="text-2xl uppercase relative font-greek">
              立即加入微信社区 JOIN now WeChat
              <div className="absolute w-40 h-44 -right-44 -top-40 opacity-0 transition-all group-hover:opacity-100 z-40 pointer-events-none flex items-end">
                <div
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                  className="w-4 h-4 bg-white transform flex-shrink-0"
                />
                <img src="/qr.jpg" className="w-full" alt="" />
              </div>
            </div>
          </a>
        </div>
        <a
          href="https://discord.gg/VqYGFWYhAa"
          target="_blank"
          className="inline-flex items-center mb-5 hover:text-white"
        >
          <div className="relative flex justify-center mr-8">
            <img
              className="absolute max-w-none w-28 top-1/2 transform -translate-y-9"
              src="./social-block.png"
            />
            <div className="relative w-12 h-12">
              <svg
                width={34}
                height={34}
                className="w-full h-full"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.968 8.003l-.063.021.023-.021h.04zM6.48 10.265c3.48-2.378 6.706-2.264 6.706-2.264l.26.24c-4.259.954-6.19 2.74-6.19 2.74.014-.002.067-.026.156-.067 1.225-.563 9.352-4.301 19.06.185 0 0-1.935-1.67-5.931-2.74l.353-.326c.552.002 3.476.098 6.605 2.246 0 0 3.501 5.616 3.501 12.515-.02-.023-.105.058-.26.209-.704.683-2.868 2.781-7.203 2.869 0 0-.896-.952-1.534-1.783 3.094-.834 4.253-2.503 4.253-2.503-6.025 3.562-11.305 3.006-17.621.599-.059 0-.085-.025-.116-.054v-.01l-.005-.005c-.028-.025-.055-.049-.11-.049h-.115c-.387-.239-.645-.356-.645-.356s1.156 1.668 4.127 2.503c-.78.836-1.553 1.786-1.553 1.786C4.928 25.882 3 22.78 3 22.78c0-6.91 3.48-12.515 3.48-12.515zm14.83 10.374c1.35 0 2.45-1.07 2.45-2.389 0-1.31-1.094-2.38-2.45-2.38v.006c-1.344 0-2.445 1.066-2.449 2.385 0 1.308 1.1 2.378 2.45 2.378zm-6.319-2.389c0 1.32-1.1 2.39-2.45 2.39-1.349 0-2.448-1.07-2.448-2.38 0-1.318 1.099-2.385 2.449-2.385l.008-.005c1.35 0 2.441 1.07 2.441 2.38z"
                  className="fill-current"
                />
              </svg>
            </div>
          </div>
          <span className="text-2xl uppercase font-greek">
            JOIN Now DISCORD To get special NFT KEY Card
          </span>
        </a>
        <div className="flex items-center mb-5">
          <div className="relative flex justify-center mr-8">
            <img
              className="absolute max-w-none w-28 top-1/2 transform -translate-y-9"
              src="./social-block.png"
            />
            <div className="relative w-12 h-12">
              <svg
                width={55}
                height={54}
                className="w-full h-full"
                viewBox="0 0 55 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.3979 14.117L39.9652 40.8486C39.555 42.7349 38.4864 43.2045 36.9678 42.3163L28.6895 35.9517L24.6957 39.9604C24.2534 40.422 23.8843 40.807 23.0318 40.807L23.6271 32.0114L38.9686 17.5475C39.636 16.9277 38.8233 16.5829 37.9322 17.204L18.9659 29.6649L10.8008 26.9978C9.02503 26.4196 8.99288 25.145 11.1711 24.2555L43.1078 11.4177C44.5865 10.8394 45.8801 11.7611 45.3979 14.1183V14.117Z"
                  className="fill-current"
                />
              </svg>
            </div>
          </div>
          <span className="text-2xl uppercase font-greek">
            Connect To Telegram Now In Your Language
          </span>
        </div>
        <div className="flex text-gray-500 text-sm font-bold text-center mt-7 flex-wrap">
          <a
            href="https://t.me/marnotaur"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/eng.png" alt="" />
            <span className="uppercase">eng</span>
          </a>
          <a
            href="https://t.me/MarnotaurESP"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/es.png" alt="" />
            <span className="uppercase">es</span>
          </a>
          <a
            href="https://t.me/MarnotaurIT"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/it.png" alt="" />
            <span className="uppercase">it</span>
          </a>
          <a
            href="https://t.me/Marnotaur_Korea"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/ko.png" alt="" />
            <span className="uppercase">ko</span>
          </a>
          <a
            href="https://t.me/MarnotaurCH"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/ch.png" alt="" />
            <span className="uppercase">ch</span>
          </a>
          <a
            href="https://t.me/MarnotaurVN"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/vn.png" alt="" />
            <span className="uppercase">vn</span>
          </a>
          <a
            href="https://t.me/MarnotaurJP"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/ja.png" alt="" />
            <span className="uppercase">ja</span>
          </a>
          <a
            href="https://t.me/MarnotaurTUR"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/tr.png" alt="" />
            <span className="uppercase">tr</span>
          </a>
          <a
            href="https://t.me/marnotaur_ru"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/ru.png" alt="" />
            <span className="uppercase">ru</span>
          </a>
          <a
            href="https://t.me/MarnotaurPOL"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/pl.png" alt="" />
            <span className="uppercase">pl</span>
          </a>
          <a
            href="https://t.me/MarnotaurGER"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/de.png" alt="" />
            <span className="uppercase">de</span>
          </a>
          <a
            href="https://t.me/MarnotaurINDS"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/id.png" alt="" />
            <span className="uppercase">id</span>
          </a>
          <a
            href="https://t.me/MarnotaurFR"
            target="_blank"
            className="mr-9 hover:text-white"
          >
            <img className="mb-2" src="./flags/fr.png" alt="" />
            <span className="uppercase">fr</span>
          </a>
        </div>
      </div>
      <div className="text-gray-500 gap-x-16 gap-y-4 grid-cols-8 max-w-3xl hidden lg:grid mt-14">
        <a
          href=" https://medium.com/marnotaur"
          target="_blank"
          className="w-14 h-14 hover:text-white"
        >
          <svg
            width={54}
            height={54}
            className="w-full h-full"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5084 39.375C24.6931 39.375 30.5172 33.8343 30.5172 26.9998C30.5172 20.1653 24.6926 14.625 17.5084 14.625C10.3242 14.625 4.5 20.1636 4.5 26.9998C4.5 33.836 10.3237 39.375 17.5084 39.375Z"
              className="fill-current"
            />
            <path
              d="M38.2836 38.6488C41.8757 38.6488 44.788 33.4336 44.788 26.9998C44.788 20.5676 41.8757 15.3508 38.2836 15.3508C34.6915 15.3508 31.7792 20.5676 31.7792 26.9998C31.7792 33.432 34.6915 38.6488 38.2836 38.6488Z"
              className="fill-current"
            />
            <path
              d="M48.3373 37.4368C49.6006 37.4368 50.625 32.7642 50.625 26.9998C50.625 21.2358 49.6015 16.5627 48.3377 16.5627C47.074 16.5627 46.0496 21.237 46.0496 26.9998C46.0496 32.7625 47.074 37.4368 48.3373 37.4368Z"
              className="fill-current"
            />
          </svg>
        </a>
        <a
          href="https://weibo.com/trumpsbet/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
          target="_blank"
          className="w-14 h-14 hover:text-white"
        >
          <svg
            width={55}
            height={54}
            className="w-full h-full"
            viewBox="0 0 55 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.9987 19.0795C52.2094 21.796 51.7472 25.0516 49.941 25.2128C46.9914 25.4751 48.5296 22.2484 48.5685 20.3065C48.6769 14.6773 43.8393 10.7668 39.1 10.7668C37.7581 10.7668 34.6388 11.6716 35.1195 8.85797C35.3363 7.6185 36.3938 7.63503 37.4513 7.49455C45.4225 6.441 51.4383 11.8843 51.9987 19.0795Z"
              className="fill-current"
            />
            <path
              d="M38.9624 25.6193C42.3886 27.4805 46.5041 28.4081 45.8229 33.932C44.567 44.1142 23.2123 50.954 9.87375 43.4718C6.21645 41.4184 2.43028 38.4147 3.01324 32.4322C3.51642 27.2822 7.00191 23.2932 10.424 19.895C13.6886 16.6517 17.129 14.1149 21.8111 12.9457C26.8921 11.6773 28.3935 15.8832 27.025 20.0313C29.9685 19.8351 36.2051 16.5732 38.9624 19.7586C40.1774 21.1634 39.7131 23.6774 38.9624 25.6193ZM35.2581 38.7019C36.3565 37.4665 37.459 35.5825 37.4528 33.3887C37.4324 24.3096 21.8357 22.283 13.304 27.2554C3.59415 32.9156 7.69328 43.0875 19.6163 43.8808C25.9328 44.3022 32.2553 42.0877 35.2581 38.7019Z"
              className="fill-current"
            />
            <path
              d="M43.7661 23.0309C41.7676 23.1631 42.5142 21.6716 42.3936 19.8971C42.3179 18.8043 41.4056 17.5421 40.6099 17.1702C39.0492 16.4431 36.6315 17.6991 36.6315 15.5362C36.6315 13.929 38.0347 14.0964 38.8283 14.0365C46.0999 13.487 46.55 22.847 43.7661 23.0309Z"
              className="fill-current"
            />
            <path
              d="M29.2232 32.7076C32.1461 41.4831 16.9155 45.563 14.1296 38.0229C12.2662 32.9803 16.7417 28.9685 21.4013 28.4831C25.3797 28.0679 28.3456 30.0841 29.2232 32.7076ZM22.2235 34.2074C22.8433 35.2733 24.269 34.5069 24.1442 33.662C23.9949 32.6849 22.2113 32.8295 22.2235 34.2074ZM19.7547 38.8409C22.3156 38.2357 22.6592 33.4451 18.7933 34.3437C15.5471 35.0957 16.1751 39.6859 19.7547 38.8409Z"
              className="fill-current"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/c/MarnotaurMarginTrading"
          target="_blank"
          className="w-14 h-14 hover:text-white"
        >
          <svg
            width={54}
            height={54}
            viewBox="0 0 54 54"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.459 13.0115C48.1274 10.6859 46.6823 10.2582 43.7399 10.0955C40.8006 9.89969 33.4094 9.81836 27.0061 9.81836C20.5905 9.81836 13.1962 9.89969 10.2599 10.0925C7.32367 10.2582 5.87549 10.6829 4.53163 13.0115C3.16015 15.3341 2.45447 19.3345 2.45447 26.3775C2.45447 26.3835 2.45447 26.3865 2.45447 26.3865C2.45447 26.3926 2.45447 26.3956 2.45447 26.3956V26.4016C2.45447 33.4145 3.16015 37.4451 4.53163 39.7435C5.87549 42.0691 7.3206 42.4908 10.2569 42.6866C13.1962 42.8553 20.5905 42.9547 27.0061 42.9547C33.4094 42.9547 40.8006 42.8553 43.743 42.6896C46.6854 42.4938 48.1305 42.0721 49.4621 39.7465C50.8458 37.4481 51.5454 33.4175 51.5454 26.4046C51.5454 26.4046 51.5454 26.3956 51.5454 26.3896C51.5454 26.3896 51.5454 26.3835 51.5454 26.3805C51.5454 19.3345 50.8458 15.3341 49.459 13.0115ZM20.8636 35.4237V17.3494L36.2045 26.3865L20.8636 35.4237Z"
              className="fill-current"
            />
          </svg>
        </a>
        <a
          href="https://space.bilibili.com/1646726586"
          target="_blank"
          className="w-14 h-14 hover:text-white"
        >
          <svg
            width={55}
            height={54}
            className="w-full h-full"
            viewBox="0 0 55 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.2559 12.4333L39.6779 12.4334L41.9021 10.1806C42.4076 9.68002 42.6603 9.04588 42.6603 8.27828C42.6603 7.51068 42.4076 6.87655 41.9021 6.37593C41.3966 5.87531 40.7563 5.625 39.9812 5.625C39.2061 5.625 38.5489 5.87531 38.0097 6.37593L31.5392 12.4334H23.8049L17.2838 6.37593C16.7783 5.87531 16.138 5.625 15.3629 5.625C14.5878 5.625 13.9475 5.87531 13.442 6.37593C12.9365 6.87655 12.6837 7.51068 12.6837 8.27828C12.6837 9.04588 12.9365 9.68002 13.442 10.1806L15.6662 12.4334H13.0881C10.7628 12.5002 8.8503 13.2845 7.35061 14.7863C5.85092 16.2882 5.06738 18.1739 5 20.4433V37.7648C5.06738 40.2345 5.85092 42.2286 7.35061 43.7471C8.8503 45.2656 10.7628 46.0583 13.0881 46.125H41.9021C44.2274 46.0583 46.1484 45.2823 47.6649 43.7971C49.1814 42.3119 49.9565 40.4179 49.9902 38.1151V20.4432C50.0913 18.1738 49.4089 16.2881 47.9429 14.7862C46.4769 13.2844 44.5813 12.5001 42.2559 12.4333ZM44.5307 37.7648C44.497 38.5658 44.2019 39.2499 43.6459 39.8173C43.0898 40.3847 42.4074 40.6684 41.5986 40.6684H13.4418C12.633 40.6684 11.9421 40.3847 11.3692 39.8173C10.7963 39.2499 10.5098 38.5658 10.5098 37.7648V20.7938C10.5436 19.9594 10.83 19.2752 11.3692 18.7412C11.9085 18.2072 12.5994 17.9235 13.4419 17.8901H41.5987C42.4412 17.9235 43.1321 18.2072 43.6713 18.7412C44.2105 19.2752 44.497 19.9594 44.5307 20.7938V37.7648ZM19.2551 23.6473C18.4463 23.6807 17.7637 23.9727 17.2076 24.5234C16.6516 25.0741 16.3567 25.7499 16.323 26.5509V29.4545C16.3567 30.2555 16.6432 30.9313 17.1824 31.482C17.7216 32.0327 18.4125 32.308 19.255 32.308C20.0976 32.308 20.7884 32.0327 21.3277 31.482C21.8669 30.9313 22.1534 30.2555 22.1871 29.4545V26.5509C22.1534 25.7499 21.8585 25.0741 21.3024 24.5234C20.7464 23.9727 20.0639 23.6807 19.2551 23.6473ZM36.0883 23.6473C35.2795 23.6807 34.5969 23.9727 34.0408 24.5234C33.4848 25.0741 33.1899 25.7499 33.1562 26.5509V29.4545C33.1899 30.2555 33.4764 30.9313 34.0156 31.482C34.5548 32.0327 35.2457 32.308 36.0882 32.308C36.9308 32.308 37.6216 32.0327 38.1609 31.482C38.7001 30.9313 38.9866 30.2555 39.0203 29.4545V26.5509C38.9866 25.7499 38.6917 25.0741 38.1356 24.5234C37.5796 23.9727 36.8972 23.6807 36.0883 23.6473Z"
              className="fill-current"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/marnotaur"
          target="_blank"
          className="w-14 h-14 hover:text-white"
        >
          <svg
            width={54}
            height={54}
            className="w-full h-full"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.2495 14.9865C45.8429 15.6179 44.3318 16.0445 42.7433 16.2374C44.3824 15.2438 45.6086 13.6801 46.1933 11.8379C44.6533 12.7646 42.9679 13.4168 41.2103 13.7663C40.0284 12.4879 38.4629 11.6405 36.7568 11.3558C35.0508 11.0711 33.2997 11.3649 31.7754 12.1916C30.2511 13.0184 29.0389 14.3318 28.3269 15.928C27.615 17.5242 27.4432 19.3138 27.8381 21.0191C24.7178 20.8603 21.6652 20.0387 18.8786 18.6076C16.092 17.1764 13.6335 15.1676 11.6628 12.7117C10.989 13.8892 10.6015 15.2544 10.6015 16.7084C10.6008 18.0173 10.919 19.3061 11.5279 20.4606C12.1367 21.615 13.0175 22.5994 14.092 23.3263C12.8459 23.2861 11.6272 22.945 10.5375 22.3314V22.4338C10.5374 24.2696 11.1642 26.0488 12.3117 27.4697C13.4591 28.8906 15.0565 29.8656 16.8328 30.2292C15.6768 30.5461 14.4648 30.5928 13.2884 30.3657C13.7896 31.9453 14.7658 33.3266 16.0804 34.3162C17.395 35.3058 18.9822 35.8542 20.6197 35.8846C17.8399 38.0953 14.4068 39.2944 10.8728 39.2892C10.2467 39.2893 9.62125 39.2523 8.99951 39.1782C12.5868 41.5148 16.7626 42.7548 21.0274 42.75C35.4642 42.75 43.3565 30.6371 43.3565 20.1317C43.3565 19.7904 43.348 19.4456 43.3329 19.1043C44.868 17.9797 46.1931 16.587 47.2461 14.9916L47.2495 14.9865Z"
              className="fill-current"
            />
          </svg>
        </a>
      </div>
    </div>
    </div>
    </>
    )
}



export default Section;
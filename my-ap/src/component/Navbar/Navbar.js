import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import SidechainSection from '../SidechainSection/SidechainSection';
import WalletsSection from '../WalletsSection/WalletsSection';
import News from '../News/News';
import Updates from '../Updates/Updates';
import Footer from '../Footer/Footer';
const Navbar = () => {
    return <div>
        <header className="new_header">
  <div className="hero-backdrop">
    {" "}
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
      {" "}
      <defs />{" "}
      <g id="Frame" clipPath="url(#clip0)">
        {" "}
        <g id="Layer 29">
          <path
            id="Vector"
            d="M-3.3 422.4c27.5 18.4 55.1 35.6 82.7 51.8 104.3 61.3 212.5 109.1 321.4 142.1 101.8 30.8 208.1 49.9 316.1 56.7 100.5 6.3 202.5 2.5 311.7-11.5 97.3-12.6 198.1-33.1 308.3-62.7 195.6-52.6 392.5-127.1 583.6-200.2"
            stroke="url(#paint0_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 28">
          <path
            id="Vector_2"
            d="M-3.3 374.2c7.2 5.3 14.4 10.6 21.7 15.7 96.6 68.9 198.2 124.7 302 165.9 97 38.5 199.6 65.7 304.9 80.8 98.1 14.1 198.5 18.3 307.1 12.8 96.7-4.9 197.6-17.4 308.6-38.2 206-38.6 415.9-100.9 618.8-161 20.5-6.1 41.2-12.2 61.8-18.3"
            stroke="url(#paint1_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 27">
          <path
            id="Vector_3"
            d="M-2.3 327.7c79.2 64.3 163 118.6 249.4 161.8 91.5 45.7 189.7 80.6 291.6 103.8 94.9 21.6 193.1 33.5 300.2 36.5 95.4 2.7 195.6-1.9 306.5-13.9 205.9-22.3 417.8-67.7 622.7-111.5 50-10.7 100.5-21.5 151.1-32"
            stroke="url(#paint2_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 26">
          <path
            id="Vector_4"
            d="M-.9 282.2c57.9 51.5 119 97 182.4 135.7C267 470.4 360 512.7 457.9 543.6c91.1 28.8 186.4 48.3 291.2 59.6 93.4 10.1 192.2 13.4 302.2 10.1 204.3-6.1 416.6-34.6 621.9-62.1 81.6-10.9 164.2-22 247-31.8"
            stroke="url(#paint3_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 25">
          <path
            id="Vector_5"
            d="M-3.3 233c40.6 39.8 83.1 76.3 127.3 109.1 79 58.6 166.3 107.7 259.5 145.9 86.7 35.6 178.4 62.3 280.3 81.7C754.3 587 851 598 959.3 603.3c201.1 9.8 412.2-1.9 616.4-13.2 113.9-6.3 229.8-12.8 344.9-15.5"
            stroke="url(#paint4_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 24">
          <path
            id="Vector_6"
            d="M-2 187.4c24.6 26.4 50.1 51.5 76.5 75 72 64.2 153 119.7 240.9 164.8 81.8 42 169.2 75.7 267.4 102.8 87.4 24.1 181.3 42.5 287.1 56.2 196.5 25.4 404.8 30.2 606.3 34.8 146.9 3.4 297.2 6.8 443.8 18.3"
            stroke="url(#paint5_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 23">
          <path
            id="Vector_7"
            d="M-3.3 137.9c12 14.3 24.4 28.2 37 41.7 64.6 69.3 138.9 130.5 220.8 182.1 76.3 48 159 88.1 252.7 122.6 83.5 30.7 173.9 56.2 276.5 78 190.4 40.4 394.5 61.4 591.9 81.6 181.5 18.6 368.1 37.8 544.6 72.2"
            stroke="url(#paint6_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 22">
          <path
            id="Vector_8"
            d="M-.8 91.4c.7.9 1.4 1.8 2.1 2.8 56.8 73.7 123.9 140.2 199.5 197.7 70.3 53.5 147.7 99.7 236.4 141.2 79.1 36.9 165.4 69.3 264 98.8 183.1 54.9 381.5 91.5 573.3 126.9 209.8 38.7 426.8 78.8 623.1 142.8 7.8 2.5 15.5 5.1 23.1 7.7"
            stroke="url(#paint7_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 21">
          <path
            id="Vector_9"
            d="M-3.5 35.9c45 66.3 98.1 127.7 158.3 182.7 64 58.5 135.5 110.3 218.7 158.4 74.1 42.8 155.8 81.5 249.8 118.5 174.5 68.6 365.8 120.4 550.7 170.4 202.3 54.7 411.5 111.3 598.2 190 53.6 22.7 103.2 46.1 149.5 70.8"
            stroke="url(#paint8_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 20">
          <path
            id="Vector_10"
            d="M6.9-2.4c.5.7.9 1.4 1.4 2.1C39.8 50.1 76 97.9 116.5 142.4c57.2 63 122.6 119.9 199.7 174 68.7 48.2 145.2 92.9 234 136.9C715 534.9 897.9 601 1074.7 664.9c193.4 70 393.4 142.3 569.1 234.8 94.6 49.8 174.9 101.3 245.5 157.5 9.9 7.9 19.6 15.8 29.1 23.9"
            stroke="url(#paint9_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 19">
          <path
            id="Vector_11"
            d="M42.1 0c13.8 21.8 28.5 43.1 44.1 63.9 50.2 66.9 108.9 128.4 179.5 188 62.9 53.1 133.7 103.4 216.7 153.9 154.1 93.7 327.3 173.5 494.8 250.6 183.2 84.4 372.7 171.6 536.4 277 75.6 48.7 140.8 97.8 198.2 149.4"
            stroke="url(#paint10_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 18">
          <path
            id="Vector_12"
            d="M72.7-2.2c41.2 64.9 90.3 126 149.6 186.2 56.7 57.5 121.5 112.9 198.1 169.4 142.4 104.9 304.8 197.4 461.9 286.9 171.9 97.9 349.6 199.1 500.3 316.3 53.4 41.6 100.9 82.9 143.3 125.1"
            stroke="url(#paint11_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 17">
          <path
            id="Vector_13"
            d="M103.4-1.1c24.3 38.6 51.8 76.5 82.8 114.4 50.2 61.4 108.5 121.3 178.4 183.3 129.8 115 280.5 219.4 426.2 320.3 159.4 110.4 324.3 224.5 461.1 352.4 40.8 38.1 77.5 75.8 110.5 113.6"
            stroke="url(#paint12_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 16">
          <path
            id="Vector_14"
            d="M130.9-.9c8.4 13.8 17.3 27.5 26.5 41.3 43.4 64.8 95 128.7 157.8 195.5 116.5 124.1 254.5 239.2 388 350.6 146 121.8 297 247.7 419.2 385.1 33.7 37.9 64 75.1 91.1 112.2"
            stroke="url(#paint13_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 15">
          <path
            id="Vector_15"
            d="M154.5-1c32.8 56.6 71.6 113.5 117.8 173C374.9 304.1 499.5 428.9 620 549.7 751.8 681.8 888 818.4 995 964c29.8 40.6 56.2 80.2 79.5 119.4"
            stroke="url(#paint14_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 14">
          <path
            id="Vector_16"
            d="M174.2-.5c18.5 34.6 39.1 69.7 62.1 105.9C324.5 244.2 435 377.7 541.8 506.7c116.8 141.2 237.6 287.1 328.8 439.8 28.1 47.1 52.3 92.7 72.8 137.7"
            stroke="url(#paint15_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 13">
          <path
            id="Vector_17"
            d="M189.1-.8c5.9 12.3 12 24.7 18.4 37.3C280.8 181 376.5 321.8 469.1 458c101.3 149 206 303.1 281.1 461.5 26.7 56.4 48.3 110.3 65.4 163.2"
            stroke="url(#paint16_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 12">
          <path
            id="Vector_18"
            d="M199-.2c56.9 137.4 131.3 273.1 203.5 404.6C487.8 560 576 720.8 634.6 883.7c25 69.5 43.2 135 55.2 198.8"
            stroke="url(#paint17_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 11">
          <path
            id="Vector_19"
            d="M564 1089.9c-3.3-79.8-16-162.1-38.6-251.5C483.3 672.3 412 506 343 345.1 294.6 232.2 244.9 116.4 204.9-.2"
            stroke="url(#paint18_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 10">
          <path
            id="Vector_20"
            d="M433.8 1096.4c4.3-79.4 1.5-220.5-12.3-310.9-25.5-167.8-79.7-338.3-132.2-503.1-29.5-92.8-59.7-187.6-85-282.8"
            stroke="url(#paint19_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 9">
          <path
            id="Vector_21"
            d="M197.2-.6c13.5 72.9 29.1 145.5 44.4 216.9 35.9 167.4 72.9 340.5 82.1 508.9 4.9 90.6 1.6 172.7-10.1 251-5.5 36.7-12.8 72.2-22 106.9"
            stroke="url(#paint20_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 8">
          <path
            id="Vector_22"
            d="M185.7-1.1c5.1 49.6 10.7 99 16.3 147.9 19.3 168.7 39.3 343.2 32.3 510.8-3.8 90.2-14.8 171.3-33.7 248-15.5 62.6-35.9 121.2-62 177.4"
            stroke="url(#paint21_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 7">
          <path
            id="Vector_23"
            d="M168.4-1.7c.4 25.6.8 51.2 1.3 76.6 3 168.7 6 343.2-16.7 508.8-12.2 89.1-30.8 168.6-56.6 243.2-29 83.6-66.5 158.9-114.6 230.2"
            stroke="url(#paint22_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 6">
          <path
            id="Vector_24"
            d="M144.9-2c-.1 1-.2 2-.2 3-13.1 167.5-26.6 340.7-64.7 503-20.3 87.5-49.9 170.2-82.3 242.1"
            stroke="url(#paint23_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 5">
          <path
            id="Vector_25"
            d="M114.5-.6C89.3 141.1 41.4 327.4-3.5 462"
            stroke="url(#paint24_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 4">
          <path
            id="Vector_26"
            d="M76.1-.8C53.4 78.7 27.5 160.6-1.2 237.5"
            stroke="url(#paint25_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
        <g id="Layer 3">
          <path
            id="Vector_27"
            d="M28-.2C18.5 22.9 8.8 46-1.2 68.8"
            stroke="url(#paint26_linear)"
            strokeWidth="1.721"
          />{" "}
        </g>{" "}
      </g>{" "}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="722.806"
          y1="2.688"
          x2="1194.11"
          y2="819.011"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="705.639"
          y1="-35.502"
          x2="1212.44"
          y2="842.307"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="686.565"
          y1="-70.323"
          x2="1230.12"
          y2="871.149"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="667.815"
          y1="-104.181"
          x2="1251.33"
          y2="906.489"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="643.931"
          y1="-140.901"
          x2="1273.3"
          y2="949.193"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="620.681"
          y1="-172.267"
          x2="1297.29"
          y2="999.66"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="592.631"
          y1="-206.349"
          x2="1324.3"
          y2="1060.93"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#00C3FF" stopOpacity={0} />{" "}
          <stop offset=".165" stopColor="#04C1FC" stopOpacity=".314" />{" "}
          <stop offset=".329" stopColor="#10BAF4" stopOpacity=".624" />{" "}
          <stop offset=".491" stopColor="#24AEE6" stopOpacity=".933" />{" "}
          <stop offset=".526" stopColor="#29ABE2" />{" "}
          <stop offset=".542" stopColor="#2195C7" />{" "}
          <stop offset=".564" stopColor="#187CA8" />{" "}
          <stop offset=".589" stopColor="#11668C" />{" "}
          <stop offset=".617" stopColor="#0B5476" />{" "}
          <stop offset=".65" stopColor="#064765" />{" "}
          <stop offset=".691" stopColor="#023D5A" />{" "}
          <stop offset=".748" stopColor="#013853" />{" "}
          <stop offset=".906" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="959.732"
          y1="810.082"
          x2="959.732"
          y2="90.906"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".138" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".315" stopColor="#014565" stopOpacity=".781" />{" "}
          <stop offset=".578" stopColor="#003A56" stopOpacity=".901" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="958.959"
          y1="927.437"
          x2="958.959"
          y2="35.447"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".057" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".198" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".329" stopColor="#014768" stopOpacity=".766" />{" "}
          <stop offset=".596" stopColor="#003A57" stopOpacity=".9" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="962.548"
          y1="1081.72"
          x2="962.548"
          y2="-2.86"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".182" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="876.878"
          y1="1083.44"
          x2="876.878"
          y2="-.438"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".163" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="799.234"
          y1="1082.27"
          x2="799.234"
          y2="-2.625"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".164" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint12_linear"
          x1="732.854"
          y1="1083.45"
          x2="732.854"
          y2="-1.515"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".168" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint13_linear"
          x1="672.163"
          y1="1084.26"
          x2="672.163"
          y2="-1.366"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".18" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint14_linear"
          x1="614.506"
          y1="1083.86"
          x2="614.506"
          y2="-1.417"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".164" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint15_linear"
          x1="558.775"
          y1="1084.52"
          x2="558.775"
          y2="-.937"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".164" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint16_linear"
          x1="502.366"
          y1="1082.93"
          x2="502.366"
          y2="-1.17"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".188" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint17_linear"
          x1="444.454"
          y1="1082.65"
          x2="444.454"
          y2="-.553"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".164" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint18_linear"
          x1="384.49"
          y1="1089.93"
          x2="384.49"
          y2="-.444"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".178" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint19_linear"
          x1="319.998"
          y1="1096.48"
          x2="319.998"
          y2="-.578"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".171" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint20_linear"
          x1="261.549"
          y1="1083.32"
          x2="261.549"
          y2="-.782"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".166" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint21_linear"
          x1="187.228"
          y1="1083.34"
          x2="187.228"
          y2="-1.154"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".158" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint22_linear"
          x1="76.849"
          y1="1057.58"
          x2="76.849"
          y2="-1.69"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".147" stopColor="#5B798C" stopOpacity={0} />{" "}
          <stop offset=".309" stopColor="#014F73" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint23_linear"
          x1="71.359"
          y1="746.503"
          x2="71.359"
          y2="-2.026"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#003C59" stopOpacity=".7" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint24_linear"
          x1="55.52"
          y1="462.331"
          x2="55.52"
          y2="-.738"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#003A56" stopOpacity=".82" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint25_linear"
          x1="37.455"
          y1="237.766"
          x2="37.455"
          y2="-1.027"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".093" stopColor="#003651" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>
        <linearGradient
          id="paint26_linear"
          x1="13.372"
          y1="69.153"
          x2="13.372"
          y2="-.529"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset=".093" stopColor="#003651" />{" "}
          <stop offset=".795" stopColor="#003651" />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h1920v1080H0z" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  </div>
  <div className="oval" />
  <div className="header_primary" id="header-primary">
    <div className="header_primary_logo">
      {" "}
      
      <a>
        <Link to='/'>
        <img src="/img/icons/logo_blks.png" alt="Blockstream" />
        </Link>
      </a>
    </div>
    <div
      className="hamburger header_primary_mobile-menu-button"
    //   onClick={mobileNavToggle}
    >
      <div className="bar top" />
      <div className="bar middle" />
      <div className="bar bottom" />
    </div>
    <nav className="header_primary_navigation">
      <ul className="header_primary_navigation_list">
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button "
            id="nav-dropdown-products"
            href="#"
       
          >
            {" "}
            Products{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_products"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <div className="product-subnav">
                <div className="product-subnav-col">
                  <h4>PRODUCTS</h4>
                  <ul className="product-subnav-grid-container">
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_liquid"
                    >
                      {" "}
                
                      <div
                        className="product-subnav-grid-container_link "
                        data-nav-item="liquid"
                      
                      >
                        <Link  to="/liquid">
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_liquid_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                             Liquid Network
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Bitcoin layer-2 for digital asset issuance.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </div>
                       
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="amp"
                        href="https://blockstream.com"
                      >
                        <Link to='/amp/'>
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_amp_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream AMP
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              An API to issue and manage digital assets on the
                              Liquid Network.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link"
                        data-nav-item="elements"
                        href="/finance/bmn"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img
                              className="finance-icon"
                              src="/img/nav_icons/navigation_icons_finance_solid_colour.svg"
                            />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Finance
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Financial products for the <br />
                              Bitcoin era.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_mining"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="lightning"
                        // href="/lightning/"
                      > 
                      <Link to='/lightning/'>
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img
                              className="clight-icon"
                              src="/img/nav_icons/navigation_icons_lightning_solid_colour_original.svg"
                            />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              c-lightning
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Our own implementation of the Lightning protocol.
                            </p>
                          </div>
                        </div>
                      </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_green-address"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="mining"

                      >
                        <Link to ="/mining/">
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_mining_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Mining
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Colocation services for Bitcoin mining operations.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_mining"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="ice"
                        // href="/cryptofeed/"
                      >
                        <Link to='/cryptofeed/'>
                        <div className="header_primary_navigation_item_sub-list_item_link" style={{marginLeft:"109%",marginTop:"-99px"}}>
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_datafeed_solid.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Cryptocurrency Data Feed
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Real-time and historical cryptocurrency trade
                              data.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_green-address"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="energy"
                        
                      >
                        <Link to='/energy/'>
                        <div className="header_primary_navigation_item_sub-list_item_link" >
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_energy_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Energy
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Instant energy demand from the Bitcoin network
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_satellite"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="satellite"
                        href="/satellite/"
                      >
                        <Link to='/satellite/'>

                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_satellite_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Satellite
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              The Bitcoin blockchain, delivered from space.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="elements"
                        // href="/elements/"
                      >
                        <Link to='/elements/'>
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_elements_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Elements
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              An open-source, sidechain-capable blockchain
                              platform.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-subnav-col">
                  <h4>WALLETS &amp; EXPLORER</h4>
                  <ul className="product-subnav-grid-container">
                    {" "}
                    {/*<li class="header_primary_navigation_item_sub-list_item" id="primary_navigation_block-explorer"> <a class='product-subnav-grid-container_link ' data-nav-item="aqua" href="/aqua/"><div class="header_primary_navigation_item_sub-list_item_link"><div class="product-subnav-grid-container_icon"> <img src="/img/nav_icons/navigation_icons_aqua_solid_colour.svg"/></div><div class="header_primary_navigation_item_sub-list_item_link_block"><p class= "header_primary_navigation_item_sub-list_item_link_block_title">AQUA</p><p class="header_primary_navigation_item_sub-list_item_link_block_text">A simple Bitcoin and Liquid wallet built for everyone.</p></div></div></a></li>*/}
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_block-explorer"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="jade"
                        // href="/jade/"
                      >
                        <Link to='/jade/' >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_jade_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Jade
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              A fully open-source hardware wallet for Bitcoin
                              and Liquid.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_ice"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link "
                        data-nav-item="green-address"
                        href="/green/"
                      >
                        <Link to='/green/' >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_green_solid_colour.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Green
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              A multi-platform, feature-rich Bitcoin and Liquid
                              wallet.
                            </p>
                          </div>
                        </div>
                        </Link>
                      </a>
                    </li>
                    <li
                      className="header_primary_navigation_item_sub-list_item"
                      id="primary_navigation_mining"
                    >
                      {" "}
                      <a
                        className="product-subnav-grid-container_link"
                        data-nav-item="block-explorer"
                        href="https://blockstream.info"
                        target="_blank"
                      >
                        <div className="header_primary_navigation_item_sub-list_item_link">
                          <div className="product-subnav-grid-container_icon">
                            {" "}
                            <img src="/img/nav_icons/navigation_icons_explorer_solid.svg" />
                          </div>
                          <div className="header_primary_navigation_item_sub-list_item_link_block">
                            <p className="header_primary_navigation_item_sub-list_item_link_block_title">
                              Blockstream Explorer
                            </p>
                            <p className="header_primary_navigation_item_sub-list_item_link_block_text">
                              Search data from the Bitcoin and Liquid
                              blockchains.
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button"
            id="nav-dropdown-news"
            href="#"

          >
            {" "}
            Newsroom{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_news"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <ul className="subnav-grid-container">
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_blog"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title blog-link"
                        href="https://blog.blockstream.com"
                        data-nav-item="blog"
                        // onclick="blogLinkClicked(event)"
                      >
                        {" "}
                        <i className="fas fa-edit header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Blog
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_press-newsroom"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title"
                        // href="/newsroom/"
                        data-nav-item="newsroom"
                      >
                        <Link to='/newsroom/'>
                        {" "}
                        <i className="fas fa-newspaper header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        In The News
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_press-release"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/press-releases/"
                        data-nav-item="press-release"
                      >
                        <Link to='/press-releases/'>
                        {" "}
                        <i className="fas fa-list-alt header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Press Releases
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_brand-assets"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/brand-assets/"
                        data-nav-item="brand-assets"
                      >
                        <Link to='/brand-assets/' >
                        {" "}
                        <i className="fas fa-toolbox header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Brand Assets
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button"
            id="nav-dropdown-developer"
            href="#"
            // onclick="mobileNavDropdown(event)"
          >
            {" "}
            Developers{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_developer"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <ul className="subnav-grid-container">
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_eng-blog"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title"
                        href="https://medium.com/blockstream"
                        target="blank"
                        data-nav-item="eng-blog"
                      >
                        {" "}
                        <i className="fas fa-cog header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Engineering Blog
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_documentation"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title"
                        href="https://docs.blockstream.com"
                        target="blank"
                        data-nav-item="documentation"
                      >
                        {" "}
                        <i className="fas fa-code header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Documentation
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item">
          {" "}
          <a
            className="header_primary_navigation_item_link header_primary_navigation_dropdown-button "
            id="nav-dropdown-about"
            href="#"
            // onclick="mobileNavDropdown(event)"
          >
            {" "}
            Company{" "}
            <span>
              <div className="arrow-icon">
                <div className="arrow a-top" />
                <div className="arrow a-bottom" />
              </div>
            </span>{" "}
          </a>
          <ul
            className="header_primary_navigation_item_sub-list"
            id="primary_navigation_list_about"
          >
            <li className="header_primary_navigation_item_sub-list_header">
              <ul className="subnav-grid-container">
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_research"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/research/"
                        data-nav-item="research"
                      > 
                      <Link to='/research/'>
                        {" "}
                        <i className="fas fa-book-open header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Research
                      </Link>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_about"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/about/"
                        data-nav-item="about"
                      >
                        <Link to='/about/'>
                        {" "}
                        <i className="fas fa-building header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        About
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
                <li
                  className="header_primary_navigation_item_sub-list_item"
                  id="primary_navigation_careers"
                >
                  <div className="header_primary_navigation_item_sub-list_item_link">
                    <div className="header_primary_navigation_item_sub-list_item_link_block">
                      {" "}
                      <a
                        className="header_primary_navigation_item_sub-list_item_link_block_title "
                        href="/careers/"
                        data-nav-item="careers"
                      >
                        <Link to='/careers/'>
                        {" "}
                        <i className="fas fa-user header_primary_navigation_item_sub-list_item_link_icon header_primary_navigation_item_sub-list_item_link_icon_font-awesome" />
                        Careers
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="header_primary_navigation_item store-link">
          {" "}
          <a
            className="header_primary_navigation_item_link "
            href="https://store.blockstream.com/"
          >
            Store
          </a>
        </li>
        <li className="header_primary_navigation_item store-link">
          {" "}
          <a
            className="header_primary_navigation_item_link "
            href="https://help.blockstream.com/"
          >
            Support
          </a>
        </li>
        <li className="header_primary_navigation_item header_primary_navigation_item_no-line">
          {/* <div className="language-button" id="language-selector">
            <ul
              id="tx-live-lang-picker"
              className="txlive-langselector-list notranslate"
            >
              <li data-value="en">English</li>
              <li data-value="zh">中文</li>
              <li data-value="nl">Nederlands</li>
              <li data-value="fr">Français</li>
              <li data-value="de">Deutsch</li>
              <li data-value="it">Italiano</li>
              <li data-value="ja">日本語</li>
              <li data-value="ko">한국어</li>
              <li data-value="ru">Русский</li>
              <li data-value="es">Español</li>
            </ul>
            <div
              className="txlive-langselector-toggle notranslate"
              id="tx-live-lang-toggle"
            >
              <span
                className="txlive-langselector-current"
                id="tx-live-lang-current"
              >
                English
              </span>
              <span className="txlive-langselector-marker" />
            </div>
          </div> */}
        </li>
      </ul>
    </nav>
  </div>
  <div className="new_header_hero">
    <div className="new_header_hero_title scrollElement slideUp">
      <h1 className="new_header_hero_title_heading">Rethinking Trust.</h1>
      <p className="new_header_hero_title_subheading">
        {" "}
        Blockstream is the global leader in Bitcoin and blockchain technology.
        Our products and services form the foundations for the financial
        infrastructure of the future.
      </p>
    </div>
  </div>
</header>
   <Products/>
   <SidechainSection/>
   <WalletsSection/>
   <News/>
   <Updates/>
   <Footer/>
   
    </div>
}



export default Navbar;
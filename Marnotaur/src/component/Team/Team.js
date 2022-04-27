import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./team.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const images = [
  {
    id: 1,
    src: "/team/1.png",
    title: " Alina S.",
    role : "Head of Design",
    linked: "/team/linked.png",

  
  },
  {
    id: 2,
    src: "/team/2.png",
    title: " Alina S.",
    role : "Head of Design",
    linked: "/team/linked.png",

  
  },
  {
    id: 3,
    src: "/team/3.png",
    title: " Alina S.",
    role : "Florian Hermet",
    linked: "/team/linked.png",

  },
  {
    id: 4,
    src: "/team/4.png",
    title: " Alina S.",
    role : "Head of Design",
    linked: "/team/linked.png",

  },
  {
    id: 5,
    src: "/team/5.png",
    title: " Alina S.",
    role : "Head of Design",
    linked: "/team/linked.png",

  },
  {
    id: 6,
    src: "/team/6.png",
    title: " Alina S.",
    role : "Head of Design",
    linked: "/team/linked.png",

  },
  {
    id: 7,
    src: "/team/7.png",
    title: " Alina S.",
    role : "Florian Hermet",
    linked: "/team/linked.png",

  },
  {
    id: 8,
    src: "/team/8.png",
    title: " Alina S.",
    role : "Florian Hermet",
    linked: "/team/linked.png",

  },
  {
    id: 9,
    src: "/team/7.png",
    title: " Alina S.",
    role : "Florian Hermet",
    linked: "/team/linked.png",

  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
      <div id="team/advisors">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
      <div className="mb-5">TEAM</div>
       </h2>
   
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      // showDots={true}
      Showarrows={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={2000}
     //  containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"         
      itemClass="carousel-item-padding-40-px"
      className="carusal"
    >
      {images.map((item, index) => {
        return (
          <div  mt={4} textAlign="center">
          <div className="w-full h-full relative p-2 ">
            <img className="w-full h-full" draggable={false} src={item.src} />
          </div>

          <h6 className="text-xl font-bold h-20 mt-5  lg:whitespace-pre-wrap" style={{ color: "#fff",marginLeft: "5%" }}>
            <span>{item.title}</span>
          </h6>
          <h6 id="role">
            <span>{item.role}</span>
          </h6>
          <a
          href="https://www.linkedin.com/in/mariia-danilova-a75845164/"
          target="_blank"
          >
          <img id="linked"
            className="right-0 -bottom-4 absolute w-20 shadow-lg"
            src={item.linked}
            alt=""
            />
        </a>
        </div>
        );
      })}
    </Carousel>
      </div>
  );
};

export default Simple;

 import "./About.css"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div className="sc-jrQzAO">
             <div id="about">
  <div className="padding textContainer">
    <p className="textHeader">about</p>
    <div className="teamContainer">
      <div
      data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="teamClass">
          <img src="/static/media/lian_pixel.d14700cc.webp" alt="Lian Zhu" />
          <a
            href="https://www.linkedin.com/in/lianzhu365/"
            rel="noreferrer"
            target="_blank"
          >
            <p>Lian Zhu</p>
            <img src="/static/media/linkedin.10b078cc.webp" alt="linkedin" />
          </a>
          <p style={{ margin: 0 }}>
            Previously at AWS, Netflix and Kindle, UC Berkeley
          </p>
        </div>
      </div>
      <div
      data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="teamClass">
          <img
            src="/static/media/peiqian_pixel.9addaaa6.webp"
            alt="Peiqian Li"
          />
          <a
            href="https://www.linkedin.com/in/peiqianli/"
            rel="noreferrer"
            target="_blank"
          >
            <p>Peiqian Li</p>
            <img src="/static/media/linkedin.10b078cc.webp" alt="linkedin" />
          </a>
          <p style={{ margin: 0 }}>
            Previously at Google YouTube, Stanford and Columbia
          </p>
        </div>
      </div>
      <div
      data-aos="fade-up"
     data-aos-duration="3000"
      >
        <div className="teamClass">
          <img src="/static/media/gao_pixel.231c78d5.webp" alt="Gao Han" />
          <a
            href="https://www.linkedin.com/in/gao-han-a1131b4b/"
            rel="noreferrer"
            target="_blank"
          >
            <p>Gao Han</p>
            <img src="/static/media/linkedin.10b078cc.webp" alt="linkedin" />
          </a>
          <p style={{ margin: 0 }}>
            Previously at Google Search and AWS, Cornell University
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
}


export default About;
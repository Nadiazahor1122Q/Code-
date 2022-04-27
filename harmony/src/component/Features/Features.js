
import "./Features.css"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return <div>
        <div
        className="container-fluid border-bottom border-1 border-secondary mb-5 py-5 "
        id="features"
        >
        <p
            className="text-primary banner-subheading text-center "
            data-aos="fade-down"
            data-aos-offset={-200}
        >
            FEATURES
        </p>
        <h2
            className="banner-heading text-center "
            data-aos="fade-up"
            data-aos-offset={-200}
        >
            Our Technologies
        </h2>
        <div className="container text-left h-100 ">
            <div className="row flex-column-reverse flex-lg-row d-flex align-items-center">
            <div className="col text-md-start text-center">
                <h2
                className="banner-heading "
                data-aos="fade-right"
                data-aos-offset={-200}
                >
                IDO + IGO LaunchPad
                </h2>
                {/* <p class="text-primary banner-subheading ">Built On Harmony Blockchain</p> */}
                <p
                className="text-grey banner-description "
                data-aos="fade-up"
                data-aos-offset={-200}
                >
                Harmony Launcher is the world first decentralized launchpad to feature
                the concept of initial game offerings (IGO) &amp; Initial
                Decentralized exchange offering (IDO) on the Harmony Blockchain.
                </p>
                <p
                className="text-grey banner-description "
                data-aos="fade-up"
                data-aos-offset={-200}
                >
                Harmony Launchpad would eliminate the possibility of an unfair
                allocation system by providing all developers and investors a fair
                chance to raise funds/invest in a secure and guaranteed IGO and IDO
                via Harmony Launcher’s unique allocation tires.
                </p>
                {/* <a href="# " class="btn-neo ">Launch with us</a> */}
            </div>
            <div
                className="col text-right "
                data-aos="fade-left"
                data-aos-offset={-100}
            >
                <img src="images/sm-rocket.png " alt="hands " style={{ width: 290 }} />
            </div>
            </div>
            <div className="row ">
            <div className="col d-flex align-items-center justify-content-center">
                <img
                src="images/hat.png "
                alt="hands "
                className="img-fluid"
                style={{ width: 380 }}
                data-aos="fade-right"
                data-aos-offset={-200}
                />
            </div>
            <div className="col text-md-start text-center">
                <h2
                className="banner-heading "
                data-aos="fade-left"
                data-aos-offset={-100}
                >
                Harmony Incubator
                </h2>
                {/* <p class="text-primary banner-subheading ">Built On Harmony Blockchain</p> */}
                <p
                className="text-grey banner-description "
                data-aos="fade-up"
                data-aos-offset={-200}
                >
                Harmony Incubator will serve as an accelerator for all the unique and
                innovative start-ups, primarily based on the Harmony Network by
                assisting and shaping these projects to fit into the De-Fi ecosystem.
                </p>
                <p
                className="text-grey banner-description "
                data-aos="fade-up"
                data-aos-offset={-200}
                >
                Harmony Incubator would provide assistance in all possible aspects
                such as providing business and operational support, assistance in
                crafting tokenomics and other financial aspects, providing graphical
                assistance etc.
                </p>
                {/* <a href="# " class="btn-neo ">Launch with us</a> */}
            </div>
            </div>
            <div className="row flex-column-reverse flex-lg-row ">
            <div className="col text-md-start text-center">
                <h2
                className="banner-heading "
                data-aos="fade-right"
                data-aos-offset={-200}
                >
                Harmony AMM DEX
                </h2>
                {/* <p class="text-primary banner-subheading ">Built On Harmony Blockchain</p> */}
                <p
                className="text-grey banner-description "
                data-aos="fade-up"
                data-aos-offset={-200}
                >
                Harmony AMM DEX is a blockchain based liquidity protocol that would
                facilitate the fore factor to Instantly swap tokens with low fees and
                slippage along with industries best exchange rates across the entire
                Decentralized Finance ecosystem.
                </p>
            </div>
            <div className="col text-right ">
                <img
                src="images/vision.png "
                alt="hands "
                className="img-fluid"
                data-aos="fade-left"
                data-aos-offset={-200}
                />
            </div>
            </div>
        </div>
        </div>

    </div>
}



export default Features;
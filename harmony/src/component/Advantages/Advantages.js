import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Advantages = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return <div>
     <>
  <div className="container-fluid border-bottom border-1 border-secondary mb-5 text-center py-5 d-sm-none">
    <p
      className="text-primary banner-subheading "
      data-aos="fade-down"
      data-aos-offset={-200}
    >
      HOW IT WORKS?
    </p>
    <h2 className="banner-heading " data-aos="fade-up" data-aos-offset={-200}>
      Harmony Launcher Mechanism
    </h2>
    <div className="container ">
      <div className="row py-5 d-flex align-items-center ">
        <div className="col " data-aos="fade-up" data-aos-offset={-200}>
          <img src="images/mechanism.png " alt="mechanism " className="w-100" />
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid border-bottom border-1 border-secondary mb-5 text-center ">
    <p
      className="text-primary banner-subheading "
      data-aos="fade-down"
      data-aos-offset={-200}
      data-aos-easing="ease-in-sine "
    >
      WHAT WE OFFER?
    </p>
    <h2
      className="banner-heading "
      data-aos="fade-up"
      data-aos-offset={-200}
      data-aos-easing="ease-in-sine "
    >
      ADVANTAGES
    </h2>
    <div className="container ">
      <div className="row d-flex align-items-center ">
        <div
          className="col text-center "
          data-aos="fade-up"
          data-aos-offset={-200}
          data-aos-easing="ease-in-sine "
        >
          <div className="neo-small d-flex align-items-center mx-auto mb-4 ">
          <img src="https://di-uploads-pod12.dealerinspire.com/landroverlouisville/uploads/2017/08/BatteryReplacement.png" className="ic-icon mx-auto" id="color" width={80} height={80}/>
           
            {/*<i class="fas fa-university fa-2x text-primary mx-auto "></i>*/}
          </div>
          <p className="text-white fs-3 ">HARL Assurance</p>
          <p className="text-white neo-description " style={{fontSize:"23px"}}>
            Harmony Incubator platform would make sure all the funds start-ups
            raise would be stored in a secure escrow guarded by a custodian
            contract.
          </p>
        </div>
        <div
          className="col text-center "
          data-aos="fade-up"
          data-aos-offset={-200}
          data-aos-easing="ease-in-sine "
          data-aos-delay={200}
        >
          <div className="neo-small d-flex align-items-center mx-auto mb-4 ">
          <img src="https://di-uploads-pod12.dealerinspire.com/landroverlouisville/uploads/2017/08/BatteryReplacement.png" className="ic-icon mx-auto" id="color" width={80} height={80}/>
           
            {/*<i class="fas fa-university fa-2x text-primary mx-auto "></i>*/}
          </div>
          <p className="text-white fs-3 ">HARL KYC System</p>
          <p className="text-white neo-description" style={{fontSize:"22px"}}>
            Harmony Launcher’s unique KYC System would make sure all its
            investors and fund raisers are scrutinized in order to develop
            legitimate interactions within its platform.
          </p>
        </div>
        <div
          className="col text-center "
          data-aos="fade-up"
          data-aos-offset={-200}
          data-aos-easing="ease-in-sine "
          data-aos-delay={400}
        >
          <div className="neo-small d-flex align-items-center mx-auto mb-4 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaz8n7AutIrj38uiWnsRvhoqpBmNAMSq3qR8_MU1UlRPUijXzh" className="ic-icon mx-auto" id="color" width={80} height={80}/>
           
            {/*<i class="fas fa-university fa-2x text-primary mx-auto "></i>*/}
          </div>
          <p className="text-white fs-3 ">Hassle-free Launches</p>
          <p className="text-white neo-description" style={{fontSize:"24px"}}>
            With Harmony Launcher, projects and start-ups would find it easy and
            hassle-free to launch on the Harmony Network.
          </p>
        </div>
      </div>
      <div className="row py-5 d-flex ">
        <div
          className="col text-center "
          data-aos="fade-up"
          data-aos-offset={-200}
          data-aos-easing="ease-in-sine "
          data-aos-delay={600}
        >
          <div className="neo-small d-flex align-items-center mx-auto mb-4 ">
          <img src="https://di-uploads-pod12.dealerinspire.com/landroverlouisville/uploads/2017/08/BatteryReplacement.png" className="ic-icon mx-auto" id="color" width={80} height={80}/>
           
            {/*<i class="fas fa-university fa-2x text-primary mx-auto "></i>*/}
          </div>
          <p className="text-white fs-3 ">HARL Insurance</p>
          <p className="text-white neo-description " style={{fontSize:"23px"}}>
            Harmony AMM DEX would facilitate an insurance protocol in order to
            secure and prevent all of our liquidity providers from falling into
            any impermanent loss.
          </p>
        </div>
        <div
          className="col text-center "
          data-aos="fade-up"
          data-aos-offset={-200}
          data-aos-easing="ease-in-sine "
          data-aos-delay={800}
        >
          <div className="neo-small d-flex align-items-center mx-auto mb-4 ">
          <img src="https://di-uploads-pod12.dealerinspire.com/landroverlouisville/uploads/2017/08/BatteryReplacement.png" className="ic-icon mx-auto" id="color" width={80} height={80}/>
           
            {/*<i class="fas fa-university fa-2x text-primary mx-auto "></i>*/}
          </div>
          <p className="text-white fs-3 ">360° Support</p>
          <p className="text-white neo-description " style={{fontSize:"23px"}}>
            Harmony Launcher provides complete end-to-end assistance, from
            marketing to tokenomics to a successful launch.{" "}
          </p>
        </div>
        <div
          className="col text-center "
          data-aos="fade-up"
          data-aos-offset={-200}
          data-aos-easing="ease-in-sine "
          data-aos-delay={1000}
        >
          <div className="neo-small d-flex align-items-center mx-auto mb-4 ">
          <img src="https://di-uploads-pod12.dealerinspire.com/landroverlouisville/uploads/2017/08/BatteryReplacement.png" className="ic-icon mx-auto" id="color" width={80} height={80}/>
           
            {/*<i class="fas fa-university fa-2x text-primary mx-auto "></i>*/}
          </div>
          <p className="text-white fs-3 ">Investor Oriented Curated Projects</p>
          <p className="text-white neo-description " style={{fontSize:"21px"}}>
            With Harmony Launcher investors are provided with carefully vetted
            reviewed, and curated early-stage projects based on the Harmony
            network.
          </p>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
}



export default Advantages;
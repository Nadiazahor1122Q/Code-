import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Portal from './Component/Portal/Portal';
import Highlight from './Component/Highlight/Highlight';
import Works from './Component/Works/Works';
import Offer from './Component/Offer/Offer';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div>
       <canvas
  className="banner_canvas"
  id="canvas_banner"
  style={{ width: "100%", height:'100%' }}
  
/>
<div
  id="banner"
  style={{
    transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    pointerEvents: "none"
  }}
></div>

     <Home></Home>
     <Portal></Portal>
     <Highlight></Highlight>
     <Works></Works>
     <Offer></Offer>
     <About></About>
     <Footer></Footer>
    </div>
  );
}

export default App;

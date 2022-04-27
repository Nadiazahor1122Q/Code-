import './mapbox-gl.css';
import './App.css';
import { Route, Routes ,BrowserRouter} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import LiquidNetwork from './pages/Liquid Network/Liquid-Network';
import BlockstreamFinance from './pages/Blockstream Finance/Blockstream-Finance';
import BlockstreamMining from './pages/Blockstream Mining/Blockstream-Mining';
import BlockstreamEnergy from './pages/Blockstream Energy/Blockstream-Energy';
import Elements from './pages/Elements/Elements';
import Blockstream from './pages/Blockstream/Blockstream';
import Lightning from './pages/Lightning/Lightning';
import Cryptocurrency from './pages/Cryptocurrency/Cryptocurrency';
import Satellite from './pages/Satellite/Satellite';
import BlockstreamJade from './pages/Blockstream Jade/Blockstream-Jade';
import BlockstreamGreen from './pages/BlockstreamGreen/BlockstreamGreen';
import NewsRoom from './pages/NewsRoom/NewsRoom';
import PressReleases from './pages/PressReleases/PressReleases';
import BrandAssets from './pages/BrandAssets/BrandAssets';
import Research from './pages/Research/Research';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
function App() {
  return (
    <div >
 
    <BrowserRouter>
    
     <Routes>
       <Route  exact path="/" element={<Navbar/>}></Route>
     <Route path='/liquid' element={<LiquidNetwork></LiquidNetwork>}/>
         <Route path='/finance/bmn' element={<BlockstreamFinance/>} />
         <Route path='/mining/' element={<BlockstreamMining/>} />
         <Route path='/energy/' element={<BlockstreamEnergy/>} />
         <Route path='/elements/' element={<Elements/>}/>
         <Route path='/amp/' element={<Blockstream/>}/>
         <Route path='/lightning/' element={<Lightning/>}/>
         <Route path='/cryptofeed/' element ={<Cryptocurrency/>}/>
         <Route path='/satellite/' element={<Satellite/>}/>
        <Route path='/jade/' element={<BlockstreamJade/>}/>
        <Route path='/green/' element={<BlockstreamGreen/>}/>
        <Route path='/newsroom/' element={<NewsRoom/>}/>
        <Route path='/press-releases/' element={<PressReleases/>}/>
        <Route path='/brand-assets/' element={<BrandAssets/>}/>
        <Route path='/research/' element={<Research/>}/>
        <Route path='/about/' element={<About/>}/>
        <Route path='/careers/' element={<Careers/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

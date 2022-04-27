import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import ValueSection from './Components/ValueSection/ValueSection';
import "./Components/Trading/Trading";
import Trading from './Components/Trading/Trading';
import Swap from './Components/Swap/Swap';
import Vaults from './Components/Vaults/Vaults';
import Nft from './Components/NFT/Nft';
import Programs from './Components/Programs/Programs';
import MobileApp from './Components/MobileApp/MobileApp';
import PosiKey from './Components/PosiKey/PosiKey';
import JoinNow from './Components/JoinNow/JoinNow';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div >
      <Header></Header>
      <HeroSection></HeroSection>
      <ValueSection></ValueSection>
      <Trading></Trading>
      <Swap></Swap>
      <Vaults></Vaults>
      <Nft></Nft>
      <Programs></Programs>
      <MobileApp></MobileApp>
      <PosiKey></PosiKey>
      <JoinNow></JoinNow>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

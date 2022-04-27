// import logo from './logo.svg';
import './App.css';
import Navber from './component/Navber/Navber';
import Section from './component/Section/section';
import Traders from './component/Traders/Traders';
import Superior from './component/Superior/Superior';
import Liquidity from './component/Liquidity/Liquidity';
import Lending from './component/Lending/Lending';
import Marnotaur from './component/Marnotaur/Marnotaur';
import Profitable from './component/Profitable/Profitable';
import Token from './component/Token/Token';
import Team from './component/Team/Team';
import Advisors from "./component/advisors/advisors";
import Strategici from './component/Strategici/Strategici';
import Roadmap from './component/Roadmap/Roadmap';
 import Lscriviti from './component/Iscriviti/lscriviti';
 import Contact from './component/Contact/Contact';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Section></Section>
      <Traders></Traders>
     <Superior></Superior> 
     <Liquidity></Liquidity>
     <Lending></Lending>
         <Marnotaur></Marnotaur>
         <Profitable></Profitable>
         <Token></Token>
         <Team></Team>
         <Advisors></Advisors>
         <Strategici></Strategici>
         <Roadmap></Roadmap>
         <Lscriviti></Lscriviti>
         <Contact></Contact> 
     
    </div>
  );
}

export default App;

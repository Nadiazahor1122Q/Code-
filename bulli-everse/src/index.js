import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./routes";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-99627302-5', {
  debug: false,
  titleCase: false,
  // gaOptions: {
  //   userId: 123
  // }
});
ReactGA.event({
  category: 'User',
  action: 'App Load'
});
ReactDOM.render(<Routes/>, document.getElementById('root'));

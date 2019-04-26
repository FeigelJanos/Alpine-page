import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu.jsx';
import Home from './Components/HomeContent';
import Services from './Components/ServicesContent';
import ToKnow from './Components/GoodToKnowContent';
import Quote from './Components/QuoteContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeWindow: 0
    
    }
}

  render() { 
  return(
    <div className="App">
      <TopMenu />
    
       <Home />
     
      
    </div>
  );
  }
}

export default App;

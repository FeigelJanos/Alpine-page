import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Services from './Components/ServicesContent';
import ToKnow from './Components/GoodToKnowContent';
import Quote from './Components/QuoteContent';
import TopMenu from './Components/TopMenu.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {
    state = { activeWindow: 0
    
    }

 

  render() { 
  return(
    <BrowserRouter>
      <React.Fragment>
        <TopMenu />
        <Switch> 
          <Route path="/" component={Home} exact/>
          <Route path="/Services" component={Services} exact/>
          <Route path="/GoodToKnow" component={ToKnow} exact/>
          <Route path="/Quote" component={Quote} exact/>
          <Route path="/Login" component={Home} exact/>
          <Route component={Error} />
        </Switch>
      </React.Fragment>
     
    </BrowserRouter>
  );
  }
}

export default App;

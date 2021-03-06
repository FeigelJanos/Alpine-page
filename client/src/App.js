import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Services from './Components/ServicesContent';
import ToKnow from './Components/GoodToKnowContent';
import Quote from './Components/QuoteContent';
import TopMenu from './Components/TopMenu.jsx';
import Error from './Components/Error';
import Task from './Components/Tasks';
import Admin from './Components/Admin';
import Login from './Components/Login';
import BottomBar from './Components/BottomBar';




class App extends React.Component {
    state = { autenthications:
              {isLoggedIn: true,
              isAdmin: true
            },
            toKnowArticles: {
              title:'x',
              content: 'y'
            },
    }


  render() { 
  
  return(
    <BrowserRouter>
      <React.Fragment>
        <TopMenu authentication={this.state.autenthications}/>
        <Switch> 
          <Route path="/" component={Home} exact/>
          <Route path="/Services" component={Services} exact/>
          <Route path="/GoodToKnow" component={ToKnow} exact/>
          <Route path="/Quote" component={Quote} exact/>
          {this.state.autenthications.isLoggedIn? 
          <Route path="/Tasks" component={Task} exact/>
        : ""}
        {this.state.autenthications.isAdmin? 
          <Route path="/Admin" component={Admin}  exact/>
        : ""}
          <Route path="/Login" component={Login} exact/>

          <Route component={Error} />
        </Switch>
        <Route path="/" component={BottomBar} />
      </React.Fragment>
     
    </BrowserRouter>
  );
  }
}

export default App;

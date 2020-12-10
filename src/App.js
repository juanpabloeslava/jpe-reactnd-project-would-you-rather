import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// views and components
import Nav from './components/Nav'


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav navType='1'/>
          <Route exact path='/' render={ () => (
            <div> HOME </div>
          )} />
          <Route exact path='/add' render={ () => (
            <div> ADD </div>
          )} />
          <Route exact path='/leaderboard' render={ () => (
            <div> LEADERBOARD </div>
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

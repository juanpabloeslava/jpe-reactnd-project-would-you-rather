import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// views and components
import Nav from './components/Nav'
import Home from './views/Home'
import AddQuestion from './views/AddQuestion'
import Leaderboard from './views/Leaderboard'
import Login from './views/Login'


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav navType='1'/>
          <Route exact path='/' render={ () => (
            <Home />
          )} />
          <Route exact path='/add' render={ () => (
            <AddQuestion />
          )} />
          <Route exact path='/leaderboard' render={ () => (
            <Leaderboard />
          )} />
          <Route exact path='/login' render={ () => (
            <Login />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

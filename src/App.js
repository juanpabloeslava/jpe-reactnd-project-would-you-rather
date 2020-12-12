import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// views and components
import Home from './views/Home'
import AddPoll from './views/AddPoll';
import Leaderboard from './views/Leaderboard'
import Login from './views/Login'
import PollView from './views/PollView';
import NavBar from './components/NavBar';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' render={ () => (
            <Home />
          )} />
          <Route exact path='/question' render={ () => (
              <PollView />
          )} />
          <Route exact path='/add' render={ () => (
            <AddPoll />
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

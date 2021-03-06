import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import LoadingBar from 'react-redux-loading-bar'
// actions
import { fetchInitialDataAsync } from './actions'
// reducers
import { connect } from 'react-redux'
// views and components
import Home from './views/Home'
import AddPoll from './views/AddPoll';
import Leaderboard from './views/Leaderboard'
import Login from './views/Login'
import PollView from './views/PollView';
import NavBar from './components/NavBar';
import Error404 from './views/Error404';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchInitialDataAsync()) 
  }
  
  render() {

    const { authedUser } = this.props
    
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <NavBar/>
              <Switch>
                <Route exact path='/' render={ () => (
                  <Home />
                )} />
                {/* ':id' referes to the poll's id */}
                <Route exact path='/questions/:id' render={ () => (
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
                <Route exact path='/404' render={ () => (
                  <Error404 />
                )} />
                <Route component={Error404}/>
              </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ( {authedUser, polls, users} ) => {
  return { 
    authedUser,
    polls,
    users
  }
}

export default connect(
  mapStateToProps
)(App);

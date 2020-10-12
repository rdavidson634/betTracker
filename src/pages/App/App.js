import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import MyBetsPage from '../MyBetsPage/MyBetsPage';
import BetHistoryPage from '../BetHistoryPage/BetHistoryPage';
// import NavBar from '../../../src/components/NavBar/NavBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
    
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

 


  render() {
    
    return (
      <div className="App">
       
        <header className="App-header">
        &nbsp;&nbsp;
          Bet Tracker

          <nav>

            <NavLink exact to='/'>
              My Bets
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/bet-history'>
              Bet History
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/signup'>
              Sign Up
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/login'>
              Login
            </NavLink>
            &nbsp;&nbsp;&nbsp;

          </nav>

        </header>
        <Switch>
          <Route exact path='/bet-history' render={() =>
            <BetHistoryPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/' render={() =>
            <MyBetsPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
        </Switch>
        
       
      </div>
    );
  }
}


export default App;

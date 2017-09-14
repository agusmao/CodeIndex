import React, { Component } from 'react';
import {Redirect, Route} from "react-router-dom";
import {push} from "react-router-redux";
import logo from './logo.svg';
import './App.css';
import store from './store.js'
import Home from './components/smarts/Home'
import Login from './components/smarts/Login'
import Header from './components/dumbs/Header'

const goTo = (location) => {
  return store.dispatch(push(location))
}

const IsAuthenticated = () => {
  return store.getState().login.user
}

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => IsAuthenticated() ?
        <div id="root">
          <Header
            name={store.getState().login.user.fullName}
            roles={store.getState().login.user.Roles}
            goTo={goTo}
          />
          <Component {...props} />
        </div>
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      }
    />
  )
}

const UnloggedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => !IsAuthenticated() ?
        <Component {...props} />
        : <Redirect to={{
          pathname: '/home',
          state: { from: props.location }
        }} />
      }
    />
  )
}

class App extends Component {

  render() {
    return (
      <div>
        <main>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/home" component={Home} />
          <UnloggedRoute exact path="/login" component={Login} />
          {/* <PrivateRoute exact path="/exams/:examId/:patientCns" component={LesionList} /> */}
        </main>
      </div>
    )
  }
}

export default App;

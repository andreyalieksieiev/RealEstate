import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';

import Header from '../components/Header';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Dashboard from '../components/Dashboard';
import ConfirmEmail from '../pages/Auth/ConfirmEmail';
import ResetPassword from '../pages/Auth/ResetPassword';
import NewPassword from '../pages/Auth/NewPassword';
import Profile from '../components/Profile';

const Router = () => {
  const token = localStorage.getItem('token');
  // console.log('token: ', token);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => (token ? <Redirect to="/dashboard" /> : <Login />)} />
        <Route exact path="/register" render={() => (token ? <Redirect to="/"  /> : <Register /> )} />
        <Route exact path="/dashboard" render={() => (token ? <Dashboard /> : <Redirect to="/" />)} />
        <Route exact path="/confirm-email" component={ConfirmEmail} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/reset-token" component={NewPassword} /> 
        <Route exact path="/profile" render={() => (token ? <Profile /> : <Redirect to="/" />)} />

      </Switch>
    </div>
  )
}

export default Router;
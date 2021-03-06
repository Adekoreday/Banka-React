import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/auth/auth';
import User from './components/user/user';
import NotFound from './components/NotFound/NotFound';
import Home from './containers/home/home';
import About from './components/about/about';
import UserDashboard from './components/UserDashboard/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AccountDetails from './components/accountDetails/accountDetails';
import Terms from './components/terms/terms';

const Router = () => (
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/user" exact component={User} />
      <Route path="/home" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/terms" exact component={Terms}/>
      <ProtectedRoute path="/profile" component={UserDashboard} />
      <ProtectedRoute path="/account" exact component={AccountDetails} />
      <Route component={NotFound} />
    </Switch>
);
export default Router;

import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

import Login from '../Login/Loadable';
import Blog from '../Blog/Blog';
import NotFoundPage from '../NotFoundPage/Loadable';
import CheckAuth from '../HOC/CheckAuth';
import Homepage from '../Homepage/Homepage';
import '../../styles/global-styles.scss';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/homepage" component={CheckAuth(Homepage)} />
        <Redirect path="/" to="/login" />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;

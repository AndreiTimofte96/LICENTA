import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';

import Login from '../Login/Login';
import Blog from '../Blog/Blog';
import NotFoundPage from '../NotFoundPage/Loadable';
import '../../styles/global-styles.scss';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/blog" component={Blog} />
        <Redirect path="/" to="/login" />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;

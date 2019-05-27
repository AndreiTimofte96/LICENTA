import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from '../Login/Loadable';
import Blog from '../Blog/Blog';
import NotFoundPage from '../NotFoundPage/Loadable';
import CheckAuth from '../HOC/CheckAuth';
import Homepage from '../Homepage/Loadable';
import MyTimetable from '../MyTimetable/Loadable';
import MyProfile from '../MyProfile/Loadable';
import '../../styles/global-styles.scss';
import './style.scss';

// Call it once in your app. At the root of your app is the best place
toast.configure();

const App = () => (
  <div className="app-wrapper">
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/blog" component={Blog} />

        <Route exact path="/onboarding" component={CheckAuth(Homepage)} />
        <Route exact path="/homepage" component={CheckAuth(Homepage)} />
        <Route exact path="/my-timetable/:month/:year" component={CheckAuth(MyTimetable)} />
        <Route exact path="/my-profile" component={CheckAuth(MyProfile)} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;

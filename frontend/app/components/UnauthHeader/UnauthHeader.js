import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default class UnauthHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="unauth-header-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand">
            <i className="fas fa-clock mr-2" />
            Nurses Timetable Maker
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item mx-2">
                <NavLink to="/login" className="nav-link"> Login </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/blog" className="nav-link"> Blog </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

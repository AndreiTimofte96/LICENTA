import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getCurrentTextMonth = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `/${month}/${year}`;
  }

  signOut = () => {
    localStorage.removeItem('ntm-token');
    window.location.replace('/');
  }

  render() {
    const { username, pictureUrl } = this.props;
    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink to="/homepage" className="navbar-brand">
            <i className="fas fa-clock mr-2" />
            Nurses Timetable Maker
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item mx-2">
                <NavLink to="/homepage" className="nav-link">
                  <i className="fas fa-home mr-2" />
                  Homepage
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to={`/my-timetable${this.getCurrentTextMonth()}`} className="nav-link">
                  <i className="fas fa-table mr-2" />
                  Orarul meu
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/my-profile" className="nav-link">
                  <i className="fas fa-user mr-2" />
                  Profilul meu
                </NavLink>
              </li>
              <li className="nav-item mx-2 dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Notificari (4)
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div>new 1</div>
                  <div>new 2</div>
                  <div className="dropdown-divider" />
                  <div>old 1</div>
                  <div>old 2</div>
                </div>
              </li>

            </ul>
            <div className="mx-2 username d-inline-flex">
              {pictureUrl ?
                <img className="picture" src={pictureUrl} alt="Profile img" />
                :
                <div className="picture" />
              }
              <NavLink to="/my-profile" className="p-2">
                <b>{username}</b>
              </NavLink>
            </div>
            <div className="nav-item logout">
              <div className="p-2" onClick={this.signOut}>
                Logout
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

import React from 'react';
import Header from '../Header/Loadable';
// import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="profile-container">
          Here will be the profile page
        </div>
      </div>
    );
  }
}

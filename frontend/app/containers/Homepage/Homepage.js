import React from 'react';
import Header from '../Header/Loadable';
// import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="homepage-container">
          Here will be the homepage.
        </div>
      </div>
    );
  }
}

import React from 'react';
// import LoadingIndicator from '../../components/LoadingIndicator';
import UnauthHeader from '../../components/UnauthHeader/UnauthHeader';
import './style.scss';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="h-100">
        <UnauthHeader />
        <div className="blog-container">
          BLOG
        </div>
      </div>
    );
  }
}

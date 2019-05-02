import React from 'react';
import Header from '../../components/Header/Header';
// import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class MyTimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="timetable-container">
          Here will be the timetable
        </div>
      </div>
    );
  }
}

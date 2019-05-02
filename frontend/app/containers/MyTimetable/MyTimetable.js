import React from 'react';
import Header from '../Header/Loadable';
// import LoadingIndicator from '../../components/LoadingIndicator';
import Schedule from '../Schedule';
import './style.scss';

export default class MyTimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 'februarie 2019',
      norm: '160 H',
      tableHeader: this.getDayNames(2019, 5),
      tableData: this.getTableData(),
      username: 'Olga',
    };
  }
  getDayNames = (year, month) => {
    const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArr = [];
    for (let dayNo = 1; dayNo <= daysInMonth; dayNo += 1) {
      const d = new Date(year, month - 1, dayNo);
      const dayName = days[d.getDay()];
      daysArr.push({
        dayNo,
        dayName,
      });
    }
    return daysArr;
  }
  getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min))

  getTableData = () => {
    const names = ['Paula', 'Mihaela', 'Olga', 'Dana', 'Oana', 'Ana-Maria', 'Alice'];
    const dataArr = [];
    for (let i = 1; i <= 7; i += 1) {
      const arr = [];
      for (let j = 1; j <= 31; j += 1) {
        arr.push(this.getRandomInt(1, 12));
      }
      dataArr.push({
        username: names[i - 1],
        data: arr,
      });
    }
    return dataArr;
  }


  render() {
    const {
      month, tableHeader,
      tableData, norm, username,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="px-5 timetable-container">
          <Schedule
            month={month}
            norm={norm}
            tableHeader={tableHeader}
            tableData={tableData}
            username={username}
          />
          <div className="comments-zone mt-5">
            <h2>Zona de comentarii: </h2>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import Header from '../Header/Loadable';
// import LoadingIndicator from '../../components/LoadingIndicator';
import Timetable from '../Timetable';
import CommentsSection from '../../components/CommentsSection';
import './style.scss';

export default class MyTimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {
        otherTTDates: [{
          month: '2',
          year: '2019',
        }, {
          month: '3',
          year: '2019',
        }, {
          month: '4',
          year: '2019',
        }, {
          month: '5',
          year: '2019',
        }],
        currentTTDate: {
          month: '5',
          year: '2019',
        },
        norm: '160 H',
        tableHeader: this.getDayNames(2019, 5),
        tableData: this.getTableData(),
        username: 'Olga',
        comments: [
          {
            username: 'Timi',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
          },
          {
            username: 'Olga',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
          },
        ],
      },
    };
  }

  componentWillMount() {
    // const { month, year } = this.props.match.params;
    // call la server cu datele
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
      currentTTDate, tableHeader,
      tableData, norm, username,
      comments, otherTTDates,
    } = this.state.serverData;
    return (
      <div>
        <Header />
        <div className="px-5 timetable-container">
          <Timetable
            data={{
              username,
              norm,
            }}
            tableHeader={tableHeader}
            tableData={tableData}
            otherTTDates={otherTTDates}
            currentTTDate={currentTTDate}
          />
          <CommentsSection comments={comments} />
        </div>
      </div>
    );
  }
}

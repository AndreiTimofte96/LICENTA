import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekendDaysIndex: [],
    };
  }

  componentDidUpdate(prevProps) {
    const _state = this.state;
    if (prevProps.tableHeader.length === 0 && this.props.tableHeader.length !== 0) {
      _state.weekendDaysIndex = this.getAllWeekendIndexes(this.props.tableHeader);
      this.setState(_state);
    }
  }

  getTextMonth = ({ month, year }) => {
    const months = ['', 'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
      'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
    return `${months[month]} ${year}`;
  }

  getAllWeekendIndexes = (arr) => {
    const indexes = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index].dayName === 'S' || arr[index].dayName === 'D') {
        indexes.push(index);
      }
    }
    return indexes;
  }
  getCellClassName = (index, day) => {
    const weekendDay = this.checkWeekendDay(index);
    const today = this.checkToday(day);
    if (today) return 'current-day';
    if (weekendDay) return 'weekend-day';
    return '';
  }

  checkWeekendDay = (index) => {
    const { weekendDaysIndex } = this.state;
    if (weekendDaysIndex.indexOf(index) !== -1) return 'weekend-day';
    return '';
  }

  checkToday = (day) => {
    const today = new Date().getDate();
    return day === today;
  }

  render() {
    const {
      data, tableHeader, currentTTDate,
      tableData, otherTTDates,
    } = this.props;

    return (
      <div>
        <div className="mt-5 timetable-container">
          <h2 className="text-center text-uppercase">
            Grafic de lucru attip luna {this.getTextMonth(currentTTDate)}
          </h2>
          <h2 className="text-uppercase mt-3">Norma {data.monthNorm}</h2>
          <div className="table-responsive">
            <table className="table table-sm table-bordered">
              <thead>
                <tr>
                  <th />
                  {tableHeader.map((obj, index) => (
                    <th className={`text-center ${this.getCellClassName(index, obj.dayNo)}`} scope="col" key={Math.random(1, 10000000)}>{obj.dayNo}</th>
                  ))}
                </tr>
                <tr>
                  <th />
                  {tableHeader.map((obj, index) => (
                    <th className={` text-center ${this.getCellClassName(index, obj.dayNo)}`} scope="col" key={Math.random(1, 10000000)}>{obj.dayName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((obj) => {
                  return (
                    <tr
                      className={`${obj.username === data.username ? 'current-user' : ''}`}
                      key={Math.random(1, 10000000)}
                    >
                      <td className="">
                        <div className="d-flex justify-content-between">
                          <div className=""> {obj.username} </div>
                          <div className="align-self-end user-norm">{obj.norm}</div>
                        </div>
                      </td>
                      {obj.data.map((hours, index) =>
                        <td className={`text-center ${this.getCellClassName(index, index + 1)}`} key={Math.random(1, 10000000)}>{hours}</td>)}
                    </tr>
                  );
                })
                }
              </tbody>
            </table>
          </div>
          <div className="float-right other-tt-dates">
            <ul className="list-inline">
              {otherTTDates.map((ttDate) => {
                return (
                  <li
                    key={Math.random(1, 10000000)}
                    className={`list-inline-item ${ttDate.month === currentTTDate.month && ttDate.year === currentTTDate.year ? 'font-weight-bold' : ''}`}
                  >
                    <Link to={`/my-timetable/${ttDate.month}/${ttDate.year}`}>
                      {this.getTextMonth(ttDate)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

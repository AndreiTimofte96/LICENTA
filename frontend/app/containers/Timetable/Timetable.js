import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTextMonth = ({ month, year }) => {
    const months = ['', 'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
      'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
    return `${months[month]} ${year}`;
  }

  render() {
    const {
      data, tableHeader, currentTTDate,
      tableData, otherTTDates,
    } = this.props;
    console.log(this.props);

    return (
      <div>
        <div className="mt-5 timetable-container">
          <h2 className="text-center text-uppercase">
            Grafic de lucru attip luna {this.getTextMonth(currentTTDate)}
          </h2>
          <h2 className="text-uppercase mt-3">Norma {data.norm}</h2>
          <div className="table-responsive">
            <table className="table table-sm table-bordered">
              <colgroup>
                <col span={JSON.stringify(new Date().getDate())} />
                <col className="current-day" />
              </colgroup>
              <thead>
                <tr>
                  <th />
                  {tableHeader.map((obj) => (
                    <th scope="col" key={Math.random(1, 10000000)}>{obj.dayNo}</th>
                  ))}
                </tr>
                <tr>
                  <th />
                  {tableHeader.map((obj) => (
                    <th scope="col" key={Math.random(1, 10000000)}>{obj.dayName}</th>
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
                        <div className="d-flex">
                          <div className=""> {obj.username} </div>
                        </div>
                      </td>
                      {obj.data.map((hours) =>
                        <td className="text-center" key={Math.random(1, 10000000)}>{hours}</td>)}
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

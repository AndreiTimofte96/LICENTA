import React from 'react';
// import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class MyTimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      month, norm, tableHeader,
      tableData, username,
    } = this.props;
    return (
      <div>
        <div className="mt-5 schedule-container">
          <h2 className="text-center text-uppercase">
            Grafic de lucru attip luna {month}
          </h2>
          <h2 className="text-uppercase mt-3">Norma {norm}</h2>
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
                      className={`${obj.username === username ? 'current-user' : ''}`}
                      key={Math.random(1, 10000000)}
                    >
                      <td className="">
                        <div className="d-flex">
                          <div clasName=""> {obj.username} </div>
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
        </div>
      </div>
    );
  }
}

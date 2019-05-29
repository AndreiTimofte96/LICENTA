import React from 'react';
import Header from '../Header/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';
import { getDayOfWeekFullDateFromMiliseconds } from '../../utils/dates/dates';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: {
        startingShiftIn: '',
        startingShiftDate: null,
        shiftType: '',
        shiftPeople: [],
        nextWeekSchedule: [],
      },
    };
  }

  componentDidMount() {
    this.props.getHomepage();
  }

  componentDidUpdate(prevProps) {
    const _state = this.state;
    if (prevProps.isPending === true && this.props.isPending === false) {
      _state.homepage = this.props.homepage;
      this.setState(_state);
    }
  }
  redirectToTimetable = () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    this.props.history.push(`/my-timetable/${month}/${year}`);
  }

  renderShiftInfo = (homepage) => {
    return (
      <div className="card">
        <h5 className="card-header"> Informatii personale ture </h5>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <div className="d-flex align-items-center">
                <div className="title">Tura incepe in: </div>
                <div className="ml-2">{homepage.startingShiftIn}</div>
              </div>
              <div className="d-flex align-items-center mt-2">
                <div className="title">Data urmatoarei ture: </div>
                <div className="ml-2">{getDayOfWeekFullDateFromMiliseconds(homepage.startingShiftDate)}</div>
              </div>
              <div className="d-flex align-items-center mt-2">
                <div className="title">Tipul turei:</div>
                <div className="ml-2 d-flex align-items-center">
                  {homepage.shiftType}
                  {homepage.shiftType === 'N' || homepage.shiftType === 'Gn' ?
                    <i className="fas fa-moon ml-2" />
                    :
                    <i className="fas fa-sun ml-2" />
                  }

                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>Colegi de tura: </div>
                <div className="ml-2 d-flex ">
                  {homepage.shiftPeople.map((people) => {
                    return (
                      <div className="" key={Math.random(1, 1000000000)}>
                        <li className="list-group-item mr-2">
                          {people.username}: {' '}
                          {people.shiftType}
                          {people.shiftType === 'N' || people.shiftType === 'Gn' ?
                            <i className="fas fa-moon ml-1" />
                            :
                            <i className="fas fa-sun ml-1" />
                          }
                        </li>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>Programul tau urmator:</div>
              <div className="mt-2 w-50">
                <table className="table table-bordered cursor-pointer text-center" onClick={this.redirectToTimetable}>
                  <thead>
                    <tr>
                      {homepage.nextWeekSchedule.map(next => <th key={Math.random(1, 1000000000)} scope="col">{next.dayInfo.dayNo} {next.dayInfo.dayName}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {homepage.nextWeekSchedule.map(next => (
                        <td key={Math.random(1, 1000000000)}>
                          <div className="d-flex align-items-center justify-content-center">
                            {next.shiftType === 'N' || next.shiftType === 'Gn' ?
                              <i className="fas fa-moon mr-2" />
                              :
                              next.shiftType !== 'L' ?
                                <i className="fas fa-sun mr-2" />
                                :
                                ''
                            }
                            {next.shiftType}
                          </div>
                        </td>))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  render() {
    const { homepage } = this.state;
    const { isPending } = this.props;
    if (isPending) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <div>
        <Header />
        <div className="homepage-container px-5 py-2">
          <h2 className="">Homepage</h2>
          {this.renderShiftInfo(homepage)}
        </div>
      </div>
    );
  }
}

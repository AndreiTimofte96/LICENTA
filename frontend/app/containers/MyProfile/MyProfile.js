import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ro from 'date-fns/locale/ro'; // the locale you want
import Header from '../Header/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';
import { getTextMonth, getDateFromMiliseconds } from '../../utils/dates/dates';

import './style.scss';

const changeMonth = false;

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPreferences: {
        specialEvents: [],
        firstDayInMonth: null,
        lastDayInMonth: null,
        month: null,
        year: null,
        weekendDays: false,
        canModifyPreferences: false,
      },
      disableSubmitPrefsButton: true,
    };
  }

  componentDidMount() {
    this.props.getUserPreferences();
  }

  componentDidUpdate(prevProps) {
    const _state = this.state;
    if (prevProps.isPending === true && this.props.isPending === false) {
      _state.userPreferences = this.props.userPreferences;
      _state.userPreferences.specialEvents = _state.userPreferences.specialEvents.map(date => new Date(date));
      this.setState(_state);
    }
  }

  onWeekendDaysClick = () => {
    const _state = this.state;
    _state.userPreferences.weekendDays = !_state.userPreferences.weekendDays;
    _state.disableSubmitPrefsButton = false;
    this.setState(_state);
  }

  handleCalendarChange = (date) => {
    const _state = this.state;
    const { specialEvents } = _state.userPreferences;
    const dateDay = new Date(date).getDate();
    let removeIndex = null;
    for (let index = 0; index < specialEvents.length; index += 1) {
      const eventDay = new Date(specialEvents[index]).getDate();
      if (eventDay === dateDay) {
        removeIndex = index;
      }
    }

    if (removeIndex === null) {
      _state.userPreferences.specialEvents.push(new Date(date));
    } else {
      _state.userPreferences.specialEvents.splice(removeIndex, 1);
    }
    _state.disableSubmitPrefsButton = false;
    this.setState(_state);
  }

  submitPreferences = () => {
    const { userPreferences } = this.state;
    const prefObject = {
      ...userPreferences,
      specialEvents: userPreferences.specialEvents.map(date => new Date(date).getTime()),
    };
    this.props.putPreferences(prefObject);
  }
  renderPersonalInfoCard = () => {
    const { username, mail } = this.props.userData;
    return (
      <div className="card">
        <h5 className="card-header"> Informatii personale </h5>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="title">Username:</div>
            <div className="ml-2">{username}</div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="title">Email:</div>
            <div className="ml-2">{mail}</div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="title">Parola:</div>
            <button type="button" className="ml-2 btn btn-primary">Schimba parola</button>
          </div>
        </div>
      </div>
    );
  }
  renderUserPreferencesCard = () => {
    const {
      month, year, weekendDays, firstDayInMonth,
      lastDayInMonth, specialEvents,
    } = this.state.userPreferences;
    return (
      <div className="card mt-3">
        <h5 className="card-header">
          Preferinte setate pentru luna {' '} {getTextMonth({ month, year })}
        </h5>
        <div className="card-body">
          <h5 className="card-title">Evenimente speciale: </h5>
          <ul className="w-25">
            {specialEvents.map((sEvent) =>
              <li key={Math.random(0, 100000)}>{getDateFromMiliseconds(sEvent)}</li>)}
          </ul>
          <h5 className="card-title">Preferati sa veniti la spital in weekend sau sa faceti de garda? </h5>
          <ul className="w-25">
            <li>{weekendDays ? 'Da' : 'Nu'}</li>
          </ul>
        </div>
        <h5 className="text-right mr-2">
          Editarile preferintelor se pot efectua intre {' '}
          {firstDayInMonth} si {lastDayInMonth} ale lunii.
        </h5>
      </div>
    );
  }
  renderProfilePictureCard = () => {
    return (
      <div className="card">
        <h5 className="card-header"> Poza de profil </h5>
        <div className="card-body">
          <div className="img" />
          <button type="button" className="mt-4 btn btn-primary">Schimba poza</button>
        </div>
      </div>
    );
  }

  renderEditablePreferencesCard = () => {
    const {
      month, year, weekendDays,
      specialEvents,
    } = this.state.userPreferences;
    const { disableSubmitPrefsButton } = this.state;
    return (
      <div className="card mt-3">
        <h5 className="card-header">
          Adaugati preferintele pentru luna {' '} {getTextMonth({ month, year })}
        </h5>
        <div className="card-body">
          <h5 className="card-title">Selectati zilele libere dorite din luna: </h5>
          <div>
            <DatePicker
              inline
              selected={new Date()}
              highlightDates={specialEvents.map(date => new Date(date))}
              minDate={new Date(year, month - 1)}
              maxDate={new Date(year, month, 0)}
              onChange={this.handleCalendarChange}
              locale={ro}
              ref={(c) => {
                if (!this.changeMonth) {
                  c.calendar.instanceRef.changeMonth(month - 1);
                  this.changeMonth = true;
                }
              }}
            />
          </div>
          <h5 className="card-title">Preferati sa veniti la spital in weekend sau sa faceti de garda? </h5>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineRadio1" onChange={this.onWeekendDaysClick} checked={!weekendDays} />
            <label className="form-check-label" htmlFor="inlineRadio1" > Nu </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineRadio2" onChange={this.onWeekendDaysClick} checked={weekendDays} />
            <label className="form-check-label" htmlFor="inlineRadio2" > Da </label>
          </div>
        </div>
        <div className="row mx-2 mb-2">
          <button type="button" onClick={this.submitPreferences} className="offset-8 col btn btn-primary" disabled={disableSubmitPrefsButton}>
            Salveaza preferintele
          </button>
        </div>
      </div>
    );
  }

  renderPreferencesNotEditable = () => {
    return (
      <div className="row">
        <div className="col-8">
          {this.renderPersonalInfoCard()}
          {this.renderUserPreferencesCard()}
        </div>
        <div className="col-3">
          {this.renderProfilePictureCard()}
        </div>
      </div>
    );
  }
  renderPreferencesEditable = () => {
    return (
      <div className="row">
        <div className="col-8">
          {this.renderPersonalInfoCard()}
          {this.renderEditablePreferencesCard()}
        </div>
        <div className="col-3">
          {this.renderProfilePictureCard()}
        </div>
      </div>
    );
  }
  renderPreferences = (userPreferences) => {
    if (userPreferences.canModifyPreferences) {
      return this.renderPreferencesEditable();
    }
    return this.renderPreferencesNotEditable();
  }

  render() {
    const { userPreferences } = this.state;
    const { isPending } = this.props;
    if (isPending) {
      return (
        <LoadingIndicator />
      );
    }
    return (
      <div>
        <Header />
        <div className="profile-container px-5 py-2">
          <h2 className="">Profilul meu</h2>
          {this.renderPreferences(userPreferences)}
        </div>
      </div>
    );
  }
}

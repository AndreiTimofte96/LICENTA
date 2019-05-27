import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ro from 'date-fns/locale/ro'; // the locale you want
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css'
import Header from '../Header/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';
// import Modal from '../../components/Modal';
import { getTextMonth, getDateFromMiliseconds } from '../../utils/dates/dates';

import './style.scss';

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
      changePasswordInput: false,
      seePasswords: false,
      oldPassword: '',
      newPassword: '',
      passwordChanged: this.props.userData.passwordChanged,
    };
  }

  componentDidMount() {
    this.props.getUserPreferences();
  }

  componentDidUpdate(prevProps) {
    const _state = this.state;
    if (prevProps.isPending === true && this.props.isPending === false) {
      _state.userPreferences = this.props.userPreferences;
      _state.userPreferences.specialEvents =
      _state.userPreferences.specialEvents.map(date => new Date(date));
      this.setState(_state);
    }

    if (prevProps.isPasswordSetSuccess === false && this.props.isPasswordSetSuccess === true
      && this.props.changePasswordMessage.length) {
      toast(this.props.changePasswordMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: 'success',
      });
      _state.changePasswordInput = false;
      _state.seePasswords = false;
      _state.oldPassword = '';
      _state.newPassword = '';
      _state.passwordChanged = true;
      this.setState(_state);
    }

    if (prevProps.isPasswordSetError === false && this.props.isPasswordSetError === true
      && this.props.changePasswordMessage.length) {
      toast(this.props.changePasswordMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: 'error',
      });
    }

    if (prevProps.isPreferenceSetSuccess === false && this.props.isPreferenceSetSuccess === true
      && this.props.preferencesSetMessage.length) {
      toast(this.props.preferencesSetMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: 'success',
      });
    }

    if (prevProps.isPreferenceSetError === false && this.props.isPreferenceSetError === true
      && this.props.preferencesSetMessage.length) {
      toast(this.props.preferencesSetMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: 'error',
      });
    }
  }

  onWeekendDaysClick = () => {
    const _state = this.state;
    _state.userPreferences.weekendDays = !_state.userPreferences.weekendDays;
    _state.disableSubmitPrefsButton = false;
    this.setState(_state);
  }

  onChangePasswordClick = () => {
    this.setState({
      changePasswordInput: !this.state.changePasswordInput,
    });
  }
  onNewPasswordChange = (type) => (evt) => {
    const _state = this.state;
    _state[type] = evt.target.value;
    this.setState(_state);
  }
  onSubmitNewPassword = () => {
    const { oldPassword, newPassword } = this.state;
    this.props.putNewPassword(oldPassword, newPassword);
  }
  onSeePasswordsClick = () => {
    this.setState({ seePasswords: !this.state.seePasswords });
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
    const {
      changePasswordInput, newPassword,
      oldPassword, seePasswords, passwordChanged,
    } = this.state;
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
            {passwordChanged ?
              <div className="ml-2"> Parola schimbata </div>
              :
              !changePasswordInput && !passwordChanged ?
                <button type="button" className="ml-2 btn btn-primary" onClick={this.onChangePasswordClick}>Schimba parola</button>
                :
                <div className="m-0 ml-2 form-group d-flex align-items-center">
                  <input
                    value={oldPassword}
                    type={seePasswords ? 'text' : 'password'}
                    onChange={this.onNewPasswordChange('oldPassword')}
                    className="form-control mr-2"
                    placeholder="Parola actuala"
                  />
                  <input
                    value={newPassword}
                    type={seePasswords ? 'text' : 'password'}
                    onChange={this.onNewPasswordChange('newPassword')}
                    className="form-control mr-2"
                    placeholder="Parola noua"
                  />
                  {seePasswords ?
                    <i className="mr-4 far fa-eye-slash cursor-pointer" onClick={this.onSeePasswordsClick} />
                    :
                    <i className="mr-4 far fa-eye cursor-pointer" onClick={this.onSeePasswordsClick} />
                  }
                  <button
                    type="button"
                    className="mr-2 btn btn-success"
                    onClick={this.onSubmitNewPassword}
                    disabled={newPassword.length <= 5 || oldPassword.length <= 5}
                  >
                    Salveaza
                  </button>
                  <button type="button" className="mr-2 btn btn-danger" onClick={this.onChangePasswordClick}>
                    Anuleaza
                  </button>
                </div>
            }
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
            <li>{weekendDays ? 'Sa vin la spital' : 'Sa fac garda'}</li>
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
            <label className="form-check-label" htmlFor="inlineRadio1" > Sa fac garda </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="inlineRadio2" onChange={this.onWeekendDaysClick} checked={weekendDays} />
            <label className="form-check-label" htmlFor="inlineRadio2" > Sa vin la spital </label>
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
          {/* <Modal
            showModal
          /> */}
          <h2 className="">Profilul meu</h2>
          {this.renderPreferences(userPreferences)}
        </div>
      </div>
    );
  }
}

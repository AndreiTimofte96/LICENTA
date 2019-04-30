import React from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import UnauthHeader from '../../components/UnauthHeader/UnauthHeader';
import './style.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: false,
      userData: {
        email: '',
        password: '',
      },
    };
  }

  // componentDidUpdate(prevProps) {
  // }

  onFieldChange = (field) => (evt) => {
    const _state = this.state;
    _state.userData[field] = evt.target.value;
    this.setState(_state);
  }

  onSubmitForm = (evt) => {
    evt.preventDefault();
    const { email, password } = this.state.userData;
    this.props.loginPost(email, password, this.props.history);
  }

  render() {
    const { isPending } = this.state;
    const { email, password } = this.state.userData;
    return (
      <div className="h-100">
        <UnauthHeader />
        <div className="login-container">
          <div className="d-flex flex-row wrapper">
            <div className="col-12 col-md-4 login-form d-flex w-100 align-items-center justify-content-center">
              <form className="w-100" onSubmit={this.onSubmitForm} noValidate>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text-uppercase">Adresa de email</label>
                  <input value={email} onChange={this.onFieldChange('email')} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  {/* <small id="emailHelp" className="form-text text-muted"></small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="text-uppercase">Parola</label>
                  <input value={password} onChange={this.onFieldChange('password')} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {/* <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">tine-ma minte</label>
              </div> */}
                <div className="d-flex">
                  <button
                    type="submit"
                    disabled={email.length < 5 || password.length < 5 || isPending}
                    className="offset-4 col-4 btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-8 picture d-none d-md-block">
              <div className="text">
                <h1>Lorem Ipsum</h1>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit...
                </p>
              </div>
            </div>
          </div>
          {isPending && <LoadingIndicator />}
        </div>
      </div>
    );
  }
}

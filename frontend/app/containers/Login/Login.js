import React from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';
import UnauthHeader from '../../components/UnauthHeader/UnauthHeader';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isPending: false,
    };
  }

  componentDidMount() {
  }

  // componentDidUpdate(prevProps) {
  // }

  render() {
    const { isPending } = this.state;
    return (
      <div className="h-100">
        <UnauthHeader />
        <div className="login-container">
          <div className="d-flex flex-row wrapper">
            <div className="col-4 login-form d-flex w-100 align-items-center justify-content-center">
              <form className="w-100">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="text-uppercase">Adresa de email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  {/* <small id="emailHelp" className="form-text text-muted"></small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="text-uppercase">Parola</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {/* <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">tine-ma minte</label>
              </div> */}
                <div className="d-flex">
                  <button type="submit" className="offset-4 col-4 btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <div className="col-8 picture">
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

import React, { Component } from 'react';
import injectReducer from 'utils/injectReducer';
import LoadingIndicator from 'components/LoadingIndicator';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { checkSession } from './actions';
import reducer from './reducer';


export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      this.props.checkSession(this.props);
    }

    render() {
      return (
        this.props.authenticated === 'not_checked'
          ? <LoadingIndicator />
          : <ComposedComponent {...this.props} />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    checkSession: (props) => checkSession(props)(dispatch),
  });

  const mapStateToProps = (state) => ({
    authenticated: state.checkSession.authenticated,
  });

  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  const withReducer = injectReducer({ key: 'checkSession', reducer });

  return compose(withReducer, withConnect)(Authentication);
}

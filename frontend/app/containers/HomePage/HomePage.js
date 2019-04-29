import React from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isPending: false,
      message: null,
    };
  }

  componentDidMount() {
    this.props.homepageGet();
  }

  componentDidUpdate(prevProps) {
    const _state = this.state;
    const { isPending, isSuccess, message } = this.props;
    if (isPending !== prevProps.isPending) {
      _state.isPending = isPending;
      this.setState(_state);
    }

    if (isSuccess !== prevProps.isSuccess && isSuccess === true) {
      _state.message = message;
      this.setState(_state);
    }
  }

  render() {
    const { isPending, message } = this.state;
    return (
      <div className="homepage-container d-flex align-items-center justify-content-center">
        <div className="text">
          {message}
        </div>
        {isPending && <LoadingIndicator />}
      </div>
    );
  }
}

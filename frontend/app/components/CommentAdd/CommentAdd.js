import React from 'react';
import './style.scss';

export default class CommentAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      newMessage: '',
    };
  }

  onChange = (evt) => {
    const _state = this.state;
    _state.newMessage = evt.target.value;
    this.setState(_state);
  }
  render() {
    const { newMessage } = this.state;
    return (
      <div className="comment-add-container mt-5">
        <textarea
          className="p-2"
          value={newMessage}
          onChange={this.onChange}
          placeholder="Adauga un comentariu"
        />
        <div className="mt-2 mr-2">
          <button type="button" className="float-right btn btn-primary">Adauga</button>
        </div>
      </div>
    );
  }
}

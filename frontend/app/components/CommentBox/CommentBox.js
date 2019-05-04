import React from 'react';
import './style.scss';

export default class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { username, message } = this.props;
    return (
      <div className="comment-box-container mt-3 p-2">
        <h4>{username} a spus: </h4>
        <p>{message}</p>
      </div>
    );
  }
}

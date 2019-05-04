import React from 'react';
import CommentBox from '../CommentBox';
import CommentAdd from '../CommentAdd';
import './style.scss';

export default class CommentsSection extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
    };
  }

  handleClick = () => {
    const _state = this.state;
    _state.showComments = !this.state.showComments;
    this.setState(_state);
  }
  render() {
    const { comments } = this.props;
    const { showComments } = this.state;
    return (
      <div className="comments-section-container mt-5 w-75">
        <div className="comments-button font-weight-bold" onClick={this.handleClick}>
          {!showComments ? 'Arata' : 'Ascunde'} comentarii: ({comments.length})
        </div>
        {showComments &&
          <div>
            {
              comments.length === 0 ?
                <p>Nu a fost adaugat niciun comentariu</p>
                :
                comments.map((comment) => {
                  return (
                    <CommentBox
                      key={Math.random(1, 10000000)}
                      username={comment.username}
                      message={comment.message}
                    />
                  );
                })
            }
            <CommentAdd />
          </div>
        }

      </div>

    );
  }
}

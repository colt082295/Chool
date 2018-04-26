import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NoteComment.css';

class NoteComment extends React.Component {
  static propTypes = {
    body: PropTypes.node.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  };

  state = {
    body: this.props.body,
    date: this.props.date,
  };

  render() {
    return (
      <div className={s.comment}>
        <div className={s.body}>{this.state.body}</div>
        <div>
          <div className={s.date}>
            {moment(this.state.date).format('MMM Do YY')}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NoteComment);

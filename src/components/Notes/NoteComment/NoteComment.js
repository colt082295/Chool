import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Textarea from 'react-textarea-autosize';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NoteComment.css';

class NoteComment extends React.Component {
  static propTypes = {
    body: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    bodyChanged: PropTypes.func.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  };

  state = {
    date: this.props.date,
  };

  bodyChange(id, e) {
    this.props.bodyChanged(e.currentTarget.value, id);
  }

  render() {
    return (
      <div className={s.comment}>
        <Textarea
          placeholder="Give me your comment."
          className={s.body}
          defaultValue={this.props.body}
          // onBlur={this.bodyBlur.bind(this)}
          onChange={this.bodyChange.bind(this, this.props.id)}
          rows="1"
        />
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

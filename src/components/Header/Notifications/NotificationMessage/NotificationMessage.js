import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotificationMessage.css';
import Link from '../../../Link';

class NotificationMessage extends React.Component {
  static propTypes = {
    message: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    date: this.props.message.date,
    from: this.props.message.data.from,
    body: this.props.message.data.body,
  };

  render() {
    return (
      <Link to="/" className={s.notificationMessage}>
        <div className={s.meta}>
          <div>{this.state.from}</div>
          <div>{moment(this.state.date).format('MMM Do YY')}</div>
        </div>
        <div className={s.body}>
          <div>{this.state.body}</div>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(NotificationMessage);

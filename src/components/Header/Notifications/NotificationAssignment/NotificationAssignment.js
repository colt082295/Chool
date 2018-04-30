import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotificationAssignment.css';
import Link from '../../../Link';

class NotificationAssignment extends React.Component {
  static propTypes = {
    assignment: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    title: this.props.assignment.data.title,
    dueDate: this.props.assignment.data.dueDate,
    class: this.props.assignment.data.class,
  };

  render() {
    return (
      <Link to="/" className={s.notificationAssignment}>
        <div className={s.meta}>
          <div>{this.state.class}</div>
          <div className={s.dueDate}>
            Due: {moment(this.state.dueDate).format('MMM Do YY')}
          </div>
        </div>
        <div className={s.body}>
          <div>{this.state.title}</div>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(NotificationAssignment);

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotificationGrade.css';
import Link from '../../../Link';

class NotificationGrade extends React.Component {
  static propTypes = {
    grade: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    title: this.props.grade.data.title,
    grade: this.props.grade.data.grade,
    class: this.props.grade.data.class,
  };

  render() {
    return (
      <Link to="/" className={s.notificationGrade}>
        <div className={s.meta}>
          <div>{this.state.class}</div>
        </div>
        <div className={s.body}>
          <div>{this.state.title}</div>
        </div>
        <div className={s.circle}>
          <div className={s.grade}>{this.state.grade}</div>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(NotificationGrade);

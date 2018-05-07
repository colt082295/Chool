import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NotificationMessage from './NotificationMessage/NotificationMessage';
import NotificationAssignment from './NotificationAssignment/NotificationAssignment';
import NotificationGrade from './NotificationGrade/NotificationGrade';
import s from './Notifications.css';

class Notifications extends React.Component {
  static contextTypes = { fetch: PropTypes.func.isRequired };

  state = {
    notifications: [],
  };

  componentWillMount() {
    this.context
      .fetch('http://localhost:3005/notifications')
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          notifications: myJson,
        });
      });
  }

  /* eslint-disable class-methods-use-this */
  renderNotification(notification, i) {
    if (notification.type === 'message') {
      return <NotificationMessage message={notification} key={i.toString()} />;
    } else if (notification.type === 'grade') {
      return <NotificationGrade grade={notification} key={i.toString()} />;
    } else if (notification.type === 'assignment') {
      return (
        <NotificationAssignment assignment={notification} key={i.toString()} />
      );
    }
    return '';
  }
  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <div className={s.notifications}>
        {this.state.notifications.map((notification, i) =>
          this.renderNotification(notification, i),
        )}
      </div>
    );
  }
}

export default withStyles(s)(Notifications);

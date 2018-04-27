import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link/Link';
import s from './Message.css';

class Message extends React.Component {
  static propTypes = {
    body: PropTypes.node.isRequired,
    user: PropTypes.node.isRequired,
    time: PropTypes.node.isRequired,
  };

  state = {
    body: this.props.body,
    user: this.props.user,
    time: this.props.time,
  };

  render() {
    return (
      <div className={`${s.message} ${this.state.user === 'colt' ? s.me : ''}`}>
        <div className={s.body}>{this.state.body}</div>
        <div className={s.meta}>
          <div className={s.username}>
            <Link to="/user/test">{this.state.user}</Link>
          </div>
          <div className={s.time}>
            {moment(this.state.time).format('MMM Do YY')}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Message);

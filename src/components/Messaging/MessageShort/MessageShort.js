import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MessageShort.css';

class MessageShort extends React.Component {
  static propTypes = {
    chatName: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    lastMessage: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    chatName: this.props.chatName,
    id: this.props.id,
    lastMessage: this.props.lastMessage,
  };

  render() {
    return (
      <a href={`/messages/${this.state.id}`} className={s.message}>
        <div>
          <span>{this.state.chatName}</span>
        </div>
        <div className={s.main}>
          <div className={s.body}>{this.state.lastMessage.body}</div>
          <div className={s.meta}>
            <span className={s.user}>{this.state.lastMessage.user}</span>
            <span>
              {moment(this.state.lastMessage.time).format('MMM Do YY')}
            </span>
          </div>
        </div>
      </a>
    );
  }
}

export default withStyles(s)(MessageShort);

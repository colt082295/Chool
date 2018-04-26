import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MessageShortComponent from '../MessageShort/MessageShort';
import s from './Messages.css';

class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
  };

  state = {
    messages: this.props.messages,
  };

  render() {
    return (
      <div className={s.messagesList}>
        {this.state.messages.map((message, i) => (
          <MessageShortComponent
            chatName={message.name}
            lastMessage={message.messages[message.messages.length - 1]}
            id={message.id}
            key={i.toString()}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(s)(Messages);

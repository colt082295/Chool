import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import MessageComponent from '../../components/Messaging/Message/Message';
import NewMessageComponent from '../../components/Messaging/NewMessage/NewMessage';
import s from './Message.css';

class Message extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    data: this.props.data,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.messages}>
            {this.state.data.messages.map((message, i) => (
              <MessageComponent
                body={message.body}
                user={message.user}
                time={message.time}
                key={i.toString()}
              />
            ))}
          </div>
          <div>
            <NewMessageComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Message);

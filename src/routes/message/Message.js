import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageComponent from '../../components/Messaging/Message/Message';
import NewMessageComponent from '../../components/Messaging/NewMessage/NewMessage';
import { fetchMessage } from '../../actions/messageActions';
import s from './Message.css';

class Message extends React.Component {
  static propTypes = {
    message: PropTypes.instanceOf(Object).isRequired,
    params: PropTypes.instanceOf(Object).isRequired,
    fetchMessage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchMessage(this.props.params);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.messages}>
            {this.props.message.messages
              ? this.props.message.messages.map((message, i) => (
                  <MessageComponent
                    body={message.body}
                    user={message.user}
                    time={message.time}
                    key={i.toString()}
                  />
                ))
              : ''}
          </div>
          <div>
            <NewMessageComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  message: state.message.message,
  fetching: state.message.fetching,
  fetched: state.message.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchMessage })(
  withStyles(s)(Message),
);

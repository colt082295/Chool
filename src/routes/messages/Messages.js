import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessagesComponent from '../../components/Messaging/Messages';
import { fetchMessages } from '../../actions/messagesActions';
import s from './Messages.css';

class Messages extends React.Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
    fetchMessages: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.messages}>
            <MessagesComponent messages={this.props.messages} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages.messages,
  fetching: state.messages.fetching,
  fetched: state.messages.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchMessages })(
  withStyles(s)(Messages),
);

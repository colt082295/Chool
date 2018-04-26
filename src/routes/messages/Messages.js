import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import MessagesComponent from '../../components/Messaging/Messages';
import s from './Messages.css';

class Messages extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
  };

  state = {
    data: this.props.data,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.messages}>
            <MessagesComponent messages={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Messages);

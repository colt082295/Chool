import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Message from './DashboardMessage/DashboardMessage';
import s from './DashboardMessages.css';

class DashboardMessages extends React.Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.messagesTile, s.tile)}>
        {this.props.messages.map((message, i) => (
          // console.log("Message", message)
          <Message
            name={message.name}
            message={message.messages[message.messages.length - 1]}
            key={i.toString()}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(s)(DashboardMessages);

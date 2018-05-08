import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Message from './DashboardMessage/DashboardMessage';
import s from './DashboardMessages.css';

const classes = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'english', value: 'english', text: 'English' },
  { key: 'math', value: 'math', text: 'Math' },
];
class DashboardMessages extends React.Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.messagesTile, s.tile)}>
        <div className={s.top}>
          <h3 className={s.title}>Messages</h3>
          <div className={s.options}>
            <Icon name="ellipsis vertical" />
          </div>
        </div>
        <div className={s.messages}>
          {this.props.messages.map((message, i) => (
            <Message
              name={message.name}
              message={message.messages[message.messages.length - 1]}
              key={i.toString()}
            />
          ))}
        </div>
        <div className={s.more}>
          <Dropdown
            placeholder="Group/Person"
            fluid
            search
            defaultValue="all"
            selection
            options={classes}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardMessages);

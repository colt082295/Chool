import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardMessage.css';

class DashboardMessage extends React.Component {
  static propTypes = {
    name: PropTypes.node.isRequired,
    message: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    name: this.props.name,
    message: this.props.message,
  };

  render() {
    return (
      <div className={s.messageWrapper}>
        {/* <div className={s.message}>
          <div className={s.meta}>
            <div className={s.user}>Colt</div>
            <div className={s.group}>English Group</div>
            <div className={s.time}>9:45</div>
          </div>
          <div className={s.main}>
            <div className={s.body}>This is the text for the message.</div>
          </div>
        </div> */}
        <h3>{`${this.state.name} ${this.state.message.body}`}</h3>
      </div>
    );
  }
}

export default withStyles(s)(DashboardMessage);

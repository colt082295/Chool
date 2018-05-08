import React from 'react';
// import { Tab } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../../Link/Link';
import s from './DashboardMessage.css';

class DashboardMessage extends React.Component {
  static propTypes = {
    name: PropTypes.node.isRequired,
    message: PropTypes.instanceOf(Object).isRequired,
  };

  // state = {
  //   name: this.props.name,
  //   message: this.props.message,
  // };

  render() {
    return (
      <div className={s.messageWrapper}>
        <Link to="/messages" className={s.message}>
          <div>
            <div className={s.body}>{this.props.message.body}</div>
          </div>
          <div className={s.meta}>
            <div>{this.props.message.user}</div>
            <div>{this.props.name}</div>
            <div>{moment(this.props.message.time).format('MMM Do YY')}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(DashboardMessage);

import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import Link from '../Link/Link';
import s from './ProfileBasic.css';

class ProfileBasic extends React.Component {
  static propTypes = {
    user: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    name: this.props.user.name,
    bio: this.props.user.bio,
    classes: this.props.user.classes,
    // avatar: this.props.user.avatar,
  };

  render() {
    return (
      <div className={s.profile}>
        <div className={s.basicInfo}>
          <div>{this.state.name}</div>
          <div>{this.state.bio}</div>
          <ul>
            {this.state.classes.map((classInfo, i) => (
              <li key={i.toString()}>{classInfo.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProfileBasic);

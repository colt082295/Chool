import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import ProfileBasic from '../../components/Profile/ProfileBasic/ProfileBasic';
import s from './ProfileMe.css';

class ProfileMe extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ProfileBasic user={this.props.data} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProfileMe);

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Dashboard from '../../components/Dashboard/Dashboard';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Dashboard tiles={this.props.data} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

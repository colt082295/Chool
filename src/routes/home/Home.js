import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Dashboard from '../../components/Dashboard/Dashboard';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

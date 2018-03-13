import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Classes.css';

class Classes extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Classes</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Classes);

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ClassesComponent from '../../components/Class/Class';
import s from './Class.css';

class ClassPage extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ClassesComponent />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ClassPage);

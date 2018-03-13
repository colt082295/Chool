import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ClassesComponent from '../../components/Classes/Classes';
import s from './Classes.css';

class Classes extends React.Component {
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

export default withStyles(s)(Classes);

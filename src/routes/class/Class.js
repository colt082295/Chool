import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ClassesComponent from '../../components/Class/Class';
import s from './Class.css';

class ClassPage extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <ClassesComponent data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ClassPage);

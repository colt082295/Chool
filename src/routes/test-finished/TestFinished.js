import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TestFinishedComponent from '../../components/Test/TestFinished/TestFinished';
import s from './TestFinished.css';

class TestPage extends React.Component {
  static propTypes = {
    route: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    return (
      <div className={s.root}>
        <TestFinishedComponent route={this.props.route} />
      </div>
    );
  }
}

export default withStyles(s)(TestPage);

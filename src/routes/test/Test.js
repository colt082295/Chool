import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TestComponent from '../../components/Test/Test';
import s from './Test.css';

class TestPage extends React.Component {
  static propTypes = {
    questions: PropTypes.instanceOf(Array).isRequired,
    testInfo: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    return (
      <div className={s.root}>
        <TestComponent
          questions={this.props.questions}
          testInfo={this.props.testInfo}
        />
      </div>
    );
  }
}

export default withStyles(s)(TestPage);

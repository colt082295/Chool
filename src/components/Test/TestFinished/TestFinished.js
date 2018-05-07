import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TestFinished.css';

class TestFinished extends React.Component {
  // static propTypes = {
  //   choices: PropTypes.instanceOf(Array).isRequired,
  //   currentAnswer: PropTypes.node.isRequired,
  //   updateAnswer: PropTypes.func.isRequired,
  // };

  render() {
    return (
      <div className={s.finished}>
        <h1>You finished the test</h1>
      </div>
    );
  }
}

export default withStyles(s)(TestFinished);

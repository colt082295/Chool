import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TestQuestion.css';

class TestQuestion extends React.Component {
  static propTypes = {
    question: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.testQuestion}>
        <h2>{this.props.question}</h2>
      </div>
    );
  }
}

export default withStyles(s)(TestQuestion);

import React from 'react';
// import { Tab } from 'semantic-ui-react';
import Textarea from 'react-textarea-autosize';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TestTextarea.css';

class TestTextarea extends React.Component {
  render() {
    return (
      <div className={s.textareaWrapper}>
        <h1>Test</h1>
        <Textarea
          placeholder="Give me your answer."
          className={s.textArea}
          autoFocus
        />
      </div>
    );
  }
}

export default withStyles(s)(TestTextarea);

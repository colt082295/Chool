import React from 'react';
import { Button } from 'semantic-ui-react';
import Textarea from 'react-textarea-autosize';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewMessage.css';

class NewMessage extends React.Component {
  render() {
    return (
      <div className={s.messageContainer}>
        <Textarea
          placeholder="Send your comments."
          autoFocus
          className={s.textArea}
        />
        <Button primary className={s.send}>
          Send
        </Button>
      </div>
    );
  }
}

export default withStyles(s)(NewMessage);

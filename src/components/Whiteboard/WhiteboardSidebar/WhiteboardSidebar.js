import React from 'react';
import { Icon } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WhiteboardSidebar.css';

class WhiteboardSidebar extends React.Component {
  render() {
    return (
      <div className={s.sidebar}>
        <div className={s.item}>
          <Icon name="paint brush" />
        </div>
        <div className={s.item}>
          <Icon name="paint brush" />
        </div>
        <div className={s.item}>
          <Icon name="paint brush" />
        </div>
        <div className={s.item}>
          <Icon name="paint brush" />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WhiteboardSidebar);

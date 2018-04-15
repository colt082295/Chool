import React from 'react';
// import { Tab } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import WhiteboardCanvas from './WhiteboardCanvas/WhiteboardCanvas';
import WhiteboardSidebar from './WhiteboardSidebar/WhiteboardSidebar';
import s from './Whiteboard.css';

class Whiteboard extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <WhiteboardSidebar />
        <WhiteboardCanvas />
      </div>
    );
  }
}

export default withStyles(s)(Whiteboard);

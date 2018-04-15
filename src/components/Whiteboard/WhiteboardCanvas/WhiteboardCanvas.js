import React from 'react';
// import { Tab } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WhiteboardCanvas.css';

class WhiteboardCanvas extends React.Component {
  render() {
    return <canvas />;
  }
}

export default withStyles(s)(WhiteboardCanvas);

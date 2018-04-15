import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import WhiteboardComponent from '../../components/Whiteboard/Whiteboard';
import s from './Whiteboard.css';

class Whiteboard extends React.Component {
  render() {
    return <WhiteboardComponent />;
  }
}

export default withStyles(s)(Whiteboard);

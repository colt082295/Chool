import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link/Link';
import s from './Note.css';

class Note extends React.Component {
  static propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    body: PropTypes.node,
    class: PropTypes.node,
  };

  static defaultProps = {
    body: '',
    class: null,
  };

  state = {
    id: this.props.id,
    title: this.props.title,
    body: this.props.body,
    class: this.props.class,
  };

  render() {
    return (
      <Link to={`/link/${this.state.id}`} className={s.note}>
        <div className={s.top}>
          <div>{this.state.title}</div>
          <div>{this.state.class}</div>
        </div>
        <div className={s.main}>
          <div>{this.state.body}</div>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(Note);

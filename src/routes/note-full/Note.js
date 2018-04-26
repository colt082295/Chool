import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import NoteFullComponent from '../../components/Notes/NoteFull/NoteFull';
import s from './Note.css';

class Notes extends React.Component {
  static propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    body: PropTypes.node,
    items: PropTypes.instanceOf(Object),
    date: PropTypes.instanceOf(Date).isRequired,
  };

  static defaultProps = {
    body: '',
    items: {},
  };

  render() {
    return (
      <div className={s.root}>
        <NoteFullComponent
          id={this.props.id}
          title={this.props.title}
          body={this.props.body}
          items={this.props.items}
          date={this.props.date}
        />
      </div>
    );
  }
}

export default withStyles(s)(Notes);

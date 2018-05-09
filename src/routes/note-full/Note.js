import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NoteFullComponent from '../../components/Notes/NoteFull/NoteFull';
import { fetchNote } from '../../actions/noteActions';
import s from './Note.css';

class NoteFull extends React.Component {
  static propTypes = {
    note: PropTypes.instanceOf(Object).isRequired,
    params: PropTypes.instanceOf(Object).isRequired,
    fetchNote: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNote(this.props.params);
  }

  render() {
    return (
      <div className={s.root}>
        <NoteFullComponent
          id={this.props.note.id}
          title={this.props.note.title}
          body={this.props.note.body}
          items={this.props.note.items}
          date={this.props.note.date}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: state.note.note,
  fetching: state.assignment.fetching,
  fetched: state.assignment.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchNote })(withStyles(s)(NoteFull));

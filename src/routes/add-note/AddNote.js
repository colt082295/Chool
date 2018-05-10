import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddNoteComponent from '../../components/Notes/AddNote/AddNote';
import { addNote } from '../../actions/noteActions';
import s from './AddNote.css';

class AddNote extends React.Component {
  static propTypes = {
    addNote: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <AddNoteComponent addNote={this.props.addNote} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: state.addNote.note,
  adding: state.addNote.fetching,
  added: state.addNote.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { addNote })(withStyles(s)(AddNote));

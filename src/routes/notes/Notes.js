import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NoteComponent from '../../components/Notes/Note/Note';
import { fetchNotes } from '../../actions/noteActions';
import s from './Notes.css';

class Notes extends React.Component {
  static propTypes = {
    notes: PropTypes.instanceOf(Array).isRequired,
    fetchNotes: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.grid}>
            {this.props.notes
              ? this.props.notes.map((note, i) => (
                  <NoteComponent
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    items={note.items}
                    class={note.class}
                    date={note.date}
                    key={i.toString()}
                  />
                ))
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  notes: state.notes.notes,
  fetching: state.notes.fetching,
  fetched: state.notes.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchNotes })(withStyles(s)(Notes));

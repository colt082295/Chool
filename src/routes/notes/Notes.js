import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import NoteComponent from '../../components/Notes/Note/Note';
import s from './Notes.css';

class Notes extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.grid}>
            {this.props.data.map((note, i) => (
              <NoteComponent
                id={note.id}
                title={note.title}
                body={note.body}
                items={note.items}
                class={note.class}
                date={note.date}
                key={i.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Notes);

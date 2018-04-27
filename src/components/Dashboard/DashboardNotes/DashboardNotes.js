import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardNotes.css';

class DashboardNotes extends React.Component {
  static propTypes = {
    notes: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.notesTile, s.tile)}>
        {this.props.notes.map((note, i) => (
          <h3 key={i.toString()}>{note.title}</h3>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(DashboardNotes);

import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link/Link';
import s from './DashboardNotes.css';

const classes = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'english', value: 'english', text: 'English' },
  { key: 'math', value: 'math', text: 'Math' },
];

class DashboardNotes extends React.Component {
  static propTypes = {
    notes: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.notesTile, s.tile)}>
        <div className={s.top}>
          <h3 className={s.title}>Notes</h3>
          <div className={s.options}>
            <Icon name="ellipsis vertical" />
          </div>
        </div>
        <div className={s.notes}>
          {this.props.notes.map((note, i) => (
            <Link to={`/note/${note.id}`} className={s.note} key={i.toString()}>
              <div>
                <h3>{note.title}</h3>
              </div>
              <div className={s.meta}>
                <span>{note.class}</span>
                <span>{moment(note.date).format('MMM Do YY')}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={s.more}>
          <Dropdown
            placeholder="Class"
            fluid
            search
            defaultValue="all"
            selection
            options={classes}
          />
          <Link to="/notes" className={s.addNote}>
            <Icon name="plus" />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardNotes);

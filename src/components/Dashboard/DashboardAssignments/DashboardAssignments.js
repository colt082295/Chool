import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link/Link';
import s from './DashboardAssignments.css';

const classes = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'english', value: 'english', text: 'English' },
  { key: 'math', value: 'math', text: 'Math' },
];

class DashboardAssignments extends React.Component {
  static propTypes = {
    assignments: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.assignmentsTile, s.tile)}>
        <div className={s.top}>
          <h3 className={s.title}>Assignments</h3>
          <div className={s.options}>
            <Icon name="ellipsis vertical" />
          </div>
        </div>
        <div className={s.assignments}>
          {this.props.assignments.map((assignment, i) => (
            <Link
              to={`/assignments/${assignment.id}`}
              className={s.assignment}
              key={i.toString()}
            >
              <div>
                <h3>{assignment.title}</h3>
              </div>
              <div className={s.meta}>
                <span>{assignment.class}</span>
                <span className={s.date}>
                  Due: {moment(assignment.date).format('MMM Do YY')}
                </span>
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
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DashboardAssignments);

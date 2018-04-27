import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardAssignments.css';

class DashboardAssignments extends React.Component {
  static propTypes = {
    assignments: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.assignmentsTile, s.tile)}>
        {this.props.assignments.map((assignment, i) => (
          <h3 key={i.toString()}>{assignment.title}</h3>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(DashboardAssignments);

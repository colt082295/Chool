import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import AssignmentComponent from '../../components/Assignment/Assignment';
import s from './Assignments.css';

class Assignments extends React.Component {
  static propTypes = {
    data: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <NavigationHeader />
          <div className={s.grid}>
            {this.props.data.map(assignment => (
              <AssignmentComponent
                title={assignment.title}
                grade={assignment.grade}
                dueDate={assignment.dueDate}
                class={assignment.class}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Assignments);

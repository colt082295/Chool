import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import FilterHeader from '../../components/FilterHeader/FilterHeader';
import AssignmentComponent from '../../components/Assignment/Assignment';
import s from './Assignments.css';

class Assignments extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <FilterHeader />
          <div className={s.grid}>
            {this.props.data.map((assignment, i) => (
              <AssignmentComponent
                title={assignment.title}
                grade={assignment.grade}
                dueDate={assignment.dueDate}
                class={assignment.class}
                key={i.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Assignments);

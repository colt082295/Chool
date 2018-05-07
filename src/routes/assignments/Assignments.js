import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterHeader from '../../components/FilterHeader/FilterHeader';
import AssignmentComponent from '../../components/Assignment/Assignment';
import { fetchAssignments } from '../../actions/assignmentActions';
import s from './Assignments.css';

class Assignments extends React.Component {
  static propTypes = {
    assignments: PropTypes.instanceOf(Array).isRequired,
    fetchAssignments: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchAssignments();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <FilterHeader />
          <div className={s.grid}>
            {this.props.assignments.map((assignment, i) => (
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

const mapStateToProps = (state, ownProps) => ({
  assignments: state.assignment.assignments,
  fetching: state.assignment.fetching,
  fetched: state.assignment.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchAssignments })(
  withStyles(s)(Assignments),
);

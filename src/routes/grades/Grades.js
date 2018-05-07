import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterHeader from '../../components/FilterHeader/FilterHeader';
import GradesComponent from '../../components/Grade/Grade';
import { fetchGrades } from '../../actions/gradeActions';
import s from './Grades.css';

class Grades extends React.Component {
  static propTypes = {
    grades: PropTypes.instanceOf(Array).isRequired,
    fetchGrades: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchGrades();
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <FilterHeader />
          <div className={s.grid}>
            {this.props.grades.map((assignment, i) => (
              <GradesComponent
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
  grades: state.grade.grades,
  fetching: state.grade.fetching,
  fetched: state.grade.fetched,
  ...ownProps,
});

export default connect(mapStateToProps, { fetchGrades })(withStyles(s)(Grades));

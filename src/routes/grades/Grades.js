import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';
import GradesComponent from '../../components/Grade/Grade';
import s from './Grades.css';

class Grades extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <NavigationHeader />
          <div className={s.grid}>
            {this.props.data.map((assignment, i) => (
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

export default withStyles(s)(Grades);

import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardGrades.css';

class DashboardGrades extends React.Component {
  static propTypes = {
    grades: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.gradeTile, s.tile)}>
        {this.props.grades.map((grade, i) => (
          <h3 key={i.toString()}>{grade.title}</h3>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(DashboardGrades);

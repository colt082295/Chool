import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardGrades.css';

const classes = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'english', value: 'english', text: 'English' },
  { key: 'math', value: 'math', text: 'Math' },
];
class DashboardGrades extends React.Component {
  static propTypes = {
    grades: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      // eslint-disable-next-line css-modules/no-undef-class
      <div className={(s.gradeTile, s.tile)}>
        <div className={s.top}>
          <h3 className={s.title}>Grades</h3>
          <div className={s.options}>
            <Icon name="ellipsis vertical" />
          </div>
        </div>
        <div className={s.grades}>
          {this.props.grades.map((grade, i) => (
            <div key={i.toString()} className={s.grade}>
              <div>
                <h3 className={s.title}>{grade.title}</h3>
              </div>
              <div className={s.meta}>
                <span>{grade.class}</span>
                <span className={s.date}>
                  {moment(grade.date).format('MMM Do YY')}
                </span>
                <span className={s.gradeScore}>{grade.grade}</span>
              </div>
            </div>
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

export default withStyles(s)(DashboardGrades);

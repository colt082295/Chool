import React from 'react';
// import { Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import s from './Assignment.css';

class Assignment extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    grade: PropTypes.node,
    classInfo: PropTypes.node,
    dueDate: PropTypes.string.isRequired,
  };

  static defaultProps = {
    classInfo: '',
    grade: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      dueDate: moment(this.props.dueDate).format('MMM Do YY'),
      dueDatePassed: moment(this.props.dueDate).isBefore(new Date()),
      letterGrade: this.gradeLetter(),
      classNameLowerCase: this.props.classInfo
        ? this.props.classInfo.toLowerCase()
        : null,
      colorKey: {
        'A+': 'rgb(27, 189, 27)',
        A: 'rgb(37, 152, 37)',
        'A-': 'rgb(12, 121, 12)',
        'B+': '#3e9dff',
        B: '#2f86e0',
        'B-': '#1a67b7',
        'C+': '#fffc8f',
        C: '#d2cf5f',
        'C-': '#bfbb28',
        'D+': '#ffcb6b',
        D: '#e0ad4f',
        'D-': '#bb7e0c',
        F: '#ff0000',
      },
    };
  }

  gradeLetter = () => {
    const { grade } = this.props;
    if (grade >= 97) {
      return 'A+';
    } else if (grade >= 93 && grade <= 96) {
      return 'A';
    } else if (grade >= 90 && grade <= 92) {
      return 'A-';
    } else if (grade >= 87 && grade <= 89) {
      return 'B+';
    } else if (grade >= 83 && grade <= 86) {
      return 'B';
    } else if (grade >= 80 && grade <= 82) {
      return 'B-';
    } else if (grade >= 77 && grade <= 89) {
      return 'C+';
    } else if (grade >= 73 && grade <= 76) {
      return 'C';
    } else if (grade >= 70 && grade <= 72) {
      return 'C-';
    } else if (grade >= 67 && grade <= 69) {
      return 'D+';
    } else if (grade >= 63 && grade <= 66) {
      return 'D';
    } else if (grade >= 60 && grade <= 62) {
      return 'D-';
    }
    return 'F';
  };

  datePassed = () => {
    if (this.state.dueDatePassed) {
      return s.datePassed;
    }
    return '';
  };

  render() {
    return (
      <div className={s.assignment}>
        {this.props.grade ? (
          <div className={s.gradeWrapper}>
            <div className={s.grade}>{this.props.grade}</div>
            <div
              className={s.gradeLetter}
              style={{
                color: this.state.colorKey[this.state.letterGrade],
              }}
            >
              {this.state.letterGrade}
            </div>
          </div>
        ) : (
          ''
        )}

        <div className={s.assignmentInfo}>
          {this.props.classInfo ? (
            <div className={s.assignmentMeta}>
              <div>
                {' '}
                <Link to={`/class/${this.state.classNameLowerCase}`}>
                  {this.props.classInfo}
                </Link>{' '}
              </div>
            </div>
          ) : (
            ''
          )}
          <div className={s.assignmentTitle}>{this.props.title}</div>
        </div>
        <div className={s.dateInfo}>
          Due:
          <span className={`${s.date} ${this.datePassed}`}>
            {this.state.dueDate}
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Assignment);

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import File from '../File/File';
import Assignment from '../Assignment/Assignment';
import Grade from '../Grade/Grade';
import Calendar from '../Calendar/Calendar';
import s from './Class.css';

class ClassComponent extends React.Component {
  static propTypes = {
    classInfo: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.feedGrades = this.feedGrades.bind(this);
    this.feedAssignments = this.feedAssignments.bind(this);
    this.sortedStudents = this.sortedStudents.bind(this);
  }

  /* eslint-disable class-methods-use-this */
  sortedStudents() {
    const myData = []
      .concat(this.props.classInfo.students)
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
      .map((item, i) => {
        const itemUrl = encodeURIComponent(item.name).toLowerCase();
        return (
          <Link
            to={`/student/${itemUrl}`}
            className={s.student}
            key={i.toString()}
          >
            <div>
              <img
                alt=""
                className={s.avatar}
                src="https://avatars3.githubusercontent.com/u/6713494?s=460&v=4"
              />
            </div>
            <div className={s.name}>{item.name}</div>
          </Link>
        );
      });
    return myData;
  }

  feedGrades(grades) {
    return grades.map((grade, i) => (
      <Grade
        title={grade.title}
        grade={grade.grade}
        dueDate={grade.dueDate}
        classInfo={grade.class}
        key={i.toString()}
      />
    ));
  }

  feedAssignments(assignments) {
    return assignments.map((assignment, i) => (
      <Assignment
        title={assignment.title}
        grade={assignment.grade}
        dueDate={assignment.dueDate}
        classInfo={assignment.class}
        key={i.toString()}
      />
    ));
  }
  /* eslint-enable class-methods-use-this */

  render() {
    // const { files, assignments, grades, feed, events } = this.state;
    const { files, assignments, grades, feed, events } = this.props.classInfo;
    const panes = [
      {
        menuItem: 'Feed',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            {feed.map((item, i) => (
              <div key={i.toString()}>
                <div className={s.timeline}>
                  <span className={s.timelineBefore} />
                  <div className={s.timelineDate}>
                    {moment(feed.date).format('dddd, MMMM Do')}
                  </div>
                  <span className={s.timelineAfter} />
                </div>
                <div className={s.feedGrid}>
                  {this.feedGrades(item.content.grades)}
                  {this.feedAssignments(item.content.assignments)}
                </div>
              </div>
            ))}
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Posts',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Posts
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Grades',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            <div className={s.grades}>
              {grades.map((grade, i) => (
                <Grade
                  title={grade.title}
                  grade={grade.grade}
                  dueDate={grade.dueDate}
                  classInfo={grade.class}
                  key={i.toString()}
                />
              ))}
            </div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Assignments',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            <div className={s.assignments}>
              {assignments.map((assignment, i) => (
                <Assignment
                  title={assignment.title}
                  grade={assignment.grade}
                  dueDate={assignment.dueDate}
                  classInfo={assignment.class}
                  key={i.toString()}
                />
              ))}
            </div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Files',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            <div className={s.files}>
              {files.map((item, i) => (
                <File
                  title={item.title}
                  uploadedBy={item.uploadedBy}
                  key={i.toString()}
                />
              ))}
            </div>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Calendar',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            <Calendar events={events} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Students',
        render: () => <div className={s.students}>{this.sortedStudents()}</div>,
      },
    ];
    return (
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        className="tabMenu"
      />
    );
  }
}

export default withStyles(s)(ClassComponent);

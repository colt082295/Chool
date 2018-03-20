import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Tab, Search } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import File from '../File/File';
import Assignment from '../Assignment/Assignment';
import Grade from '../Grade/Grade';
import Data from './data';
import Calendar from '../Calendar/Calendar';
import s from './Class.css';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.feedGrades = this.feedGrades.bind(this);
    this.feedAssignments = this.feedAssignments.bind(this);
  }
  state = {
    isLoading: false,
    results: [],
    value: '',
    students: Data.students,
  };
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent() {
    const sortedStudents = this.state.students.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({ isLoading: false, results: sortedStudents, value: '' });
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    /* eslint-disable consistent-return */
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.students, isMatch),
      });
    }, 500);
  };

  /* eslint-disable class-methods-use-this */
  feedGrades(grades) {
    return grades.map((grade, i) => (
      <Grade
        title={grade.title}
        grade={grade.grade}
        dueDate={grade.dueDate}
        class={grade.class}
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
        class={assignment.class}
        key={i.toString()}
      />
    ));
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { files, assignments, grades, feed, events } = Data;
    const { isLoading, value, results } = this.state;
    const panes = [
      {
        menuItem: 'Feed',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            {feed.map((item, i) => [
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
              </div>,
            ])}
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
                  class={grade.class}
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
                  class={assignment.class}
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
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            <Search
              loading={isLoading}
              onSearchChange={this.handleSearchChange}
              results={results}
              value={value}
              open={false}
              {...this.props}
            />
            <div className={s.students}>
              {this.state.results.map((item, i) => {
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
                        src="https://pbs.twimg.com/profile_images/967289028688084997/K0xeruWq_400x400.jpg"
                      />
                    </div>
                    <div className={s.name}>{item.name}</div>
                  </Link>
                );
              })}
            </div>
          </Tab.Pane>
        ),
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

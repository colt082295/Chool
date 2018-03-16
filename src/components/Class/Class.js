import React from 'react';
import _ from 'lodash';
import { Tab, Search } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import s from './Class.css';

class ClassComponent extends React.Component {
  state = {
    isLoading: false,
    results: [],
    value: '',
    students: [
      {
        name: 'Colton Travers',
      },
      {
        name: 'Jarrod Goff',
      },
      {
        name: 'April Ludgate',
      },
    ],
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

  render() {
    const { isLoading, value, results } = this.state;
    const panes = [
      {
        menuItem: 'Summary',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Summary
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Feed',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Feed
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Grades',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Grades
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Assignments',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Assignments
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Files',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Files
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Calendar',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Calendar
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

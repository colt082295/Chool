import React from 'react';
import { Tab } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Classes.css';

class Classes extends React.Component {
  render() {
    const panes = [
      {
        menuItem: 'Summary',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Tab 1 Content
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Grades',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Tab 2 Content
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Assignments',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            Tab 3 Content
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

export default withStyles(s)(Classes);

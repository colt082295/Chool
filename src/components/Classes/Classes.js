import React from 'react';
import { Tab } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import s from './Classes.css';

class Classes extends React.Component {
  render() {
    const classes = ['English', 'Math', 'Geography'];

    const panes = [
      {
        menuItem: 'Summary',
        render: () => (
          <Tab.Pane className={s.tabBody} attached={false}>
            {classes.map((item, i) => {
              const itemLowerCase = item.toLowerCase();
              return (
                <Link
                  to={`/class/${itemLowerCase}`}
                  className={s.class}
                  key={i.toString()}
                >
                  {item}
                </Link>
              );
            })}
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

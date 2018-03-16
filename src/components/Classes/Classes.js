import React from 'react';
import { Tab } from 'semantic-ui-react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import File from '../File/File';
import s from './Classes.css';

class Classes extends React.Component {
  render() {
    const classes = ['English', 'Math', 'Geography'];
    const files = [
      {
        title: 'File 1',
        uploadedBy: 'Colton Travers',
      },
      {
        title: 'File 2',
        uploadedBy: 'Jenny Amberson',
      },
      {
        title: 'File 3',
        uploadedBy: 'Thomas Anderson',
      },
      {
        title: 'File 4',
        uploadedBy: 'Jarrod Ludwig',
      },
      {
        title: 'File 5',
        uploadedBy: 'April Ludgate',
      },
    ];

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
            Calendar
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

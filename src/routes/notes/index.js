import React from 'react';
import Notes from './Notes';
import Layout from '../../components/Layout';

async function action({ path }) {
  const data = [
    {
      id: 1,
      title: 'This is a basic title.',
      body: 'Here is the body for one of the notes.',
      items: {
        comments: [
          {
            body: 'This is a comment for the note.',
            date: new Date('March 19, 2018'),
          },
        ],
        checklists: [{}],
      },
      class: 'English',
      date: new Date('March 18, 2018'),
    },
    {
      id: 2,
      title: 'This is a basic title.',
      body: 'Here is the body for one of the notes.',
      items: {
        comments: [
          {
            body: 'This is a comment for the note.',
            date: new Date('March 19, 2018'),
          },
        ],
        checklists: [{}],
      },
      class: 'English',
      date: new Date('March 18, 2018'),
    },
    {
      id: 3,
      title: 'This is a basic title.',
      body: 'Here is the body for one of the notes.',
      items: {
        comments: [
          {
            body: 'This is a comment for the note.',
            date: new Date('March 19, 2018'),
          },
        ],
        checklists: [{}],
      },
      class: 'English',
      date: new Date('March 18, 2018'),
    },
    {
      id: 4,
      title: 'This is a basic title.',
      body: 'Here is the body for one of the notes.',
      items: {
        comments: [
          {
            body: 'This is a comment for the note.',
            date: new Date('March 19, 2018'),
          },
        ],
        checklists: [{}],
      },
      class: 'English',
      date: new Date('March 18, 2018'),
    },
    {
      id: 5,
      title: 'This is a basic title.',
      body: 'Here is the body for one of the notes.',
      items: {
        comments: [
          {
            body: 'This is a comment for the note.',
            date: new Date('March 19, 2018'),
          },
        ],
        checklists: [{}],
      },
      class: 'English',
      date: new Date('March 18, 2018'),
    },
    {
      id: 6,
      title: 'This is a basic title.',
      body: 'Here is the body for one of the notes.',
      items: {
        comments: [
          {
            body: 'This is a comment for the note.',
            date: new Date('March 19, 2018'),
          },
        ],
        checklists: [{}],
      },
      class: 'English',
      date: new Date('March 18, 2018'),
    },
  ];
  return {
    title: 'Chool',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <Notes data={data} />
      </Layout>
    ),
  };
}

export default action;

import React from 'react';
import Note from './Note';
import Layout from '../../components/Layout';

async function action({ path }) {
  const data = {
    id: 3,
    title: 'This is a basic title.',
    body: 'Here is the body for one of the notes.',
    items: {
      comments: [
        {
          body: 'This is a comment for the note.',
          date: new Date('March 19, 2018'),
        },
        {
          body: 'Yet another comment!',
          date: new Date('March 19, 2018'),
        },
      ],
      checklists: [{}],
    },
    class: 'English',
    date: new Date('March 18, 2018'),
  };
  return {
    title: 'Note Full',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <Note
          id={data.id}
          title={data.title}
          body={data.body}
          items={data.items}
          class={data.class}
          date={data.date}
        />
      </Layout>
    ),
  };
}

export default action;

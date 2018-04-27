import React from 'react';
import Note from './Note';
import Layout from '../../components/Layout';

async function action({ path, params, fetch }) {
  const resp = await fetch(`http://localhost:3005/notes/${params.id}`);
  const data = await resp.json();
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

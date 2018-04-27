import React from 'react';
import Notes from './Notes';
import Layout from '../../components/Layout';

async function action({ path, fetch }) {
  const resp = await fetch('http://localhost:3005/notes');
  const data = await resp.json();
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

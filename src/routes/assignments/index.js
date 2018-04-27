import React from 'react';
import Assignments from './Assignments';
import Layout from '../../components/Layout';

async function action({ path, fetch }) {
  const resp = await fetch('http://localhost:3005/assignments');
  const data = await resp.json();
  return {
    title: 'Chool',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <Assignments data={data} />
      </Layout>
    ),
  };
}

export default action;

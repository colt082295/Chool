import React from 'react';
import ClassPage from './Class';
import Layout from '../../components/Layout';

async function action({ path, fetch }) {
  const resp = await fetch('http://localhost:3005/class');
  const data = await resp.json();
  return {
    title: 'Chool',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <ClassPage data={data} />
      </Layout>
    ),
  };
}

export default action;

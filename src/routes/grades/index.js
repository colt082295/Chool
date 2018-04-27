import React from 'react';
import Grades from './Grades';
import Layout from '../../components/Layout';

async function action({ path, fetch }) {
  const resp = await fetch('http://localhost:3005/grades');
  const data = await resp.json();
  return {
    title: 'Chool',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <Grades data={data} />
      </Layout>
    ),
  };
}

export default action;

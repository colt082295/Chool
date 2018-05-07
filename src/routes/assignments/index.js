import React from 'react';
import Assignments from './Assignments';
import Layout from '../../components/Layout';

async function action({ path }) {
  // const resp = await fetch('http://localhost:3005/assignments');
  // const data = await resp.json();
  return {
    title: 'Chool',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <Assignments />
      </Layout>
    ),
  };
}

export default action;

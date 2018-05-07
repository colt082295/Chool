import React from 'react';
import Grades from './Grades';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Chool',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <Grades />
      </Layout>
    ),
  };
}

export default action;

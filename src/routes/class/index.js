import React from 'react';
import ClassPage from './Class';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Chool',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <ClassPage />
      </Layout>
    ),
  };
}

export default action;

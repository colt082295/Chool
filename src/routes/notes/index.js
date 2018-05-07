import React from 'react';
import Notes from './Notes';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Chool',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <Notes />
      </Layout>
    ),
  };
}

export default action;

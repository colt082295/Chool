import React from 'react';
import Classes from './Classes';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Chool',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <Classes />
      </Layout>
    ),
  };
}

export default action;

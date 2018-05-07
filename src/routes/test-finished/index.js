import React from 'react';
import TestFinished from './TestFinished';
import Layout from '../../components/Layout';

async function action({ path, params }) {
  return {
    title: 'Test Finished',
    path,
    params,
    component: (
      <Layout path={path.replace('/', '')}>
        <TestFinished route={params} />
      </Layout>
    ),
  };
}

export default action;

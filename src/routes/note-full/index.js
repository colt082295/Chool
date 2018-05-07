import React from 'react';
import NoteFull from './Note';
import Layout from '../../components/Layout';

async function action({ path, params }) {
  return {
    title: 'Note Full',
    path,
    params,
    component: (
      <Layout path={path.replace('/', '')}>
        <NoteFull params={params} />
      </Layout>
    ),
  };
}

export default action;

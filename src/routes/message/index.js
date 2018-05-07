import React from 'react';
import Messages from './Message';
import Layout from '../../components/Layout';

async function action({ path, params }) {
  return {
    title: 'Messages',
    path,
    params,
    component: (
      <Layout path={path.replace('/', '')}>
        <Messages params={params} />
      </Layout>
    ),
  };
}

export default action;

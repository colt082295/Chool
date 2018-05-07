import React from 'react';
import Messages from './Messages';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Messages',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <Messages />
      </Layout>
    ),
  };
}

export default action;

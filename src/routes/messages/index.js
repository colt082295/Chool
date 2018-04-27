import React from 'react';
import Messages from './Messages';
import Layout from '../../components/Layout';

async function action({ path, fetch }) {
  const resp = await fetch('http://localhost:3005/messages');
  const data = await resp.json();
  return {
    title: 'Messages',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <Messages data={data} />
      </Layout>
    ),
  };
}

export default action;

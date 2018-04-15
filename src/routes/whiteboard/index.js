import React from 'react';
import Whiteboard from './Whiteboard';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Chool',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <Whiteboard />
      </Layout>
    ),
  };
}

export default action;

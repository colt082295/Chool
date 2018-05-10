import React from 'react';
import AddNote from './AddNote';
import Layout from '../../components/Layout';

async function action({ path }) {
  return {
    title: 'Note Full',
    path,
    component: (
      <Layout path={path.replace('/', '')}>
        <AddNote />
      </Layout>
    ),
  };
}

export default action;

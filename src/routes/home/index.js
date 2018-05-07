import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Dashboard',
    path: 'home',
    component: (
      <Layout path="home">
        <Home />
      </Layout>
    ),
  };
}

export default action;

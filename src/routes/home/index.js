import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('http://localhost:3005/dashboard');
  const data = await resp.json();
  return {
    title: 'Dashboard',
    path: 'home',
    data,
    component: (
      <Layout path="home">
        <Home data={data} />
      </Layout>
    ),
  };
}

export default action;

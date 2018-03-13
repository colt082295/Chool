import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  // const resp = await fetch('/graphql', {
  //   body: JSON.stringify({
  //     query: '{news{title,link,content}}',
  //   }),
  // });
  // const { data } = await resp.json();
  // if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title: 'Chool',
    path: 'home',
    component: (
      <Layout path="home">
        <Home />
      </Layout>
    ),
  };
}

export default action;

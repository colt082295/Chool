import React from 'react';
import Messages from './Message';
import Layout from '../../components/Layout';

async function action({ path }) {
  const data = {
    id: 1,
    name: 'Group Chat - English',
    users: ['colt', 'john', 'jenny'],
    messages: [
      {
        body: 'This is some basic text.',
        user: 'colt',
        time: new Date('March 17, 2018'),
      },
      {
        body: 'This is another message.',
        user: 'john',
        time: new Date('March 18, 2018'),
      },
      {
        body: 'This is another message.',
        user: 'jenny',
        time: new Date('March 19, 2018'),
      },
    ],
  };

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

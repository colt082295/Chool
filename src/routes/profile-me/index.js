import React from 'react';
import ProfileMe from './ProfileMe';
import Layout from '../../components/Layout';

async function action({ path }) {
  const data = {
    name: 'Colton Travers',
    bio: 'This is a short bio',
    classes: [
      {
        id: 32,
        name: 'English',
      },
      {
        id: 21,
        name: 'Math',
      },
    ],
    avatar: null,
  };

  return {
    title: 'My Profile',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <ProfileMe data={data} />
      </Layout>
    ),
  };
}

export default action;

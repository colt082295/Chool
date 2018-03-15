import React from 'react';
import Assignments from './Assignments';
import Layout from '../../components/Layout';

async function action({ path }) {
  const data = [
    {
      title: 'Spelling Homework: A - H',
      grade: 95,
      dueDate: new Date('March 18, 2018'),
      class: 'English',
    },
    {
      title: 'Math Quiz',
      grade: 80,
      dueDate: new Date('March 10, 2018'),
      class: 'Math',
    },
    {
      title: 'Math Homework: Multiplication Tables',
      grade: 60,
      dueDate: new Date('March 8, 2018'),
      class: 'Math',
    },
    {
      title: 'Math Homework: Division',
      grade: 45,
      dueDate: new Date('March 8, 2018'),
      class: 'Math',
    },
    {
      title: 'Geography Homework: Map of States',
      grade: 85,
      dueDate: new Date('March 7, 2018'),
      class: 'Geography',
    },
  ];
  return {
    title: 'Chool',
    path,
    data,
    component: (
      <Layout path={path.replace('/', '')}>
        <Assignments data={data} />
      </Layout>
    ),
  };
}

export default action;

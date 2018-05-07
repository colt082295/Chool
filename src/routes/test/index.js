import React from 'react';
import TestPage from './Test';
import Layout from '../../components/Layout';

const testInfo = {
  timeLimit: 60,
  class: 'English',
};

const questions = [
  {
    question: 'What is the capital of Alabama?',
    type: 'multipleChoice',
    multipleAnswers: false,
    answer: 'Montgomery',
    choices: ['Mongotmery', 'Jackson', 'Another'],
    userAnswers: null,
  },
  {
    question: 'What is the capital of Mississippi?',
    type: 'multipleChoice',
    multipleAnswers: false,
    answer: 'Jackson',
    choices: ['Another', 'Mongotmery', 'Jackson'],
    userAnswers: null,
  },
  {
    question: 'What is the capital of California?',
    type: 'input',
    answer: 'Sacramento',
    choices: ['Los Angeles', 'Mongotmery', 'Jackson'],
    userAnswers: null,
  },
];

async function action({ path }) {
  return {
    title: 'Test',
    path,
    questions,
    testInfo,
    component: (
      <Layout path={path.replace('/', '')}>
        <TestPage questions={questions} testInfo={testInfo} />
      </Layout>
    ),
  };
}

export default action;

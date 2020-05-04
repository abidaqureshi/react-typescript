import * as React from 'react';
import { MyQuestion, MyAnswer } from './Container';

export const QuestionBox = () => (
  <MyQuestion width="349px">
    What's your good habits?
  </MyQuestion>
);

export const AnswerBox = () => (
  <MyAnswer width="349px">
    I can sleep well :)
  </MyAnswer>
);

export default {
  title: 'QA',
  component: MyQuestion,
};

import React from 'react';
import { Title } from './components';
import { Todo } from './containers';

export const App: React.FC = () => {
  return (
    <>
      <Title />
      <Todo />
    </>
  );
};

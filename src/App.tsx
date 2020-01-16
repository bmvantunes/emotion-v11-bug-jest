import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponentParent } from './ComponentParent';
import { ComponentChild } from './ComponentChild';

const App: React.FC = () => {
  return (
    <>
      <ComponentParent />
      <ComponentChild />
      <p>Test</p>
    </>
  );
}

export default App;

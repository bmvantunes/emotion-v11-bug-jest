import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./ComponentParent');

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const test = getByText(/Test/i);
  expect(test).toBeInTheDocument();
});

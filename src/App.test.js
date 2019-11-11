import React from 'react';
// import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';

it.skip('renders without crashing', () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
});

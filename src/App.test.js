import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait,
} from '@testing-library/dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, div);
  ReactDOM.unmountComponentAtNode(div);
});


// it('renders items', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, div);
//   const container = document.getElementById("root");
//   const whiteRice = getByLabelText(container, "White Rice");

//   ReactDOM.unmountComponentAtNode(div);

// }
// )
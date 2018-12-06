import React from 'react';
import ReactDOM from 'react-dom';
import Root from './public/root';
import configureStore from './public/store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}></Root>, root);
});

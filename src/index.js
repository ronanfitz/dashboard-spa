import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
// import store from './store';

import configureStore from './store';

const store = configureStore();

/* eslint-disable react/jsx-filename-extension */

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

if (module.hot) {
  console.log('HOT dashboard');

  module.hot.accept();
}

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import {requestTodos} from './actions/todo_actions';

import {Root} from './components/root';

import {allTodos} from './reducers/selector';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('content');
  const store = configureStore();

  window.store = store;

  // window.store.state = allTodos(store.getState());

  window.requestTodos = requestTodos;

  ReactDOM.render(<Root store={store}/>, rootEl);
});

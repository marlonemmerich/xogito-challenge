import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import reducersAll from '../store/storeConfig';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

describe('header', () => {
  test('must need correct elements', () => {
    const store = createStore(reducersAll, {}, applyMiddleware(ReduxThunk));

    const container = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
    const header = screen.getAllByTestId('header');
    const linkHome = screen.getAllByTestId('link-home-home');
    const linkProject = screen.getAllByTestId('link-home-project');
    const linkUser = screen.getAllByTestId('link-home-user');
  });
})

describe('home', () => {
  test('must need correct elements', () => {
    const store = createStore(reducersAll, {}, applyMiddleware(ReduxThunk));

    const container = render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
    const buttonCreateUser = screen.getAllByTestId('button-create-user');
    const buttonCreateProject = screen.getAllByTestId('button-create-project');
    const containerTable = screen.getAllByTestId('container-table');
  });
})
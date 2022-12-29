import { render, screen } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../../../pages/login';

// Requires to mock the dispatch
const mockedUdesDispatch = jest.fn();
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockedUdesDispatch,
  };
});

// Requires to mock the store
const mockStore = configureMockStore();
const initialState = {};
const store = mockStore(initialState);

test('should contains Codewave logo', () => {
  render(
    <MemoryRouter initialEntries={['/login']} initialIndex={0}>
      <Provider store={store}>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Provider>
    </MemoryRouter>
  );
  //   screen.debug();
  const image = screen.getByAltText('codewave logo');
  screen.debug(image);
  expect(image).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../pages/login';

const mockedUdesDispatch = jest.fn();
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockedUdesDispatch,
  };
});
const mockStore = configureMockStore();
const initialState = {};
const store = mockStore(initialState);

test('should contains the heading 1', () => {
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
  const heading = screen.getByText('Authenticate Yourself');
  screen.debug(heading);
  expect(heading).toBeInTheDocument();
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../components/rockets/Rocket';
import { rocketActions } from '../redux/rockets/rocketSlice';

const mockStore = configureMockStore([thunk]);

describe('Rockets interactions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Some Rocket',
            image: 'img1',
            reserved: false,
            description: 'Lorem ipsum 1',
          },
          {
            id: 2,
            name: 'Some Other Rocket',
            image: 'img2',
            reserved: true,
            description: 'Lorem ipsum 2',
          },
        ],
        isLoading: false,
      },
    });
  });

  it('shows loading while fetching data', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const loadingTxt = screen.getByText('Loading...');
    expect(loadingTxt).toBeInTheDocument();
  });

  it('should render fetched rockets correctly', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocket2 = screen.getByText('Some Other Rocket');
    expect(rocket2).toBeInTheDocument();
  });

  it('calls reserveRocket when the reserve button is clicked for an unreserved rocket', async () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const reserveRocketBtn = screen.getByText('Reserve Rocket');
    reserveRocketBtn.click();

    await waitFor(() => expect(store.dispatch).toHaveBeenCalledWith(
      rocketActions.toggleRocketReservation('1'),
    ));
  });
});

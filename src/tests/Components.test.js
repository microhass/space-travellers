import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../components/rockets/Rocket';
import Missions from '../components/missions/Missions';
import Profile from '../components/profile/Profile';

describe('Components rendering', () => {
  it('should render fetched missions', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render fetched rockets', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the profile component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

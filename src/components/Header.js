import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Header from '../styles/styledHeader';
import spaceLogo from '../images/planet.png';

const links = [
  {
    name: 'rockets',
    href: '/',
  },
  {
    name: 'missions',
    href: '/missions',
  },
  {
    name: 'my profile',
    href: '/profile',
  },
];

const Layout = () => (
  <>
    <Header>
      <div>
        <Link to="/">
          <img src={spaceLogo} alt="Logo" />
          <h1>Space Travellers Hub</h1>
        </Link>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
    <Outlet />
  </>
);

export default Layout;

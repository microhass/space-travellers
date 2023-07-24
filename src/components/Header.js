import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import StyledHeader from '../styles/styledHeader';
import planetImage from '../images/planet.png';

const links = [
  {
    name: 'rockets',
    href: '/rockets',
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

const Header = () => (
  <>
    <StyledHeader>
      <nav>
        <div>
          <Link to="/">
            <img src={planetImage} alt="Logo" />
            <h1>Space Travellers hub</h1>
          </Link>
        </div>
        <ul className="links">
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
    </StyledHeader>
    <Outlet />
  </>
);
export default Header;

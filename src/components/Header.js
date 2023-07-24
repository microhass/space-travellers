import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import Header from './styles/styledHeader';
// import { NavLink } from 'react-router-dom';
// import userImage from '../images/user.png';
const links = [
  {
    name: 'dragons',
    href: '/dragons',
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
    <header>
      <div>
        {/* <Link to={'/'}>
          <img src={userImage} alt='Logo' />
          <h1>Space Travellers hub</h1>
        </Link> */}
      </div>
      <nav>
        <h1>Header content</h1>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              {/* <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                {link.name}
              </NavLink> */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
    {/* <Outlet /> */}
  </>
);
export default Header;

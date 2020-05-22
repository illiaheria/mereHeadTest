import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Merehead issue
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/get-users">Get users</NavLink>
          </li>
          <li>
            <NavLink to="/create-user">Create user</NavLink>
          </li>
          <li>
            <NavLink to="/update-user">Update user</NavLink>
          </li>
          <li>
            <NavLink to="/delete-user">Delete user</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

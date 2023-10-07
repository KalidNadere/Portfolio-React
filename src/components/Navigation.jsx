// Importing React from react library
import React from 'react';
// Importing Link from react-router-dom, to be used in React application
import { Link } from 'react-router-dom';

// Navigation function defined
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          {/* The links use "to" prop to define routes for navigating */}
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
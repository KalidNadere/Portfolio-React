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
          {/* The links use "To" prop to define routes for navigating */}
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
// React imported to create React components
import React from 'react';
// ReactDom imported for rendering React components into DOM
import ReactDOM from 'react-dom';
// App imported to represent the root component of the application
import App from './App';
// CSS imported to apply styles for the entire application
import './index.css';

// ReactDom function with two arguments
ReactDOM.render(
  // React.StrictMode component to help detect potential problemsin the app during development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Reference to DOM element to render the root component
  document.getElementById('root')
);
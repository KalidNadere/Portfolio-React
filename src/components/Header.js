// Importing react library
import React from 'react';
// Importing navigation from local file
import Navigation from './Navigation';

// Header function defined
function Header() {
  return (
    <div>
    <section>
    <header>
      <h1>Kalid Nadere's Portfolio</h1>
      <Navigation />
    </header>
    </section>
    <section>
      <div>
        <h2>Welcome</h2>
        <p>
          Welcome to my portfolio page built with React. Here,
          you can find a small sample of the projects I have worked on over
          the course of the program.
        </p>
      </div>
    </section>
  </div>
  );
}

export default Header;
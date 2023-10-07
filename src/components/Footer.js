import React from 'react';

function Footer() {
  return (
    <footer>
      <h2>Made by Kalid Nadere©</h2>
      <div className='footer-links'>
        <a href='https://github.com/KalidNadere' target='_blank' rel='noopener noreferrer'>
        <img src='github-icon.png' alt='Github' /> Github
        </a>
        <a href='https://www.linkedin.com/in/kalidnadere' target='_blank' ref={'noopener noreferrer'}>
        <img src='linkedin-icon.png' alt='LinkedIn' />Linkedin
        </a>
      </div>
    </footer>
  );
}

export default Footer;
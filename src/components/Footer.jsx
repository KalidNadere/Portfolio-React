import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <h2>Made by Kalid Nadere©</h2>
      <div className='footer-links'>
        <a href='https://github.com/KalidNadere' target='_blank' rel='noopener noreferrer'>
        <FaGithub /> Github
        </a>
        <a href='https://www.linkedin.com/in/kalidnadere' target='_blank' rer={'noopener noreferrer'}>
        <FaLinkedin />Linkedin
        </a>
      </div>
    </footer>
  );
}

export default Footer;
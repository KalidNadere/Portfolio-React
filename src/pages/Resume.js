import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume{' '}
        <a href='/path-to-resume.pdf' download>
          here
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}

export default Resume;
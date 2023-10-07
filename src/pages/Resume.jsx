import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <section className='resume'>
      <h2>My Resume</h2>
      <p>
        <a href='/path-to-resume.pdf' download>
        <FontAwesomeIcon icon={faDownload} className='download-icon' />
        </a>

      </p>
      <br /> <br /> <br />
      <h3>Please feel free to check out my list of Developer Proficiencies!</h3>
      <section id="home-page-body" className="resume-body">

        <div className="article column1">
          <h1 className="column-title">Front-End</h1>
          <h4 className="column-text">
            <ul>
              <li className="logo">
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </h4>
        </div>

        <div className="article column2">

          <h1 className="column-title">Back-End</h1>
          <h4 className="column-text">
            <ul>
              <li className="logo">
              </li>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </h4>
        </div>
        <div className="article column3">
          <h1 className="column-title">Performance</h1>
          <h4 className="column-text">
            <ul>
              <li className="logo">
              </li>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </h4>
        </div>
      </section>
    </section>
  );
}

export default Resume;
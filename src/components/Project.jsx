import React from 'react';

function Project({ project }) {
  return (
    <div className='project'>
      <h3>{project.title}</h3>
      {/* only the image clickable by wrapping it in an anchor tag */}
      <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
        <img src={project.image} alt={project.title} />
      </a>
      <p>{project.description}</p>
      <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
      </a>
    </div>
  );
}

export default Project;
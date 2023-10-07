import React from 'react';

// Render individual project items within Project section
function Project({ project }) {
  return (
    // JSX structure to represent the layout & content of individual project item
    <div className='project'>
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
        Demo
      </a>
      <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
        Github 
      </a>
    </div>
  );
}

export default Project;
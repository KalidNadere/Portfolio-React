import React from "react";
import Project from "../components/Project";

// Portfolio function defined
function Portfolio() {
  // My projects data
  const projects = [
    // Array of project objects, each containing properties
    {
      title: "MovieBuff",
      image: "project1.jpg",
      description: "Movie Buff is a search engine for movies....",
      demoLink: "https://bemonn.github.io/Movie-buff/",
      githubLink: "https://github.com/KalidNadere/Movie-buff",
    },
    // More projects to be added..
  ];

  // JSX structure, including 'h2' & 'div' elements
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {/* using 'map' function to iterate over projects array and render a project component for each project in the list */}
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";
import Project from "../components/Project";

// Portfolio function defined
function Portfolio() {
  // My projects data
  const projects = [
    // Array of project objects, each containing properties
    {
      title: "MovieBuff",
      image: require("../assets/portfolio/movie-buff.png"),
      description: "Movie Buff is a movie search app that allows users to search for movies by title and provides detailed information such as movie posters, plot summaries, cast details, and trailers for users to watch. Please click on the App image to visit site",
      demoLink: "https://bemonn.github.io/Movie-buff/",
    }, 
    {
      title: "Fuel-Wise",
      image: require("../assets/portfolio/Fuel-Wise.png"),
      description: "Discover the cheapest fuel prices near you and make informed refueling decisions with our user-friendly app. Fuel Wise provides real-time fuel price information, helping you save time and money on every fill-up. Please click on the App image to visit site",
      demoLink: "https://fuelwise-a0dd0510bf2b.herokuapp.com/",
    },
    {
      title: "Weather-Forecast-Dashboard",
      image: require("../assets/portfolio/Weather-Forecast.png"),
      description: "This is an app for displaying current as well as a 5-Day weather forecast. It uses a Third-party API, openweathermap.org, to fetch the most current weather for the desired city that you search. When a user searches for a city name, the app will then display data for temperature, humidity as well as wind speed in metric system. Please click on the App image to visit site",
      demoLink: "https://kalidnadere.github.io/Weather-Forecast-Dashboard/",
    },
    {
      title: "Logo Generator-SVG",
      image: require("../assets/portfolio/Logo-Generator.png"),
      description: "The logo generator is a command-line application built in Node.js that allows users to generate simple logos for their projects. The application prompts the user to enter up to three characters for the logo's text, choose a text color, select a shape from options (triangle, circle, or square), and pick a shape color. Based on the user's input, the logo generator creates an SVG file that represents the logo and saves it as 'logo.svg' in the application's directory. Please click on the App image to visit demo link",
      demoLink: "https://www.youtube.com/watch?v=8TYpq6sRd6E&ab_channel=KalidNadere",
    },
    {
      title: "Employee-Tracker",
      image: require("../assets/portfolio/Employee-Tracker.png"),
      description: "The Employee Tracker app is a robust command-line tool designed to simplify the management of employee-related information within an organization. Developed using Node.js and MySQL, this application offers a user-friendly interface that empowers users to efficiently handle various tasks related to employee management, such as viewing all departments, roles, and employees, adding new departments, roles, and employees, updating an employee's role, updating an employee's manager, deleting departments, roles, and employees. Please click on the App image to visit demo link",
      demoLink: "https://www.youtube.com/watch?v=tp0zTwFZQ8I&ab_channel=KalidNadere",
    },
    {
      title: "Your-Complaint",
      image: require("../assets/portfolio/your-complaint.png"),
      description: "The Complaint app is a user-centric platform designed for individuals to voice their concerns, frustrations, or feedback about various aspects of their lives. Users can categorise their complaints, share images, and engage with others through comments. This app fosters open communication and allows users to connect over shared experiences and concerns while providing an avenue to address issues. Please click on the App image to visit site",
      demoLink: "https://your-complaint-b9ee4991068a.herokuapp.com/",
    },  ];

  // JSX structure, including 'h2' & 'div' elements
  return (
    <section>
      <h2></h2>
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

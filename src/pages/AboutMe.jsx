import React from 'react';
import myAvatar from '../assets/aboutme/my-avatar.png';

// AboutMe function defined
function AboutMe() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Vertically align items
  };

  const bioStyle = {
    marginLeft: '20px', // Add spacing between the image and text
  };

  return (
    // Using JSX structure to represent the content of the section
    <section>
    <div style={containerStyle}>
      <img src={myAvatar} alt="Kalid Nadere" />
      <div style={bioStyle}>
          <h2>About Me</h2>
          <p>👋 Hi there, I'm Kalid Nadere, a 37-year-old coder based in the vibrant city of Sydney, Australia. <br /> <br />
          While my academic background led me to a Bachelor of Commerce with a focus on Accounting, my journey has taken an exciting turn into the world of coding.
          🚀 Currently, I'm on an exhilarating path, undertaking a rigorous 6-month Full Stack Coding Boot Camp at the University of Sydney. This immersive experience has already equipped me with a diverse set of skills, including proficiency in HTML, CSS, JavaScript, Node.js, React, Express, MVC, SQL, OOP, ORM, and PWA development.<br /><br />
          🌱 What drives me personally is a passion for growth and knowledge expansion. Beyond the screen, I thrive on outdoor adventures, exploring new destinations, savoring culinary delights, and planning spontaneous getaways. My outlook on life is firmly rooted in a growth mindset, always seeking opportunities to broaden my horizons.<br /><br />
          📚 With a strong foundation in business management and a newfound love for coding, I'm excited to combine my skills and experiences to create innovative solutions and contribute to the ever-evolving world of technology.<br /><br />
          Let's connect, collaborate, and embark on this coding journey together!
          </p>
        </div>
      </div>
    </section>
  );

}

export default AboutMe;
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
          <p>My bio here...
          </p>
        </div>
      </div>
    </section>
  );

}

export default AboutMe;
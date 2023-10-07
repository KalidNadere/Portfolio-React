import React, { useState } from 'react';

// Initialising form's state using 'useState' hook
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // handleChange function event handler for input element (name, email, message)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handleSubmit function to prevent default form submission, using e.preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  // Return statement to render JSX structure for Contact component
  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          />
          </div>
          <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
          </div>
          <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
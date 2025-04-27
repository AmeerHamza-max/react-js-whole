import React from 'react';
import { Form } from 'react-router';
import './Contact.css';

export const contactData = async (request) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data); // Log the form data
    return null;
  } catch (error) {
    console.log(error);
  }
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <Form method="POST" action="/contact" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </Form>
    </div>
  );
};

export default Contact;

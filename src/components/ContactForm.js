import React, { useState } from 'react';
import { FaEnvelope,FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/ContactForm.css'; // Ensure the CSS file is correctly linked

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:rajaspatil14@gmail.com?subject=${formData.subject}&body=${formData.message} - From: ${formData.name}, Email: ${formData.email}`;
        window.location.href = mailtoLink; // Directs to default email app with form data
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Me</h2>
            <p>If you prefer, directly email me at <a href="mailto:rajaspatil14@gmail.com">rajaspatil14@gmail.com</a> or fill out the form below.</p>
            <div className="social-icons">
                <a href="https://linkedin.com/in/rajaspatil98" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/RBP98" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="mailto:rajaspatil14@gmail.com"><FaEnvelope /></a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    rows="4"
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;

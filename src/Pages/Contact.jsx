import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';
import HeroPages from '../components/HeroPages';

export const ContactUs = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w62nzho', 'template_1x82yuz', form.current, 'J2joeCP1S9xvjfV0x')
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
        alert("Your Messege has been dilivered.");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Full Name <b>*</b>
        </label>
        <input
        type="text"
        name="user_name"
        placeholder="Enter Full Name"
        required 
        />

        <label>
          Email <b>*</b>
        </label>
        <input
        type="email"
        name="user_email"
        placeholder="youremail@example.com"
        required
        />
        
        <label>
          Tell us about it <b>*</b>
        </label>
        <textarea
        name="message"
        placeholder="Type your message here"
        required />
    
        <button type="submit">
          <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
        </button>
      </form>
    </div>
  );
};

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; +91 99999 99999
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; rentrally@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Jammu, India
              </a>
            </div>
            <div className="contact-div__form">
              <ContactUs /> {/* Include the ContactUs component here */}
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;

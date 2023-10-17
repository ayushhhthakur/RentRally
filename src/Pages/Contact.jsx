import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';
import HeroPages from '../components/HeroPages';

export const ContactUs = () => {
  
const formRef = useRef();
const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { target } = e;
  const { name, value } = target;

  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  // 
// 
// 
  emailjs
  .send(
    'service_w62nzho',
    'template_1x82yuz',
      // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ayush Thakur",
        from_email: form.email,
        to_email: "ayushthakur1412@gmail.com",
        message: form.message,
      },
      'J2joeCP1S9xvjfV0x',
      // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};

return (
  <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
           Full Name <b>*</b>
           </label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name?"
            required
          />
        <label>
          Your email <b>*</b>
          </label>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address?"
            required
          />

        <label>
         Your Message <b>*</b>
         </label>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What you want to say?'
            required
          />

        <button type="submit">
          <i className="fa-solid fa-envelope-open-text"></i>&nbsp;
          {loading ? "Sending..." : "Send"}
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

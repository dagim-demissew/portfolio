import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "../FormInput/FormInput";
import paperPlaneImage from "../../assets/rb_3009.png";
import FormTextArea from "../FormInput/FormTextArea";
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_email: email,
      message: message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("Failed to send email");
    }
  };

  return (
    <div className="contact section">
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contact-form-container">
          <div className="contact-svg">
            <img
              className="contact-image"
              src={paperPlaneImage}
              alt="Paper Plane"
            />
          </div>
          <div className="contact-form">
            <span className="contact-form-title">Send me a mail!</span>
            <FormInput
              name="email"
              label="Email"
              type="email"
              handleChange={handleChange}
              value={email}
            />
            <FormTextArea
              name="message"
              label="Your Message"
              type="message"
              handleChange={handleChange}
              value={message}
            />
            <button className="send-mail" onClick={handleSubmit}>
              Send
              <box-icon name="mail-send" color="rgb(220, 220, 220)"></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

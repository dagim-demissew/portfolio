import React from "react";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";

import paperPlaneImage from "../../assets/rb_3009.png";
import FormTextArea from "../FormInput/FormTextArea";
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
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
            <img className="contact-image" src={paperPlaneImage} alt="" />
          </div>
          <div className="contact-form">
            <span className="contact-form-title">send me a mail!</span>
            <FormInput
              name="email"
              label="email"
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
            <button className="send-mail">
              Send
              <box-icon name="mail-send" color=" rgb(220, 220, 220)"></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="neonBorderContact">
      <h1>contact me</h1>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <div className="field" tabIndex={1}>
            <label for="username">your name</label>
            <input
              name="name"
              type="text"
              placeholder="john doe"
              required
            ></input>
          </div>
          <div className="field" tabIndex={2}>
            <label for="username">your email</label>
            <input
              name="email"
              type="text"
              placeholder="email@domain.com"
              required
            ></input>
          </div>
          <div className="message" tabIndex={3}>
            <label for="message">your message</label>
            <textarea
              name="message"
              type="text"
              placeholder="type here"
              required
              rows={8}
            ></textarea>
          </div>
          <button type="submit" value={sendEmail}>
            send me a message
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rzlyl75",
        "template_cm4cv9g",
        form.current,
        "LafxfeK-4lofldlZe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const clearForm = () => {
    const inputs = form.current.getElementsByTagName("input");
    const textareas = form.current.getElementsByTagName("textarea");

    for (let input of inputs) {
      input.value = "";
    }
    for (let textarea of textareas) {
      textarea.value = "";
    }
  };
  return (
    <div className="neonBorderContact">
      <h1>contact me</h1>
      <div className="formContainer">
        {isEmailSent ? (
          <p>email sent! talk soon!</p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="field" tabIndex={1}>
              <label>your name</label>
              <input
                name="name"
                type="text"
                placeholder="john doe"
                required
              ></input>
            </div>
            <div className="field" tabIndex={2}>
              <label>your email</label>
              <input
                name="email"
                type="text"
                placeholder="email@domain.com"
                required
              ></input>
            </div>
            <div className="message" tabIndex={3}>
              <label>your message</label>
              <textarea
                name="message"
                type="text"
                placeholder="type here"
                required
                rows={8}
              ></textarea>
            </div>
            <button type="submit">send me a message</button>
          </form>
        )}
      </div>
    </div>
  );
}

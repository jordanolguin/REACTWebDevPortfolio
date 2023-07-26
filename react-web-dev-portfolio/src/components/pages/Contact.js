import React from "react";

export default function Contact() {
  return (
    <div className="neonBorderContact">
      <h1>contact me</h1>
      <div className="formContainer">
        <form>
          <div className="field" tabIndex={1}>
            <label for="username">
              <i></i>your name
            </label>
            <input
              name="username"
              type="text"
              placeholder="john doe"
              required
            ></input>
          </div>
          <div className="field" tabIndex={2}>
            <label for="username">
              <i></i>your email
            </label>
            <input
              name="email"
              type="text"
              placeholder="email@domain.com"
              required
            ></input>
          </div>
          <div className="field" tabIndex={3}>
            <label for="message">
              <i></i>your message
            </label>
            <input
              name="message"
              type="text"
              placeholder="type here"
              required
            ></input>
          </div>
          <button type="reset">send me a message</button>
        </form>
      </div>
    </div>
  );
}

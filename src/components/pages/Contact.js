import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      return;
    }

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
    if (form.current) {
      const inputs = form.current.getElementsByTagName("input");
      const textareas = form.current.getElementsByTagName("textarea");

      for (let input of inputs) {
        input.value = "";
      }
      for (let textarea of textareas) {
        textarea.value = "";
      }
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailValue));
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
                value={email}
                onChange={handleEmailChange}
                className={!isEmailValid ? "invalid-email" : ""}
              ></input>
              {!isEmailValid && (
                <p className="error-message">please enter a valid email</p>
              )}
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

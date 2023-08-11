import React from "react";

export default function About() {
  const resumePDF = require("../../assets/Jordan_Olguin_Resume.pdf");

  const handleDownload = () => {
    fetch(resumePDF)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "jordan-olguin-resume.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="neonBorderAbout">
      <h1>about me</h1>
      <p>
        Hi! I am a yogi, musician, actor and full-stack dev with exceptional
        leadership and communication skills. I enjoy building full-stack apps
        and constantly tackling new challenges! With high energy and good vibes,
        I am passionate about delivering top-notch results.
      </p>
      <h1>skills</h1>
      <p>
        HTML | CSS | JavaScript | JSON | Node.js | MySQL | Sequelize | Bootstrap
        | Handlebars | Inquirer | Bcrypt | Git | Nodemon | React.js | NoSQL |
        GraphQL | MERN | NoSQL | PWAs | Agile Methodologies
      </p>
      <h1>
        resume: <span style={{ fontSize: "60%" }}>click to download </span>{" "}
      </h1>
      <div className="resumeCard" onClick={handleDownload}></div>
    </div>
  );
}

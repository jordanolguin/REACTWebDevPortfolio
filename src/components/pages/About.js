import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const skillsList = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "GraphQL",
  "Front-end Frameworks (e.g., Bootstrap)",
  "Database Design (MySQL, NoSQL)",
  "ORM (Sequelize)",
  "Version Control (Git)",
  "Server Monitoring (Nodemon)",
  "Authentication (Bcrypt)",
  "Agile Methodologies",
  "PWAs",
  "UI/UX Design Principles",
];

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
        Hi! 👋 Full Stack Dev by day, Yogi 🧘‍♂️, Musician 🎵, Singer 🎤, and Actor
        🎭 by night. 🌟 I thrive on new experiences and challenges. From
        managing retail, to serving up delicious dishes, to stealing the
        spotlight on stage and screen, rocking live gigs, and finding zen on the
        yoga mat, I've dabbled in it all. 🌆🎬🎸 My secret sauce? Stellar
        collaboration and leadership skills that make me a team player
        extraordinaire. Let's connect and make some magic happen!
      </p>
      <h1>skills</h1>
      <ul className="skillsList">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h1>follow me</h1>
      <div className="socials">
        <a
          href="https://github.com/jordanolguin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={45} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/jordan-olguin-5897b7280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={45} />
        </a>{" "}
        <a
          href="https://open.spotify.com/artist/6ww1npEkRMmdjUGua5HWsX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify size={45} />
        </a>{" "}
        <a
          href="https://music.apple.com/us/artist/jordan-olguin/1575006049"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiApplemusic size={45} />
        </a>{" "}
      </div>
      <h1>
        resume: <span style={{ fontSize: "60%" }}>click to download </span>{" "}
      </h1>
      <div className="resumeCard" onClick={handleDownload}></div>
    </div>
  );
}

const projectData = [
  {
    title: "Chat 98",
    link: "https://chat98-a21833346cf4.herokuapp.com/",
    className: "chat98",
  },
  {
    title: "Workout Wizard",
    link: "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
    className: "workoutWizard",
  },
  {
    title: "Road Trip Buddy",
    link: "https://dsstad.github.io/travel-weather/",
    className: "roadTripBuddy",
  },
  {
    title: "Employee Tracker CLI APP",
    link: "https://github.com/jordanolguin/EmployeeTracker",
    className: "employeeTracker",
  },
  {
    title: "README.md Generator CLI APP",
    link: "https://github.com/jordanolguin/REAMDMEGenerator",
    className: "readmeGenerator",
  },
];

const Project = ({ title, link, className }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div className={`card ${className}`} onClick={handleClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default function Work() {
  return (
    <div className="neonBorderWork">
      <h1>work</h1>
      <div className="card-container">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

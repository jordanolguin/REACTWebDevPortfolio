import React from "react";

const projectData = [
  {
    title: "Budget Babe - Full Stack React Native App",
    link: "https://github.com/jordanolguin/BudgetBabe",
    className: "budgetBabe",
  },
  {
    title: "Kyle Jennings Music Official Website",
    link: "https://kylejenningsmusic.com",
    className: "kyleJennings",
  },
  {
    title: "Chat 98 - Full Stack IM App",
    link: "https://chat98-a21833346cf4.herokuapp.com/",
    className: "chat98",
  },
  {
    title: "Workout Wizard - Full Stack Workout Tracker App",
    link: "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
    className: "workoutWizard",
  },
  {
    title: "Road Trip Buddy - Front End Navigation App",
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
      <h3 className="projectTitle">{title}</h3>
    </div>
  );
};

export default function Work() {
  const chat98Index = projectData.findIndex(
    (project) => project.className === "chat98"
  );

  return (
    <div className="neonBorderWork">
      <h1>post-grad professional</h1>
      <div className="card-container">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            {index === chat98Index && (
              <>
                <h1 className="pre-grad">pre-grad projects</h1>
              </>
            )}
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function Work() {
  const handleWorkoutWizardLinkClick = () => {
    window.open(
      "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/",
      "_blank"
    );
  };

  const handleRoadTripBuddyLinkClick = () => {
    window.open("https://dsstad.github.io/travel-weather/", "_blank");
  };

  const handleNonReactPortfolioLinkClick = () => {
    window.open("https://jordanolguin.github.io/WebDevPortfolio/", "_blank");
  };

  const handleWeatherDashboardLinkClick = () => {
    window.open("https://jordanolguin.github.io/WeatherDashboard/", "_blank");
  };

  const handleEmployeeTrackerLinkClick = () => {
    window.open("https://github.com/jordanolguin/EmployeeTracker", "_blank");
  };

  const handleReadmeGeneratorLinkClick = () => {
    window.open("https://github.com/jordanolguin/REAMDMEGenerator", "_blank");
  };
  return (
    <div className="neonBorderWork">
      <h1>work</h1>
      <div className="card-container">
        <div
          className="card workoutWizard"
          onClick={handleWorkoutWizardLinkClick}
        >
          <h3>Workout Wizard</h3>
        </div>
        <div
          className="card roadTripBuddy"
          onClick={handleRoadTripBuddyLinkClick}
        >
          <h3>Road Trip Buddy</h3>
        </div>
        <div
          className="card NonReactPortfolio"
          onClick={handleNonReactPortfolioLinkClick}
        >
          <h3>HTML, CSS, JS ONLY Portfolio</h3>
        </div>
        <div
          className="card weatherDashboard"
          onClick={handleWeatherDashboardLinkClick}
        >
          <h3>Weather Dashboard</h3>
        </div>
        <div
          className="card employeeTracker"
          onClick={handleEmployeeTrackerLinkClick}
        >
          <h3>Employee Tracker CLI APP</h3>
        </div>
        <div
          className="card readmeGenerator"
          onClick={handleReadmeGeneratorLinkClick}
        >
          <h3>README.md Generator CLI APP</h3>
        </div>
      </div>
    </div>
  );
}

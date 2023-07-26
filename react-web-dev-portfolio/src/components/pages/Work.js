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
          id="workout-wizard-link"
          onClick={handleWorkoutWizardLinkClick}
        >
          <h3>Workout Wizard</h3>
        </div>
        <div
          className="card roadTripBuddy"
          id="road-trip-buddy-link"
          onClick={handleRoadTripBuddyLinkClick}
        >
          <h3>Road Trip Buddy</h3>
        </div>
        <div
          className="card weatherDashboard"
          id="weather-dashboard-link"
          onClick={handleWeatherDashboardLinkClick}
        >
          <h3>Weather Dashboard</h3>
        </div>
        <div
          className="card employeeTracker"
          id="employee-tracker-link"
          onClick={handleEmployeeTrackerLinkClick}
        >
          <h3>Employee Tracker CLI APP</h3>
        </div>
        <div
          className="card readmeGenerator"
          id="readme-generator-link"
          onClick={handleReadmeGeneratorLinkClick}
        >
          <h3>README.md Generator CLI APP</h3>
        </div>
      </div>
    </div>
  );
}

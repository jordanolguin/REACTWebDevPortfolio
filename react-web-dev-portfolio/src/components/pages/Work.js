import React from "react";

export default function Work() {
  const handleWorkoutWizardLinkClick = () => {
    window.location.href =
      "https://the-workout-wizard-7d5c29c6d6dd.herokuapp.com/";
  };

  const handleRoadTripBuddyLinkClick = () => {
    window.location.href = "https://dsstad.github.io/travel-weather/";
  };

  const handleWeatherDashboardLinkClick = () => {
    window.location.href = "https://jordanolguin.github.io/WeatherDashboard/";
  };

  const handleEmployeeTrackerLinkClick = () => {
    window.location.href = "https://github.com/jordanolguin/EmployeeTracker";
  };

  const handleReadmeGeneratorLinkClick = () => {
    window.location.href = "https://github.com/jordanolguin/REAMDMEGenerator";
  };
  return (
    <div className="neonBorderWork">
      <h1>work</h1>
      <div class="card-container">
        <div
          class="card-large"
          id="workout-wizard-link"
          onClick={handleWorkoutWizardLinkClick}
        >
          <h3 class="section-title-work">Workout Wizard</h3>
        </div>
        <div
          class="card-small-1"
          id="road-trip-buddy-link"
          onClick={handleRoadTripBuddyLinkClick}
        >
          <h3 class="section-title-work">Road Trip Buddy</h3>
        </div>
        <div
          class="card-small-2"
          id="weather-dashboard-link"
          onClick={handleWeatherDashboardLinkClick}
        >
          <h3 class="section-title-work">Weather Dashboard</h3>
        </div>
        <div
          class="card-small-3"
          id="employee-tracker-link"
          onClick={handleEmployeeTrackerLinkClick}
        >
          <h3 class="section-title-work">Employee Tracker CLI APP</h3>
        </div>
        <div
          class="card-small-4"
          id="readme-generator-link"
          onClick={handleReadmeGeneratorLinkClick}
        >
          <h3 class="section-title-work">README.md Generator CLI APP</h3>
        </div>
      </div>
    </div>
  );
}

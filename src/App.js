import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      name: "AI Leaf Disease Detection",
      description: "An AI project that detects plant leaf diseases using image processing."
    },
    {
      name: "Online Voting System",
      description: "A secure web application for conducting online elections."
    },
    {
      name: "Smart Attendance System",
      description: "A facial recognition based attendance management system."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">
            {project.description}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default App;

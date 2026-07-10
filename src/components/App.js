import React from "react";

function App() {
  const projects = [
    {
      name: "AI Chatbot",
      description: "An intelligent chatbot built using React and Node.js."
    },
    {
      name: "Food Delivery App",
      description: "A web application for ordering food online."
    },
    {
      name: "Expense Tracker",
      description: "An app to track daily income and expenses."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <p data-ns-test="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
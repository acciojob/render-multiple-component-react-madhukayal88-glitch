import React from 'react';

function App() {
  // An array of project data to keep the rendering clean and dynamic
  const dreamProjects = [
    {
      id: 1,
      name: "AI Study Companion",
      description: "An interactive AI-powered app that breaks down complex coding concepts into simple, personalized summaries."
    },
    {
      id: 2,
      name: "Eco-Tracker",
      description: "A mobile application designed to track personal daily carbon footprints and suggest sustainable alternatives."
    },
    {
      id: 3,
      name: "Decentralized Portfolio",
      description: "A web platform that leverages blockchain tech to securely showcase and verify developer credentials and open-source contributions."
    }
  ];

  return (
    <div className="ns-wrapper">
      {dreamProjects.map((project) => (
        <div key={project.id} style={{ margin: '20px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          {/* Project Name with mandatory data attribute */}
          <h1 data-ns-test="project-name">
            {project.name}
          </h1>
          
          {/* Project Description with mandatory data attribute */}
          <h6 data-ns-test="project-description">
            {project.description}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./SourceWorld.css"; // Import CSS file

const SourceWorld = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos] = useState([
    { name: "CameoGrat", description: "A developer-focused integration platform", stars: 120, forks: 45 },
    { name: "React-Todo", description: "A simple to-do list app built with React.js", stars: 85, forks: 30 },
    { name: "FastAPI Backend", description: "A backend API built with FastAPI and MongoDB", stars: 50, forks: 20 },
    { name: "IoT Controller", description: "An IoT device management platform", stars: 70, forks: 25 },
  ]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sourceworld">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="repo-list">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo, index) => (
            <div key={index} className="repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-stats">
                <span>⭐ {repo.stars}</span>
                <span>🍴 {repo.forks}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No repositories found.</p>
        )}
      </div>
    </div>
  );
};

export default SourceWorld;

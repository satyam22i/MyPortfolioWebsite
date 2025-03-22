import React, { useEffect, useState } from "react";
import "./content.css";

const FeaturedWorks = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="featured-works">
      <h2 className="heading">Featured works</h2>
      {projects.map((project) => (
        <div key={project._id} className="work-card">
          <img src={project.image} alt={project.title} className="work-image" />
          <div className="work-details">
            <h3 className="work-title">{project.title}</h3>
            <div className="work-meta">
              <span className="year">{project.year}</span>
              <span className="category">{project.category}</span>
            </div>
            <p className="work-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedWorks;

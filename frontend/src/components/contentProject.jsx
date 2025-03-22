import React, { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";

const projects = [
  {
    id: 1,
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const ContentProject = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://satyam-e1ix.onrender.com/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <>
      <div className="blogs">
        <p className="resent">Recent Posts</p>

        <div className="blogs-contener">
          {blogs.map((blog, index) => (
            <div
              key={blog._id}
              className={`blog-box${index % 2 === 0 ? "1" : "2"}`}
            >
              <h1>{blog.title}</h1>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-works">
        <h2 className="heading">Featured works</h2>
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            <img
              src={project.image}
              alt={project.title}
              className="work-image"
            />
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
    </>
  );
};

export default ContentProject;

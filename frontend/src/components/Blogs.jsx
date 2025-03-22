import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="blog">
      <p className="resents">Recent Posts</p>
      <div className="posts">
        <div className="blogs-container">
          {blogs
            .reduce((rows, blog, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(blog);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div key={rowIndex} className="blog-row">
                {row.map((blog) => (
                  <div key={blog._id} className="blog-box">
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

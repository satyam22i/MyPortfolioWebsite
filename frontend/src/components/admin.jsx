import React, { useState } from "react";
import axios from "axios";
import "./admin.css";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://satyam-e1ix.onrender.com/api/blogs",
        { title, content },
        { headers: { Authorization: token } }
      );
      alert("Blog added successfully!");
      setTitle("");
      setContent("");
      setToken("");
    } catch (error) {
      alert("invalid token");
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Admin Panel - Add Blog</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="admin-input"
          placeholder="Admin Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          type="text"
          className="admin-input"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="admin-textarea"
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="admin-button" type="submit">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Admin;

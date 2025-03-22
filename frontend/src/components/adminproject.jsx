import React, { useState, useEffect } from "react";
import axios from "axios";
import "./content.css";
import "./projAd.css";

const AdminProject = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    category: "",
    description: "",
    image: "",
  });
  const [token, setToken] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please enter your admin token.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/projects",
        formData,
        {
          headers: { Authorization: token },
        }
      );
      alert(res.data.message);
      setProjects([...projects, formData]);
      setFormData({
        title: "",
        year: "",
        category: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload project. Check your token.");
    }
  };

  return (
    <div className="admin-project">
      <h2>Admin: Upload Project</h2>

      <input
        type="text"
        placeholder="Enter Admin Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="token-input"
      />

      <form onSubmit={handleUpload}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Upload Project</button>
      </form>
    </div>
  );
};

export default AdminProject;

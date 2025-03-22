const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI || {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err));


const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const Admin = mongoose.model("Admin", adminSchema);


const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Blog = mongoose.model("Blog", blogSchema);


const projectSchema = new mongoose.Schema({
  title: String,
  year: String,
  category: String,
  description: String,
  image: String,
});
const Project = mongoose.model("Project", projectSchema);


//Stop new admin creation

// app.post("/api/admin/signup", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newAdmin = new Admin({ username, password: hashedPassword });
//   await newAdmin.save();
//   res.json({ message: "Admin created successfully!" });
// });

//Stop new admin creation


app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).json({ error: "Invalid Credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid Credentials" });

  const token = jwt.sign({ username }, process.env.SECRET_KEY || "SECRET_KEY", { expiresIn: "1h" });
  res.json({ token, username: admin.username });
});


const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    jwt.verify(token, process.env.SECRET_KEY || "SECRET_KEY");
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};


app.post("/api/blogs", authenticateAdmin, async (req, res) => {
  const { title, content } = req.body;
  const newBlog = new Blog({ title, content });
  await newBlog.save();
  res.json({ message: "Blog created successfully!" });
});


app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});


app.post("/api/projects", authenticateAdmin, async (req, res) => {
  const { title, year, category, description, image } = req.body;
  const newProject = new Project({ title, year, category, description, image });
  await newProject.save();
  res.json({ message: "Project created successfully!" });
});


app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

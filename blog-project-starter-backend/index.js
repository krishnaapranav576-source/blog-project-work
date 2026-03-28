const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/blogs", async (req, res) => {
  try {
    const blog = new Blog({
      newTitle: req.body.newTitle,
      newContent: req.body.newContent,
      date: req.body.date,
      likes: req.body.likes || 0,
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.patch("/api/blogs/like/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
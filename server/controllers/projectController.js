const Project = require("../models/Project");

// ==========================================
// ADD PROJECT
// ==========================================

const addProject = async (req, res) => {
  try {
    console.log("========== ADD PROJECT ==========");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const {
      id,
      title,
      category,
      description,
      github,
      live,
      featured,
    } = req.body;

    // ------------------------------------------
    // Validate required fields
    // ------------------------------------------

    if (!id || !title || !category || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // ------------------------------------------
    // Check duplicate ID
    // ------------------------------------------

    const existingProject = await Project.findOne({
      id: Number(id),
    });

    if (existingProject) {
      return res.status(400).json({
        success: false,
        message: "Project ID already exists",
      });
    }

    // ------------------------------------------
    // Technologies
    // ------------------------------------------

    let techArray = [];

    if (Array.isArray(req.body.technologies)) {
      techArray = req.body.technologies;
    } else if (req.body.technologies) {
      techArray = [req.body.technologies];
    }

    // Remove empty technologies
    techArray = techArray.filter(
      (technology) => technology.trim() !== ""
    );

    // ------------------------------------------
    // Image
    // ------------------------------------------

    let imageUrl = "";

    if (req.file) {
      imageUrl = req.file.path;
    }

    // ------------------------------------------
    // Create project
    // ------------------------------------------

    const project = new Project({
      id: Number(id),
      title: title.trim(),
      category,
      description: description.trim(),

      technologies: techArray,

      image: imageUrl,

      github: github || "",

      live: live || "",

      featured:
        featured === "true" ||
        featured === true,
    });

    const savedProject = await project.save();

    console.log("PROJECT SAVED:");
    console.log(savedProject);

    // ------------------------------------------
    // Response
    // ------------------------------------------

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      project: savedProject,
    });

  } catch (error) {

    console.error("ADD PROJECT ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// ==========================================
// GET ALL PROJECTS
// ==========================================

const getProjects = async (req, res) => {
  try {

    const projects = await Project
      .find()
      .sort({ id: 1 });

    return res.status(200).json({
      success: true,
      projects,
    });

  } catch (error) {

    console.error("GET PROJECTS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: error.message,
    });
  }
};


// ==========================================
// GET SINGLE PROJECT
// ==========================================

const getProject = async (req, res) => {
  try {

    const project = await Project.findOne({
      id: Number(req.params.id),
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });

  } catch (error) {

    console.error("GET PROJECT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch project",
      error: error.message,
    });
  }
};


// ==========================================
// DELETE PROJECT
// ==========================================

const deleteProject = async (req, res) => {
  try {

    const project = await Project.findOneAndDelete({
      id: Number(req.params.id),
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch (error) {

    console.error("DELETE PROJECT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete project",
      error: error.message,
    });
  }
};


module.exports = {
  addProject,
  getProjects,
  getProject,
  deleteProject,
};
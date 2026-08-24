const express = require("express");

const {
  addProject,
  getProjects,
  getProject,
  deleteProject,
} = require("../controllers/projectController");

const upload = require("../middleware/upload");

const router = express.Router();


// Add project
router.post(
  "/",
  upload.single("image"),
  addProject
);


// Get all projects
router.get(
  "/",
  getProjects
);


// Get single project
router.get(
  "/:id",
  getProject
);


// Delete project
router.delete(
  "/:id",
  deleteProject
);


module.exports = router;
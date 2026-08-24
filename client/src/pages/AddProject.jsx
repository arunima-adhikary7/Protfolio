import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    technologies: [""],
    image: null,
    github: "",
    live: "",
    featured: false,
  });

  const [loading, setLoading] = useState(false);

  // =========================================================
  // BACKEND API URL
  // =========================================================

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  // =========================================================
  // HANDLE NORMAL INPUTS
  // =========================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================================================
  // HANDLE TECHNOLOGY CHANGE
  // =========================================================

  const handleTechnologyChange = (index, value) => {
    setProject((prev) => {
      const updatedTechnologies = [...prev.technologies];

      updatedTechnologies[index] = value;

      return {
        ...prev,
        technologies: updatedTechnologies,
      };
    });
  };

  // =========================================================
  // ADD TECHNOLOGY
  // =========================================================

  const addTechnology = () => {
    setProject((prev) => ({
      ...prev,
      technologies: [...prev.technologies, ""],
    }));
  };

  // =========================================================
  // REMOVE TECHNOLOGY
  // =========================================================

  const removeTechnology = (index) => {
    setProject((prev) => ({
      ...prev,
      technologies: prev.technologies.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // =========================================================
  // HANDLE IMAGE
  // =========================================================

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;

    setProject((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // =========================================================
  // SUBMIT PROJECT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // =======================================================
    // VALIDATION
    // =======================================================

    if (!project.id) {
      alert("Please enter Project ID");
      return;
    }

    if (!project.title.trim()) {
      alert("Please enter Project Title");
      return;
    }

    if (!project.category) {
      alert("Please select Category");
      return;
    }

    if (!project.description.trim()) {
      alert("Please enter Description");
      return;
    }

    // =======================================================
    // START LOADING
    // =======================================================

    setLoading(true);

    try {
      // =====================================================
      // CREATE FORMDATA
      // =====================================================

      const formData = new FormData();

      formData.append("id", project.id);
      formData.append("title", project.title.trim());
      formData.append("category", project.category);
      formData.append("description", project.description.trim());

      // =====================================================
      // TECHNOLOGIES
      // =====================================================

      project.technologies.forEach((technology) => {
        if (technology.trim() !== "") {
          formData.append(
            "technologies",
            technology.trim()
          );
        }
      });

      // =====================================================
      // GITHUB
      // =====================================================

      formData.append("github", project.github.trim());

      // =====================================================
      // LIVE
      // =====================================================

      formData.append("live", project.live.trim());

      // =====================================================
      // FEATURED
      // =====================================================

      formData.append(
        "featured",
        String(project.featured)
      );

      // =====================================================
      // IMAGE
      // =====================================================

      if (project.image) {
        formData.append("image", project.image);
      }

      // =====================================================
      // DEBUG
      // =====================================================

      console.log("--------------------------------");
      console.log("SENDING PROJECT");
      console.log("--------------------------------");

      console.log("API URL:", API_URL);
      console.log(
        "REQUEST URL:",
        `${API_URL}/api/projects`
      );

      for (const [key, value] of formData.entries()) {
        console.log(
          key,
          value instanceof File
            ? value.name
            : value
        );
      }

      console.log("--------------------------------");

      // =====================================================
      // SEND TO BACKEND
      // =====================================================

      const response = await fetch(
        `${API_URL}/api/projects`,
        {
          method: "POST",
          body: formData,
        }
      );

      // =====================================================
      // GET RESPONSE
      // =====================================================

      const contentType =
        response.headers.get("content-type");

      let data;

      if (
        contentType &&
        contentType.includes("application/json")
      ) {
        data = await response.json();
      } else {
        const text = await response.text();

        data = {
          message: text,
        };
      }

      console.log("STATUS:", response.status);
      console.log("BACKEND RESPONSE:", data);

      // =====================================================
      // BACKEND ERROR
      // =====================================================

      if (!response.ok) {
        alert(
          data.message ||
            `Server error: ${response.status}`
        );

        return;
      }

      // =====================================================
      // SUCCESS
      // =====================================================

      console.log("PROJECT SAVED SUCCESSFULLY");

      alert("Project added successfully!");

      // =====================================================
      // REDIRECT TO HOME
      // =====================================================

      navigate("/");

    } catch (error) {
      console.error(
        "FRONTEND ERROR:",
        error
      );

      alert(
        "Cannot connect to backend. Check that your backend server is running."
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="min-h-screen bg-[#F7F3EE] py-12 px-6">

      <div className="max-w-3xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#6B3030] mb-3">
            Admin Panel
          </p>

          <h1 className="text-4xl font-bold text-[#321B14]">
            Add Project
          </h1>

          <p className="mt-2 text-[#756963]">
            Add a new project to your portfolio.
          </p>

        </div>

        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-[#E3D6CC] shadow-sm p-8 space-y-7"
        >

          {/* =================================================
              PROJECT ID
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Project ID *
            </label>

            <input
              type="number"
              name="id"
              value={project.id}
              onChange={handleChange}
              placeholder="1"
              min="1"
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030] focus:ring-2 focus:ring-[#6B3030]/10"
            />

          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Project Title *
            </label>

            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="MERN E-Commerce Platform"
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030] focus:ring-2 focus:ring-[#6B3030]/10"
            />

          </div>

          {/* =================================================
              CATEGORY
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Category *
            </label>

            <select
              name="category"
              value={project.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030] bg-white"
            >

              <option value="">
                Select Category
              </option>

              <option value="Full Stack Development">
                Full Stack Development
              </option>

              <option value="Frontend Development">
                Frontend Development
              </option>

              <option value="Backend Development">
                Backend Development
              </option>

              <option value="AI/ML">
                AI/ML
              </option>

              <option value="Data Science">
                Data Science
              </option>

            </select>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Description *
            </label>

            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              placeholder="Describe your project..."
              rows="5"
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030] focus:ring-2 focus:ring-[#6B3030]/10 resize-none"
            />

          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Technologies
            </label>

            <div className="space-y-3">

              {project.technologies.map(
                (technology, index) => (

                  <div
                    key={index}
                    className="flex gap-3"
                  >

                    <input
                      type="text"
                      value={technology}
                      onChange={(e) =>
                        handleTechnologyChange(
                          index,
                          e.target.value
                        )
                      }
                      placeholder="React"
                      className="flex-1 px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030]"
                    />

                    {project.technologies.length > 1 && (

                      <button
                        type="button"
                        onClick={() =>
                          removeTechnology(index)
                        }
                        className="px-4 rounded-xl bg-red-50 text-red-600 hover:bg-red-100"
                      >
                        Remove
                      </button>

                    )}

                  </div>

                )
              )}

            </div>

            <button
              type="button"
              onClick={addTechnology}
              className="mt-3 px-4 py-2 rounded-xl bg-[#F7F3EE] text-[#6B3030] font-medium hover:bg-[#EDE4DE]"
            >
              + Add Technology
            </button>

          </div>

          {/* =================================================
              IMAGE
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Project Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] bg-white"
            />

            {project.image && (
              <p className="mt-2 text-sm text-[#756963]">
                Selected: {project.image.name}
              </p>
            )}

          </div>

          {/* =================================================
              GITHUB
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              GitHub URL
            </label>

            <input
              type="url"
              name="github"
              value={project.github}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030]"
            />

          </div>

          {/* =================================================
              LIVE
          ================================================= */}

          <div>

            <label className="block mb-2 text-sm font-semibold text-[#321B14]">
              Live Website URL
            </label>

            <input
              type="url"
              name="live"
              value={project.live}
              onChange={handleChange}
              placeholder="https://myproject.com"
              className="w-full px-4 py-3 rounded-xl border border-[#D8C5B8] outline-none focus:border-[#6B3030]"
            />

          </div>

          {/* =================================================
              FEATURED
          ================================================= */}

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              checked={project.featured}
              onChange={handleChange}
              className="w-5 h-5 accent-[#6B3030]"
            />

            <label className="text-sm font-semibold text-[#321B14]">
              Featured Project
            </label>

          </div>

          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#321B14] text-white font-semibold hover:bg-[#6B3030] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >

            {loading
              ? "Adding Project..."
              : "Add Project"}

          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProject;
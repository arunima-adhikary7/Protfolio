import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // FETCH PROJECTS FROM BACKEND
  // =========================

  useEffect(() => {
    const fetchProjects = async () => {
      try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/projects`
);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        if (data.success) {
          setProjects(data.projects);
        } else {
          setError("Failed to load projects");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Unable to connect to the backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <section
        id="projects"
        className="min-h-[60vh] flex items-center justify-center bg-[#F7F3EE]"
      >
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-4 border-4 border-[#E3D6CC] border-t-[#6B3030] rounded-full animate-spin"></div>

          <p className="text-[#756963]">
            Loading projects...
          </p>
        </div>
      </section>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <section
        id="projects"
        className="min-h-[60vh] flex items-center justify-center bg-[#F7F3EE]"
      >
        <div className="text-center px-6">

          <div className="text-5xl mb-4">
            ⚠
          </div>

          <h2 className="text-2xl font-bold text-[#321B14]">
            Projects unavailable
          </h2>

          <p className="mt-2 text-[#756963]">
            {error}
          </p>

          <p className="mt-2 text-sm text-[#9A5C5C]">
            Make sure your backend is running on port 5000.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative bg-[#F7F3EE] py-28 overflow-hidden"
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[10%] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#6B3030]/5 blur-[140px]" />

        <div className="absolute bottom-[10%] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#9A5C5C]/5 blur-[140px]" />

      </div>


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">


        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >

          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#6B3030] mb-4">
            Selected Work
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#321B14] tracking-tight leading-tight">
              Things I've
              <span className="text-[#6B3030]">
                {" "}built.
              </span>
            </h2>

            <p className="max-w-md text-[#756963] leading-7">
              A selection of projects where I combine development,
              problem-solving and data-driven thinking.
            </p>

          </div>

        </motion.div>


        {/* =================================================
            NO PROJECTS
        ================================================== */}

        {projects.length === 0 ? (

          <div className="py-20 text-center">

            <p className="text-[#756963] text-lg">
              No projects added yet.
            </p>

          </div>

        ) : (

          /* =================================================
              PROJECT GRID
          ================================================== */

          <div className="grid md:grid-cols-2 gap-7">

            {projects.map((project, index) => (

              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-[#E3D6CC] bg-white shadow-sm hover:shadow-2xl hover:shadow-[#321B14]/10 transition-all duration-500 ${
                  project.featured
                    ? "md:col-span-2"
                    : ""
                }`}
              >

                <div
                  className={`grid ${
                    project.featured
                      ? "lg:grid-cols-[1.05fr_0.95fr]"
                      : "grid-cols-1"
                  }`}
                >


                  {/* =================================================
                      PROJECT VISUAL
                  ================================================== */}

                  <div
                    className={`relative overflow-hidden bg-[#321B14] ${
                      project.featured
                        ? "min-h-[320px] lg:min-h-[420px]"
                        : "h-[260px]"
                    }`}
                  >

                    {/* =================================================
                        IF IMAGE EXISTS
                    ================================================== */}

                    {project.image ? (

                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    ) : (

                      /* =================================================
                          DECORATIVE PROJECT PREVIEW
                      ================================================== */

                      <>

                        {/* Decorative background */}

                        <div className="absolute inset-0">

                          <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full border border-white/10" />

                          <div className="absolute top-[-45px] right-[-45px] w-44 h-44 rounded-full border border-white/10" />

                          <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 rounded-full bg-[#6B3030]/40 blur-3xl" />

                        </div>


                        {/* Code window */}

                        <div className="absolute inset-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden">

                          {/* Window top */}

                          <div className="h-10 px-4 flex items-center gap-2 border-b border-white/10">

                            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A89A]" />

                            <span className="w-2.5 h-2.5 rounded-full bg-[#9A5C5C]" />

                            <span className="w-2.5 h-2.5 rounded-full bg-[#6B3030]" />

                            <span className="ml-auto text-[9px] tracking-wider text-white/30">
                              PROJECT_PREVIEW
                            </span>

                          </div>


                          {/* Fake code */}

                          <div className="p-6 font-mono text-xs sm:text-sm text-white/50 space-y-3">

                            <div>

                              <span className="text-[#C9A89A]">
                                const
                              </span>{" "}

                              <span className="text-white/80">
                                project
                              </span>{" "}

                              ={" "}

                              <span className="text-[#B98383]">
                                {"{"}
                              </span>

                            </div>

                            <div className="pl-5">

                              title:{" "}

                              <span className="text-[#D9B7A8]">
                                "{project.title}"
                              </span>

                            </div>

                            <div className="pl-5">

                              type:{" "}

                              <span className="text-[#D9B7A8]">
                                "{project.category}"
                              </span>

                            </div>

                            <div className="pl-5">

                              status:{" "}

                              <span className="text-[#C9A89A]">
                                "completed"
                              </span>

                            </div>

                            <div>

                              <span className="text-[#B98383]">
                                {"}"}
                              </span>

                            </div>

                          </div>


                          {/* Center symbol */}

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                            <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">

                              <span className="text-3xl text-white/70">
                                {"</>"}
                              </span>

                            </div>

                          </div>

                        </div>

                      </>

                    )}


                    {/* Featured label */}

                    {project.featured && (

                      <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-[#F7F3EE] text-[#321B14] text-xs font-semibold shadow-sm">
                        Featured Project
                      </div>

                    )}

                  </div>


                  {/* =================================================
                      PROJECT DETAILS
                  ================================================== */}

                  <div className="p-7 lg:p-9 flex flex-col justify-between">

                    <div>

                      {/* Category */}

                      <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9A5C5C]">
                        {project.category}
                      </p>


                      {/* Title */}

                      <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#321B14] group-hover:text-[#6B3030] transition-colors">
                        {project.title}
                      </h3>


                      {/* Description */}

                      <p className="mt-4 text-sm sm:text-base leading-7 text-[#756963]">
                        {project.description}
                      </p>


                      {/* Technologies */}

                      <div className="flex flex-wrap gap-2 mt-6">

                        {project.technologies?.map(
                          (technology, technologyIndex) => (

                            <span
                              key={`${technology}-${technologyIndex}`}
                              className="px-3 py-1.5 rounded-lg bg-[#F7F3EE] border border-[#E5D9D0] text-xs font-medium text-[#6B5146]"
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>

                    </div>


                    {/* Links */}

                    <div className="flex items-center gap-5 mt-8 pt-6 border-t border-[#EDE4DE]">

                      {/* GitHub */}

                      {project.github && project.github !== "#" && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#321B14] hover:text-[#6B3030] transition"
                        >

                          GitHub

                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>

                        </a>

                      )}


                      {/* Live Demo */}

                      {project.live && project.live !== "#" && (

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#8A766B] hover:text-[#6B3030] transition"
                        >

                          Live Demo

                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 3v18" />
                            <path d="m5 10 7-7 7 7" />
                          </svg>

                        </a>

                      )}

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        )}


        {/* =================================================
            VIEW ALL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-14"
        >

          <a
            href="https://github.com/arunima-adhikary7"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#D8C5B8] bg-white text-[#321B14] font-medium hover:bg-[#321B14] hover:text-white transition-all duration-300"
          >

            View More on GitHub

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>

          </a>

        </motion.div>

      </div>

    </section>
  );
}
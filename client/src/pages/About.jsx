import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const strengths = [
    {
      number: "01",
      title: "Full Stack Development",
      description:
        "I enjoy building complete web applications, from responsive frontend interfaces to reliable backend APIs and databases.",
    },
    {
      number: "02",
      title: "AI / ML & Data Analytics",
      description:
        "I'm exploring AI/ML and data analytics, working with Python, SQL, data visualization and machine learning concepts to turn data into useful insights.",
    },
    {
      number: "03",
      title: "Leadership & Collaboration",
      description:
        "I am confident taking responsibility, communicating ideas clearly and helping a team stay focused while working toward a common goal.",
    },
    {
      number: "04",
      title: "Problem Solving",
      description:
        "I enjoy breaking complex problems into smaller, manageable parts and continuously improving my approach through practice and learning.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F7F3EE] py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 right-[-150px] w-[400px] h-[400px] rounded-full bg-[#6B3030]/5 blur-[120px]" />

        <div className="absolute bottom-0 left-[-150px] w-[400px] h-[400px] rounded-full bg-[#9A5C5C]/5 blur-[120px]" />

      </div>


      {/* ================= CONTAINER ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">


        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >

          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#6B3030] mb-4">
            About Me
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#321B14] leading-tight max-w-3xl">
              Building with curiosity,
              <span className="text-[#6B3030]">
                {" "}leading with purpose.
              </span>
            </h2>

            <p className="max-w-md text-[#756963] leading-7">
              A developer who enjoys learning, solving problems and turning
              ideas into meaningful digital experiences.
            </p>

          </div>

        </motion.div>


        {/* ================= MAIN ABOUT ================= */}

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">


          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="space-y-6 text-[17px] leading-8 text-[#756963]">

              <p>
                I'm a{" "}
                <span className="font-semibold text-[#321B14]">
                  Computer Science & Engineering student and Full Stack
                  Developer
                </span>{" "}
                passionate about building practical, user-focused web
                applications.
              </p>

              <p>
                I enjoy working across both frontend and backend development,
                turning ideas into responsive and functional digital
                experiences. My current development stack includes{" "}
                <span className="font-semibold text-[#6B3030]">
                  React, JavaScript, Node.js, Express.js, MongoDB, SQL and REST
                  APIs
                </span>
                .
              </p>

              <p>
                Alongside web development, I'm also exploring{" "}
                <span className="font-semibold text-[#321B14]">
                  AI/ML and Data Analytics
                </span>
                . I enjoy working with Python, SQL, data analysis,
                visualization and machine learning concepts to understand
                data and build intelligent solutions.
              </p>

              <p>
                I'm a confident and responsible team member who enjoys taking
                initiative. I believe good leadership is not just about
                directing a team — it's about{" "}
                <span className="font-semibold text-[#6B3030]">
                  listening, communicating ideas clearly, supporting others
                  and taking ownership
                </span>{" "}
                when challenges arise.
              </p>

              <p>
                I also have a strong interest in problem-solving and
                Data Structures & Algorithms. With{" "}
                <span className="font-semibold text-[#321B14]">
                  200+ LeetCode problems solved
                </span>
                , I continuously work on improving my logical thinking and
                approach to solving technical problems.
              </p>

              <p>
                I'm always curious to learn something new, take on challenging
                problems and build projects that create real-world value.
              </p>

            </div>


            {/* ================= TECHNOLOGIES ================= */}

            <div className="mt-10">

              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A5C5C] mb-4">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "SQL",
                  "Python",
                  "Machine Learning",
                  "Git",
                  "REST APIs",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-[#E5D9D0] bg-white text-sm text-[#5C463B] hover:border-[#9A5C5C] hover:text-[#6B3030] transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>


          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >

            {strengths.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 6 }}
                className="group p-6 rounded-2xl border border-[#E5D9D0] bg-white/80 hover:bg-white transition-all duration-300 shadow-sm"
              >

                <div className="flex gap-5">

                  {/* Number */}

                  <div className="shrink-0">

                    <span className="text-xs font-bold text-[#9A5C5C]">
                      {item.number}
                    </span>

                  </div>


                  {/* Content */}

                  <div>

                    <h3 className="text-lg font-semibold text-[#321B14] group-hover:text-[#6B3030] transition">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#756963]">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>


        {/* ================= STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 pt-10 border-t border-[#E5D9D0]"
        >

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Stat 1 */}

            <div>
              <p className="text-4xl font-bold text-[#321B14]">
                200<span className="text-[#6B3030]">+</span>
              </p>

              <p className="mt-2 text-sm text-[#8A766B]">
                LeetCode Problems
              </p>
            </div>


            {/* Stat 2 */}

            <div>
              <p className="text-4xl font-bold text-[#321B14]">
                8.13
              </p>

              <p className="mt-2 text-sm text-[#8A766B]">
                CGPA
              </p>
            </div>


            {/* Stat 3 */}

            <div>
              <p className="text-4xl font-bold text-[#321B14]">
                Full
                <span className="text-[#6B3030]"> Stack</span>
              </p>

              <p className="mt-2 text-sm text-[#8A766B]">
                Development
              </p>
            </div>


            {/* Stat 4 */}

            <div>
              <p className="text-4xl font-bold text-[#321B14]">
                AI<span className="text-[#6B3030]">/</span>ML
              </p>

              <p className="mt-2 text-sm text-[#8A766B]">
                & Data Analytics
              </p>
            </div>

          </div>

        </motion.div>


        {/* ================= CLOSING STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >

          <div className="inline-flex items-center gap-3">

            <span className="w-10 h-px bg-[#D8C5B8]" />

            <p className="text-sm text-[#8A766B]">
              Learn. Build. Lead. Grow.
            </p>

            <span className="w-10 h-px bg-[#D8C5B8]" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}
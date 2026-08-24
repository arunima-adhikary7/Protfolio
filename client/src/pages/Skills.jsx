import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillBranches = [
    {
      title: "Languages",
      short: "01",
      skills: ["Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Web Technologies",
      short: "02",
      skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      short: "03",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      short: "04",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Core CS",
      short: "05",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
      ],
    },
    {
      title: "Tools",
      short: "06",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#F7F3EE] py-28 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Burgundy glow */}
        <div className="absolute top-[20%] left-[-200px] w-[450px] h-[450px] rounded-full bg-[#6B3030]/5 blur-[130px]" />

        {/* Brown glow */}
        <div className="absolute bottom-[10%] right-[-200px] w-[450px] h-[450px] rounded-full bg-[#9A5C5C]/5 blur-[130px]" />

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
          className="text-center mb-20"
        >

          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#6B3030] mb-4">
            My Skills
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#321B14] tracking-tight">
            My technical
            <span className="text-[#6B3030]"> toolkit.</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-[#756963] leading-7">
            A collection of technologies and concepts I use to build,
            analyze and solve real-world problems.
          </p>

        </motion.div>


        {/* =================================================
            DESKTOP TREE
        ================================================== */}

        <div className="hidden lg:block relative">


          {/* ================= ROOT ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 mx-auto w-fit"
          >

            <div className="px-8 py-4 rounded-2xl bg-[#321B14] text-white shadow-xl shadow-[#321B14]/10">

              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Core
              </p>

              <p className="mt-1 text-xl font-semibold">
                Technical Skills
              </p>

            </div>

          </motion.div>


          {/* ================= MAIN VERTICAL LINE ================= */}

          <div className="absolute left-1/2 top-[76px] h-[80px] w-px bg-[#CDB9AA]" />


          {/* ================= HORIZONTAL TREE LINE ================= */}

          <div className="absolute top-[155px] left-[8%] right-[8%] h-px bg-[#CDB9AA]" />


          {/* ================= BRANCHES ================= */}

          <div className="grid grid-cols-3 gap-x-10 gap-y-20 pt-24">

            {skillBranches.map((branch, index) => (

              <motion.div
                key={branch.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative"
              >

                {/* Vertical branch */}

                <div className="absolute left-1/2 -top-24 h-24 w-px bg-[#CDB9AA]" />

                {/* Branch dot */}

                <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-3 h-3 rounded-full bg-[#6B3030] border-4 border-[#F7F3EE]" />


                {/* Category */}

                <div className="relative bg-white/80 border border-[#E3D6CC] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <div className="flex items-center justify-between mb-5">

                    <div>

                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#9A5C5C] font-bold">
                        Branch {branch.short}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-[#321B14]">
                        {branch.title}
                      </h3>

                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#F3E6E0] flex items-center justify-center text-[#6B3030]">
                      {branch.short}
                    </div>

                  </div>


                  {/* Skill branches */}

                  <div className="space-y-2">

                    {branch.skills.map((skill, skillIndex) => (

                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay:
                            index * 0.1 +
                            skillIndex * 0.05,
                        }}
                        className="flex items-center gap-3"
                      >

                        {/* Small branch line */}

                        <div className="relative w-5 h-5 flex items-center">

                          <div className="absolute left-0 w-4 h-px bg-[#D8C5B8]" />

                          <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#9A5C5C]" />

                        </div>


                        <span className="text-sm text-[#756963]">
                          {skill}
                        </span>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =================================================
            MOBILE TREE
        ================================================== */}

        <div className="lg:hidden relative">

          {/* Vertical tree */}

          <div className="absolute left-[17px] top-0 bottom-0 w-px bg-[#D8C5B8]" />


          <div className="space-y-6">

            {skillBranches.map((branch, index) => (

              <motion.div
                key={branch.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative pl-12"
              >

                {/* Branch connector */}

                <div className="absolute left-[17px] top-7 w-7 h-px bg-[#D8C5B8]" />

                {/* Branch dot */}

                <div className="absolute left-[12px] top-[22px] w-3 h-3 rounded-full bg-[#6B3030] border-2 border-[#F7F3EE]" />


                {/* Card */}

                <div className="bg-white/80 border border-[#E3D6CC] rounded-2xl p-5 shadow-sm">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#9A5C5C] font-bold">
                        Branch {branch.short}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-[#321B14]">
                        {branch.title}
                      </h3>

                    </div>

                  </div>


                  <div className="flex flex-wrap gap-2 mt-5">

                    {branch.skills.map((skill) => (

                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-[#F7F3EE] border border-[#E5D9D0] text-xs text-[#756963]"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >

          <div className="inline-flex items-center gap-3">

            <span className="w-10 h-px bg-[#D8C5B8]" />

            <span className="text-sm text-[#8A766B]">
              Always learning. Always building.
            </span>

            <span className="w-10 h-px bg-[#D8C5B8]" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}
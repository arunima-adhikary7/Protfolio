import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7F3EE] text-[#2A1B17]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main burgundy glow */}
        <div className="absolute -top-40 left-[15%] w-[500px] h-[500px] rounded-full bg-[#6B3030]/10 blur-[140px]" />

        {/* Soft brown glow */}
        <div className="absolute -bottom-40 right-[5%] w-[500px] h-[500px] rounded-full bg-[#9A5C5C]/10 blur-[140px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#321B14 1px, transparent 1px), linear-gradient(90deg, #321B14 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-tight text-[#321B14]"
          >
            A<span className="text-[#6B3030]">.</span>
          </motion.a>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8 text-sm"
          >
            <a
              href="#home"
              className="text-[#6B3030] font-medium"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-[#756963] hover:text-[#321B14] transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-[#756963] hover:text-[#321B14] transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-[#756963] hover:text-[#321B14] transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-[#756963] hover:text-[#321B14] transition"
            >
              Contact
            </a>
          </motion.div>

          {/* Contact button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-[#321B14] text-white text-sm font-medium hover:bg-[#6B3030] transition"
          >
            Let's Talk
          </motion.a>

        </div>
      </nav>


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 lg:px-10 flex items-center">

        <div className="w-full grid lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-20 items-center pt-24 pb-20">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >

            {/* Availability */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-[#E5D9D0] bg-white/70 backdrop-blur-md"
            >

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full rounded-full bg-[#6B3030] opacity-40 animate-ping" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6B3030]" />

              </span>

              <span className="text-sm text-[#756963]">
                Available for opportunities
              </span>

            </motion.div>


            {/* Small intro */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm uppercase tracking-[0.25em] text-[#9A5C5C] font-semibold mb-4"
            >
              Hello, I'm
            </motion.p>


            {/* NAME */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight leading-[0.98] text-[#321B14]"
            > Arunima Adhikary
              <span className="text-[#6B3030]">.</span>
            </motion.h1>


            {/* ROLE */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6B3030]"
            >
              Full Stack Developer
            </motion.h2>


            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-[#756963]"
            >
              I design and develop modern web applications that are
              responsive, scalable and user-friendly. I enjoy turning
              ideas into functional digital experiences.
            </motion.p>


            {/* Tech mini list */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-sm text-[#8A766B]"
            >

              <span>React</span>

              <span className="w-1 h-1 rounded-full bg-[#B99A88]" />

              <span>Node.js</span>

              <span className="w-1 h-1 rounded-full bg-[#B99A88]" />

              <span>MongoDB</span>

              <span className="w-1 h-1 rounded-full bg-[#B99A88]" />

              <span>JavaScript</span>

            </motion.div>


            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="flex flex-wrap gap-4 mt-9"
            >

              {/* Primary */}

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#321B14] text-white font-medium shadow-lg shadow-[#321B14]/15 hover:bg-[#6B3030] transition"
              >

                View My Projects

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>

              </motion.a>


              {/* Resume */}

              {/* <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#D8C5B8] bg-white/80 text-[#321B14] font-medium hover:bg-[#F3EDE7] transition"
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>

                Resume

              </motion.a> */}

            </motion.div>


            {/* Social Links */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex items-center gap-5 mt-9"
            >

              {/* GitHub */}

              <a
                href="https://github.com/arunima-adhikary7"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[#8A766B] hover:text-[#321B14] transition"
              >

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z" />
                </svg>

              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/arunima-adhikary-57172a295/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#8A766B] hover:text-[#321B14] transition"
              >

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0-4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>

              </a>


              {/* Email */}

              <a
                href="mailto:aarunima790@gmail.com"
                aria-label="Email"
                className="text-[#8A766B] hover:text-[#321B14] transition"
              >

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

              </a>


              <span className="h-5 w-px bg-[#D8C5B8]" />

              <span className="text-sm text-[#9A877B]">
                Let's build something.
              </span>

            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE - PHOTO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative w-[300px] sm:w-[370px] lg:w-[430px]">


              {/* =================================================
                  PHOTO GLOW
              ================================================= */}

              <div className="absolute inset-0 bg-[#6B3030]/15 blur-[100px] scale-90" />


              {/* =================================================
                  DECORATIVE FRAME
              ================================================= */}

              <div className="absolute -inset-4 rounded-[2rem] border border-[#D8C5B8]" />

              <div className="absolute -inset-7 rounded-[2.4rem] border border-[#E8DED6]" />


              {/* Small decorative corner */}

              <div className="absolute -top-5 -right-5 z-20 w-14 h-14 rounded-full bg-[#6B3030] flex items-center justify-center shadow-xl">

                <span className="text-white text-lg">
                  ✦
                </span>

              </div>


              {/* =================================================
                  PHOTO
              ================================================= */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-[#D8C5B8] bg-[#321B14] shadow-2xl"
              >

                <img
                  src={profileImage}
                  alt="Arunima Adhikary - Full Stack Developer"
                  className="w-full h-full object-cover"
                />


                {/* Bottom overlay */}

                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#321B14]/90 via-[#321B14]/20 to-transparent" />


                {/* Photo text */}

                <div className="absolute bottom-6 left-6">

                  <p className="text-white font-semibold text-lg">
                    Arunima Adhikary
                  </p>

                  <p className="text-white/70 text-sm mt-1">
                    Full Stack Developer
                  </p>

                </div>

              </motion.div>


              {/* =================================================
                  FLOATING REACT CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 top-[15%] hidden sm:flex items-center gap-3 px-4 py-3 rounded-xl border border-[#E5D9D0] bg-white/95 backdrop-blur-xl shadow-xl"
              >

                <div className="w-10 h-10 rounded-lg bg-[#F3E6E0] flex items-center justify-center text-[#6B3030] text-lg">
                  ⚛
                </div>

                <div>

                  <p className="text-xs text-[#9A877B]">
                    Frontend
                  </p>

                  <p className="text-sm font-semibold text-[#321B14]">
                    React.js
                  </p>

                </div>

              </motion.div>


              {/* =================================================
                  NODE CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -right-10 top-[43%] hidden sm:flex items-center gap-3 px-4 py-3 rounded-xl border border-[#E5D9D0] bg-white/95 backdrop-blur-xl shadow-xl"
              >

                <div className="w-10 h-10 rounded-lg bg-[#F3E6E0] flex items-center justify-center text-[#6B3030] font-bold text-xs">
                  JS
                </div>

                <div>

                  <p className="text-xs text-[#9A877B]">
                    Backend
                  </p>

                  <p className="text-sm font-semibold text-[#321B14]">
                    Node.js
                  </p>

                </div>

              </motion.div>


              {/* =================================================
                  MONGODB CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-6 bottom-[10%] hidden sm:flex items-center gap-3 px-4 py-3 rounded-xl border border-[#E5D9D0] bg-white/95 backdrop-blur-xl shadow-xl"
              >

                <div className="w-10 h-10 rounded-lg bg-[#F3E6E0] flex items-center justify-center text-[#6B3030] font-bold text-xs">
                  DB
                </div>

                <div>

                  <p className="text-xs text-[#9A877B]">
                    Database
                  </p>

                  <p className="text-sm font-semibold text-[#321B14]">
                    MongoDB
                  </p>

                </div>

              </motion.div>


              {/* =================================================
                  EXPERIENCE BADGE
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
                className="absolute -bottom-5 -right-5 hidden sm:block px-5 py-4 rounded-2xl bg-[#321B14] text-white shadow-xl"
              >

                <p className="text-xs text-white/50 uppercase tracking-wider">
                  Focus
                </p>

                <p className="text-sm font-medium mt-1">
                  Building for the web
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM SCROLL
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >

        <span className="text-[10px] uppercase tracking-[0.3em] text-[#9A877B]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-px h-8 bg-gradient-to-b from-[#6B3030] to-transparent"
        />

      </motion.div>

    </section>
  );
}
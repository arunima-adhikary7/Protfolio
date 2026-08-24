import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      type: "Email",
      value: "aarunima790@gmail.com",
      href: "mailto:aarunima790@gmail.com",
      icon: (
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
      ),
    },

    {
      type: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },

    {
      type: "LinkedIn",
      value: "linkedin.com/in/Arunima Adhikary",
      href: "https://www.linkedin.com/in/arunima-adhikary-57172a295/",
      icon: (
        <span className="font-bold text-lg">
          in
        </span>
      ),
    },

    {
      type: "GitHub",
      value: "github.com/arunima-adhikary7",
      href: "https://github.com/arunima-adhikary7",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.8-1.6 6.8-7A5.4 5.4 0 0 0 20 3.8 5 5 0 0 0 19.9 0S18.7-.4 15 2.1a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5 5 0 0 0 4 3.8 5.4 5.4 0 0 0 2.2 7.5c0 5.4 3.5 7 6.8 7A4.8 4.8 0 0 0 8 18v4" />
          <path d="M8 18c-3 .9-3-1.5-4.2-2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#F7F3EE] py-28 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[10%] left-[-220px] w-[500px] h-[500px] rounded-full bg-[#6B3030]/5 blur-[140px]" />

        <div className="absolute bottom-[5%] right-[-220px] w-[500px] h-[500px] rounded-full bg-[#9A5C5C]/5 blur-[140px]" />

      </div>


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">


        {/* =================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#6B3030] mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#321B14] tracking-tight leading-tight">
            Let's connect
            <span className="text-[#6B3030]">.</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-[#756963] leading-7">
            I'm open to full-time opportunities, internships,
            collaborations and interesting projects.
          </p>

        </motion.div>


        {/* =================================================
            MAIN CONTACT CARD
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-16 max-w-4xl mx-auto"
        >

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] overflow-hidden rounded-3xl border border-[#E3D6CC] bg-white shadow-xl shadow-[#321B14]/5">


            {/* =================================================
                LEFT DARK PANEL
            ================================================== */}

            <div className="relative bg-[#321B14] text-white p-8 sm:p-10 lg:p-12 overflow-hidden">

              {/* Decorative circles */}

              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/10" />

              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#6B3030]/40 blur-3xl" />


              <div className="relative z-10">

                <p className="text-xs uppercase tracking-[0.25em] text-[#C9A89A]">
                  Contact Me
                </p>

                <h3 className="mt-5 text-3xl sm:text-4xl font-bold leading-tight">
                  Let's create
                  <br />
                  something meaningful.
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/55">
                  Whether it's a job opportunity, a project,
                  or simply a conversation about technology,
                  feel free to reach out.
                </p>


                {/* Availability */}

                <div className="mt-10 flex items-center gap-3">

                  <span className="relative flex h-3 w-3">

                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping" />

                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />

                  </span>

                  <span className="text-xs text-white/60">
                    Open to opportunities
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT CONTACT INFORMATION
            ================================================== */}

            <div className="p-7 sm:p-10 lg:p-12">

              <p className="text-sm text-[#8A766B] mb-7">
                You can reach me through
              </p>


              <div className="space-y-3">

                {contactLinks.map((contact, index) => (

                  <motion.a
                    key={contact.type}
                    href={contact.href}
                    target={
                      contact.type === "LinkedIn" ||
                      contact.type === "GitHub"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.type === "LinkedIn" ||
                      contact.type === "GitHub"
                        ? "noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-[#E3D6CC] hover:bg-[#F7F3EE] transition-all duration-300"
                  >

                    {/* Icon */}

                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#F3E6E0] text-[#6B3030] flex items-center justify-center group-hover:bg-[#6B3030] group-hover:text-white transition-all duration-300">
                      {contact.icon}
                    </div>


                    {/* Text */}

                    <div className="min-w-0">

                      <p className="text-xs uppercase tracking-wider text-[#9A5C5C] font-semibold">
                        {contact.type}
                      </p>

                      <p className="mt-1 text-sm sm:text-base text-[#321B14] truncate group-hover:text-[#6B3030] transition-colors">
                        {contact.value}
                      </p>

                    </div>


                    {/* Arrow */}

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="ml-auto flex-shrink-0 text-[#C8B9B0] group-hover:text-[#6B3030] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>

                  </motion.a>

                ))}

              </div>


              {/* =================================================
                  RESUME
              ================================================== */}

              <div className="mt-8 pt-7 border-t border-[#EDE4DE]">

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-[#6B3030] text-white font-medium hover:bg-[#321B14] transition-all duration-300"
                >

                  {/* Download icon */}

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>

                  Download Resume

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="group-hover:translate-y-0.5 transition"
                  >
                    <path d="M12 3v18" />
                    <path d="m5 10 7-7 7 7" />
                  </svg>

                </a>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            FOOTER MESSAGE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >

          <div className="flex items-center justify-center gap-4">

            <span className="w-10 h-px bg-[#D8C5B8]" />

            <p className="text-sm text-[#8A766B]">
              Thanks for visiting my portfolio.
            </p>

            <span className="w-10 h-px bg-[#D8C5B8]" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}
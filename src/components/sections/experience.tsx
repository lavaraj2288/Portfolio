"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const experienceData = [
  {
    company: "XCEEDIQ Learning Solutions Pvt. Ltd. ",
    role: "Full Stack Web Development Intern Using (Mern)",
    period: "May 2024 - August 2024",
    location: "Visakhapatnam, India",
    desc: "Contributed to School Management System V1 using the MERN stack, working on React front-end views and Node.js REST API integrations.",
    achievements: [
      "Contributed to School Management System V1 using the MERN stack.",
      "Worked on React front-end features and supported Node.js/Express REST API integration.",
      "Assisted MongoDB CRUD operations, schema design, and debugging using Git version control."
    ],
    emoji: "🚀",
    color: "bg-blue-600 text-white shadow-blue-500/20"
  },
  {
    company: "APSSDC-Summer Online Internship Program",
    role: "Web Development Using Django",
    period: "May 2025 - July 2025",
    location: "Remote",
    desc: "Completed an online internship program conducted by APSSDC, gaining practical knowledge through structured technical learning and project-based activities.",
    achievements: [
      "Successfully completed the APSSDC Summer Online Internship Program 2025.",
      "Learned practical concepts through online technical sessions and internship activities.",
      "Improved my technical understanding and problem-solving skills through hands-on learning."
    ],
    emoji: "📊",
    color: "bg-amber-600 text-white shadow-amber-500/20"
  },
  {
    company: "Council For Skills and Competencies Under APSCHE",
    role: "Java Full Stack Internship",
    period: "November 2025 - March 2026",
    location: "Visakhapatnam, India",
    desc: "Completed a Java Full Stack internship and gained practical experience in Java, web development, databases, and backend technologies.",

    achievements: [
      "Learned and applied Java and full-stack development concepts.",
      "Worked on web application development and database-related tasks.",
      "Improved my understanding of backend development and how different application components work together."
    ],
    emoji: "📈",
    color: "bg-sky-600 text-white shadow-sky-500/20"
  },
  {
    company: "Unified Mentor Pvt. Ltd.",
    role: "Full Stack Web Development Intern",
    period: "Apirl 2026 - July 2026",
    location: "Remote",
    desc: "Worked on web development projects using modern front-end and backend technologies, gaining practical experience in building and improving web applications.",

    achievements: [
      "Worked on developing and improving web application features.",
      "Created responsive front-end pages using HTML, CSS, JavaScript, and React.",
      "Worked with backend APIs and databases and used Git for managing project changes."
    ],
    emoji: "🚀",
    color: "bg-blue-600 text-white shadow-blue-500/20"
  }
];

export function Experience() {
  return (
    <section
      id="internships"
      className="py-20 bg-gradient-to-br from-[#fdf8ff] via-[#f9f1ff] to-[#f4ebff] relative overflow-hidden border-b border-zinc-200/50 text-zinc-900"
    >
      {/* Decorative Violet Glow Blur */}
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-violet-400/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 pb-1"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            My professional development journey through internships and software engineering practice
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative space-y-10 md:space-y-12">
          {/* Vertical timeline line - left on mobile, center on desktop */}
          <div className="absolute left-5 md:left-7 lg:left-1/2 -translate-x-[1.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-purple-500" />

          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.company}
                className={`relative flex flex-col pl-14 md:pl-16 lg:pl-0 lg:w-1/2 ${isLeft ? "lg:items-end lg:pr-12 lg:mr-auto lg:pl-0" : "lg:items-start lg:pl-12 lg:ml-auto"
                  }`}
              >
                {/* Timeline node dot */}
                <div
                  className={`absolute left-5 md:left-7 ${isLeft ? "lg:left-full" : "lg:left-0"} -translate-x-1/2 top-7 w-3.5 h-3.5 bg-[#2563eb] rounded-full border-[2.5px] border-white shadow-md z-10`}
                />

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  className="w-full lg:w-[90%] bg-white border border-zinc-200/80 p-5 md:p-7 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Company & Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md ${item.color}`}>
                        {item.emoji}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-lg md:text-xl text-zinc-900">
                          {item.company}
                        </h3>
                        <p className="text-sm font-semibold text-primary">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Date and Location Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-zinc-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300 hidden sm:inline" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {/* Summary Text */}
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Achievements Checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs md:text-sm font-bold text-zinc-800 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" /> Key Achievements:
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-zinc-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

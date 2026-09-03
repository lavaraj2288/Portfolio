"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";

const certificationsData = [
  {
    title: "Full Stack Web Development Internship",
    issuer: "XCEEDIQ",
    date: "August 2024",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack","HTML5", "CSS3", "javaScript"],
    id: "XC-FS-2024",
    link: "https://drive.google.com/file/d/1RgYqaugSbrvwMhHsCImybIk-AIAq_Zff/view?usp=drive_link",
  },
  {
    title: "Java Full Stack",
    issuer: "Council For Skills and Competencies Under APSCHE",
    date: "March 2026",
    skills: ["FrontEnd", "Java", "Node.js", "Next.js", "Supabase"],
    id: "CSCIndia-t9036zka",
    link: "https://drive.google.com/file/d/1HHUVa7DG4UbuA1zqxJh3cwdHIKJqhxYx/view?usp=drive_link",
  },
  {
    title: "Web Development Using Django with Python",
    issuer: "APSSDC",
    date: "2025",
    skills: ["Web Development", "Python", "Django", "MangoDB"],
    id: "APSSDC/25/INT/WDD-0742",
    link: "https://drive.google.com/file/d/1dNn-6VP_I8aqp79DiKamWJ6c9C3xKME5/view?usp=drive_link",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM Skill Build",
    date: "Dec 2025",
    skills: ["AI"],
    id: "df608da4-f2e9-4764-a20d-2b85da4d6df0",
    link: "https://drive.google.com/file/d/1paE0YaWrgz03WiB93mMm8IcJPCTYFG_M/view?usp=drive_link",
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte",
    date: "Nov 2025",
    skills: ["Python", "Data analysis", "Tablue", "SQL"],
    id: "69184ff0f6e23f7a00b40a4a",
    link: "https://drive.google.com/file/d/16hfKJ349Yg1csifQJkWMUR4XhNyjpSVP/view?usp=drive_link",
  },
  {
    title: "Software Engineering and Agile software development",
    issuer: "Infosys Springboard",
    date: "Aug 2024",
    skills: ["Software Development", "Agile developments Methods", "CI/CD Pipelines"],
    id: "https://verify.onwingspan.com/",
    link: "https://drive.google.com/file/d/1EFuUOnlNrxa7uOrG0yyrLABYPsElo2xG/view?usp=drive_link",
  },
  {
    title: "Microsoft Excel: Learn Modern Excel For Data Analysis",
    issuer: "Udemy",
    date: "Nov 2025",
    skills: ["Ms Excel", "Data Analysis", "Data Visualization"],
    id: "UC-74195cb8-a02a-48fd-b3a1-337c83b2ae16",
    link: "https://drive.google.com/file/d/1iDPBLJsN6VDNxcafdCNuMnSuXr5eaJ4V/view?usp=drive_link",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Unified mentor Pvt.Ltd.",
    date: "Aug 2026",
    skills: ["Fronted technologies", "Backend Technologies", "Databases", "Deployment Tools"],
    id: "UMID08042688085",
    link: "https://drive.google.com/file/d/1cYre8sJ1j221d7TnTjvCwz9LA5MSxNby/view?usp=drive_link",
  },
  {
    title: "Python",
    issuer: "CISCO Networking Academy",
    date: "July 2025",
    skills: ["OOP Concepts", "Arrays", "Pointers", "Strings", "Pandas"],
    id: "Click on verify Certificate and Scan to verify",
    link: "https://drive.google.com/file/d/1YepR0du6eeMvQkwsPYr07g8Yrt-HIzix/view?usp=drive_link",
  },
  {
    title: "Generative AI",
    issuer: "Future Skills Prime",
    date: "Jan 2026",
    skills: ["Prompt Engineering", "AI-Augmented problem Solving"],
    id: "26100109120",
    link: "https://drive.google.com/file/d/1ozmZLKIrsqjvc74qTvc_whFpXrdrjsfa/view?usp=drive_link",
  },
  {
    title: "SQL-Introduction to SQL with MySQL",
    issuer: "Udemy",
    date: "Nov 2025",
    skills: ["SQL", "Query Syntax", "Data Modification", "Basic Joins", "Aggregation"],
    id: "UC-83389597-cc45-44a7-853c-86b1045d3275",
    link: "https://drive.google.com/file/d/1_gqwHCejqO0LeEuX_ZZrtuGadQ3KerbN/view?usp=drive_link",
  },
  {
    title: "MongoDB Overview: Core Concepts and Architecture",
    issuer: "MongoDB Skill",
    date: "Jan 2026",
    skills: ["Data Modeling", "Querying & Performance", "SQL",],
    id: "2bdbfb3e-72ab-49ec-bb38-3ccf70e1524c",
    link: "https://drive.google.com/file/d/18WSvcgi4vjKC3sfMvJqIoBwI8j8DAvgC/view?usp=drive_link",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#fdf8ff] via-[#f9f1ff] to-[#f4ebff] relative overflow-hidden border-b border-zinc-200/50">
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-violet-400/15 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900"
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            Professional credentials validating my technical competency, knowledge, and commitment to learning
          </motion.p>
        </div>

        {/* Info Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { label: "Total Certifications", val: "10+" },
            { label: "Technologies", val: "Python / Full Stack" },
            { label: "Verified Skills", val: "15+" },
            { label: "Status", val: "100% Active" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-200/80 p-4 md:p-6 rounded-2xl text-center shadow-sm"
            >
              <div className="text-primary text-xl md:text-2xl font-extrabold mb-1">{item.val}</div>
              <div className="text-zinc-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-zinc-200/80 p-6 rounded-3xl flex flex-col justify-between h-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-500/10 px-2.5 py-0.5 rounded-full dark:text-green-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-sm md:text-base leading-snug text-zinc-900">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold">
                    Issued by <span className="text-primary">{cert.issuer}</span> • {cert.date}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-zinc-50 border border-zinc-200/60 text-zinc-500 text-[10px] rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Footer Actions */}
              <div className="pt-6 mt-6 border-t border-zinc-200/60 flex items-center justify-between text-xs">
                {cert.id && (
                  <span className="text-zinc-400 font-mono">
                    ID: {cert.id}
                  </span>
                )}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary hover:text-primary-hover font-bold tracking-tight transition-colors cursor-pointer"
                >
                  Verify Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

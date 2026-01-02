// src/components/Projects.jsx

/* ================= SUB COMPONENTS ================= */

// Featured Project Card
const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">

      {/* Top Left Arrow */}
      <div className="absolute top-5 left-5 h-10 w-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
        ↗
      </div>

      {/* Top Right Icons */}
      <div className="absolute top-5 right-5 flex gap-2">
        <a className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20">
          🐙
        </a>
        <a className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20">
          🔗
        </a>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-6">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Small Project Card
const MiniProject = ({ title, tech }) => {
  return (
    <div className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-400 mt-1">{tech}</p>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */

export default function Projects() {
  const featuredProjects = [
    {
      title: "Digiting Card",
      desc:
        "Worked on a Digital Visiting Card web application for business owners, employees, and service professionals.",
      tags: ["React", "Tailwind", "Node.js"],
    },
    {
      title: "Notes Management App",
      desc:
       	"Developed a Notes App that allows users to create, view, and manage notes with title and description",
      tags: ["React", "javaScript", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      desc:
        "Designed and developed a modern, fully responsive personal portfolio website",
      tags: ["React", "Tailwind"],
    },
  ];

  const otherProjects = [
    { title: "Electric scooter website", tech: "React, Tailwind" },
    { title: "Clone of JustDial Website", tech: "html, css" },
    { title: "Form Submit with Validations", tech: "React, Tailwind" },
     { title: "GST Calculator", tech: "React, Javascript"},
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-linear-to-br from-[#0f071a] via-[#1a0f2e] to-[#0f071a] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-sky-400 mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Recent{" "}
            <span className="bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="rounded-3xl p-8 bg-white/5 border border-white/10 mb-16">
          <h3 className="font-semibold mb-6 flex items-center gap-2">
            <span className="text-pink-400">●</span> Other Notable Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((item) => (
              <MiniProject key={item.title} {...item} />
            ))}
          </div>
        </div>

        {/* GitHub Button */}
        <div className="text-center">
          <a href="https://github.com/Mohit9009081 " className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10">
            🐙 View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
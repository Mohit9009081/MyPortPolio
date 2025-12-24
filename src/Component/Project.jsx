import { FaGithub } from "react-icons/fa";

const projects = [
  { title: "Notes App", tech: "React, Tailwind", link: "https://notes-app-f5u5.vercel.app/" },
  { title: "Counter App", tech: "Redux Toolkit" , link:"https://redux-counter-lqhao7pal-mohit-yadavs-projects-af60766a.vercel.app" },
  { title: "Accordion UI", tech: "React", link:"https://accordian-task-zeta.vercel.app/" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20  bg-gray-900 mt-10">
      <div className="max-w-5xl mx-auto px-20">
        <h2 className="text-3xl  text-white font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 bg-indigo-600 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl text-white font-semibold">{p.title}</h3>
              <p className="text-white mt-2">{p.tech}</p>
             <p className="px-50"> <a href={p.link} target="_blank"><FaGithub className="text-3xl text-white hover:text-black" /></a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
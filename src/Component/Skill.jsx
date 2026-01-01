/* ================= SKILLS SECTION ================= */
const Skill =() => {
  const skills = [
    { name: 'HTML', level: '95%', icon: '🌐' },
    { name: 'CSS', level: '90%', icon: '🎨' },
    { name: 'JavaScript', level: '88%', icon: '⚡' },
    { name: 'React', level: '92%', icon: '⚛️' },
    { name: 'Tailwind CSS', level: '90%', icon: '💨' },
    { name: 'Redux', level: '80%', icon: '🔁' },
    { name: 'Node.js', level: '75%', icon: '🟢' },
    { name: 'Express', level: '75%', icon: '📘' },
  ];

  const tools = [
    { title: 'VS Code', desc: 'Editor' },
    { title: 'Git & GitHub', desc: 'Version Control' },
    { title: 'Figma', desc: 'Design' },
    { title: 'Postman', desc: 'API Testing' },
    { title: 'Chrome DevTools', desc: 'Debugging' },
    { title: 'Vite', desc: 'Build Tool' },
  ];

  const bestAt = [
    'Building responsive, mobile-first applications',
    'Creating intuitive user interfaces',
    'Writing clean, maintainable code',
    'Optimizing performance & SEO',
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-linear-to-br from-[#0f071a] via-[#1a0f2e] to-[#0f071a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-yellow-400 mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Technologies I{' '}
            <span className="bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              work with
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* skills grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-300">
                  <span>{skill.icon}</span>
                  {skill.name}
                </div>
                <p className="text-3xl font-bold text-pink-400">{skill.level}</p>
              </div>
            ))}
          </div>

          {/* right side */}
          <div className="space-y-6">
            {/* tools */}
            <div className="rounded-3xl p-6 bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-yellow-400">●</span> Tools & Software
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div key={tool.title} className="rounded-xl p-4 bg-white/5">
                    <p className="font-medium">{tool.title}</p>
                    <p className="text-sm text-gray-400">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* best at */}
            <div className="rounded-3xl p-6 bg-linear-to-br from-pink-500/20 via-yellow-400/10 to-green-400/10 border border-white/10">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-pink-400">●</span> What I Do Best
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {bestAt.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-pink-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skill;


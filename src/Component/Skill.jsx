const skills = ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 mt-10 bg-gray-900 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-white font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-indigo-600 text-white  shadow rounded-lg text-center font-bold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
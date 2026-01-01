

const  About=() => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-linear-to-br from-[#12081c] via-[#1a1230] to-[#12081c] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-pink-400 mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Passionate about creating{' '}
            <span className="bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* left content */}
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a dedicated <span className="text-white font-medium">website designer and React developer</span> based in India.
              With a passion for creating beautiful, functional, and user-centered digital experiences.
            </p>

            <p>
              My journey started with HTML and CSS, evolving to master modern frameworks like React,
              state management with Redux, and backend development with Node.js. I believe in writing
              clean, maintainable code that scales.
            </p>

            {/* tech pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Html','React', 'javaScript', 'Tailwind CSS', 'Node.js', 'Redux','Express', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* right card */}
          <div className="relative">
            <div className="rounded-3xl p-10 bg-linear-to-br from-pink-500/30 via-yellow-400/20 to-green-400/20 backdrop-blur-xl border border-white/10">
              <div className="mx-auto h-28 w-28 rounded-full bg-linear-to-r from-pink-500 via-yellow-400 to-green-400 flex items-center justify-center text-4xl font-bold mb-6">
                M
              </div>
              <h3 className="text-xl font-semibold text-center">Mohit Yadav</h3>
              <p className="text-gray-300 text-center mt-1">React Developer & Designer</p>

              <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-pink-400">6+</p>
                  <p className="text-sm text-gray-400">Months</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">15+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* feature cards */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Web Development',
              desc: 'Building responsive and performant web applications with React and modern tools.',
              color: 'from-pink-500 to-purple-500',
              icon: '</>'
            },
            {
              title: 'UI/UX Design',
              desc: 'Creating beautiful, intuitive interfaces that users love to interact with.',
              color: 'from-yellow-400 to-orange-500',
              icon: '🎨'
            },
            {
              title: 'Performance',
              desc: 'Optimizing applications for speed, SEO, and exceptional user experience.',
              color: 'from-sky-400 to-blue-500',
              icon: '🚀'
            },
            {
              title: 'Collaboration',
              desc: 'Working closely with clients to bring their vision to life.',
              color: 'from-pink-400 to-rose-500',
              icon: '👥'
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <div className={`h-12 w-12 rounded-xl mb-4 flex items-center justify-center bg-linear-to-r ${item.color}`}>
                <span className="text-lg font-bold">{item.icon}</span>
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
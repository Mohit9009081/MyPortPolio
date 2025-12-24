const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex  items-center justify-center bg-gray-900 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-indigo-600">Mohit</span> 👋
        </h1>
        <p className="text-xl">
          Website Designer | React Developer
        </p>
        <a href="#projects" className="hover:bg-indigo-600 border p-4  rounded-xl">
             View Projects
            </a>
      </div>
    </section>
  );
};

export default Hero;
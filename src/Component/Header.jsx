import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";


const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#140b1f] via-[#1b1f3a] to-[#2b2f1f] text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="h-9 w-9 rounded-xl bg-linear-to-r from-pink-500 to-yellow-400 flex items-center justify-center">✨</span>
            Mohit
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition">
                {link.name}
              </a>
            ))}

          </nav>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-700/50 backdrop-blur-xl  absolute right-1 px-10 py-2 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-200 hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}

          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-stretch">
          {/* LEFT */}
          <div className="lg:col-span-2 rounded-3xl p-10 bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 text-pink-400 text-sm mb-4">
              <Sparkles size={16} /> Available for work
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">Mohit Yadav</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
              Website Designer & React Developer
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl">
              I create stunning, responsive web experiences using modern technologies.
              Specializing in React, Tailwind CSS, and Node.js to build products that users love.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-linear-to-r from-pink-500 to-yellow-400 text-black font-semibold">
                View Projects
              </a>
              <button className="px-6 py-3 rounded-xl border border-white/20 flex items-center gap-2">
                <Download size={18} /> Download CV
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl  bg-linear-to-br from-pink-500/30 to-yellow-400/20 backdrop-blur-xl border border-white/10 text-center">
             <img className="rounded-3xl"  src="/mm.jpg" alt="profilephoto" />
            </div>

            <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
              <p className="mb-4 text-gray-300">Connect with me</p>
              <div className="grid grid-cols-3 gap-4">

                <a href=" https://github.com/Mohit9009081 "
                  target="_blank" className="h-14 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10"><Github /></a>

                <a href="https://www.linkedin.com/in/mohit-web-developer/"
                  target="_blank" className="h-14 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10"><Linkedin /></a>

                <a href="mailto:webmohit576@gmail.com" className="h-14 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10"><Mail /></a>

              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "6+", label: "Months Experience" },
            { value: "15+", label: "Projects Done" },
            { value: "10+", label: "Happy Clients" },
            { value: "5+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-center">
              <h4 className="text-3xl font-bold text-pink-400">{stat.value}</h4>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Header;
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer=()=> {
  return (
    <footer className="relative bg-linear-to-br from-[#0b0616] via-[#140b24] to-[#0b0616] text-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Mohit<span className="text-pink-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer specializing in modern, responsive, and
              high-performance web applications using React & Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-pink-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-pink-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Mohit9009081"
                target="_blank"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-web-developer/"
                target="_blank"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:webmohit@gmail.com"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/20 hover:text-yellow-400 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} Mohit. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-pink-400" /> using React &
            Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
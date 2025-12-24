const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gay-900 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-indigo-600">
          Mohit
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 font-medium text-white">
          <li>
            <a href="#home" className="hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
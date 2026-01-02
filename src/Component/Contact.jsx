import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact =()=> {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-linear-to-br from-[#0b0616] via-[#140b24] to-[#0b0616] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-pink-400 mb-4">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Let&apos;s work{" "}
            <span className="bg-linear-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              together
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing!
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Info Cards */}
          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="h-14 w-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">webmohit576@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="h-14 w-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 9009081718</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="h-14 w-14 rounded-2xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Narmadapuram ( M.P. ) India</p>
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-6 rounded-3xl bg-linear-to-br from-pink-500/10 to-yellow-500/10 border border-white/10">
              <p className="font-semibold mb-2">Quick Response</p>
              <p className="text-sm text-gray-400">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="enter your name"
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-pink-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Your Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-pink-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 resize-none focus:outline-none focus:border-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold bg-linear-to-r from-pink-500 via-yellow-400 to-green-400 text-black hover:opacity-90 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
export default Contact;
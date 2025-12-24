const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 mt-10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl text-white font-bold mb-4">Contact Me</h2>
        <p className="text-gray-100 mb-6">
          Let’s build something great together 🚀
        </p>
        <a
          href="mailto:your@email.com"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
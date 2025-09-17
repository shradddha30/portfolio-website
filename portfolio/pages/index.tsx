export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6"
      >
        <h2 className="text-5xl font-bold mb-4">Hello, I'm <span className="text-blue-400">shraddha</span></h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          A passionate web developer who loves building modern and responsive web applications using 
          <span className="text-blue-400"> Next.js </span> and <span className="text-green-400">Tailwind CSS</span>.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          I'm a web developer with a focus on building clean, modern, and user-friendly applications. 
          I enjoy learning new technologies and continuously improving my skills to deliver high-quality 
          projects. My goal is to create impactful web experiences that solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Kooler’s Soup Café */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Kooler’s Soup Café</h3>
            <p className="text-gray-400">
              A Café Management System with authentication, menu management, orders & billing, and reports.
              Built using PHP, MySQL, HTML, CSS, and JavaScript.
            </p>
          </div>

          {/* Portfolio Website */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400">
              Personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-gray-400">
              More exciting projects will be added here!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Interested in working together? Fill out the form below to reach out!
        </p>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 border-t border-gray-700">
        <p className="text-gray-500">© {new Date().getFullYear()} shraddha. All rights reserved.</p>
      </footer>
    </div>
  );
}

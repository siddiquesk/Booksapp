import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 mt-16">
      {/* About Me Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 text-lg">
          Hello! My name is{" "}
          <span className="font-bold text-blue-600">Sufiyan</span>, and I am a
          dedicated
          <span className="font-semibold text-gray-800">
            {" "}
            MERN stack developer
          </span>{" "}
          with a strong passion for building scalable web applications. I
          specialize in
          <span className="text-blue-600">
            {" "}
            MongoDB, Express.js, React.js, and Node.js
          </span>
          , crafting efficient, user-friendly, and high-performance
          applications.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          With an <span className="font-semibold">MCA degree</span> and a solid
          background in full-stack development, I have developed multiple
          projects, including
          <span className="text-blue-600">
            {" "}
            eCommerce platforms, chatting applications, and CRUD-based systems
          </span>
          . I enjoy solving complex problems and optimizing backend performance
          while ensuring smooth frontend experiences.
        </p>
      </section>

      {/* Skills & Expertise Section */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Skills & Expertise
        </h2>

        {/* Frontend Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Frontend Development (React.js)
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              React.js & React Router DOM – Building single-page applications
              (SPA).
            </li>
            <li>
              Context API – Using React Context instead of Redux for better
              state handling.
            </li>
            <li>Tailwind CSS – Creating modern, responsive UI.</li>
            <li>
              Component-Based Architecture – Writing reusable and optimized
              components.
            </li>
            <li>
              JWT Authentication – Implementing secure user authentication.
            </li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Backend Development (Node.js & Express.js)
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Express.js & Middleware – Handling API requests and
              authentication.
            </li>
            <li>
              Error Handling & Logging – Implementing middleware for structured
              error responses.
            </li>
            <li>JWT Authentication – Securing APIs using JSON Web Tokens.</li>
            <li>
              WebSockets – Implementing real-time chat applications using
              Socket.io.
            </li>
          </ul>
        </div>

        {/* Database & Deployment Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Database & Deployment
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>MongoDB & Mongoose – Managing NoSQL databases.</li>
            <li>
              SQL & PostgreSQL – Strong understanding of relational databases.
            </li>
            <li>
              Render, Vercel & Netlify – Deploying full-stack applications.
            </li>
            <li>Git & GitHub – Version control and repository management.</li>
          </ul>
        </div>

        {/* Additional Interests */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Additional Interests
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Machine Learning & AI – Exploring AI-driven applications.</li>
            <li>Android Development – Interest in mobile app development.</li>
            <li>
              Data Analysis – Learning Python & SQL for data-driven
              decision-making.
            </li>
          </ul>
        </div>
      </section>

      {/* Career Goals */}
      <section className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Career Goals & Future Aspirations
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Work as a Full-Stack Developer Abroad (Kuwait or other countries).
          </li>
          <li>Build scalable and secure MERN applications.</li>
          <li>
            Share knowledge through my{" "}
            <span className="font-semibold">YouTube channel</span>.
          </li>
          <li>
            Advance in AI & Machine Learning for AI-powered web solutions.
          </li>
          <li>
            Pursue a{" "}
            <span className="font-semibold">PhD in Computer Science</span> for
            deeper research.
          </li>
        </ul>
      </section>

      {/* Social Links */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Let’s Connect!
        </h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61555362342844"
              target="_blank"
              rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/siddiquesk?tab=repositories"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Sufiyan-l8p"
              target="_blank"
              rel="noopener noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sufiyan-siddique-3b48472a7/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;

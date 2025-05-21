import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-6 md:px-12 lg:px-24 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Mukesh Bala
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a 3rd-year B.Tech student and Front-End Developer with 2 years of experience, skilled in Python and Java, passionate about building responsive interfaces and writing clean, efficient code.


          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="/MUKESH 2.jpeg"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-5xl mx-auto">
            <p className="text-lg text-gray-600">
              I began my B.Tech journey in 2023 with a strong interest in building real-world tech solutions. 
              I created a Used Car Price Prediction web app using Python, Flask, and machine learning, and led the 
              Verthome project—an IoT-based smart home automation system using Python, OpenCV, ESP8266, and Android.
              I was also shortlisted at the university level for the Smart India Hackathon 2024, which strengthened my skills in teamwork and innovation.
            </p>
            <p className="text-lg text-gray-600">
              Currently, I am interning at Hebbale Academy, where I’m gaining hands-on experience in AWS cloud technologies. 
              This is helping me expand my skills in cloud infrastructure and deployment. My journey so far reflects a strong foundation in software development, 
              machine learning, IoT, and cloud computing.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Crafting responsive and visually appealing user interfaces 
              using React and modern CSS frameworks.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Building scalable server-side systems with 
              Node.js, Python, and cloud services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Designing intuitive, user-friendly interfaces with 
              a strong focus on accessibility and performance.
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Open Source Contributor
              </h3>
              <p className="text-lg text-gray-600">
                Contributing to open-source projects that enhance developer 
                experience and web technologies.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-600">
                Regularly engage with the tech community as a speaker at meetups and conferences, 
                sharing insights on web development.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Mentorship
              </h3>
              <p className="text-lg text-gray-600">
                Committed to guiding junior developers and supporting 
                their growth into confident, skilled professionals.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-pink-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Committed to lifelong learning and staying 
                updated with the latest trends in web development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I’m always eager to collaborate on innovative projects, explore fresh ideas, 
            and contribute to meaningful tech-driven solutions.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

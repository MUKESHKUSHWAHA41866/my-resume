 


import React from 'react';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="font-sans p-6 max-w-3xl mx-auto bg-gray-100">
      
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mukesh Kushwaha</h1>
        <p className="text-gray-600">Mob.n. +91 7607966847 - singhmukesh41866@gmail.com</p>
        <p className="flex justify-center items-center gap-4 text-blue-500">
          <a href="https://www.linkedin.com/in/mukesh-kushwaha-79b371227" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
            <FaLinkedin className="mr-1" /> LinkedIn
          </a> 
          | 
          <a href="https://github.com/MUKESHKUSHWAHA41866" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
            <FaGithub className="mr-1" /> GitHub
          </a>
        </p>
      </header>

       
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">EDUCATION</h2>
        <hr className="border-t-2 border-gray-400 mx-auto"/>
        <p className="text-gray-700"><strong>Rajkiya Engineering College Banda, Uttar Pradesh, India</strong></p>
        <p className="text-gray-600">B.Tech in Information Technology, CGPA: 7.5 <br /> Nov 2021 - Present</p>
      </section>

       
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">TECHNICAL SKILLS</h2>
        <hr className="border-t-2 border-gray-400 mx-auto"/>
        <p className="text-gray-700"><strong>Programming Languages:</strong> JavaScript, Python, C, C++</p>
        <p className="text-gray-700"><strong>Libraries:</strong> HTML, CSS, React.js, Node.js, Tailwind, Express.js, MongoDB</p>
        <p className="text-gray-700"><strong>Tools:</strong> VS Code, GitHub, Atom, Firebase, Git, Postman, AWS</p>
      </section>

      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">PROJECTS</h2>
        <hr className="border-t-2 border-gray-400 mx-auto"/>

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">Book Store</h3>
          <a 
            href="https://github.com/MUKESHKUSHWAHA41866/BOOK-STORE-WITH-ADMIN/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            <FaExternalLinkAlt className="ml-1" /> Project Link
          </a>
        </div>
        <ul className="list-disc list-inside text-gray-600 px-4 mb-4">
          <li>Developed a full-stack application with an admin and user interface for managing books, using React, Node.js, Express, and MongoDB.</li>
        </ul>

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">NetflixGPT Project</h3>
          <a 
            href="https://netflix-c257d.web.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            <FaExternalLinkAlt className="ml-1" /> Project Link
          </a>
        </div>
        <ul className="list-disc list-inside text-gray-600 px-4 mb-4">
          <li>Enhanced Netflix UI using React, Tailwind CSS, and Redux, added features like dynamic content loading and user authentication.</li>
        </ul>

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">Twitter Clone</h3>
          <a 
            href="https://mukeshkushwaha41866.github.io/X.github.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            <FaExternalLinkAlt className="ml-1" /> Project Link
          </a>
        </div>
        <ul className="list-disc list-inside text-gray-600 px-4 mb-4">
          <li>Built a Twitter replica with HTML, CSS, and JavaScript, focusing on front-end fundamentals.</li>
        </ul>
      </section>

      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">WORK EXPERIENCE</h2>
        <hr className="border-t-2 border-gray-400 mx-auto"/>

        <div>
          <h3 className="text-lg font-medium text-gray-800">Subject Matter Expert Freelancer - Chegg, India</h3>
          <p className="text-gray-600">Nov 2022 - Present</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Providing academic support and guidance to students as a Chemistry Subject Matter Expert.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-800">Co-Founder - Rkcoder.tech, Uttar Pradesh, India</h3>
          <p className="text-gray-600">May 2023 - Present</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Founder of Rkcoder.tech, sharing passion for coding, technology, and digital content.</li>
          </ul>
        </div>
      </section>

       
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">CERTIFICATES</h2>
        <hr className="border-t-2 border-gray-400 mx-auto"/>
        <ul className="list-disc list-inside text-gray-600">
          <li>Frontend Web Development Bootcamp: Build a Twitter Clone</li>
          <li>The Complete JavaScript Course</li>
        </ul>
      </section>

       
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">LANGUAGES</h2>
        <hr className="border-t-2 border-gray-400 mx-auto"/>
        <ul className="list-disc list-inside text-gray-600">
          <li>Hindi</li>
          <li>English</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;


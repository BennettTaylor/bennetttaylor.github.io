"use client";
import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-2xl p-6 flex flex-col cursor-pointer transform hover:scale-105 transition-transform duration-300 pop-in-div"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="tinos-400 text-xl md:text-2xl font-bold text-left mr-2">{project.title}</h2>
              {project.inProgress && (
                <span className="tinos-400 bg-red-500 text-white text-sm md:text-md font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                  In Progress
                </span>
              )}
            </div>
            <p className="tinos-400 text-md text-gray-600 mb-4">{project.timeline}</p>
            {project.image && (
              <div className="flex justify-center mb-4 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg object-cover h-48 w-full"
                />
              </div>
            )}
            <p className="tinos-400 text-gray-800 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="tinos-400 bg-lightgreen text-white text-sm md:text-md font-semibold px-2.5 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 backdrop-blur-sm p-4 items-center justify-center z-50 flex"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="tinos-400 text-3xl md:text-4xl font-bold">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-4xl font-bold text-gray-700 hover:text-lightgreen transition-colors duration-200 px-2">&times;</button>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="tinos-400 text-md text-gray-600">{selectedProject.timeline}</p>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tinos-400 text-gray-800 hover:text-lightgreen transition-colors duration-300 text-lg font-semibold"
                >
                  View on GitHub &rarr;
                </a>
              )}
            </div>
            {selectedProject.image && (
              <div className="mb-8 flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg object-cover max-h-96 w-full"
                />
              </div>
            )}
            <p className="tinos-400 text-gray-800 mb-6 text-lg">{selectedProject.detailedDescription}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedProject.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="tinos-400 bg-lightgreen text-white text-md font-semibold px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
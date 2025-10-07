import { projects } from '../data/projects';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="chicle-regular text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-2xl p-6 flex flex-col">
            <h2 className="chicle-regular text-2xl font-bold mb-2">{project.title}</h2>
            <p className="chicle-regular text-sm text-black mb-4">{project.timeline}</p>
            {project.image && (
              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg border-8 border-white object-cover"
                />
              </div>
            )}
            <p className="chicle-regular text-black mb-4 flex-grow">{project.description}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="chicle-regular text-black hover:text-lightgreen transition-colors duration-300 self-start"
              >
                View on GitHub &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
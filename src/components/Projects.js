import React from 'react';

const projectsData = [
  {
    title: 'Movie Review System',
    description: 'A System uses Machine learning concepts to review the movies',
    image: '/images/movie1.png',
    technologies: ['Python','Html','CSS','Machine-Learning'],
    githubLink: 'https://github.com/Devdarshananandhan/Movie-review-system'
  },
  {
    title: 'Numpy Workshop Project',
    description: 'A Project that uses Numpy library to perform various operations.',
    image: '/images/project2.png',
    technologies: ['Python','Html','Tailwind CSS'],
    githubLink: 'https://github.com/Devdarshananandhan/numpy_worksop'
  },
  {
    title: 'Task Management App',
    description: 'A App that uses React and Firebase to manage tasks also gives alert messages frequently with default alarm setup in it.',
    image: '/images/task-manage.png',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    githubLink: '#'
  },
  {
    title: 'Mappy',
    description: 'A Project that uses Google Maps API to display locations and to have an community chat option where the routes can be suggested.',
    image: '/images/map.png',
    technologies: ['Flutter', 'Javascript', 'Dart'],
    githubLink: '#'
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div><br></br>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
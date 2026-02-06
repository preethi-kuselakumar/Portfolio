import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'Project Coming Soon',
      description: 'An exciting project showcase. Details and live demo coming soon. Check back for updates!',
    },
    {
      id: 2,
      title: 'Project Coming Soon',
      description: 'An innovative project in development. Stay tuned for the official launch and GitHub repository link.',
    },
    {
      id: 3,
      title: 'Project Coming Soon',
      description: 'A fresh project initiative underway. Live demo and source code will be available shortly.',
    },
  ];

  const ProjectCard = ({ project }) => (
    <motion.div
      className="project-card"
      variants={itemVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-links">
        <button className="btn btn-secondary btn-sm" disabled>
          <FiExternalLink /> Live Demo
        </button>
        <button className="btn btn-secondary btn-sm" disabled>
          <FiGithub /> GitHub
        </button>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="projects"
      className="projects"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="projects-container">
        <motion.h2 className="section-title">Featured Projects</motion.h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

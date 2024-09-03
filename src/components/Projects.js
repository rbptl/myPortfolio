import React from 'react';
import '../styles/Projects.css'; // Ensure the CSS file is correctly linked

const projectsData = [
    {
        title: "SplitSmart",
        description: "Deployed Apache Tika within a full-stack application to automate expense extraction and division from Walmart PDF receipts.",
        github: "https://github.com/RBP98/extract-walmart-pdf",
        skills: ["Apache Tika", "Java", "Spring Boot", "React"]
    },
    {
        title: "FullStack DevOps Pipeline",
        description: "Developed and deployed a CI/CD pipeline integrating Docker, AWS, Kubernetes, and Jenkins.",
        github: "https://github.com/yourusername/fullstack-devops",
        skills: ["Docker", "AWS", "Kubernetes", "Jenkins"]
    },
    {
        title: "Hearts",
        description: "Designed a secure multiplayer card game using Spring Boot and Angular with TLS encryption.",
        github: "https://github.com/yourusername/secured-hearts",
        skills: ["Spring Boot", "Angular", "TLS", "JavaScript"]
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <a key={index} href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
                        <div className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-skills">
                                {project.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag-in-projects">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;

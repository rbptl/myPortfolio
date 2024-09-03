import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/Skills.css';

const skillsData = {
    "Programming Languages": ["Java", "Python"],
    "Web Technologies": ["JavaScript", "HTML", "CSS", "Angular", "React"],
    "Frameworks": ["Spring Boot", "Spring Data JPA", "JUnit", "Mockito"],
    "Databases": ["MySQL", "PostgreSQL", "Oracle"],
    "DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins", "Maven", "Git", "ArgoCD", "Helm", "Rancher"],
    "Security Tools": ["Burp Suite", "OWASP ZAP", "Fortify", "SonarQube"],
    "Tools and IDEs": ["IntelliJ", "Eclipse", "VS Code", "Android Studio", "Postman", "Katalon Studio", "Jupyter Notebook"]
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring', stiffness: 100
        }
    }
};

const Skills = () => {
    const { ref, inView } = useInView({
        // triggerOnce: true, // Only trigger this once
        threshold: 0.2 // Trigger when 30% of the component is in view
    });

    return (
    <div className="skills-container" ref={ref}>
            <h2>Skills</h2>
            {Object.entries(skillsData).map(([category, skills]) => (
                <motion.div
                    key={category}
                    className="skill-category"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    
                    <h3>{category}</h3>
                    <motion.div className="skill-tags">
                        {skills.map(skill => (
                            <motion.span key={skill} className="skill-tag" variants={itemVariants}>
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            ))}

        </div>
    );
};

export default Skills;

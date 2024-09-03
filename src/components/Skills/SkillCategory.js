// SkillCategory.js
import React from 'react';
import SkillIcon from './SkillIcon';

const SkillCategory = ({ title, skills, color, icons }) => {
    return (
        <div className="skill-category" style={{ backgroundColor: color }}>
            <h3>{title}</h3>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={skill}>
                        <SkillIcon icon={icons[index]} />
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillCategory;

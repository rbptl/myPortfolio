// TimelineElement.js
import React from 'react';
import "../../styles/Timeline.css";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function TimelineElement({ role, company, dates, description, location, skills }) {
  const getIcon = () => {
    if (role.includes("Software Engineer") || role.includes("Security") || role.includes("Analyst")) return <FaBriefcase />;
    if (role.includes("BE") || role.includes("MS")) return <FaGraduationCap />;
  };

  return (
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: "7px solid #edc7b7"}}
      className="vertical-timeline-element--work"
      location={location}
      date={dates}
      icon={getIcon()}
      
    >
      <h3 className="vertical-timeline-element-title">{role} - {company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{description}</p>
      <div className="timeline-skills">
        {skills.map(skill => (
          <span key={skill} className="skill-tag-in-timeline">{skill}</span>
        ))}
      </div>

    </VerticalTimelineElement>
  );
}

export default TimelineElement;

// TimelineElement.js
import React from 'react';
import "../../styles/Timeline.css";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase, FaGraduationCap, FaUserTie } from 'react-icons/fa';

function TimelineElement({ role, company, dates, description, location }) {
  const getIcon = () => {
    if (role.includes("Engineer") || role.includes("Security") || role.includes("Analyst")) return <FaBriefcase/>;
    if (company.includes("University")) return <FaGraduationCap />;
    if (role.includes("Chairperson")) return <FaUserTie />;
  };

  return (
    <VerticalTimelineElement
    
      className="vertical-timeline-element--work"
      location={location}
      date={dates}
      icon={getIcon()}
      contentArrowStyle={{ borderRight: "7px solid #edc7b7" }}
    >
      <h3 className="vertical-timeline-element-title">{role} - {company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}

export default TimelineElement;

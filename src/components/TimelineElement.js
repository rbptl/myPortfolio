import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase, FaGraduationCap, FaUserTie } from 'react-icons/fa';

function TimelineElement({ role, company, dates, description }) {
  const getIcon = () => {
    if (role.includes("Engineer") || role.includes("Security")) return <FaBriefcase />;
    if (role.includes("MS") || role.includes("B.E.")) return <FaGraduationCap />;
    if (role.includes("Chairperson")) return <FaUserTie />;
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={dates}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={getIcon()}
    >
      <h3 className="vertical-timeline-element-title">{role} - {company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{dates}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}

export default TimelineElement;

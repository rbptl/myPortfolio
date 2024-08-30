import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

function Timeline() {
  return (
    <section id="timeline">
      <h2>Professional Timeline</h2>
      <VerticalTimeline>
        <TimelineElement
          role="Software Engineer"
          company="OurCode"
          dates="Aug 2024 - Present"
          description="Developed proof of concept for features in the flagship product, ActiveDocumentation. Evaluated and enhanced open-source projects using React."
        />
        <TimelineElement
          role="Software Engineer & Security Advisor"
          company="Tata Consultancy Services"
          dates="Jun 2019 - Jul 2022"
          description="Transformed legacy applications into microservices architecture, led security enhancements, and developed automated testing scenarios. Mentored 25 associates, boosting team productivity."
        />
        <TimelineElement
          role="Business Analyst"
          company="Tata Consultancy Services"
          dates="Jun 2019 - Feb 2020"
          description="Optimized Agile SDLC workflows, improving project delivery and team efficiency."
        />
        <TimelineElement
          role="MS in Computer Science"
          company="George Mason University"
          dates="Aug 2022 - May 2024"
          description="Achieved a cumulative GPA of 3.97/4.00, focusing on secure software programming and data mining."
        />
        <TimelineElement
          role="B.E. in Computer Engineering"
          company="University of Mumbai"
          dates="Jul 2015 - May 2019"
          description="Completed a Bachelor of Engineering in Computer Engineering."
        />
        <TimelineElement
          role="Chairperson"
          company="Computer Society of India, University of Mumbai"
          dates="May 2018 - Apr 2019"
          description="Led a team of 70+ students in organizing technical events, significantly boosting participation and engagement."
        />
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;

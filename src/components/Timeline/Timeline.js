
import '../../styles/Timeline.css'; // Adjust the path if the CSS file is not in the same directory

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

function Timeline() {
  return (
    <section className="timeline section">
      <h2>Professional Timeline</h2>
      <VerticalTimeline lineColor =  {"#123C69"}>
        <TimelineElement
          role="Software Engineer"
          company="OurCode"
          dates="Aug 2024 - Present"
          description="Developed proof of concept for features in the flagship product, ActiveDocumentation."
          location="Fairfax, Virginia, United States"
          skills={["React", "Java"]}
        />
        <TimelineElement
          role="MS in Computer Science"
          company="George Mason University"
          dates="Aug 2022 - May 2024"
          location = "Fairfax, Virginia, United States"
          skills={["Java", "SpringBoot", "MySQL", "AWS", "Kubernetes", "Docker", "Rancher", "Helm", "Python"]}
        />
        <TimelineElement
          role="Software Engineer"
          company="Tata Consultancy Services"
          dates="Jun 2019 - Jul 2022"
          description="Transformed legacy applications into microservices architecture, led security enhancements."
          location="Mumbai, Maharashtra, India"
          skills={["Java", "Primefaces", "OracleDB", "MySQL"]}
        />
        <TimelineElement
          role="Security Advisor"
          company="Tata Consultancy Services"
          dates="Feb 2021 - Jul 2022"
          description="Transformed legacy applications into microservices architecture, led security enhancements."
          location="Mumbai, Maharashtra, India"
          skills={["Java", "Fortify", "Burp Suite", "OWASP ZAP"]}
        />
         <TimelineElement
          role="Business Analyst"
          company="Tata Consultancy Services"
          dates="Jun 2019 - Feb 2020"
          description="Optimized Agile SDLC workflows, improving project delivery and team efficiency."
          location = "Mumbai, Maharashtra, India"
          skills={["Katalon Studio"]}
        />
        <TimelineElement
          role="BE in Computer Engineering"
          company="University of Mumbai"
          dates="Jul 2015 - May 2019"
          location = "Mumbai, Maharashtra, India"
          skills={["Java", "Android Studio", "VS Code"]}
        />
        {/* Additional TimelineElements as needed */}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;

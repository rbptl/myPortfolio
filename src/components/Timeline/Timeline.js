
import '../../styles/Timeline.css'; // Adjust the path if the CSS file is not in the same directory

import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

function Timeline() {
  return (
    <section className="timeline">
      <h2>Professional Timeline</h2>
      <VerticalTimeline lineColor =  {"var(--heading-and-text-color)"}>
        <TimelineElement
          role="Software Engineer"
          company="OurCode"
          dates="Aug 2024 - Present"
          description="In my recent role, I actively contributed to the innovation of our flagship product, ActiveDocumentation, by brainstorming and developing solutions using React. This initiative not only enhanced the product’s functionality but also involved evaluating and refining the tool across various open-source projects. During this process, I identified and resolved key issues, opening up further opportunities for product enhancement and ensuring it met the evolving needs of our users."
          location="Fairfax, Virginia, United States"
          skills={["React", "Java"]}
        />
        <TimelineElement
          role="MS in Computer Science"
          company="George Mason University"
          description="Relevant Coursework: Component Based Software Development, Secure Software Programmming, Decision Guidance"
          dates="Aug 2022 - May 2024"
          location = "Fairfax, Virginia, United States"
          skills={["Java", "SpringBoot", "MySQL", "AWS", "Kubernetes", "Docker", "Rancher", "Helm", "Python"]}
        />
        <TimelineElement
          role="Software Engineer"
          company="Tata Consultancy Services"
          dates="Jun 2019 - Jul 2022"
          description="As a committed Software Engineer, I played a key role in upgrading a legacy Java application to a modern microservices architecture using Spring Boot and Angular, enhancing customer satisfaction by 80%. I was instrumental in developing and integrating over 150 unit tests that fully automated the CI/CD pipeline via Jenkins, significantly streamlining deployment processes. My efforts in database management included transitioning to an Alfresco repository, which freed substantial system resources and boosted performance by 40%. I also participated in mentoring 25 associates and designed over 120 automated test scenarios with Katalon Studio, markedly reducing manual testing and enhancing release efficiency.
"
          location="Mumbai, Maharashtra, India"
          skills={["Java", "Primefaces", "OracleDB", "MySQL"]}
        />
        <TimelineElement
          role="Security Advisor"
          company="Tata Consultancy Services"
          dates="Feb 2021 - Jul 2022"
          description="In my role as a Software Engineer, I tackled critical security threats, using tools such as Fortify and SonarQube to address and mitigate vulnerabilities in over four enterprise applications. This effort ensured near-perfect compliance with industry security standards and fortified our defenses. Additionally, I conducted detailed quarterly penetration tests on four applications using Burp Suite and OWASP ZAP, which significantly reduced potential vulnerabilities and enhanced our security infrastructure by 30%.
"
          location="Mumbai, Maharashtra, India"
          skills={["Java", "Fortify", "Burp Suite", "OWASP ZAP"]}
        />
         <TimelineElement
          role="Business Analyst"
          company="Tata Consultancy Services"
          dates="Jun 2019 - Feb 2020"
          description="Optimized Agile SDLC workflows, improving project Refined project management practices within Agile frameworks, enhancing clarity and execution of user requirements and driving a 25% improvement in key performance indicators through more effective daily leadership and tool usage.
delivery and team efficiency."
          location = "Mumbai, Maharashtra, India"
          skills={["Agile"]}
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

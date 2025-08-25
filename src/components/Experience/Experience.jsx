import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

import LTIMindtreeLogo from "../../assets/img/LTIMindtreeLogo.jpg";
import USTLogo from "../../assets/img/USTGlobalLogo.png";
import RBCCPSLogo from "../../assets/img/RBCCPSLogo.png";
import VosynLogo from "../../assets/img/vosyn_logoBg.png";

const experiences = [
  {
    title: "Lead Developer",
    duration: "Jul 2025 – Present",
    logo: VosynLogo,
  },
  {
    title: "Data Engineer",
    duration: "Mar 2025 – July 2025",
    logo: VosynLogo,
  },
  {
    title: "Senior Software Engineer",
    duration: "Oct 2021 – Jul 2023",
    logo: LTIMindtreeLogo,
  },
  {
    title: "Graduate Engineer Trainee",
    duration: "Jul 2021 – Oct 2021",
    logo: LTIMindtreeLogo,
  },
  {
    title: "Internship Trainee",
    duration: "Jun 2020 – Jul 2020",
    logo: USTLogo,
  },
  {
    title: "Intern",
    duration: "May 2019 – Jul 2019",
    logo: RBCCPSLogo,
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience Timeline</h2>
        <div className="horizontal-timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <img
                  src={exp.logo}
                  alt="Company Logo"
                  className="company-logo"
                />
                <h3>{exp.title}</h3>
                <p className="timeline-date">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

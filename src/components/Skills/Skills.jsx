import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import "./Skills.css";

const skills = [
  {
    category: "Languages",
    items: [
      "C++",
      "Java",
      "Python",
      "SQL",
      "Kotlin",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "React", "Angular", "Redux", "Vite"],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "Spring Boot",
      "Kafka",
      "Apache Spark",
    ],
  },
  {
    category: "Databases",
    items: [
      "MySQL",
      "SQL Server",
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "Firebase",
    ],
  },
  { category: "Cloud Platforms", items: ["AWS (EC2)", "Azure"] },
  {
    category: "DevOps & CI/CD",
    items: ["GitLab", "Jenkins", "GitHub Actions"],
  },
  { category: "Testing", items: ["JUnit", "Selenium"] },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Explore my skills in development, databases, cloud, and more.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                containerClass="custom-carousel-container"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <h5>{skill.category}</h5>
                    <ul>
                      {skill.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default Skills;

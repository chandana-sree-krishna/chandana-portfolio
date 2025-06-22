import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css"; // Import CSS for styling

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-Stack Development",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "UI/UX & Frontend",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-Stack Development",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "UI/UX & Frontend",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my projects showcasing expertise in full-stack
                    development, data visualization, machine learning, and more.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Data Visualization
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* 
                        <Row>
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>

                        */}
                        <p>
                          I'm currently building and hosting new full-stack
                          applications. Stay tuned — projects will be live
                          within the next week!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* 
                        <Row>
                          {projects.slice(3, 6).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        */}
                        <p>
                          Data dashboards and visual storytelling projects are
                          on the way. Stay tuned — launching in the next few
                          days!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Machine learning experiments and models are in
                          progress. New content coming soon — stay tuned!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img//profile-removebg-preview.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Data Engineer", "Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Chandana Sree Krishna`}</h1>
                  <h2 className="rotating-text">
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate={JSON.stringify(toRotate)}
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    I am currently a Lead Developer - Data Engineer with a
                    Master’s in Computer Science and 2 years of professional
                    experience. My passion lies in designing and building
                    scalable data pipelines, ETL processes, and data-driven
                    solutions that empower business decisions. Alongside data
                    engineering, I also have hands-on experience as a Full-Stack
                    Developer, which gives me a strong understanding of
                    end-to-end application development and deployment. I thrive
                    on solving complex data challenges, optimizing workflows,
                    and continuously learning new technologies. I am open to
                    opportunities primarily in Data Engineering, while also
                    welcoming roles that leverage my full-stack development
                    background.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

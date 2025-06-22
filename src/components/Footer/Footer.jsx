import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/csk_logo.svg";
import gitHubIcon from "../../assets/img/icons8-github.svg";
import linkedInIcon from "../../assets/img/icons8-linkedin.svg";
import phoneIcon from "../../assets/img/icons8-phone-64.png";
import emailIcon from "../../assets/img/icons8-email-64.png";
import "./Footer.css"; // Import CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
              <a
                href="https://github.com/chandana-sree-krishna"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my GitHub"
              >
                <img src={gitHubIcon} alt="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/chandana-sree-krishna"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my LinkedIn"
              >
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <a href="tel:+18077074208" title="Call +1 8077074208">
                <img src={phoneIcon} alt="Phone" />
              </a>
              <a
                href="mailto:sreekrishnachandana@gmail.com"
                title="Send email to sreekrishnachandana@gmail.com"
              >
                <img src={emailIcon} alt="Email" />
              </a>
            </div>
          </Col>
        </Row>
        <p>
          © {new Date().getFullYear()} All Rights Reserved | Designed and
          Developed by Chandana Sree Krishna
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

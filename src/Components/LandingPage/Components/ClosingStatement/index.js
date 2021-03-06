import React from "react";
import "./ClosingStatement.css";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Arrow from "./Arrow.svg";
const ClosingStatement = () => {
  const history = useHistory();
  return (
    <div className="closing" id="contact">
      <Container>
        <Row>
          <Col lg="6" xs="12">
            <div className="web-body">Winners take action</div>
            <div className="web-subheading">
              Last chance to enrol and turn your grades around. Don't miss out.
            </div>
          </Col>
          <Col lg="6" xs="12">
            <img src={Arrow} alt="arrow" id="arrow-img" />
            <ScrollAnimation animateIn="animate__zoomIn" animateOnce>
              <button
                className="btn enroll-btn d-flex justify-content-center align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/register");
                }}
              >
                <div className="web-subtitle text-white">Enroll now</div>
              </button>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation animateIn="animate__zoomIn" animateOnce>
          <div className="close-rect"></div>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default ClosingStatement;

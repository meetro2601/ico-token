import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Infocards } from "./Infocards";
import './About.css'

function About() {
  return (
    <Container fluid className="px-0 py-5">
      <Container className="py-5">
        <Row>
          <Col lg={6} className="mt-3">
            <h1 className="mb-4 abtHeader">Why Invest ICO TOKEN ?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col lg={6} className="mt-4">
            <Row>
              {Infocards.map((item) => {
                return (
                  <Col sm={6} className="mb-4">
                    <div
                      key={item.id}
                      className="text-center infopaper"
                    >
                      <img src={item.image} alt={item.para}></img>
                      <p className="mb-0 mt-2">{item.para}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

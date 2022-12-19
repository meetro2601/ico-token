import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./faq.css";
import {Questions} from "./Ques";

function FAQ() {
  return (
    <Container fluid className="py-5 px-0 text-center">
      <Container>
        <h1 className="mainTitle mb-5 py-2">Frequently Asked Question</h1>
        <div className="col-lg-8 mx-auto">
          <Accordion defaultActiveKey={1}>
            {Questions.map((item) => {
              return (
                <Accordion.Item t key={item.id} className="py-2 px-4 my-1" eventKey={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </Container>
  );
}

export default FAQ;

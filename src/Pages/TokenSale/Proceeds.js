import React from "react";
import { Row, Col } from "react-bootstrap";
import chart2 from "../../images/chart2.png";
import { FaCircle } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Proceeds() {
  return (
    <div className="container py-5">
      <h2 className="mainTitle text-center py-2 my-5">Use of Proceeds</h2>
      <Row>
        <Col md={6} className="pt-4 my-auto">
          <Fade left>
            <img src={chart2} className='w-100' alt="proceeds"></img>
          </Fade>
        </Col>
        <Col md={6} className=" pt-4">
          <ul className="chart2List">
            <Fade bottom>
              <li>
                <FaCircle fill="#fd6742" className="mb-1 me-3" />
                25% Branding and Marketing
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <FaCircle fill="#ffc856" className="mb-1 me-3" />
                20% Gift Code Invemtory
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <FaCircle fill="#90d661" className="mb-1 me-3" />
                20% Legal & Financial Overhead
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <FaCircle fill="#47cbff" className="mb-1 me-3" />
                15% IT Infastructure
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <FaCircle fill="#4a77f6" className="mb-1 me-3" />
                10% Bounty & Overhead
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <FaCircle fill="#1c4aa1" className="mb-1 me-3" />
                5% Management
              </li>
            </Fade>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Proceeds;

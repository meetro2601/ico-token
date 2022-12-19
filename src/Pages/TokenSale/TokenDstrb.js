import React from "react";
import ring2 from "../../images/ring2.png";
import MediaQuery from "react-responsive";
import { Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'

function TokenDstrb() {
  return (
    <div className="container text-center  py-5 ">
      <h2 className="mainTitle py-2 mb-5">Distribution of Token</h2>
      <Row className='py-4'>
        <MediaQuery minWidth={1010}>
          <Col xs={12} xl={10} className='position-relative mx-auto'>
              <Flash>
            <img src={ring2} alt="distribution of token"></img></Flash>
            <Fade left>
            <div className="chartTipOne">
              <span className="label">
                <h3>10%</h3>
                <p>Tokens Presale</p>
              </span>
              <span className="arrow"></span>
            </div></Fade>
            <Fade left>
            <div className="chartTipTwo">
              <span className="label">
                <h3>15%</h3>
                <p>Bonus Fund</p>
              </span>
              <span className="arrow"></span>
            </div></Fade>
            <Fade left>
            <div className="chartTipThree">
              <span className="label">
                <h3>30%</h3>
                <p>Partners And Advisors</p>
              </span>
              <span className="arrow"></span>
            </div></Fade>
            <Fade right>
            <div className="chartTipFour">
              <span className="arrow text-start"></span>
              <span className="label">
                <h3>40%</h3>
                <p>Core Phase of Tokens Sale</p>
              </span>
            </div></Fade>
            <Fade right>
            <div className="chartTipFive">
              <span className="arrow"></span>
              <span className="label">
                <h3>5%</h3>
                <p>Bounties</p>
              </span>
            </div></Fade>
          </Col>
        </MediaQuery>
        <MediaQuery maxWidth={1009}>
          <Col className='my-auto'>
          <Flash>
            <img className="py-3 w-100" src={ring2} alt="distribution of token"></img></Flash>
          </Col>
          <Col className='chart'>
            <ul className="labelList my-3">
                <Fade left>
              <li>
                <h3>10%</h3>
                <p>Tokens Presale</p>
              </li></Fade>
              <Fade left>
              <li>
                <h3>15%</h3>
                <p>Bonus Fund</p>
              </li></Fade>
              <Fade left>
              <li>
                <h3>30%</h3>
                <p>Partners And Advisors</p>
              </li></Fade>
              <Fade right>
              <li>
                <h3>40%</h3>
                <p>Core Phase of Tokens Sale</p>
              </li></Fade>
              <Fade right>
              <li>
                <h3>5%</h3>
                <p>Bounties</p>
              </li></Fade>
            </ul>
          </Col>
        </MediaQuery>
      </Row>
    </div>
  );
}

export default TokenDstrb;

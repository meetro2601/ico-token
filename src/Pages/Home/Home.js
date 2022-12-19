import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Timer from "../../Components/Timer/Timer";
import "./Home.css";
import {CgFacebook, CgGoogle} from 'react-icons/cg'
import {ImLinkedin2, ImPinterest, ImTwitter, ImYoutube2} from 'react-icons/im'
import { IconButton } from "@material-ui/core";

function Home() {
  return (
    <Container fluid className="home px-0">
      <Container className="py-5">
        <Row className="py-5">
          <Col lg={12} className="text-center py-5">
            <div className="mb-5">
              <h1>Crypto Trading for <span>Everyone</span></h1>
              <p className="fs-5">
                Token sale is live! 15% discount until March 7th (2pm UTC)
              </p>
            </div>
            <div className='home-timer'>
            <Timer></Timer></div>
            <div className="mx-auto col-lg-6 col-md-8 col-10">
              <div className="d-flex justify-content-between">
                <span>$5m</span>
                <span>$85m</span>
              </div>
              <ProgressBar
                className="my-2"
                now={50}
                variant="warning"
              ></ProgressBar>
              <div className="d-flex justify-content-between">
                <span>Softcap in 2458 days</span>
                <span>Hardcap</span>
              </div>
            </div>
            <button className="my-5 homeBtn">Join & Buy Token Now</button>
            <div className='social'>
              <IconButton  color="inherit">
                <CgFacebook/>
              </IconButton>
              <IconButton  color="inherit">
                <ImLinkedin2 />
              </IconButton>
              <IconButton  color="inherit">
                <ImTwitter/>
              </IconButton>
              <IconButton  color="inherit">
                <ImYoutube2/>
              </IconButton>
              <IconButton  color="inherit">
                <CgGoogle/>
              </IconButton>
              <IconButton  color="inherit">
               <ImPinterest/>
              </IconButton>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;

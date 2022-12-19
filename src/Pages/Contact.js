import { IconButton } from "@material-ui/core";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaDribbble, FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import icon15 from "../images/icon15.png";
import icon16 from "../images/icon16.png";
import icon17 from "../images/icon17.png";

function Contact() {
  return (
    <Container fluid className="px-0 py-5">
      <Container className="py-5 text-center">
        <h1 className="mb-5 py-2">Have Some Questions?</h1>
        <Row className='py-2 offset-1'>
          <Col xs={4}>
            <img src={icon15} alt="address"></img>
            <p className='py-3'>
              ICO TOKEN 555 Madison Avenue, Suite F-2 Manhattan, New York 10282
            </p>
          </Col>
          <Col xs={3}>
            <img src={icon16} alt="phone"></img>
            <p className='m-0 pt-3'>Call us</p>
            <p className='pb-3'>0934 343 343</p>
          </Col>
          <Col xs={3}>
            <img src={icon17} alt="email"></img>
            <p className='m-0 pt-3'>Email</p>
            <p className='pb-3'>info@token.com</p>
          </Col>
        </Row>
        <div className='py-4'>
            <IconButton>
                <FaFacebookF fill='white'/>
            </IconButton>
            <IconButton>
                <FaInstagram fill='white'/>
            </IconButton>
            <IconButton>
                <FaPinterest fill='white'/>
            </IconButton>
            <IconButton>
                <FaDribbble fill='white'/>
            </IconButton>
            <IconButton>
                <FaTwitter fill='white'/>
            </IconButton>
            <IconButton>
                <FaGoogle fill='white'/>
            </IconButton>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;

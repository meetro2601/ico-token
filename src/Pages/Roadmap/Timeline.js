import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Timeline.css";
import Fade from "react-reveal/Fade";

const years = [2014,2015,2016,2017,2018,2019,2020]

function Timeline({ slider1, slider2 }) {
  const [navs, setnavs] = useState({
    nav1: null,
    nav2: null,
  });

  useEffect(() => {
    setnavs({
      nav1: slider1,
      nav2: slider2,
    });
  }, [slider1, slider2]);

  return (
    <>
      <div className="py-5">
        <Slider
          asNavFor={navs.nav1}
          ref={(slider) => (slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          className="yearSlider"
        >
          {
            years.map((item)=>{
              return (
                <div className='yearDiv'>
                  <p>{item}</p>
                  </div>
              )
            })
          }
        </Slider>
      </div>
      <div className="pt-5">
        <Slider
          asNavFor={navs.nav2}
          ref={(slider) => (slider1 = slider)}
          className="overflow-hidden"
        >
          
          {
            years.map((item)=>{
             return (
<Row className=" eventslide">
            <Col className='p-0' xs={12} sm={3} md={2}>
              <Fade bottom>
                <div className="event">
                  <div className="clr e1"></div>
                  <h4>March 2018</h4>
                  <p>Start of the ICO Token Platform.</p>
                </div>
              </Fade>
            </Col>
            <Col className='p-0' xs={12} sm={3} md={2}>
              <Fade bottom>
                <div className="event">
                  <div className="clr e2"></div>
                  <h4>June 2018</h4>
                  <p>Launch of mobile Apps</p>
                </div>
              </Fade>
            </Col>
            <Col className='p-0' xs={12} sm={3} md={2}>
              <Fade bottom>
                <div className="event">
                  <div className="clr e3"></div>
                  <h4>October 2018</h4>
                  <p>Start Token Sale Round (1)</p>
                </div>
              </Fade>
            </Col>
            <Col className='p-0' sm={12} md={2}>
              <Fade bottom>
                <div className="event">
                  <div className="clr e4"></div>
                  <h4>December 2018</h4>
                  <p>Partnership for the future EcoSystem</p>
                </div>
              </Fade>
            </Col>
            <Col className='p-0' sm={12} md={2}>
              <Fade bottom>
                <div className="event">
                  <div className="clr e5"></div>
                  <h4>May 2019</h4>
                  <p>Priority opening for Token holder</p>
                </div>
              </Fade>
            </Col>
          </Row>
             )
            })
          }
        </Slider>
      </div>
    </>
  );
}

export default Timeline;

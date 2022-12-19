import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../images/logo.png";
import logoc from "../../images/logoc.png";
import { Navlist } from "./Navlist";
import {FiMenu} from 'react-icons/fi'
import MediaQuery from "react-responsive";
import {Link} from 'react-scroll'

const Navtabs = styled.ul`
  list-style: none;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
`;

const NavMenu = styled.nav`
  background: #111860;
  color: white;
  font-size: 14px;
  list-style: none;
  padding: 25px;
  width: 250px;
  text-transform: uppercase;
  height: 100vh;
  transition: 1s;
  position: fixed;
  top: 0px;
  left: ${(props) => props.theme.menuToggle};

  li {
    margin: 25px;
  }
`;

NavMenu.defaultProps = {
  theme: {
    menuToggle: "-250px",
  },
};
const openNav = {
  menuToggle: "0px",
};

function Header() {
  const [scrolled, setscrolled] = useState(false);
  const [menuShow, setmenuShow] = useState(false);

  const scrollfunction = ()=>{
    if(window.scrollY > 50){
      setscrolled(true)
    }else{
      setscrolled(false)
    }
  }

  window.addEventListener('scroll',scrollfunction)

  return (
    <Container fluid className="px-0 position-fixed top-0 left-0 head">
      <MediaQuery maxWidth={1183}>
        {scrolled ? (
          <header className="px-5 py-4 m-0 d-flex justify-content-between bg-white align-items-center">
            <Link offset={-100} to={'home'} spy={true} smooth={true}><img src={logoc} id="logo" alt="logoc" width="190px"></img></Link>
            <button className="menuBtn" onClick={() => setmenuShow(!menuShow)}>
              <FiMenu/>
            </button>
          </header>
        ) : (
          <header className="p-5 m-0 d-flex justify-content-between align-items-center">
            <img src={logo} id="logo" alt="logo" width="190px"></img>
            <button className="menuBtn" onClick={() => setmenuShow(!menuShow)}>
              <FiMenu/>
            </button>
          </header>
        )}
        <NavMenu theme={menuShow ? openNav : ""}>
        {Navlist.map((item) => {
          return <li key={item.id}><Link activeClass='menuActive' offset={item.offset} to={item.to} spy={true} smooth={true}>{item.tab}</Link></li>;
        })}
      </NavMenu>
      </MediaQuery>
      <MediaQuery minWidth={1184}>
        {scrolled ? (
          <header className="px-5 py-4 m-0 d-flex justify-content-between bg-white align-items-center">
            <Link offset={-100} to={'home'} spy={true} smooth={true}><img src={logoc} id="logo" alt="logoc" width="190px"></img></Link>
            <Navtabs className="d-flex gap-4 align-items-center m-0 navtabs">
              {Navlist.map((item) => {
                return <li key={item.id}><Link activeClass='tabActive' offset={item.offset} to={item.to} spy={true} smooth={true}>{item.tab}</Link></li>;
              })}
            </Navtabs>
          </header>
        ) : (
          <header className="p-5 m-0 d-flex justify-content-between align-items-center">
            <img src={logo} id="logo" alt="logo" width="190px"></img>
            <Navtabs className="d-flex gap-4 align-items-center m-0">
            {Navlist.map((item) => {
                return <li key={item.id}><Link activeClass='tabActive' offset={item.offset} to={item.to} spy={true} smooth={true}>{item.tab}</Link></li>;
              })}
            </Navtabs>
          </header>
        )}
      </MediaQuery>
      
    </Container>
  );
}

export default Header;

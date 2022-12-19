import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import bgImg from "./images/p5.png";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/Home/Home";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Token from "./Pages/TokenSale/Token";
import { Element } from "react-scroll";

function App() {

  window.addEventListener('load',()=>{
    window.scrollTo(0,0)
  })

  const [scrollBtn, setscrollBtn] = useState(false)

  window.addEventListener('scroll',()=>{
    if(window.scrollY > 250){
      setscrollBtn(true)
    }
    else{
      setscrollBtn(false)
    }
  })

  const scrollUpfnc = ()=>{
    window.scrollTo(0,0)
  }

  return (
    <>
      <img src={bgImg} className="bgImg" alt="background"></img>
      {
        scrollBtn ? <button onClick={()=>scrollUpfnc()} className='scrollUpBtn'>Scroll Up</button> : null
      }
      <Header />
      <Element id="home">
        <Home />
      </Element>
      <Element id="ico">
        <About />
      </Element>
      <Element id="sale">
        <Token />
      </Element>
      <Element id="roadmap">
        <Roadmap />
      </Element>
      <Element id="faq">
        <FAQ />
      </Element>
      <Element id="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;

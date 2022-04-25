import React, {useEffect, useState} from "react"
import "./style/style.css"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import { Link } from "react-scroll"

const Home = () => {
  

  return (
    <div className="App" id="Home">
   <header>
     <div className="header-container">
      <div className="header-flex">
        <div className="intro-text">
          <h1 className="first-intro">Hi, I'm <span>Axel</span></h1>
          <h1 className="second-intro">I am a front end web developer</h1>
        </div>
       <div className="header-btn">
         <Link to="AboutMe" 
         spy={true} 
         smooth={true} 
         duration={500} style={{ textDecoration: 'none' }}> <button className="enter-btn">GET TO KNOW ME</button></Link> 
         <Link to="Projects" 
         spy={true} 
         smooth={true} 
         duration={500} style={{ textDecoration: 'none' }}> <button className="enter-btn">MY PROJECTS</button></Link> 
       </div>
      </div>
     </div>
   </header>
 </div>
  );
}

export default Home;

import React from "react"
import "./style/navBar.css"
import { Link } from 'react-scroll';
import logoR from "./media/logoR.png";

const NavBar = () => {


    return (<nav className="navBarContainer">
    <Link activeClass="active" 
    to="Home" 
    spy={true} 
    smooth={true} 
    duration={500} style={{ textDecoration: 'none'}}>
    <img className="logoR" src={logoR} alt="logo"></img></Link>
    <ul className="navBarUl">
    <Link activeClass="active" 
    to="Home" 
    spy={true} 
    smooth={true} 
    duration={500} style={{ textDecoration: 'none'}}> <li className="navLi">Home</li> </Link> 
    <Link activeClass="active" 
    to="AboutMe" 
    spy={true} 
    smooth={true} 
    duration={500}
    style={{ textDecoration: 'none' }}> <li className="navLi">About</li> </Link> 
    <Link activeClass="active" 
    to="Projects" 
    spy={true} 
    smooth={true} 
    duration={500} style={{ textDecoration: 'none'}}><li className="navLi">Projects</li></Link>
    <Link activeClass="active" 
    to="footer" 
    spy={true} 
    smooth={true} 
    duration={500} style={{ textDecoration: 'none'}}><li className="navLi">Contact</li></Link>
    </ul>
</nav>)
}

export default NavBar
import "./style/aboutMe.css"
import jest from "./media/jestLogo.png"
import webpack from "./media/webpack.png"
import ex from "./media/ex.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faHtml5, faCss3, faJs, faReact, faGitAlt, faGithub, faNpm, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons'
import TypeWriterEffect from 'react-typewriter-effect';
import { useEffect } from "react"
import React, { useRef } from "react"
import { useInView } from 'react-intersection-observer'

const iconHtml = <FontAwesomeIcon className="iconBrand htmlLogo" icon={faHtml5} />
const iconCss = <FontAwesomeIcon className="iconBrand cssLogo" icon={faCss3} />
const iconJs = <FontAwesomeIcon className="iconBrand jsLogo" icon={faJs} />
const iconReact = <FontAwesomeIcon className="iconBrand reactLogo" icon={faReact} />
const iconGithub = <FontAwesomeIcon  className="iconBrand githubLogo" icon={faGithub} />
const iconGit = <FontAwesomeIcon className="iconBrand gitLogo" icon={faGitAlt} />
const iconNpm = <FontAwesomeIcon className="iconBrand npmLogo" icon={faNpm} />
const iconUser = <FontAwesomeIcon className="userIcon" icon={faUser} />
const iconNode = <FontAwesomeIcon className="iconBrand nodeLogo" icon={faNodeJs} />
const iconSass = <FontAwesomeIcon className="iconBrand sassLogo" icon={faSass} />

const AboutMe = () => {

    return (<div className="container-aboutMe" id="AboutMe">
        <h3 className="aboutMe-title">ABOUT ME</h3>
           <div className="intro-box">
           {iconUser}
            <p className="para-intro">After my degree in Japanese foreign languages, literatures and civilizations, I decided to learn code. And I was immediately hooked. Coming from a literature degree it was very fun to be in an environment with languages again, obviously programming languages are a bit different! I also immediately liked the atmosphere of the world of programming and coding, there is a lot of mutual support and sharing, it's something that I really appreciate.</p>
            <h3 className="skills-title">MY SKILLS</h3>
            <div className="skill-box">
               <div>{iconHtml} HTML </div>
               <div>{iconCss} CSS</div>
               <div>{iconJs} JAVASCRIPT</div>
               <div>{iconReact} REACT</div>
               <div>{iconSass} SASS</div>
               <div>{iconNpm} NPM</div>
               <div><img className="logoSkill" src={webpack} alt="webpack"></img> WEBPACK</div> 
               <div>{iconGithub} GITHUB</div>
               <div>{iconGit} GIT</div>
               <div><img className="logoSkill" src={jest} alt="jest"></img> JEST</div> 
            </div>
        </div>
   
    </div>)
}


export default AboutMe
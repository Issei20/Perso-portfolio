import React, { useRef, useState } from "react"
import "./style/myProjects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import weatherImg from "./media/weatherImg.png"
import ochaImg from "./media/ochaImg.png"
import fyloImg from "./media/fyloImg.png"

const iconGithub = <FontAwesomeIcon className="iconBrand githubLogoPrev" icon={faGithub} />

const Projects = () => {
  function createProject(id, name, descr, image, tech, repo, preview) {
    return {  id: id, 
      name: name,
      descr: descr,
      image: image,
      tech: tech,
      repo: repo,
      preview: preview,
    }
  }

  const darkLandingPage = createProject(1, "Fylo", "A dark theme landing page, I replicated this landing page from the Fylo Dark Landing Challenge.", fyloImg, ["REACT", "CSS", "JAVASCRIPT", "RESPONSIVE"], "https://github.com/Issei20/dark-landing-page", "https://issei20.github.io/dark-landing-page/")
  const ocha = createProject(2, "Ocha", "A fictional tea shop website where the user can add products, change the quantity of merchandise and remove products from the cart.", ochaImg, ["REACT", "SASS", "JAVASCRIPT", "RESPONSIVE"], "https://github.com/Issei20/ocha", "https://issei20.github.io/ocha/")
  const weatherApp = createProject(3, "Weather App", "A weather website using the  API OpenWeather, where the user can search the current weather of a location.", weatherImg, ["REACT", "SASS", "JAVASCRIPT", "RESPONSIVE"], "https://github.com/Issei20/weather-app", "https://issei20.github.io/weather-app/")

  const [myProjects, setMyProjects] = useState([darkLandingPage, ocha, weatherApp])


  function renderProjects() {
    return (myProjects.map(myProject => {
      return (
      <div className="project-card">
        <div className="project-card-descr">
          <img className="previewImgProject" src={myProject.image} alt="preview"></img>
          <div className="descr-card-myProject">
          <h3 className="title-myProject">{myProject.name}</h3>
          <p className="descr-myProject">{myProject.descr}</p>
          <div className="project-links">
          <a href={myProject.repo} className="iconGithubPrev">{iconGithub}</a>
          <a href={myProject.preview}><button className="previewLiveBtn">LIVE PREVIEW</button></a>
          </div>
       
          <div className="tech-div">
          {myProject.tech.map(techno => {
            switch(techno) {
              case "REACT":
              return (
              <div className= "techno" style={{color: "#61dafb"}}>{techno}</div>
              )
              case "SASS":
              return (
                <div className= "techno" style={{color: "#c69"}}>{techno}</div>
              )
              case "JAVASCRIPT":
              return (
                  <div className= "techno" style={{color: "#ffe600"}}>{techno}</div>
              )
              case "CSS":
              return (
                    <div className= "techno" style={{color: "#3d8fc6"}}>{techno}</div>
              )
              default: return <div className="techno" style={{color: "rgb(238, 74, 74)"}}>{techno}</div>;
            }
          })}
          </div>
        </div>
        </div>
    </div>)
     
    }))
  }
  
    return (<div  className="container-projects" id="Projects">
        <h3 className="projects-title">MY PROJECTS</h3>
        <div className="myProjects">{renderProjects()}</div>
    </div>)
}


export default Projects
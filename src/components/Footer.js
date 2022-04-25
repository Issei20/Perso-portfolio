import React from 'react'
import "./style/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const iconGithub = <FontAwesomeIcon className="iconContact githubLog" icon={faGithub} />
const iconLinkedin = <FontAwesomeIcon className="iconContact linkedinLog" icon={faLinkedin} />
const iconMail = <FontAwesomeIcon className="mailLog" icon={faEnvelope} />

const Footer = () => {

    return ( <footer id="footer">
        <h2 className="contact-title">CONTACT</h2>
        <p className="feelFree">Please feel free to contact me</p>
        <div className="links-contact">
        <a href="https://github.com/Issei20">{iconGithub}</a>
        <a href="https://www.linkedin.com/in/axel-rodrigues-44266a234">{iconLinkedin}</a>
        <p className="contact-mail">{iconMail} <span>rodrigues.axel42@gmail.com</span></p>
        </div>
        </footer> )

}
export default Footer
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"

import "./components/style/style.css"

const RouteSwitch = () => { 
    
    return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/Perso-portfolio" element={<Home/>} />
      </Routes>
      <AboutMe/>
      <Projects/>
      <Footer/>
      
    </BrowserRouter>
  );
};

export default RouteSwitch;
import HeroImgStyles from "./HeroImgStyles.css";
import React from 'react'
import img from "../assets/Img.png"
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
    <img className="into-img" src={img} alt="HeroImg"/>

        </div>
        <div className="content">
          <p>Hi, I'm a Front-End Developer.</p>  
          <h1>React Developer.</h1>
          <div>
            <Link to="/projects">
            <button className="btn">Projects</button>

            </Link>
             <Link to="/contact">
            <button className="btn-light">Contact</button>
            
            </Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
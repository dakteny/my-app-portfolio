import React from 'react'
import "./AboutContentStyles.css";
import { Link } from 'react-router-dom';
import react from "../assets/Img1.png";
import react1 from "../assets/Img6.png";

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me</h1>
            <p>Am a FullStack software developer dealing with both FrontEnd and BackEnd websites development. I have a good knowledge of HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB, and MySQL. I ha
            ve a good knowledge of building responsive websites and web applications. I have a good knowledge of building RESTful APIs and integrating them with the frontend. I have a good knowledge of building authentication and authorization systems. I have a good knowledge of building real-time applications using Socket.io. I have a good knowledge of deploying applications on cloud platforms like Heroku and Netlify.
            </p>
            <Link to="/contact">
           <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className='img-container'>
                <div className='img-stack top'>
                <img src={react} className='img' alt='true'/> 
                </div>
                <div className='img-stack bottom'>
                <img src={react1} className='img' alt='true'/> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent;
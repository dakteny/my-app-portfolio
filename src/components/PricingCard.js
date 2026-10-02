import "./PricingCardStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
        <div className="card">
         <h3>Basics....</h3>
         <span className="bar"></span>
         <p className="btc">$ 100-150 $</p>
         <p>4 Days -</p>
          <p>3 Pages -</p>
           <p>Featured -</p>
            <p>Responsive web design -</p>
            <Link to="contact" className="btn">
            Purchase Now
            </Link>
        </div>
         <div className="card">
         <h3>Premium....</h3>
         <span className="bar"></span>
         <p className="btc">$ 150-200 $</p>
         <p>5 Days -</p>
          <p>2 Pages -</p>
           <p>Featured -</p>
            <p>Responsive web design -</p>
            <Link to="contact" className="btn">
            Purchase Now
            </Link>
        </div>
         <div className="card">
         <h3>Business....</h3>
         <span className="bar"></span>
         <p className="btc">$ 200-300 $</p>
         <p>5 Days -</p>
          <p>8 Pages -</p>
           <p>Featured -</p>
            <p>Responsive web design -</p>
            <Link to="contact" className="btn">
            Purchase Now
            </Link>
        </div>
    
        </div>
    </div>
  )
}

export default PricingCard;
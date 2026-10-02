import React from 'react'
import Navbar from '../components/Navbar.js';
import HeroImg from '../components/HeroImg.js';
import Footer from '../components/Footer.js';
import Work from '../components/Work.js';

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Work />
       <Footer />
    </>
  )
}
export default Home;
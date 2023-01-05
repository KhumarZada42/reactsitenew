import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './About.scss'
function About() {
  return (
    <>
    <div className='aboutME'>
    <Navbar/>
   <div className='aboutTxt'>
    <h1>About Me</h1>
    <p>This is what I do</p>
   </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import './Cleanblog.scss'
function Cleanblog() {
  return (
    <div className='homePage'>
    <Navbar/>
    <div className='mainTxt'>
    <h1>Clean Blog</h1>
    <p>Blog Theme by Start Bootstrap</p>
    </div>
    <div className='rightBTNDIV'><button className='rightBTN'>TRY LOGGING IN</button>
    </div>
    </div>
  )
}

export default Cleanblog
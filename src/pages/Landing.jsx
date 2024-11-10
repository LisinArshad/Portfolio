import React from 'react'
import Aboutme from '../components/Aboutme'
import './Landing.css'
import Cards from '../components/Cards'

function Landing() {
  return (
    <>
<div className='hhh'>
  <div class="portfolio">

          <div class="text-section">
              <h1>Hii, I'm Lisin Arshad</h1>
              <p>Web Developer</p>
            <a style={{textDecoration:'none'}} href="#abouty">
                <button class="about-button fw-bold rounded-5">
                <i className="fa-solid fa-user fw-bold" /> About Me
                </button></a>
             
          </div>

          <div class="image-section">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s" alt="Profile Image"/>
          </div>

  </div>
</div>

<Aboutme/>
<Cards />
    </>
  )
}

export default Landing
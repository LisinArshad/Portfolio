import React from 'react'
import './About.css'

function Aboutme() {
  return (
    <>
  <div className='body' id='abouty'>
        <div class="about-section">
        <h2 className='text-center'>About Me</h2>
        <p style={{textAlign:"justify"}}>
            Hi! I'm <strong>Lisin Arshad</strong>, a passionate <strong>web developer</strong> with a knack for creating dynamic, user-friendly websites. With expertise in HTML, CSS, JavaScript, and various frameworks, I transform ideas into responsive, visually appealing designs. I thrive on solving complex problems and continuously learning the latest technologies to deliver exceptional results. My goal is to build web experiences that not only meet client needs but also engage and delight users. Let’s connect and bring your vision to life!
        </p>
        <div class="social-icons">
            <a href="#"><i className="fa-brands fa-github fa-xl" style={{color: "#000000",}}/></a>
            <a href="#"><icon className="fa-brands fa-linkedin fa-xl" /></a>
        </div>
    </div>
  </div>

    </>
    
  )
}

export default Aboutme
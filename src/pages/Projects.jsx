import React from 'react'
import './Project.css'

function Projects() {
  return (
    <div className='container mt-5 p-3'>
      <div className='text-center'>
        <h1>Projects</h1>
      </div>
      <div className='project-container mt-5 mb-5'>
         <div className='project-card border shadow p-3'>
            <img src="https://play-lh.googleusercontent.com/FA_rzaEeLlumm0qh68q3z5Pt-PGMVPf2Z28_pbega7SaXSiKjSzh-0MZceB3FpdvQIBq" alt="" />
            <h3 className='mt-3'>Flipkart Clone</h3>
            <p style={{textAlign:'justify'}}>I developed a clone of Flipkart's web interface using HTML, CSS, and Bootstrap. The project includes a responsive layout with a navigation bar, product grid, and footer, capturing the visual essence of the popular e-commerce platform. This project demonstrates my skills in front-end development and responsive design, as well as my ability to recreate a complex UI using HTML and CSS frameworks</p>
            <a href=" https://lisinarshad.github.io/Flipkart-clone1/" className='text-center'><button className='btn btn-warning rounded-5'>Live View</button></a>
         </div>
         <div className='project-card border shadow p-3'>
         <img src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?t=st=1728200283~exp=1728203883~hmac=cbaaefd0fe0e4446dc2b900faf8cf02bcbeea466a76077ff8ac9831cf7b3e954&w=826" alt="" />
            <h3 className='mt-3'>E-Cart</h3>
            <p className='mb-5' style={{textAlign:'justify'}}> Created an e-cart website using HTML, CSS, React, and Redux, featuring a responsive product listing and cart functionality with efficient state management. This project highlights my skills in modern front-end development and state handling with Redux</p>
            <a href="https://e-kart-ebon.vercel.app/" className='text-center'><button style={{marginTop:'38px'}} className='btn btn-warning rounded-5'>Live View</button></a>
         </div>
         <div className='project-card border shadow p-3'>
         <img src="https://www.pnbmetlife.com/content/dam/pnb-metlife/images/icons/bmi-calculator/meter.png" alt="" />
            <h3 className='mt-3'>BMI Calculator</h3>
            <p className='mb-5' style={{textAlign:'justify'}}>Developed a BMI calculator using HTML, CSS, JavaScript, and React. The application allows users to input their weight and height to calculate their Body Mass Index, providing an interactive and responsive user experience.</p>
            <a href="https://bmi-clac.vercel.app/" className='text-center'><button style={{marginTop:'60px'}} className='btn btn-warning rounded-5'>Live View</button></a>
         </div>
      </div>
    </div>
  )
}

export default Projects
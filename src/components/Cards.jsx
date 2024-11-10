import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <>
    <div className='cardss container mt-4'>
    <h1 className='text-center fw-bold'>Skills & Abilities</h1>
    <div className="skills-container mt-5 mb-5">
        <div className="skill-card border shadow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s" alt="HTML"/>
            <h3 className='mt-3'>HTML-5</h3>
        </div>
        <div className="skill-card border shadow">
            <img  src="https://portfolio2-blond-nine.vercel.app/assets/css-BIYoBLwf.png" alt="CSS"/>
            <h3 className='mt-3'>CSS-3</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/bootstrap-U0mFlNvq.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Bootstrap</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/tailwind-CsNnhWfk.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Tailwind</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/js-DCNatSkb.png"/>
            <h3 className='mt-3'>Javascript</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/react-B6JjmdU-.png" alt="Bootstrap"/>
            <h3 className='mt-3'>React-Js</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/redux-_4_4Q1Jd.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Redux</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/angular-MFA0M3gM.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Angular</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/node-POhtnmGE.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Node-Js</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://portfolio2-blond-nine.vercel.app/assets/express-DbERXsex.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Express.js</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="https://img.icons8.com/color/200/mongodb.png" alt="Bootstrap"/>
            <h3 className='mt-3'>Mongo-DB</h3>
        </div>
        <div className="skill-card border shadow">
            <img src="data:image/png;base64,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" alt="Bootstrap"/>
            <h3 className='mt-3'>Git</h3>
        </div>
        </div>
    </div>
    </>
  )
}

export default Cards
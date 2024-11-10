import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import './bootstrap.min.css'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App

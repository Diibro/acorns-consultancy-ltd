import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Services  from './Services/Services';
//import ContactUs from './ContactUs/ContactUs';
import Projects from './Projects/Projects'


const MainComponents = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  )
} 

export default MainComponents;
import React from 'react';
import {IoMdCall} from 'react-icons/io';
import {FiMessageSquare} from 'react-icons/fi';
import {FaFacebookF, FaPinterestP} from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import Logo from '../Images/companyIcon.jpeg';
import ContactUs from '../ContactUs/ContactUs';
import { useState } from 'react';
import {GiCrossedBones} from 'react-icons/gi';




const ContactBar  = () =>{
  return(
    <div className='ContactBar'>
        <div className='QuickContact'>
          <dl>
            <div className='Col'>
              <dt><i className='green'><IoMdCall/></i></dt>
              <dd>+250-780-867-765</dd>
            </div>
            <div className='Col'>
              <dt><i className='wood'><FiMessageSquare/></i></dt>
              <dd>acornsconsultancy@gmail.com</dd>
            </div>
          </dl>
        </div>
        <div className='SocialMedia'>
          <span><i><BsInstagram/></i></span>
          <span><i><AiOutlineLinkedin/></i></span>
          <span><i><FaPinterestP/></i></span>
          <span><i><FaFacebookF/></i></span>
        </div>
    </div>
  )
}

const NavBar = () =>{

  const [display, setDisplay] = useState('displayNotMe');

  function DisplayMe() {
    if(display === 'displayNotMe'){
      setDisplay('displayMe');
    }
    else if(display === 'displayMe'){
      setDisplay('displayNotMe')
    }
  }

  return(
    <div className='MainNavBar'>
      <div className='CompanyLogo'>
        <div className='Logo'>
          <img src={Logo} alt="our-logo" />
        </div>
        <div className='title'><h2>Acorns Consultancy Ltd</h2></div>
      </div>
      <div className='Navbar'>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li className='ContactUs' onClick={DisplayMe}>Contact Us</li>
        </ul>
      </div>
      <div className={display}>
        <div className='toggleButton'><i onClick={DisplayMe}><GiCrossedBones/></i></div>
        <div className='border'><ContactUs/></div>
        
      </div>
      
    </div>
  )
}

const Header = () => {
  return (
    <div className='Header'>
      <ContactBar />
      <NavBar/>
    </div>
  )
}

export default Header;
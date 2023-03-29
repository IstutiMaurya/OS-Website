import React from 'react'
import AboutPage from './AboutPage'
import './NavbarOfHome.css'
function NavbarOfHome() {
  return (
    <div className='NavbarOfHome'>
        <img src="OSlogoR.png" alt="LOGO" className='Navlogo' />
        <ul className='navbar'>
            <li><a href="/">HOME</a></li>
            <li><a href="AboutPage.jsx">ABOUT US</a></li>
            <li><a href="/">PROJECTS</a></li>
            
        </ul>
    </div>
  )
}

export default NavbarOfHome
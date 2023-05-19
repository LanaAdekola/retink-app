import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineMenu} from 'react-icons/ai'


const Header = () => {
  return (
    <div className='header'>
      <div className='header-list-container'>
        <div>
          <img src= {LOGO} className='logo' alt='logo' />
        </div>
        <section className='section-header'>
          <a className='header-caps-text' href='#'>Home</a>
          <a className='header-caps-text' href='#'>About</a>
          <a className='header-caps-text' href='#'>Contact Us</a>
          <a className='header-caps-text' href='#'>FP</a>
        </section>
      </div>
      <div>
        <h1 className='english header-caps-text'>English<RiArrowDropDownLine/></h1>
      </div>
      <div className='menu-hamburger'>
        <AiOutlineMenu/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header
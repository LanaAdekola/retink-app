import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div>
          <img src= {LOGO} className='logo' />
        </div>
    </div>
  )
}

export default Header
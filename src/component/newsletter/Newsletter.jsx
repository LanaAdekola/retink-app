import React from 'react'
import './newsletter.css'

const newsletter = () => {
  return (
    <div className='newsletter-wrapper'>
          <h4 className='sign-up-text sign-up'>Sign Up for The BETA to See More!</h4>
          <input 
            type='text' 
            placeholder='Business Name'
            className='newsletter-input'/>     
          <input 
            type='text' 
            placeholder='Email Address'
            className='newsletter-input' />
          <button className='normal-btn'>Notify Me</button>
          <button className='sign-btn light-btn'><a>Sign Up as Freelance Partner</a></button>
    </div>
  )
}

export default newsletter
import React from 'react'
import './info.css'
import AVATAR from '../../assets/avatar.png'

const Info = () => {
  return (
    <div className='wrapper'>
      <div className='info-first-container'>
        <div className='info-second-container'>
          <h2 className='ai-text' >Get Advanced Ai + Expert Created <small className='box b1 swipe-text'></small></h2>
          <p className ='text info-text'>Boost your sales <span>10x faster </span>with contentcustomized by our unique partnership of <span>human creativity and AI optimization.</span></p>
          <h4 className='sign-up'>Sign Up for The BETA!</h4>
          <p className='text'><input className='info-input' type='text' placeholder='Business Name'/> would like a beta invite to <input className='info-input' type='text' placeholder='Email Address'/>when it's ready!</p>
          <div className='btn'>
            <button className='normal-btn'>Notify Me</button>
            <button className='light-btn'>Sign Up as Freelance Partner</button>
          </div>
        </div>
        <div className='space'>
          <img className='av' src= {AVATAR} />
        </div>
      </div>
    </div>
  )
}

export default Info
import React from 'react'
import './info.css'
import AVATAR from '../../assets/avatar.png'

const Info = () => {
  return (
    <div className='info-first-container'>
      <div>
        <h2 className='ai-text' >Get Advanced Ai + Expert Created</h2>
        <h2 className='swipe-text'>Logos</h2>
        <p className ='info-text'>Boost your sales <span>10x faster</span>with contentcustomized by our unique partnership of <span>human creativity and AI optimization.</span></p>
        <h4>Sign Up for The BETA</h4>
        <p><input type='text' placeholder='Business Name'/> would like a beta invite to <input type='text' placeholder='Email Address'/>when it's ready</p>
        <div className='btn'>
          <button className='normal-btn'>Notify Me</button>
          <button className='light-btn'>Sign Up as Freelance Partner</button>
        </div>
      </div>
      <div>
        <img className='av' src= {AVATAR} />
      </div>
    </div>
  )
}

export default Info
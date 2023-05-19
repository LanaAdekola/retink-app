import React from 'react'
import './video.css'

const Video = () => {
  return (
    <div className='video-container'>
      <h1 className='h1 video-text'>Retink Content Solution for Your Business</h1>
      <div className='video'>
        <iframe 
          src='https://www.youtube.com/embed/u1wprFtkMLg'>
        </iframe>
      </div>
    </div>
  )
}

export default Video
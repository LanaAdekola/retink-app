import React from 'react'
import './video.css'

const Video = () => {
  return (
    <div className='video-container'>
      <h1>Retink Content Solution for Your Business</h1>
      <div className='video'>
        <iframe 
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
        </iframe>
      </div>
    </div>
  )
}

export default Video
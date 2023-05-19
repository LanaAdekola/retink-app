import React from 'react'
import './details.css'
import D1 from '../../assets/d1.png'
import D2 from '../../assets/d2.png'
import D3 from '../../assets/d3.png'
import D4 from '../../assets/d4.png'
import D5 from '../../assets/d5.png'

const Details = () => {
  return (
    <div className=' details-container'>
      <div className="details-container-wrapper">
        <article>
          <img className='details-icon' src= {D1} />
          <div className="details-text-wrapper">
            <h2 className='details-h2-text'>Make AI-assisted Content Choices and Make it Human</h2>
            <h4 className='details-h4-text'>Access and order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best human- content for your business.</h4>
          </div>
        </article>
      </div>
      <div className="details-container-wrapper">
        <article>
          <img className='details-icon' src= {D2} />
          <div className="details-text-wrapper">
            <h2 className='details-h2-text'>Upload and Maintain Your Brand Identity</h2>
            <h4 className='details-h4-text'>Add your preferences and brand assets to ensure the content is consistent with your brand identity. No brand asset? We can make it for you!</h4>
          </div>
        </article>
      </div>
      <div className="details-container-wrapper">
        <article>
          <img className='details-icon' src= {D3} />
          <div className="details-text-wrapper">
            <h2 className='details-h2-text'>Be Informed as We Create</h2>
            <h4 className='details-h4-text'>Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.</h4>
          </div>
        </article>
      </div>
      <div className="details-container-wrapper">
        <article>
          <img className='details-icon' src= {D5} />
          <div className="details-text-wrapper">
            <h2 className='details-h2-text'>Receive and Review</h2>
            <h4 className='details-h4-text'>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</h4>
          </div>
        </article>
      </div>
      <div className="details-container-wrapper">
        <article>
          <img className='details-icon' src= {D4} />
          <div className="details-text-wrapper">
            <h2 className='details-h2-text'>Publish and Monitor Your Contents' Progress</h2>
            <h4 className='details-h4-text'>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</h4>
          </div>
        </article>
      </div>
    </div>
  )
}
export default Details
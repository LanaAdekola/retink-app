import React from 'react'
import './footer.css'
import LOGO from '../../assets/logo.png'
import {BsFacebook, BsYoutube, BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container' >
        <section className='section-footer'>
          <div>
             <a className='footer-logo' href='#'><img  src={LOGO}/></a>
          </div>
          <a className='footer-right-text' href='#'>Get Early Access</a>
          <a className='footer-right-text' href='#'>Provide Feedback</a>
        </section>
        <section className='section-footer'>
          <a className='footer-caps-text' href='#'>ABOUT</a>
          <a className='footer-caps-text' href='#'>CONTACT US</a>
          <a className='footer-caps-text' href='#'>IMPRINT</a>
          <a className='footer-caps-text' href='#'>FP</a>
        </section>
        <section className='sections-socials'>
          <h1 className='footer-p-text'>CONNECT</h1>
          <div className='socials-container'>
            <a href='#' target='_blank'><BsFacebook /></a>
            <a href='#' target='_blank'><BsTwitter /></a>
            <a href='#' target='_blank'><BsInstagram/></a>
            <a href='#' target='_blank'><BsLinkedin/></a>
            <a href='#' target='_blank'><BsYoutube/></a>
            <a href='#' target='_blank'><BsPinterest/></a>
          </div>
        </section>
      </div> 
      <div className="footer__copyright">
            <strong>Copyright &copy; 2023 Retink. </strong>
            <div className='policy-container'>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Terms of Service</a>
              <a href='#'>Cookies Policy</a>
            </div>
      </div>
    </div>
  )
}

export default Footer
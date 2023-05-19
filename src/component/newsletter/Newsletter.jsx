import React, { useState } from 'react'
import './newsletter.css'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import AuthDetails from './AuthDetails';

const Newsletter = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword (auth, email, password)
        .then ((userCredential) =>{
          console.log(userCredential);
        }).catch((error) => {
          console.log(error);
        })
    }

  return (
    <form className='newsletter-wrapper'>
          <h4 className='sign-up-text sign-up'>Sign Up for The BETA to See More!</h4>
          <input 
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Business Name'
            className='newsletter-input'/>     
          <input 
            type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
            className='newsletter-input' />
          <button type='submit' className='normal-btn'>Notify Me</button>
          <button  onSubmit={signIn} type='submit' className='sign-btn light-btn'><a>Sign Up as Freelance Partner</a></button>
          <AuthDetails />
    </form>
  )
}

export default Newsletter
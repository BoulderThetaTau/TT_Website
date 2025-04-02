import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* if you don't want the video, comment out the video tag below */}
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted />  */}
      <h1 style={{marginTop: '1.5rem', lineHeight: '4rem'}}
      className='text-6xl slim:text-4xl mobile:text-center leading-loosed tracking-wide px-4 font-bold'>THETA TAU ETA GAMMA CHAPTER</h1>
      <p className='text-3xl slim:text-xl mx-5 mobile:mx-8'>The Co-Ed Professional Engineering Fraternity at the University of Colorado - Boulder</p>
      <div className='hero-btns'>
        <Button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        to='/about'
        >
            ABOUT
        </Button>
        <Button className='btns slim:mb-4'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        to='https://thetatau.org'
        >
          NATIONALS
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

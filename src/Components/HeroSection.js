import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* if you don't want the video, comment out the video tag below */}
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted />  */}
      <h1>THETA TAU ETA GAMMA CHAPTER</h1>
      <p>The Engineering Fraternity at the University of Colorado - Boulder</p>
      <div className='hero-btns'>
        <Button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            ABOUT
        </Button>
        <Button className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

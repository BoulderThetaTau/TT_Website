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
      <h1>THETA TAU ETA GAMMA CHAPTER</h1>
      <p>The Co-Ed Professional Engineering Fraternity at the University of Colorado - Boulder</p>
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
          <Link to='https://thetatau.org' style={{textDecoration: 'none', color: 'black'}}>NATIONALS</Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

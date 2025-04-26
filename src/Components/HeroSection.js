import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1
        style={{marginTop: '1.5rem'}}
        className='text-5xl sm:text-4xl mobile:text-2xl xs:text-xl text-center leading-tight tracking-wide px-2 font-bold'
      >
        THETA TAU ETA GAMMA CHAPTER
      </h1>
      <p className='text-2xl sm:text-xl mobile:text-base xs:text-sm mx-2 mt-2 text-center'>
        The Co-Ed Professional Engineering Fraternity at the University of Colorado - Boulder
      </p>
      <div className='hero-btns flex flex-col items-center gap-3 mt-4 w-full px-2 mb-6'>
        <Button
          className='btns w-full max-w-xs text-base mobile:text-sm'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/about'
        >
          ABOUT
        </Button>
        <Button
          className='btns w-full max-w-xs text-base mobile:text-sm'
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

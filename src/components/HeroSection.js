import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      
      <h1>BUILD YOUR DREAM WITH <span>PASSION</span></h1>
     
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          KNOW MORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import heroImg from '../assets/restauranfood.jpg';

function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-wrapper'>
        <div className='text-container'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We area family owned restaurant, focused on traditional recipes
            served with a modern twist.
          </p>
          <Link to='/book'>
            <button className='reserve-button'>Reserve a Table</button>
          </Link>
        </div>
        <div className='image-container'>
          <img src={heroImg} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Hero;

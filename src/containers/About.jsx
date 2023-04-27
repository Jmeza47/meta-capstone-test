import React from 'react';
import './About.css';
import img from '../assets/Mario and Adrian A.jpg';

function About() {
  return (
    <div className='about-container'>
      <div className='about-wrapper'>
        <h2>About</h2>
        <div className='about-cont'>
          <div className='img'>
            <div className='img-container'>
              <img src={img} alt='image' />
            </div>
          </div>

          <div className='text-container'>
            <h4>Little Lemon</h4>
            <p>
              In Little Lemon, we believe that great food brings people
              together. Our restaurant is dedicated to serving only the freshest
              ingredients and providing a warm and inviting atmosphere for our
              customers. Our chefs draw inspiration from a variety of culinary
              traditions to create unique and delicious dishes that are sure to
              delight your taste buds. Whether you're looking for a cozy dinner
              with friends, a romantic date night, or a fun family outing,
              Little Lemon has something for everyone. Come join us and
              experience the magic of our little corner of the culinary world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

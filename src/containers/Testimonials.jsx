import React from 'react';
import './Testimonials.css';
import TestimonialCard from '../components/testimonialCard/testimonialCard';
import imageOne from '../assets/stefan-stefancik-QXevDflbl8A-unsplash.jpg';
import imageTwo from '../assets/png-transparent-woman-happiness-smile-black-woman-love-microphone-face.png';
import imageThree from '../assets/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.avif';

function Testimonials() {
  return (
    <div className='testimonials-cont'>
      <h2>Testimonials</h2>
      <div className='card-container'>
        <TestimonialCard
          image={imageOne}
          name='Rachel'
          rating='I loved the food at Little Lemon! The lemon chicken was so flavorful and the service was amazing.'
        />
        <TestimonialCard
          image={imageOne}
          name='Susan'
          rating='I loved the food at Little Lemon! The lemon chicken was so flavorful and the service was amazing.'
        />
        <TestimonialCard
          image={imageOne}
          name='Emily'
          rating='I loved the food at Little Lemon! The lemon chicken was so flavorful and the service was amazing.'
        />
      </div>
    </div>
  );
}

export default Testimonials;

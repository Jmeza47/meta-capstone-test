import React from 'react';

function TestimonialCard({ image, name, rating }) {
  return (
    <div className='testimonialCard'>
      <h3>Rating</h3>
      <div className='image-name'>
        <img src={image} alt='' />
        <h4>{name}</h4>
      </div>
      <p>{rating}</p>
    </div>
  );
}

export default TestimonialCard;

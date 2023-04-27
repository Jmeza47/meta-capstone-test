import React from 'react';

function CardItem({ image, heading, text, price }) {
  return (
    <div class='card'>
      <img src={image} alt='Food image' />
      <div class='container'>
        <h3>{heading}</h3>
        <p>{text}</p>
        <p className='price'>{price}</p>
        <p className='order'>Order a delivery</p>
      </div>
    </div>
  );
}

export default CardItem;

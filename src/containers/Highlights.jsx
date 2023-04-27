import React from 'react';
import CardItem from '../components/card/CardItem';
import Salad from '../assets/Traditional-Greek-Salad-recipe-Horiatiki-Xoriatiki-1-scaled.jpg';
import Bruschetta from '../assets/download.jpg';
import Dessert from '../assets/lemon dessert.jpg';
import './Highlights.css';

function Highlights() {
  return (
    <div className='highlights-container'>
      <div className='heading-btn'>
        <h2>This weeks specials</h2>
        <button className='menu-btn'>Online Menu</button>
      </div>
      <div className='card-container'>
        <CardItem
          image={Salad}
          heading='Greek Salad'
          text='Greek salad, combination of fresh vegetables, herbs, and feta cheese, dressed with olive oil and lemon juice.'
          price='$12.99'
        />
        <CardItem
          image={Bruschetta}
          heading='Bruschetta'
          text='Our Bruschetta is made from grilled bread that has been smeared with garilic and seasoned with salt and olive oil.'
          price='$5.99'
        />
        <CardItem
          image={Dessert}
          heading='Lemon Dessert'
          text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          price='$7.99'
        />
      </div>
    </div>
  );
}

export default Highlights;

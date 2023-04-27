import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo -svg.png';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSearchLocation,
  FaPhone,
  FaMailBulk,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <img src={Logo} alt='' />
          <p>
            We area family owned restaurant, focused on traditional recipes
            served with a modern twist..
          </p>
          <div className='social'>
            <a href='' target='_blank'>
              <FaFacebook
                size={30}
                style={{ marginRight: '1rem', color: '#fff' }}
              />
            </a>
          </div>
        </div>

        <div className='right'>
          <div className='location'>
            <FaSearchLocation size={30} style={{ marginRight: '2rem' }} />
            <div>
              <p>Illinois 32</p>
              <h4>Chicago, United States</h4>
            </div>
          </div>

          <div className='phone'>
            <FaPhone size={30} style={{ marginRight: '2rem' }} />
            <p>(+773) 973 3008</p>
          </div>

          <div className='mail'>
            <FaMailBulk size={30} style={{ marginRight: '2rem' }} />
            <p>littleLemon@gamil.com</p>
          </div>
        </div>
      </div>

      <div className='footer-down'>
        <p>Little Lemon © 2022</p>
      </div>
    </div>
  );
}

export default Footer;

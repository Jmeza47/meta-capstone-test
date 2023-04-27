import React, { useState } from 'react';
import './Reservation.css';

function Reservation() {
  const [formValues, setFormValues] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', formValues);
    // Return the form data object here
    return formValues;
  };

  return (
    <div className='res-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formValues.name}
          onChange={handleChange}
          pattern='[A-Za-z]{3,12}'
          title='Full name must be between 3 and 12 letters, and can only contain english letters'
          required
        />

        <label htmlFor='date'>Date:</label>
        <input
          type='date'
          id='date'
          name='date'
          value={formValues.date}
          onChange={handleChange}
          title='Date is a required field'
          required
        />

        <label htmlFor='time'>Time:</label>
        <input
          type='time'
          id='time'
          name='time'
          value={formValues.time}
          onChange={handleChange}
          title='Time must be between 5:00pm and 10:00pm'
          min='17:00'
          max='22:00'
          required
        />

        <label htmlFor='guests'>Number of guests:</label>
        <input
          type='number'
          id='guests'
          name='guests'
          value={formValues.guests}
          title='Number of guests must be at least 1'
          min={1}
          max={10}
          onChange={handleChange}
          required
        />

        <label htmlFor='occasion'>Occasion:</label>
        <select
          id='occasion'
          name='occasion'
          value={formValues.occasion}
          title='Select an occasion'
          onChange={handleChange}
        >
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>

        <button type='submit'>Submit reservation</button>
      </form>
    </div>
  );
}

export default Reservation;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reservation from '../src/containers/Reservation';

describe('Reservation', () => {
  test('renders all form elements', () => {
    render(<Reservation />);

    const nameInput = screen.getByLabelText(/full name/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/submit reservation/i);

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('validates input when submitted', () => {
    render(<Reservation />);

    const nameInput = screen.getByLabelText(/full name/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeInput = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/submit reservation/i);

    fireEvent.change(nameInput, { target: { value: 'a' } });
    fireEvent.blur(nameInput);
    expect(nameInput).toHaveAttribute(
      'title',
      'Full name must be between 3 and 12 letters, and can only contain letters'
    );

    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.blur(dateInput);
    expect(dateInput).toHaveAttribute('title', 'Date is a required field');

    fireEvent.change(timeInput, { target: { value: '16:00' } });
    fireEvent.blur(timeInput);
    expect(timeInput).toHaveAttribute(
      'title',
      'Time must be between 5:00pm and 10:00pm'
    );

    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.blur(guestsInput);
    expect(guestsInput).toHaveAttribute(
      'title',
      'Number of guests must be at least 1'
    );

    fireEvent.change(occasionSelect, { target: { value: '' } });
    fireEvent.blur(occasionSelect);
    expect(occasionSelect).toHaveAttribute('title', 'Select an occasion');

    fireEvent.submit(submitButton);
    expect(console.log).toHaveBeenCalledWith('Form submitted');
  });
});

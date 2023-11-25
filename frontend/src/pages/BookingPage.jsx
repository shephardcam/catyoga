import React, { useState, useEffect } from 'react';
import YogaList from '../components/YogaList';
import '../styles/BookingPage.scss';

const BookingPage = () => {
  const [yogaClasses, setYogaClasses] = useState([]);

  useEffect(() => {
    console.log("I'm here");

    fetch('/api/booking')  // Updated the API endpoint to match the backend
      .then((response) => response.json())
      .then((data) => setYogaClasses(data))
      .catch((error) => console.error('Error fetching yoga class data:', error));
  }, []);

  return (
    <div>
      <h1>Booking Page</h1>
      <p>Select a yoga class to book:</p>
      <YogaList yogaClasses={yogaClasses} />
    </div>
  );
};

export default BookingPage;
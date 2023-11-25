import React, { useState, useEffect } from 'react';
import YogaList from '../components/YogaList';
import '../styles/BookingPage'

const BookingPage = () => {
  const [yogaClasses, setYogaClasses] = useState([]);

  useEffect(() => {
    console.log("im here")

    fetch('/booking')
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
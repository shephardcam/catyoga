import React from 'react';
import YogaClassListItem from '../components/YogaListItem'; // Adjust the import path based on your project structure

const BookingPage = () => {
  // Dummy data for the yoga classes
 

  return (
    <div>
      <h1>Booking Page</h1>
      <p>Select a yoga class to book:</p>
      {yogaClasses.map((yogaClass, index) => (
        <YogaClassListItem key={index} {...yogaClass} />
      ))}
    </div>
  );
};

export default BookingPage;
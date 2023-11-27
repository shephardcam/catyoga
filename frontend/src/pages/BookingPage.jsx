// BookingPage.jsx
import React, { useState, useEffect } from 'react';
import YogaList from '../components/YogaList';

const BookingPage = () => {
  const [yogaClasses, setYogaClasses] = useState([]);
  const [isLoadingYogaClasses, setIsLoadingYogaClasses] = useState(true);

  useEffect(() => {
    // Fetch data from the Express API
    fetch("/api/yoga-classes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this to log the fetched data
        setYogaClasses(data);
        setIsLoadingYogaClasses(false);
      })
      .catch((error) => {
        console.error("Error fetching yoga class data:", error);
        setIsLoadingYogaClasses(false);
      });
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
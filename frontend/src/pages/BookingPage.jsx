// BookingPage.jsx
// BookingPage.jsx
import React, { useState, useEffect } from 'react';
import YogaList from '../components/YogaList';
import '../styles/BookingPage.scss';

const BookingPage = () => {
  const [yogaClassesInfo, setYogaClassesInfo] = useState([]);
  const [isLoadingYogaClasses, setIsLoadingYogaClasses] = useState(true);

  useEffect(() => {
    // Fetch data from the Express API
    fetch("/api/yoga-class-info")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this to log the fetched data
        setYogaClassesInfo(data);
        setIsLoadingYogaClasses(false);
      })
      .catch((error) => {
        console.error("Error fetching yoga class data:", error);
        setIsLoadingYogaClasses(false);
      });
  }, []);

  const handleClassClick = (yogaClass) => {
    console.log(`Clicked on yoga class: ${yogaClass.className}`);
    // Add your logic for handling the click event
  };

  return (
    <div className="booking-page">
      <h1>Booking Page</h1>
      {isLoadingYogaClasses ? (
        <p>Loading yoga classes...</p>
      ) : (
        <YogaList yogaClasses={yogaClassesInfo} handleClassClick={handleClassClick} />
      )}
    </div>
  );
};

export default BookingPage;
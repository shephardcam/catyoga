import axios from 'axios';
import React, { useState, useEffect } from 'react';
import YogaList from '../components/YogaList';
import '../styles/BookingPage.scss';

const BookingPage = () => {
  const [yogaClasses, setYogaClasses] = useState([]);
  const [yogaClassInfo, setYogaClassInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [yogaClassesResponse, yogaClassInfoResponse] = await Promise.all([
          axios.get('/api/yoga-classes'),
          axios.get('/api/yoga-class-info')
        ]);

        setYogaClasses(yogaClassesResponse.data);
        setYogaClassInfo(yogaClassInfoResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="booking-page">
      {isLoading ? (
        <p>Loading yoga classes...</p>
      ) : (
        <YogaList className="yoga-list" yogaClasses={yogaClassInfo} />
      )}
    </div>
  );
};

export default BookingPage;
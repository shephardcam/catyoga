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

  const customLogic = (yogaClasses, yogaClassInfo) => {
    const matchedData = [];
  
    yogaClasses.forEach((classItem) => {
      const matchingInfo = yogaClassInfo.find((infoItem) => infoItem.id === classItem.yoga_class_info_id);
  // console.log("matchingInfo",matchingInfo)
      if (matchingInfo) {
        matchedData.push({
          ...classItem,
          ...matchingInfo
        });
      }
    });
  
    return matchedData;
  };

  const matchedData = customLogic(yogaClasses, yogaClassInfo);
  console.log('matchedData:', matchedData);

  return (
    <div className="booking-page">
      {isLoading ? (
        <p>Loading yoga classes...</p>
      ) : (
        <YogaList className="yoga-list" yogaClasses={matchedData} />
      )}
    </div>
  );
};

export default BookingPage;
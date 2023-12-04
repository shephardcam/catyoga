import React from 'react';
import YogaListItem from './YogaListItem';
import '../styles/yogaList.scss';


const YogaList = ({ yogaClasses, user, yogaClassInfo }) => {
  // console.log('yoooooooooooooo', yogaClasses)
  // console.log('class info', yogaClassInfo)

  // yogaClasses.map((yogaClass) => (
  //   console.log(yogaClass.yoga_class_info_id)
  // ))

  return (
    <div>
      <h2 class_name ="titel-yoga">Yoga Classes </h2>
      <ul className='yogalist'>
        {yogaClasses.map((yogaClassData) => (
          <YogaListItem
            // from yoga_classes
            yogaClass={yogaClassData}
            id={yogaClassData.id}
            classDay={yogaClassData.class_day}
            startTime={yogaClassData.start_time}
            isMaxCapacity={yogaClassData.is_max_capacity}
            classInfoId={yogaClassData.yoga_class_info_id}

            // from yoga_class_info@yoga_classes
            className={yogaClassInfo[yogaClassData.yoga_class_info_id-1].class_name}
            price={yogaClassInfo[yogaClassData.yoga_class_info_id-1].price}
            maxCapacity={yogaClassInfo[yogaClassData.yoga_class_info_id-1].max_capacity}
            details={yogaClassInfo[yogaClassData.yoga_class_info_id-1].details}
            duration={yogaClassInfo[yogaClassData.yoga_class_info_id-1].duration}
            
            //other
            user={user}
          />
        ))}
      </ul>
      <p></p>
    </div>
  );
};

export default YogaList;

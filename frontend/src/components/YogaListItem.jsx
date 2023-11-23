import React from 'react';


class YogaClassListItem extends React.Component {
  render() {
    const { className, price, details, duration, maxCapacity, classDay, startTime, isMaxCapacity } = this.props;

    return (
      <div className="yogaClassListItem">
        <h3>{className}</h3>
        <p>Price: ${price}</p>
        <p>Details: {details}</p>
        <p>Duration: {duration}</p>
        <p>Max Capacity: {maxCapacity}</p>
        <p>Day: {classDay}</p>
        <p>Start Time: {startTime}</p>
        <p>Is Max Capacity: {isMaxCapacity ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default YogaClassListItem;
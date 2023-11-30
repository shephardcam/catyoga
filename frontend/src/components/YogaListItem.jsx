import React from 'react';
import { Link } from 'react-router-dom';


class YogaListItem extends React.Component {
  render() {
    const {className, price, maxCapacity, details, duration, classDay, startTime, isMaxCapacity } = this.props;

    return (
      <div className="YogaListItem">
        <h3>Yoga Class</h3>
        <p>name: {className}</p>
        <p>price: {price}</p>
        <p>Is Max Capacity: {maxCapacity}</p>
        <p>details: {details}</p>
        <p>duration: {duration}</p> 
          <Link to={`/waiver?name=${className}&price=${price}&details=${details}`}>
            Purchase
          </Link>
        <h2>{classDay}{startTime} {isMaxCapacity}</h2>
       
       
  
      </div>
    );
  }
}


export default YogaListItem;

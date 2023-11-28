import React from 'react';
import { Link } from 'react-router-dom';

class YogaListItem extends React.Component {
  render() {
    const { className, price, details, duration, maxCapacity } = this.props;

    return (
      <div className="YogaListItem">
        <h3>Yoga Class</h3>
        <p>name: {className}</p>
        <p>price: {price}</p>
        <p>Is Max Capacity: {maxCapacity}</p>
        <p>details: {details}</p>
        <p>duration: {duration}</p>
        
        {maxCapacity ? (
          <p>Full</p>
        ) : (
          <Link to={`/waiver?name=${className}&price=${price}&details=${details}&duration=${duration}`}>
            Purchase
          </Link>
        )}
      </div>
    );
  }
}

export default YogaListItem;

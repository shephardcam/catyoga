import React from 'react';
import '../styles/yogaListItem.scss';
import BookingButton from './BookingButton'


class YogaListItem extends React.Component {

  render() {
    const { className, price, maxCapacity, details, duration, classDay, startTime, isMaxCapacity } = this.props;

    return (
      <div className="Yoga-list-item">
        <h3>Yoga Class</h3>
        <p>name: {className}</p>
        <p>price: {price}</p>
        <p>Is Max Capacity: {maxCapacity}</p>
        <p>details: {details}</p>
        <p>duration: {duration}</p>
        <h2>{classDay} {startTime} {isMaxCapacity}</h2>

           <BookingButton className={className} classDay={details} startTime={price} />
      </div>
    );
  }
}

export default YogaListItem;

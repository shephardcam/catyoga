import React from 'react';

class YogaListItem extends React.Component {
  render() {
    const { className, price, details, duration, maxCapacity} = this.props;

    return (
      <div className="YogaListItem">
        <h3>Yoga Class</h3>
        <p>name: {className}</p>
        <p>price: {price}</p>
        <p>Is Max Capacity: {maxCapacity}</p>
        <p>details:{details}</p>
        <p>duration: {duration}</p>
      </div>
    );
  }
}

export default YogaListItem;
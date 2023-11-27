import React from 'react';

class YogaListItem extends React.Component {
  render() {
    const { classDay, startTime, isMaxCapacity } = this.props;

    return (
      <div className="YogaListItem">
        <h3>Yoga Class</h3>
        <p>Day: {classDay}</p>
        <p>Start Time: {startTime}</p>
        <p>Is Max Capacity: {isMaxCapacity ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default YogaListItem;
// component will render archive list and archived items

import React from 'react';
import { withRouter } from 'react-router';

const Archive = () => {
  return (
    <div id="archive-list">
      <h3>ARCHIVE</h3>
      <p className="day">FRIDAY SEPTEMBER 23RD</p>
      <div className="archive-item">
        <p> ● Pay Rent</p>
      </div>
      <div className="archive-item">
        <p> ○ Schedule Dentist Appointment</p>
      </div>
      <div className="archive-item">
        <p> - Should we get a dog?</p>
      </div>
      <div className="archive-item">
        <p> ●  Clean Bathroom </p>
      </div>
      <p className="day">THURSDAY SEPTEMBER 22ND</p>
      <div className="archive-item">
        <p> - Do fish fart? </p>
      </div>
      <div className="archive-item">
        <p> ○ Throw out garbage </p>
      </div>
    </div>
  );
};

export default withRouter(Archive);

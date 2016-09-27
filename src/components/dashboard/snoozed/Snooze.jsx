// component will render the snoozed list and snooze list item
import React from 'react';
import { withRouter } from 'react-router';

const Snooze = () => {
  return (
    <div id="snooze-list">
      <h3 id="snooze-title">SNOOZE</h3>
      <p className="future-day">WEDNESDAY SEPTEMBER 28TH</p>
      <div className="snooze-item">
        <p> ● Pay Rent</p>
      </div>
      <div className="snooze-item">
        <p> ○ Schedule Dentist Appointment</p>
      </div>
      <div className="snooze-item">
        <p> - Should we get a dog?</p>
      </div>
      <div className="snooze-item">
        <p> ●  Clean Bathroom </p>
      </div>
      <p className="future-day">FRIDAY SEPTEMBER 30TH</p>
      <div className="snooze-item">
        <p> - Do fish fart? </p>
      </div>
      <div className="snooze-item">
        <p> ○ Throw out garbage </p>
      </div>
    </div>
  );
};

export default withRouter(Snooze);

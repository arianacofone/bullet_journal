// npm installed moment, imported it and created current date

import React from 'react';
import Moment from 'moment';

const moment = require('moment');

const Date = () => {
  const now = moment().format('dddd, MMMM Do');
  return (
    <div id="current-date">
      {now}
    </div>
  );
};

export default Date;

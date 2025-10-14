// React component version
import React, { useState } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function MonthDisplay() {
  const [currentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  return (
    <div>
      <span id="month-year">{months[month]} {year}</span>
    </div>
  );
}

export default MonthDisplay;
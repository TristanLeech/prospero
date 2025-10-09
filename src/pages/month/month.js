import React from "react";
import "./month.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dates = [
  [" ", " ", "1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10", "11", "12"],
  ["13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26"],
  ["27", "28", "29", "30", "31", " ", " "],
];

function Month() {
  return (
    <div className="monthPage">
      <div className="monthContainer">
        <div className="calendar">
          <div className="calendarHeader">
            October
          </div>
          <table className="calendarTable">
            <thead>
              <tr>
                {days.map((day, i) => (
                  <th  key={i}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dates.map((week, wi) => (
                <tr key={wi}>
                  {week.map((date, di) => (
                    <td key={di}>{date}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Month;



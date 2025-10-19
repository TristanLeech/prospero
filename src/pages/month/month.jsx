  import React from "react";
  import "./month.css";
  import { Link } from "react-router-dom";
  import { useState, useEffect, useRef } from "react";
import MonthHeader from "../../components/monthYear";
import DaysLoader from "../../components/daysLoader";

// document.addEventListener('DOMContentLoaded', function() {
//   const monthYear =document.getElementById('month-year');

//   const months=[
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   let currentDate=new Date();
//   let today=new Date();

//   function renderCalendar(date){
//     const year=date.getFullYear();
//     const month=date.getMonth();
//     const firstDay=new Date(year, month, 1).getDay();
//     const lastDay=new Date(year, month+1, 0).getDate();

//     monthYear.textContent=`${months[month]} ${year}`;
//   }
//   renderCalendar(currentDate);
// });

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
      <div className="monthCarousel">
        <div className="prevMonth">
          <Link><h1>&lt;</h1></Link>
        </div>
        <div className="monthContainer">
          <div className="calendar">
            <div className="calendarHeader">
              <MonthHeader />
            </div>
            <table className="calendarTable">
              <thead>
                <tr> 
                  {/* fills day headers */}
                  {days.map((day, i) => (
                    <th  key={i}>{day}</th>
                  ))}
                </tr>
              </thead>
              {/* <div className="calendarBody">
                <DaysLoader />
              </div> */}
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
        <div className="nextMonth">
          <Link><h1>&gt;</h1></Link>
        </div>
      </div>
    </div>
  );
}

export default Month;



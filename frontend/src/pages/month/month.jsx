  import React, {useState} from "react";
  import "./month.css";
  import { Link } from "react-router-dom";
import MonthHeader from "../../components/monthYear";
import DaysLoader from "../../components/daysLoader";



const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dates = [
  [" ", " ", "1", "2", "3", "4", "5"],
  ["6", "7", "8", "9", "10", "11", "12"],
  ["13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26"],
  ["27", "28", "29", "30", "31", " ", " "],
];

function Month() {
const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="monthPage">
      <div className="monthCarousel">
        <div className="prevMonth">
          <Link><h1>&lt;</h1></Link>
        </div>
        <div className="monthContainer">
          <div className="calendar">
            <div className="calendarHeader">
              <div className="spaceholder"></div>
              <MonthHeader />
              <button to={"/pages/addWindow/addWindow.js"}><div className="addButton"><h2>+</h2></div></button>
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
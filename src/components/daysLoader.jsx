import React, { useState } from 'react';
import "../pages/month/month.css";

const daysContainer=document.getElementById('days');

let currentDate = new Date();
let today = new Date();

function DaysLoader() {
//   const [currentDate] = useState(new Date());
//   const [today] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    daysContainer.innerHTML = '';

    for (let i = 1; i <= lastDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
            dayDiv.classList.add('today');
        }
        daysContainer.appendChild(dayDiv);
    }

    return (
    <div>
        <div classname="days">
            
        </div>
    </div>
    );
}

export default DaysLoader;
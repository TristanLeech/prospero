    import React, { useState } from 'react';
    import "./day.css";
    import { Link } from "react-router-dom";

function Day() {
    const [currentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    return (
    <div className="dayPage">
        <div className="dayContainer">
            <div className='dayHeader'>
                <h2>{`Upcoming rom - ${month + 1}/${year} Onwards:`}</h2>
            </div>
            <h1>Day View</h1>
            <p>This is where the details for a specific day would be displayed.</p>
            <Link to="/pages/month/month.jsx"><button className="backButton">Back to Month View</button></Link>
        </div>
    </div>
    );
}

export default Day;
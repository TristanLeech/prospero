    import React, { useState } from 'react';
    import "./upcoming.css";
    import { Link } from "react-router-dom";

function Upcoming() {
    const [currentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    return (
    <div className="ucPage">
        <div className="ucContainer">
            <div className='ucHeader'>
                <h2>Your to do list:</h2>
                {/* <h2>{`Upcoming rom - ${month + 1}/${year} Onwards:`}</h2> */}
            </div>
            <p>This is where the details for a specific day would be displayed.</p>
            <Link to="/pages/month/month.jsx"><button className="backButton">Back to Month View</button></Link>
        </div>
    </div>
    );
}

export default Upcoming;
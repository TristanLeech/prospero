    import React, { useState } from 'react';
    import "./upcoming.css";
    import { Link } from "react-router-dom";
import Todo from '../../components/navbar/todo/todo';

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
            <div className='ucEvents'>Upcoming events list to go here</div>
            <Todo />
            <p>You're all caught up!</p>
            <Link to="/pages/month/month.jsx"><button className="backButton">Back to Month View</button></Link>
        </div>
    </div>
    );
}

export default Upcoming;
    import React, { useState } from 'react';
    import "./todo.css";
    import { Link } from "react-router-dom";

function Todo() {
    return (
    <div className="eventBar">
        <div className="lilBox">
            <div className="todoColour"></div>
            <div className="title">
                <h3>Default Title</h3>
            </div>
            <div className="time">
                <p>12:00 PM</p>
            </div>
        </div>
        
    </div>
    );
}

export default Todo;
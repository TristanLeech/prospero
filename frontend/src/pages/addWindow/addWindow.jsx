import React from "react";
import { Link } from "react-router-dom";
import './addWindow.css';

function AddWindow() {
    return (
        <div className="addPage">
            <div className="addWindow">
                <div className="addHeader">
                    <h2>New Event</h2>
                </div>
                <div className="formDiv">
                    <form className="addForm">
                        <h3>Title</h3>
                        <input type="text" placeholder="Event Title" />
                            <h3>Date & Time</h3>
                        <input type="datetime-local" />

                        <button type="submit" className="submitButton">Add Event</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default AddWindow;
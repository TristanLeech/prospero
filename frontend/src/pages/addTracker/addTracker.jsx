import React from "react";
import { Link } from "react-router-dom";
import './addTracker.css';

function AddTracker() {
    return (
        <div className="addPage">
            <div className="addWindow">
                <div className="addHeader">
                    <h2>New Tracker</h2>
                </div>
                <div className="formDiv">
                    <form className="addForm">
                        <h3>Title</h3>
                        <input type="text" placeholder="Tracker Title" />
                            <h3>Date & Time</h3>
                        <input type="datetime-local" />

                        <button type="submit" className="submitButton">Add Tracker</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default AddTracker;
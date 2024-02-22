// /src/Kanbas/Courses/Status.tsx
import React from 'react';
import { FaTv, FaChartBar, FaCalendar, FaBell, FaCheckCircle } from 'react-icons/fa';

function Status(){
    return (
        <div className="course-status-container ms-auto" style={{ width: '250px' }}>
            <br/>
            <h3>Course Status</h3>
            <div className="mb-3">
                <button className="btn btn-outline-secondary w-100 mb-2">
                    <FaTv /> View Course Stream
                </button>
                <button className="btn btn-outline-secondary w-100 mb-2">
                    <FaChartBar /> New Analytics
                </button>
                <button className="btn btn-outline-secondary w-100 mb-2">
                    <FaCalendar /> View Course Calendar
                </button>
                <button className="btn btn-outline-secondary w-100">
                    <FaBell /> View Course Notifications
                </button>
            </div>
            <hr />
            <h5>To Do</h5>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>2/6</span>
                    <span>A2</span>
                </li>
            </ul>
            <hr />
            <h5>Recent Feedback</h5>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span><FaCheckCircle className="text-success" /> A1</span>
                    <span>98.8% "Good Work"</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span><FaCheckCircle className="text-success" /> Q2</span>
                    <span>21 out of 23</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span><FaCheckCircle className="text-success" /> Q1</span>
                    <span>29 out of 29</span>
                </li>
            </ul>
        </div>
    );
};

export default Status;

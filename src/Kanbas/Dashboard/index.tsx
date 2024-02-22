// /src/Kanbas/Dashboard/index.tsx
import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";

function Dashboard() {
    return (
        <div className="container-fluid p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="row">
                {courses.map((course) => (
                    <div key={course._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                        <div className="card card-custom">
                            <img src={`/images/${course.image}`} className="card-img-top" alt={course.name} style={{ height: 150, objectFit: "cover" }} />
                            <div className="card-body">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="card-title" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    {course.name} {course.number}
                                </Link>
                                <p className="card-text" style={{ textDecoration: "none", color: "grey" }}>
                                    Start: {course.startDate} - End: {course.endDate}
                                </p>
                                <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

// /src/Kanbas/Dashboard/index.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {


    return (
        <div className="container-fluid p-4">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button onClick={addNewCourse} >
                Add
            </button>

            <button onClick={updateCourse} >
                Update
            </button>
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
                                    {<br />}
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                        Edit
                                    </button>

                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                        Delete
                                    </button>
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

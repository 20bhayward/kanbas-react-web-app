// /src/Kanbas/Courses/index.tsx
import React from "react";
import { courses } from "../Database";
import { HiOutlineMenu } from "react-icons/hi";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { FaGlasses } from "react-icons/fa";
import Assignments from "./Assignments";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const { courseId } = useParams();
    const COURSES_API = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
      const response = await axios.get(
        `${COURSES_API}/${courseId}`
      );
      setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);
    
    const { pathname } = useLocation();
    //const course = courses.find((c) => c._id === courseId);
    const pathParts = pathname.split('/').filter(x => x); // Remove empty parts from the path
    const currentPart = pathParts[pathParts.length - 1];

    return (
        <div>
            <div className="course-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <HiOutlineMenu className="menu-icon" />
                    {course ? (
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                    {course.name}
                                </li>
                                {currentPart && (
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {currentPart}
                                    </li>
                                )}
                            </ol>
                        </nav>
                    ) : (
                        <h1>Course not found</h1>
                    )}
                </div>
                <button className="btn btn-light">
                    <FaGlasses /> Student View
                </button>
            </div>
            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "250px", top: "80px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;

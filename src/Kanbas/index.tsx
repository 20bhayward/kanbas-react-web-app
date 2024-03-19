import { Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { courses } from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const [stateCourses, setCourses] = useState<any[]>(courses);
    const [course, setCourse] = useState({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...stateCourses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(stateCourses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            stateCourses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div style={{ display: 'flex' }}>
                <div className="d-none d-sm-block">
                    <KanbasNavigation />
                </div>
                <div style={{ flexGrow: 1, paddingLeft: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard
                            courses={stateCourses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={stateCourses} />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
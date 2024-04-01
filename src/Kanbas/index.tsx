import { Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const [stateCourses, setCourses] = useState<any[]>([]);
    const COURSES_API = `${API_BASE}/api/courses`;
    const updateCourse = async () => {
        const response = await axios.put(
          `${COURSES_API}/${course._id}`,
          course
        );
        setCourses(
            stateCourses.map((c) => {
            if (c._id === course._id) {
              return course;
            }
            return c;
          })
        );
      };
    
    const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(
          `${COURSES_API}/${courseId}`
        );
        setCourses(stateCourses.filter(
          (c) => c._id !== courseId));
      };
    
    const addNewCourse = async () => {
        const response = await axios.post(COURSES_API, course);
        setCourses([ ...stateCourses, response.data ]);
      };

    const findAllCourses = async () => {
      const response = await axios.get(COURSES_API);
      setCourses(response.data);
    };
    useEffect(() => {
      findAllCourses();
    }, []);
  
    const [course, setCourse] = useState({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    // const addNewCourse = () => {
    //     setCourses([...stateCourses, { ...course, _id: new Date().getTime().toString() }]);
    // };
    // const deleteCourse = (courseId: any) => {
    //     setCourses(stateCourses.filter((course) => course._id !== courseId));
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         stateCourses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

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
                        <Route path="Courses/:courseId/*" element={<Courses/>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
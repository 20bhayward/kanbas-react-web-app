import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "1",
        name: "Module 1",
        description: "Introduction to Node.js and Express.js",
        course: "Web Development",
    });
    const ASSIGNMENT_URL = `${process.env.REACT_APP_API_BASE}/a5/assignment`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);

    const MODULE_URL = `${process.env.REACT_APP_API_BASE}/a5/module`
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <br/>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <h4>Retrieving Objects</h4>
            <a href={`${process.env.REACT_APP_API_BASE}/a5/assignment`}>
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a href={`${process.env.REACT_APP_API_BASE}/a5/assignment/title`}>
                Get Title
            </a>
            <h4>Retrieving Module</h4>
            <a href={`${process.env.REACT_APP_API_BASE}/a5/module`}>
                Get Module
            </a>

            <h4>Retrieving Module Name</h4>
            <a href={`${process.env.REACT_APP_API_BASE}/a5/module/name`}>
                Get Module Name
            </a>

            <h4>Modifying Module Name</h4>
            <a href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input
                type="text"
                onChange={(e) => setModule({ ...module, name: e.target.value })}
                value={module.name}
            />

        </div>
    );
}
export default WorkingWithObjects;
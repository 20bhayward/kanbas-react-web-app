import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaEllipsisV, FaPlus, FaUserFriends, FaPencilAlt } from 'react-icons/fa';
import assignments from '../../Database/assignments.json';
import './index.css';

function Assignments() {
  const { courseId } = useParams<{ courseId: string }>();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
    <br/>
      <div className="assignment-header d-flex justify-content-between align-items-center">
        <input type="text" className="form-control search-assignment" placeholder="Search for Assignment" />
        <div className="button-group">
          <button className="btn btn-light"><FaUserFriends /> Group</button>
          <button className="btn btn-light"><FaPlus /> Assignment</button>
          <button className="btn btn-light"><FaEllipsisV /></button>
        </div>
      </div>
      <br/>
      <ul className="list-group wd-assignments">
        {assignmentList.map((assignment) => (
          <li className="list-group-item" key={assignment._id}>
            <div className="d-flex align-items-center">
              <FaEllipsisV className="me-2 icon-ellipsis" />
              <FaPencilAlt className="me-2 icon-pencil" />
              <div className="flex-grow-1 assignment-title">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <div className="assignment-details text-secondary">
                  Multiple Modules | Due {assignment.dueDate} | {assignment.points} pts
                </div>
              </div>
              <FaCheckCircle className="text-success" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Assignments;
import React, { useEffect, useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCheck, FaGlasses, FaXRay, FaXbox, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    deleteModule,
    addModule, updateModule,
    setModule, setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    


    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);

    const toggleAddForm = () => setShowAddForm(!showAddForm);

    return (
        <>
            <div className="wd-top-bar d-flex">
                <button className="btn btn-custom-light">
                    Collapse All
                </button>
                <button className="btn btn-custom-light">
                    View Progress
                </button>
                <button className="btn btn-custom-light">
                    <FaCheckCircle /> Publish All
                </button>
                <button className="btn btn-custom-red" onClick={toggleAddForm}>
                    <FaPlusCircle /> Add Module
                </button>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                {showAddForm && (
                    <li className="list-group-item">
                        <div className="wd-top-bar" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input
                                className="form-control"
                                style={{ flex: 1 }}
                                value={module.name}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, name: e.target.value }))

                                }

                                placeholder="Module Name"
                            />
                            <textarea
                                className="form-control"
                                style={{ flex: 3 }}
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, description: e.target.value }))

                                }

                                placeholder="Module Description"
                            />
                            <button
                                className="btn btn-custom-light"
                                onClick={handleAddModule}
                            >
                                Add
                            </button>
                            <button className="btn btn-custom-light" onClick={handleUpdateModule}>
                                Update
                            </button>

                        </div>
                    </li>
                )}

                {moduleList
                    .filter((mod) => mod.course === courseId)
                    .map((mod, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(mod)}>

                            <div>
                                <FaEllipsisV className="me-2" />
                                {mod.name}
                                <span className="float-end">
                                    <button className="btn btn-custom-light" onClick={() => dispatch(setModule(mod))}>
                                        <FaPlusCircle className="ms-2" />
                                    </button>
                                    &ensp;
                                    <button
                                        className="btn btn-custom-light"
                                        onClick={() => { handleDeleteModule(mod._id) }}>
                                        <FaTimesCircle className="text-danger" />
                                    </button>
                                    <FaEllipsisV className="ms-2" />
                                </span>
                                <br />
                                &emsp;{mod.description}
                            </div>

                            {selectedModule && selectedModule._id === mod._id && (
                                <ul className="list-group">
                                    {mod.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, lessonIndex: React.Key | null | undefined) => (
                                        <li key={lessonIndex} className="list-group-item">
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

            </ul>
        </>
    );
}
export default ModuleList;


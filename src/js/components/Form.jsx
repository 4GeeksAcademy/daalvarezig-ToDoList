import React, { useState } from "react";

const Form = ({ onAdd }) => {
    const [task, setTask] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim())
            return;
             onAdd(task);
             setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 mt-3">
            <input
                type="text"
                placeholder="Escribe una tarea..."
                className="form-control"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary">Añadir</button> 
        </form>
    );

const Item = (¨{ text, onDelete}) => {
    return (
        <li className="list-group-item d-flex justify-content-between
        alig-items">
            {text}
            <span className="text-danger fw-bold"
            style={{ cursor: "pointer"}}
            onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}
};

export default { Form, Item };
import React from 'react';

function TaskItem({ task }) {
    return (
        <li className="task-item">
            <div className="task-header">
                <span className="tag red">{task.tag}</span>
                <button><i className="fa fa-edit"></i></button>
            </div>
            <p>{task.title}</p>
            <p className="task-description">{task.description}</p>
            <div className="task-item-footer">
                <div className="date">
                    <i className="fa fa-calendar-day"></i>
                    <span>{task.date}</span>
                </div>
                <div className="comment">
                    <i className="fa fa-message"></i>
                    {task.comments}
                </div>
            </div>
        </li>
    );
}

export default TaskItem;

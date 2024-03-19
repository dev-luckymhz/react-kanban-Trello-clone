import React from 'react';
import TaskItem from './TaskItem';

function TaskColumn({ data }) {
    return (
        <div className="task-column">
            <div className="task-list-header">
                <h5>{data.column} :<span className="num">{data.numberOfTasks}</span></h5>
                <button><i className="fa fa-plus"></i></button>
            </div>
            <ul className="task-lists">
                {data.tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}

export default TaskColumn;

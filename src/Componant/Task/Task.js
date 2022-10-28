import React from 'react';
import './Task.css'
const Task = (props) => {
    const { task } = props.task;
    return (
        <div className='text text-3xl font-bold'>
            {task}
        </div >
    );
};

export default Task;
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Task from '../Componant/Task/Task';
const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-taiga-19091.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    const taskDelete = id => {
        const proceed = window.confirm('Are you sure delete this task');
        if (proceed) {
            console.log('delete', id)
            const url = `https://enigmatic-taiga-19091.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        const remaining = tasks.filter(task => task._id !== id);
                        setTasks(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2 className='text test text-3xl font-bold text-center mb-5'>Hear is some daily task of Web Developer : {tasks.length}</h2>
            <div class="overflow-x-auto mb-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL-NO</th>
                            <th>Check-Out</th>
                            <th>Task</th>
                            <th>Edit-Task</th>
                            <th>Delete-Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => <tr>
                            <th>{index + 1}</th>
                            <th><div class="form-control">
                                <label class="cursor-pointer label">
                                    <input type="checkbox" name="" class="checkbox checkbox-accent" id="" />
                                </label>
                            </div></th>
                            <td>{task.task}</td>
                            <td>
                                <button >
                                    <NavLink to={`/edittask/${task._id}`}>
                                        <PencilIcon className='trash-Icon'></PencilIcon>
                                    </NavLink>
                                </button>
                            </td>
                            <td>
                                <button onClick={() => taskDelete(task._id)}>
                                    <TrashIcon className='trash-Icon'></TrashIcon>
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Tasks;
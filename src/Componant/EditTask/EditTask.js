import React, { useEffect, useState } from 'react';
import './EditTask.css'
import { useParams } from 'react-router-dom';
const EditTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `https://enigmatic-taiga-19091.herokuapp.com/task/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);
    const UpdateTask = event => {
        event.preventDefault();
        const task = event.target.task.value;
        console.log(task)
        const updateUser = { task };
        //Send to server
        const url = `https://enigmatic-taiga-19091.herokuapp.com/task/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('Edit task successfully')
                event.target.reset();
            })
    }
    return (
        <div>
            <div className='edit-task'>
                <h1 className='mt-2 text-success font font-bold text text-3xl'>Edit Your Daily Task</h1>
            </div>
            <br />
            <div className='ToDo'>
                <form onSubmit={UpdateTask}>
                    <input type="text" name="task" className="input input-bordered w-full " placeholder='Edit Your Daily Task' required />
                    <br />
                    <input type="submit" className="input input-bordered bg bg-red-300 w-full mt-2" value="Click Hear to Edit Task" />
                </form>
            </div>
        </div>
    );
};

export default EditTask;
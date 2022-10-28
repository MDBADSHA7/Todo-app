import React from 'react';
import './EditItem.css'
const EditItem = () => {
    const handleAddRestoke = event => {
        event.preventDefault();
        const task = event.target.task.value;
        console.log(task);
        const user = { task };
        fetch('https://enigmatic-taiga-19091.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Daily task added successfully')
                event.target.reset();
            })
    }
    return (
        <div >
            <h1 className='mt-2 text-success font font-bold text text-3xl'>Please Add Daily Task</h1>
            <br />
            <div className='ToDo'>
                <form onSubmit={handleAddRestoke}>
                    <input type="text" name="task" className="input input-bordered w-full " placeholder='Write Daily Task' required />
                    <br />
                    <input type="submit" className="input input-bordered bg bg-red-300 w-full mt-2" value="Add Your New Task Hear" />
                </form>
            </div>
        </div>
    );
};

export default EditItem;
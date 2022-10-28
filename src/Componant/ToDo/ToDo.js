import React from 'react';
import './ToDo.css'
import './ToDo'
import EditItem from '../EditItem/EditItem';
import Tasks from '../../Tasks/Tasks';
const ToDo = () => {
    return (
        <div>
            <div className='ToDo'>
                <EditItem></EditItem>
            </div>
            <Tasks></Tasks>
        </div>
    );
};
export default ToDo;

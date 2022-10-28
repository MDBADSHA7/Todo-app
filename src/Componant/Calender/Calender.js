import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calender.css'
import React, { useState } from 'react';
import { format } from 'date-fns';
const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='calender'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate} />
            </div>
            <span className='text-red-500 text-4xl font-bold'><b>Today is : {format(date, 'PP')}</b></span>
        </div>
    );
};

export default Calender;
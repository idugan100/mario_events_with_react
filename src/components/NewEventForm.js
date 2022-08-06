
import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({handleClose, addEvent}) {
    const [title,setTitle]=useState("")
    const [date,setDate]=useState("")
    const [location,setLocation]=useState("Seattle")
    const handleChange=(e)=>{
        setTitle(e.target.value);
       

    }

    const handleDateChange=(e)=>{
        setDate(e.target.value);
        
    }

    const resetForm=()=>{
        setDate("");
        setTitle("");
        setLocation("Seattle")
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const event={
            title:title,
            date: date,
            location:location,
            id:Math.floor(Math.random()*10000)
        }

        addEvent(event);
        resetForm();
        
    }
    
  return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label >
                <span>Event Title:</span>
                <input type="text"  onChange={handleChange} value={title}/>
            </label>
            <label htmlFor="">
                <span>Event Date</span>
                <input type="date" onChange={handleDateChange} value={date}/>
            </label>
            <label >
                <span>Event Location:</span>
                <select onChange={(e)=>{setLocation(e.target.value)}}>
                    <option value="New York">New York</option>
                    <option value="Seattle" selected>Seattle</option>
                    <option value="Baltimore">Baltimore</option>
                </select>
            </label>
            <button type='submit'>Submit</button>
           
        </form>
  )
}


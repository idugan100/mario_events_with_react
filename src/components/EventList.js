import React from "react";
import { ReactDOM } from "react";
import styles from './Eventlist.module.css'

function EventList(props){

    return(
         props.eventlist.map((event)=>(
            <div className={styles.card} key={event.id}>
              <h2>{event.title}</h2>
              <p>{event.location} - {event.date}</p>
              <button onClick={()=>{props.handleClick(event.id)}}>Delete Event</button>
              </div>))
    )
}

export default EventList;
import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal,setshowModal]=useState(false);
  const [showevents, setShowEvents]=useState(true);
  const [events, setEvents]=useState([])
  
  const addEvent=(event)=>{
    setEvents(
      (prevEvents)=>{
        return[...prevEvents,event]
      }
    )
setshowModal(false);
  }
  const handleClick=(id)=>{
    setEvents((prevevents)=>{
      return prevevents.filter((event)=>{
      return event.id!=id;
    })})
  
    
  }

  return (
    <div className="App">
      
      <Title title="Events in your Area" subtitle="The Latest!"/>
      
      
      <div>
        {showevents && <button onClick={()=>setShowEvents(false)}>Hide Events</button>}
        {(showevents==false) && <button onClick={()=>setShowEvents(true)}>Show Events</button>}
      </div>
    
      {showevents && <EventList eventlist={events} handleClick={handleClick}/>}

      <div className='button-wrapper'><button className="show-deal" onClick={()=>{setshowModal(true)}}>Add New Event</button></div>

      {showModal &&
      <Modal >
        <NewEventForm  addEvent={addEvent}/>
      </Modal>
}
    </div>
  );
}

export default App;

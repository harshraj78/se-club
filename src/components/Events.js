import React from 'react';
import './Events.css';
import event from '../assets/data/events.json';

function Events() {
  return (
    <div id='event-page'>
      <div className='event-heading'>
        Events
      </div>
      <div className='type-event'>
        <div className='current-event'>

        </div>

        <div className='event-heading'>
        Previous Events
      </div>
        <div className='previous-event'>
          {
            event.map((events)=>{
              return (
                <div className='container containera'>
                <div className='event-cards card event-cards text-white bg-dark' key={events.id}>
                  <h2 className='h3-text'>{events.name}</h2>
                  <img src={process.env.PUBLIC_URL + "../events/" + events.path} />
                  <h3 className='h2-text'>{events.speaker}</h3>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Events
import React,{Component} from 'react';
import EventItem from './TestEdit';

class EventList extends Component{
  render(){
    return(
      <div className='eventList'>
        {this.props.events.map((event) =>{
          return <EventItem deleteEvent={this.props.deleteEvent} key={event.id} handleEditEvent={this.props.handleEditEvent} event={event} />
        })}
      </div>
    )
  }
}

export default EventList;

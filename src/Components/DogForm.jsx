import React,{Component} from 'react';
import EventItem from './TestEdit';
import AddIns from './AddIns';

class EventList extends Component{
  render(){
    return(
      <div className='eventList'>
        <h1>Data</h1>
        {this.props.events.map((event) =>{
          return <EventItem deleteEvent={this.props.deleteEvent} key={event.id} handleEditEvent={this.props.handleEditEvent} event={event} />
        })}
        <AddIns state={this.props.state} />
      </div>
    )
  }
}

export default EventList;

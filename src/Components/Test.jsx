import React,{Component} from 'react';
import AddEvent from './addEvent';
import EventForm from './TestHold';
import EventList from './DogForm';

const events = [
  {id:'1',name:'Steve',color:'Orange',state:'West Virgina', age:'10'},
  {id:'2',name:'Peez',color:'Black',state:'Florida',age:'20'},
  {id:'3',name:'Brian',color:'White',state:'Iowa',age:'3'}
];

class Test extends Component{
  state = {
    events:events,
    isOpen:true,
    idCount:3,
    selectedEvent:null,
    addIns:'0'
  }

  handleEditOpenEvent = updatedEvent =>{
    this.setState({
      events:this.state.events.map(event => {
        if(event.id === updatedEvent.id){
          return Object.assign({},updatedEvent);
        }else{
          return event;
        }
      }),
      selectedEvent:null
    });
  }

  handleEditEvent = eventToUpdate => () =>{
    this.setState({
      selectedEvent:eventToUpdate,
      isOpen:true
    });
  }

  handleCreateEvent = newEvent =>{
    let curId = this.state.idCount;
    newEvent.id = curId + 1;

    let updatedEvents = [...this.state.events];
    updatedEvents.push(newEvent);

    this.setState({
      events:updatedEvents,
      idCount:curId+1
    });
  }

  handleDeleteEvent = eventId => () =>{
    let updatedEvents = this.state.events.filter(e => e.id !== eventId);

    this.setState({
      events:updatedEvents
    });
    console.log('event is gone');
  }

  openForm = () =>{
    this.setState({
      selectedEvent:null,
      isOpen:true
    });
  }
  test(e){
    console.log(e);
  }
  render(){
    return(
      <div className='container'>
        {this.state.isOpen ? <EventForm updateEvent={this.handleEditOpenEvent} openForm={this.openForm} selectedEvent={this.state.selectedEvent} createEvent={this.handleCreateEvent} /> : <AddEvent openForm={this.openForm} />}
        <EventList deleteEvent={this.handleDeleteEvent} handleEditEvent={this.handleEditEvent} events={this.state.events} state={this.state}/>
      </div>
    );
  }
}

export default Test;

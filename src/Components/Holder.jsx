import React,{Component} from 'react';
import Select from './FormComponents/Select';

const events = [
  {id:'1', name:'Steve', color:'Orange', state:'West Virgina', age:'10'},
  {id:'2', name:'Peez', color:'Black', state:'Florida', age:'6'},
  {id:'3', name:'Brian', color:'White', state:'Nebraska', age:'11'}
]
class Holder extends Component{
  state = {
    events:events,
    isOpen:false,
    idCount:3,
    selectedEvent:null
  }

  handleEditOpenEvent = updatedEvent => {
    this.setState({
      events:this.state.events.map(event => {
        if(event.id === updatedEvent.id){
          return Object.assign({}, updatedEvent);
        }else{
          return event;
        }
      }),
      isOpen:false,
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
    newEvent.id = curId+1;
    let updatedEvents = [...this.state.events];
    updatedEvents.push(newEvent);
    this.setState({
      events:updatedEvents,
      isOpen:false,
      idCount:curId+1
    });
  }

  handleDeleteEvent = eventId => () =>{
    let updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events:updatedEvents
    });
    console.log('event gone');
  }

  openForm = () =>{
    this.setState({
      selectedEvent:null,
      isOpen:true
    });
  }

  render(){
    return(
      <div className='container'>
        <EventList deleteEvent={this.handleDeleteEvent} handleEditEvent={this.handleEditEvent} events={this.state.events} />
        {this.state.isOpen ? <EventForm updateEvent={this.handleEditOpenEvent} openForm={this.openForm} selectedEvent={this.state.selectedEvent} createEvent={this.handleCreateEvent} /> : <AddEvent openForm={this.openForm} />}
      </div>
    );
  }
}

class EventList extends Component{
  render(){
    return(
      <div className='eventList'>
        {this.props.events.map((event) => {
          return <EventItem deleteEvent={this.props.deleteEvent} key={event.id} handleEditEvent={this.props.handleEditEvent} event={event} />
        })}
      </div>
    );
  }
}

class EventItem extends Component{
  render(){
    return(
      <div className='container'>
        <ul>
          <li><button onClick={this.props.handleEditEvent(this.props.event)}>Edit</button></li>
          <li>{this.props.event.name}</li>
          <li>{this.props.event.state}</li>
          <li>{this.props.event.color}</li>
          <li>{this.props.event.age}</li>
          <li><button onClick={this.props.deleteEvent(this.props.event.id)}>Delete</button></li>
        </ul>
      </div>
    );
  }
}

class EventForm extends Component{
  state ={
    event:{
      name:'',
      color:'',
      state:'',
      age:''
    }
  }

  componentDidMount(){
    if(this.props.selectedEvent !== null){
      this.setState({
        event:this.props.selectedEvent
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedEvent !== this.props.selectedEvent){
      this.setState({
        event:nextProps.selectedEvent ||{
          name:'',
          color:'',
          state:'',
          age:''
        }
      })
    }
  }

  onFormSubmit = e =>{
    e.preventDefault();
    const clone = this.state.event;
    if(this.state.event.id){
      this.props.updateEvent(this.state.event);
    }else{
      this.props.createEvent(clone);
      this.setState({
        event:{
          name:'',
          color:'',
          state:'',
          age:''
        }
      });
    }
  }

  onInputChange = e =>{
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event:newEvent
    });
  }

  onSelectChange = e =>{
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event:newEvent
    });
  }

  render(){
    return(
      <div className='container'>
        <button onClick={this.props.openForm} className='btn btn-danger'>Add Dog</button>
        <form onSubmit={this.onFormSubmit}>
          <input name='name' onChange={this.onInputChange} value={this.state.event.name} type='text' placeholder='Kname' />
          <Select title={'Color'} name={'color'} options={['Orange', 'White', 'Black', 'Brown']} value={this.state.event.color} handleChange={this.onSelectChange} placeholder={'Color'} />
          <input name='state' onChange={this.onInputChange} value={this.state.event.state} type='text' placeholder='Statez' />
          <input name='age' onChange={this.onInputChange} value={this.state.event.age} type='number' placeholder='AGE' />
          <button type='submit' value='Create Event'>ce</button>
        </form>
      </div>
    );
  }
}

class AddEvent extends Component{
  render(){
    return(
      <div className='container'>
        <button onClick={this.props.openForm}>CreatEvent</button>
      </div>
    );
  }
}


export default Holder

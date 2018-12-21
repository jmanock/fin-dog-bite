import React,{Component} from 'react';

const events = [
    {
      id: "1",
      title: "Jeep Meet",
      location: "Tooele, UT",
      date: "12/03/2018",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam."
    },
    {
      id: "2",
      title: "Dance Festival",
      location: "SLC, UT",
      date: "11/03/2018",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed."
    }
  ];

class Holder extends React.Component {
  state = {
    events : events,
    isOpen: false,
    idCount: 2,
    selectedEvent: null
  }

  handleEditOpenEvent = (updatedEvent) => {
    this.setState ({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleEditEvent = (eventToUpdate) => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    })
  }

  handleCreateEvent = (newEvent) => {
    let curId = this.state.idCount;
    newEvent.id = curId+1;
    let updatedEvents = [...this.state.events];
    updatedEvents.push(newEvent);
    this.setState({
      events: updatedEvents,
      isOpen: false,
      idCount: curId+1
    })
  }

  handleDeleteEvent = (eventId) => () => {
    let updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
    console.log("event deleted");
  }

  openForm = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  render(){
    return(
      <div className="dashboard">
        <EventList deleteEvent={this.handleDeleteEvent} handleEditEvent={this.handleEditEvent} events={this.state.events} />
        {this.state.isOpen ? <EventForm updateEvent={this.handleEditOpenEvent} openForm={this.openForm} selectedEvent={this.state.selectedEvent} createEvent={this.handleCreateEvent} /> : <AddEvent openForm={this.openForm} />}
      </div>
    );
  }
}






class EventList extends React.Component {
  render(){
    return(
      <div className="eventList">
        {this.props.events.map((event) => {
          return <EventItem deleteEvent={this.props.deleteEvent} key={event.id} handleEditEvent={this.props.handleEditEvent} event={event} />
        })}
      </div>
    );
  }
}






class EventItem extends React.Component {
  render(){
    return(
      <div className="eventItem">
        <div className="edit">
          <button onClick={this.props.handleEditEvent(this.props.event)}>Edit</button>
        </div>
        <div className="delete">
          <button onClick={this.props.deleteEvent(this.props.event.id)}>Delete</button>
        </div>
        <h1>{this.props.event.title}</h1>
        <h5>{this.props.event.location}</h5>
        <h2>{this.props.event.date}</h2>
        <h4>{this.props.event.info}</h4>
      </div>
    );
  }
}






class EventForm extends React.Component {
  state = {
    event: {
      title: '',
      location: '',
      date: '',
      info: ''
    }
  }

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || {
          title: '',
          location: '',
          date: '',
          info: ''
        }
      })
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const clone = this.state.event;
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(clone);
      this.setState({
        event: {
          title: '',
          location: '',
          date: '',
          info: ''
        }
      })
    }
  }

  onInputChange = (e) => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent
    })
  }

  render(){
    return(
      <div className="eventForm">
        <p onClick={this.props.openForm} className="newEvent">New Event</p>
        <form onSubmit={this.onFormSubmit} >
          <input name="title" onChange={this.onInputChange} value={this.state.event.title} type="text" placeholder="Event Name" />
          <input name="location" onChange={this.onInputChange} value={this.state.event.location} type="text" placeholder="Location" />
          <input name="date" onChange={this.onInputChange} value={this.state.event.date} type="text" placeholder="Date" />
          <textarea name="info" onChange={this.onInputChange} value={this.state.event.info} type="text" placeholder="Info" />
          <input type="submit" value="Create Event" />
        </form>
      </div>
    );
  }
}






class AddEvent extends React.Component {
  render(){
    return(
      <div className="addEvent">
        <button onClick={this.props.openForm}>Add Event</button>
      </div>
    );
  }
}

export default Holder

import React,{Component} from 'react';

class EventItem extends Component{
  render(){
    return(
      <table>
        <tbody>
          <tr>
            <td><button onClick={this.props.handleEditEvent(this.props.event)} className='btn btn-success'>Edit</button></td>
            <td>{this.props.event.name}</td>
            <td>{this.props.event.state}</td>
            <td>{this.props.event.color}</td>
            <td>{this.props.event.age}</td>
            <td><button onClick={this.props.deleteEvent(this.props.event.id)} className='btn btn-danger'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default EventItem;

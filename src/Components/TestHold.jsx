import React,{Component} from 'react';

class ListClients extends Component{
  editClient(item){
    this.props.editClient(item);
  }
  render(){
    let clients = this.props.clients;
    return(
      <div>
        <h1>List Clients</h1>
        <ul>
          {clients.map(item => (
            <li key={item.id}>
              <span>{item.text} | {item.id}</span>
              <button onClick={this.editClient.bind(this,item)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ListClients;

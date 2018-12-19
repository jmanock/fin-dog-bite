import React,{Component} from 'react';
import EditClient from './Edit';
import ListClients from './TestHold';

class FormClient extends Component {
  state ={
    name:'',
    state:'',
    isEdit:0,
    dogs:[
      {id:1,name:'Brian',state:'Iowa'},
      {id:2,name:'Peez',state:'West Virgina'},
      {id:3,name:'Hank',state:'Florida'}
    ],

  };

  handleEditClient = (item) =>{
    this.setState({
      name:item.name,
      state:item.state,
      isEdit:item.id
    });
  }

  handleChangeTextEdit = (text) =>{
    this.setState({name:text});
  }

  handleChangeSelectEdit = (text) =>{
    this.setState({state:text});
  }
  handleClientAdd = (text,state) =>{
    var newText = {
      id:this.state.dogs.length + 1,
      name:text,
      state:state
    };
    this.setState({
      dogs:this.state.dogs.concat(newText),
      name:'',
      state:''
    });
  }

  handleTodoUpdate = (dog) =>{
    var dogs = this.state.dogs;
    for(var i = 0; i<dogs.length; i++){
      if(dogs[i].id === dog.id){
        dogs.splice(i,1);
      }
    }
    dogs.push(dog);
    this.setState({
      dogs:dogs,
      name:'',
      state:'',
      isEdit:0
    });
  }

  render(){
    return(
      <div>
        <ListClients clients={this.state.dogs} editClient={this.handleEditClient}  />
        <hr />
        <EditClient onClientAdd={this.handleClientAdd} text={this.state.name} {...this.state} changeTextEdit={this.handleChangeTextEdit} onTodoUpdate={this.handleTodoUpdate} changeSelectEdit={this.handleChangeSelectEdit} />
      </div>
    );
  }
}


export default FormClient;

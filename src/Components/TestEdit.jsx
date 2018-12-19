import React,{Component} from 'react';
import EditClient from './Edit';
import ListClients from './TestHold';

class FormClient extends Component {
  state ={
    text:'',
    isEdit:0,
    todos:[
      {id:1,text:'Brian'},
      {id:2,text:'Peez'},
      {id:3,text:'Hank'}
    ]
  };

  handleEditClient = (item) =>{
    this.setState({
      text:item.text,
      isEdit:item.id
    });
  }

  handleChangeTextEdit = (text) =>{
    this.setState({text:text});
  }

  handleClientAdd = (text) =>{
    var newText = {
      id:this.state.todos.length + 1,
      text:text
    };
    this.setState({
      todos:this.state.todos.concat(newText),
      text:''
    });
  }

  handleTodoUpdate = (todo) =>{
    var todos = this.state.todos;
    for(var i = 0; i<todos.length; i++){
      if(todos[i].id === todo.id){
        todos.splice(i,1);
      }
    }
    todos.push(todo);
    this.setState({
      todos:todos,
      text:'',
      isEdit:0
    });
  }

  render(){
    return(
      <div>
        <ListClients clients={this.state.todos} editClient={this.handleEditClient} />
        <hr />
        <EditClient onClientAdd={this.handleClientAdd} text={this.state.text} {...this.state} changeTextEdit={this.handleChangeTextEdit} onTodoUpdate={this.handleTodoUpdate} />
      </div>
    );
  }
}


export default FormClient;

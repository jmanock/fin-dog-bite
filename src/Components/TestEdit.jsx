import React,{Component} from 'react';
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

class EditClient extends Component{
  onSubmit = (e) =>{
    e.preventDefault();
    var text = this.refs.text.value.trim();
    if(!text){
      alert('Something should be here?');
      return;
    }
    if(this.props.isEdit){
      var updateTodo = {
        id:this.props.isEdit,
        text:text
      };
      this.props.onTodoUpdate(updateTodo);
    }else{
      this.props.onClientAdd(text);
    }
  }
  onChangeEdit = (e) =>{
    this.props.changeTextEdit(e.target.value);
  }
  render(){
    return(
      <div>
        <h1>Edit Client</h1>
        <form onSubmit={this.onSubmit}>
          <label>Name:
            <input type='text' placeholder='name' ref='text' value={this.props.text} onChange={this.onChangeEdit} required />
            <input type='submit' value='submit' />
          </label>
        </form>
      </div>
    );
  }
}

export default FormClient;

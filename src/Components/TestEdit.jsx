import React,{Component} from 'react';
import Select from './FormComponents/Select';

class EditClient extends Component{
  onSubmit = (e) =>{
    e.preventDefault();
    var text = this.refs.name.value.trim();
    var state = this.props.state;

    if(!text){
      alert('Something should be here?');
      return;
    }
    if(this.props.isEdit){
      var updateTodo = {
        id:this.props.isEdit,
        name:text,
        state:state
      };
      this.props.onTodoUpdate(updateTodo);
    }else{
      this.props.onClientAdd(text,state);
    }
  }
  onChangeEdit = (e) =>{
    this.props.changeTextEdit(e.target.value);
  }
  onChangeSelect = (e) =>{
    this.props.changeSelectEdit(e.target.value);
  }
  render(){
    return(
      <div>
        <h1>Edit Client</h1>
        <form onSubmit={this.onSubmit}>
          <label>Name:
            <input type='text' placeholder='name' ref='name' value={this.props.name} onChange={this.onChangeEdit} required />
            <Select value={this.props.state} options={['Florida','West Virgina', 'Iowa']} handleChange={this.onChangeSelect}  placeholder='state'/>
            <input type='submit' value='submit' />
          </label>
        </form>
      </div>
    );
  }
}
export default EditClient

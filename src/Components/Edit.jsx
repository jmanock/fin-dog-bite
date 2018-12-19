import React,{Component} from 'react';

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
export default EditClient

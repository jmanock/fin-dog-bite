import React, {Component} from 'react';
import Form from './PageComponents/Form';

class Holder extends Component{
  state = {
    newUser:{
      name:'',
      state:''
    }
  }

  handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({newUser:{...prevState.newUser, [name]:value}}));
  }

  render(){
    return(
        <Form handleChange={this.handleChange} newUser={this.state.newUser}/>
    );
  }
};

export default Holder;

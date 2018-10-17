import React, {Component} from 'react';
import Form from './PageComponents/Form';
import States from './Containers/States';
import Breeds from './Containers/Breeds';

class Holder extends Component{
  state = {
    newUser:{
      name:'',
      state:''
    },
    stateOptions:States,
    breedOptions:Breeds,
    ynOptions:['Yes', 'No']
  }

  handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({newUser:{...prevState.newUser, [name]:value}}));
  }

  render(){
    return(
        <Form handleChange={this.handleChange} newUser={this.state}/>
    );
  }
};

export default Holder;

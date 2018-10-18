import React, {Component} from 'react';
import FormTest from './FormTest';

class HolderTest extends Component{
  state = {
    hover:false,
    newUser:[
      {state:'Illinois', name:'Jim'},
      {state:'Florida', name:'James'}
    ],
    placeholder:'Please Choose.....'
  }
  handleMouseIn = () =>{
    this.setState({
      hover:true
    });
  }

  handleMouseOut = () =>{
    this.setState({
      hover:false
    });
  }

  handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({newUser:[...prevState.newUser, [name]:value]}));
  }
  render(){
    return(
      <FormTest handleMouseOut={this.handleMouseOut} handleMouseIn={this.handleMouseIn} handleChange={this.handleChange} user={this.state}/>
    );
  }
};

export default HolderTest;
